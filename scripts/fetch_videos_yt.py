#!/usr/bin/env python3
"""
Fetch YouTube videos from a channel page or channel ID using yt-dlp, filter for the series
"Проект 47 префектур", and write a compact videos.json at the repo root.

Usage:
  python3 scripts/fetch_videos_yt.py https://www.youtube.com/@Tjeckon/videos
  python3 scripts/fetch_videos_yt.py https://www.youtube.com/channel/UCxxxxxxxxxxxxxxxx/videos

Output:
  ./videos.json

Notes:
- Requires yt-dlp (pip install yt-dlp)
- Filters by title containing "Проект 47 префектур" (case-insensitive, tolerant of punctuation/emoji)
- Writes minimal fields: title, url, upload_date
"""

import json
import re
import sys
from pathlib import Path

try:
    import yt_dlp
except Exception as e:
    print("yt-dlp is not installed. Install via: pip install yt-dlp", file=sys.stderr)
    sys.exit(1)

SERIES_PATTERN = re.compile(r"проект\s*47\s*префектур", re.IGNORECASE)

REPO_ROOT = Path(__file__).resolve().parent.parent
OUT_PATH = REPO_ROOT / "videos.json"


def fetch_entries(channel_url: str):
    ydl_opts = {
        # Use flat playlist to avoid downloading media; just metadata
        "extract_flat": True,
        "skip_download": True,
        "quiet": True,
        "no_warnings": True,
    }
    with yt_dlp.YoutubeDL(ydl_opts) as ydl:
        info = ydl.extract_info(channel_url, download=False)
    # info may be a playlist dict with "entries"
    entries = []
    if isinstance(info, dict) and "entries" in info:
        for it in info["entries"]:
            if not isinstance(it, dict):
                continue
            # Some entries are URLs only; run resolve for missing fields
            url = it.get("url") or it.get("webpage_url")
            title = it.get("title")
            upload_date = it.get("upload_date")
            if not (url and title):
                # Try resolving the single video page for missing metadata
                try:
                    with yt_dlp.YoutubeDL({"quiet": True, "no_warnings": True}) as ydl2:
                        vi = ydl2.extract_info(url, download=False)
                    title = title or vi.get("title")
                    upload_date = upload_date or vi.get("upload_date")
                    url = vi.get("webpage_url") or url
                except Exception:
                    pass
            entries.append({
                "title": title or "",
                "url": f"https://www.youtube.com/watch?v={it.get('id')}" if it.get('id') and not (url or '').startswith('http') else (url or ""),
                "upload_date": upload_date or "",
            })
    return entries


def filter_series(entries):
    filtered = []
    for e in entries:
        title = e.get("title") or ""
        if SERIES_PATTERN.search(title):
            filtered.append(e)
    return filtered


def write_json(entries):
    # Sort by upload_date desc when available
    def sort_key(e):
        d = e.get("upload_date") or ""
        return d
    entries_sorted = sorted(entries, key=sort_key, reverse=True)
    with OUT_PATH.open("w", encoding="utf-8") as f:
        json.dump(entries_sorted, f, ensure_ascii=False, indent=2)
    print(f"Wrote {len(entries_sorted)} series videos to {OUT_PATH}")


def main():
    if len(sys.argv) < 2:
        print("Usage: python3 scripts/fetch_videos_yt.py <channel_url>", file=sys.stderr)
        sys.exit(2)
    channel_url = sys.argv[1]
    try:
        entries = fetch_entries(channel_url)
    except Exception as e:
        print(f"Error fetching channel: {e}", file=sys.stderr)
        sys.exit(1)
    series_entries = filter_series(entries)
    write_json(series_entries)


if __name__ == "__main__":
    main()
