// Manual prefecture video mapping — ONLY "Проект 47 префектур Японии" videos
// Supports multiple videos per prefecture; each entry is { title, url }
const prefectureData = {
    miyagi: { name: 'Miyagi', videos: [
        { title: 'СЭНДАЙ и МАЦУСИМА: путешествие по северу ЯПОНИИ | Проект 47 префектур', url: 'https://www.youtube.com/watch?v=R2k91EpIee4' }
    ]},
    // Kanto
    tokyo: { name: 'Tokyo', videos: [
        { title: 'Проект 47 префектур: Токио (гора Такао)', url: 'https://www.youtube.com/watch?v=N-c-etwilTg' }
    ]},
    kanagawa: { name: 'Kanagawa', videos: [
        { title: 'Проект 47 префектур: Канагава (Камакура)', url: 'https://www.youtube.com/watch?v=SoYeoFbs2_4' },
        { title: 'Проект 47 префектур: Канагава (Оояма/Афури)', url: 'https://www.youtube.com/watch?v=yy5EOe2MMsk' }
    ]},
    // Kinki
    osaka: { name: 'Osaka', videos: [
        { title: 'Проект 47 префектур: Осака (Замок Осаки)', url: 'https://www.youtube.com/watch?v=N7MwRm9tnMg' },
        { title: 'Проект 47 префектур: Осака (Cosmos Square)', url: 'https://www.youtube.com/watch?v=55UWSSfvTM0' },
        { title: 'EXPO 2025 в ЯПОНИИ — ГРОМКИЙ ПРОВАЛ? Как иностранцы уничтожают Японию. Проект 47 префектур.', url: 'https://www.youtube.com/watch?v=SloReXJlvdU' },
        { title: 'ГЛАВНОЕ СОБЫТИЕ ЯПОНИИ - EXPO 2025. Проект 47 префектур.', url: 'https://www.youtube.com/watch?v=iUT0EBYzwTY' }
    ]},
    nara: { name: 'Nara', videos: [
        { title: 'Проект 47 префектур: Нара (Икаруга)', url: 'https://www.youtube.com/watch?v=4PbjVYNthIE' },
        { title: 'Проект 47 префектур: Нара (Ямато)', url: 'https://www.youtube.com/watch?v=ZE5wusC8f3U' },
        { title: 'Проект 47 префектур: Нара (Тодай-дзи)', url: 'https://www.youtube.com/watch?v=vUChQ74eU5Q' },
        { title: 'Йога с ЯПОНКОЙ Аой в древней столице ЯПОНИИ НАРА🌸Разогрелись не только мышцы🌸Проект 47 префектур', url: 'https://www.youtube.com/watch?v=c3BRojPqzQo' }
    ]},
    hyogo: { name: 'Hyogo', videos: [
        { title: 'Проект 47 префектур: Хёго (Химэдзи)', url: 'https://www.youtube.com/watch?v=QCXdhgoBiXc' },
        { title: 'Проект 47 префектур: Хёго (Кобэ/Рокко)', url: 'https://www.youtube.com/watch?v=c_YeIfNnbPI' }
    ]},
    kyoto: { name: 'Kyoto', videos: [
        { title: 'Проект 47 префектур: Киото (Времена года)', url: 'https://www.youtube.com/watch?v=HzHaEqqLLNU' },
        { title: 'Проект 47 префектур: Киото (Фусими-Инари/Гинкакудзи)', url: 'https://www.youtube.com/watch?v=rMTLdsM_psw' },
        { title: 'Проект 47 префектур: Киото (Арасияма/Кинкакудзи)', url: 'https://www.youtube.com/watch?v=SY4vyG9WmO0' },
        { title: 'Скрытый КИОТО: Аманохасидатэ - самый красивый вид ЯПОНИИ. Путешествие с ЯПОНКОЙ. Проект 47 префектур', url: 'https://www.youtube.com/watch?v=rF1VXm7eAUw' }
    ]},
    shiga: { name: 'Shiga', videos: [
        { title: 'Проект 47 префектур: Киото/Сига (гора Хиэй)', url: 'https://www.youtube.com/watch?v=3vPj0tZAM3Q' },
        { title: 'БИВАКО - самое красивое озеро ЯПОНИИ. Велопрогулка по префектуре Сига. Проект 47 префектур.', url: 'https://www.youtube.com/watch?v=mIDOLOs6P6s' }
    ]},
    wakayama: { name: 'Wakayama', videos: [
        { title: 'Проект 47 префектур: Вакаяма (Кумано)', url: 'https://www.youtube.com/watch?v=dELPwINXvfA' },
        { title: 'Проект 47 префектур: Вакаяма (гора Коя)', url: 'https://www.youtube.com/watch?v=zm2hvvdexDk' },
        { title: 'Проект 47 префектур Японии. Часть 18. Префектура Вакаяма. Город Вакаяма, Када. Марина-сити.', url: 'https://www.youtube.com/watch?v=u17XVQzz_p4' }
    ]},
    // Tokai / Chubu
    aichi: { name: 'Aichi', videos: [
        { title: 'Проект 47 префектур: Айти (Нагоя/Замок/Осу Канон)', url: 'https://www.youtube.com/watch?v=gQhQICASevY' },
        { title: 'Проект 47 префектур: Айти (Нагоя/Ацута/Океанариум)', url: 'https://www.youtube.com/watch?v=3vn5eokL8YM' }
    ]},
    mie: { name: 'Mie', videos: [
        { title: 'Проект 47 префектур. Часть восьмая. Префектура Миэ. Город Исэ, храм Исэ, Мэото Ива, остров Момотори.', url: 'https://www.youtube.com/watch?v=fEc2juhKQi8' },
        { title: 'Проект 47 префектур. Часть девятая. Префектура Миэ. Город Исэ, храм Исэ. Город Сима, залив Аго.', url: 'https://www.youtube.com/watch?v=7K2_BwOwujM' }
    ]},
    ishikawa: { name: 'Ishikawa', videos: [
        { title: 'ЯПОНИЯ, КАНАДЗАВА: самурайские районы и золото. Путеводитель по Канадзаве🏮🇯🇵Проект 47 префектур', url: 'https://www.youtube.com/watch?v=Lseq7fOVbNg' }
    ]},
    // Chugoku
    okayama: { name: 'Okayama', videos: [
        { title: 'Проект 47 префектур: Окаяма (Коракуэн/Курасики)', url: 'https://www.youtube.com/watch?v=qNfC5jwaOe0' }
    ]},
    hiroshima: { name: 'Hiroshima', videos: [
        { title: 'Проект 47 префектур: Хиросима', url: 'https://www.youtube.com/watch?v=HGt6Y8iErnE' }
    ]},
    shimane: { name: 'Shimane', videos: [
        { title: 'Проект 47 префектур: Идзумо (Шимане)', url: 'https://www.youtube.com/watch?v=GobiGjXwYI0' },
        { title: 'МАЦУЭ - город речных каналов в ЯПОНИИ: идеальное место для свидания с ЯПОНКОЙ. Проект 47 префектур.', url: 'https://www.youtube.com/watch?v=zEWdLCrbLsU' }
    ]},
    tottori: { name: 'Tottori', videos: [
        { title: 'Проект 47 префектур: Тоттори (город/Хакуто/дюны)', url: 'https://www.youtube.com/watch?v=dOHh8mPYuh8' }
    ]},
    // Shikoku
    kagawa: { name: 'Kagawa', videos: [
        { title: 'Проект 47 префектур: Кагава (Такамацу/Рицурин/Якури)', url: 'https://www.youtube.com/watch?v=hfuTlSNRIY4' }
    ]},
    ehime: { name: 'Ehime', videos: [
        { title: 'ЭХИМЭ - край у края мира: ЯПОНСКАЯ деревня над облаками и самый древний онсен♨️Проект 47 префектур.', url: 'https://www.youtube.com/watch?v=ysXUMk5Qs_M' }
    ]},
    kochi: { name: 'Kochi', videos: [
        { title: 'Мясо кита в ЯПОНИИ — это легально!? Едем в город КОТИ🐳Проект 47 префектур.', url: 'https://www.youtube.com/watch?v=qvBxVCAms2Y' }
    ]},
    tokushima: { name: 'Tokushima', videos: [
        { title: 'Водовороты НАРУТО в ЯПОНИИ. Причем здесь АНИМЕ?🍥Проект 47 префектур.', url: 'https://www.youtube.com/watch?v=mXtva-Qc3PU' }
    ]},
    // Kyushu
    fukuoka: { name: 'Fukuoka', videos: [
        { title: 'Проект 47 префектур: Фукуока (Фукуока/Янагава/Дадзайфу)', url: 'https://www.youtube.com/watch?v=0lkkNpkZkOs' }
    ]},
    oita: { name: 'Oita', videos: [
        { title: 'Проект 47 префектур: Беппу (Оита)', url: 'https://www.youtube.com/watch?v=f0C0bDtjylI' }
    ]},
    // Kanto adjacent
    yamanashi: { name: 'Yamanashi', videos: [
        { title: 'Проект 47 префектур: Яманаси/Сидзуока (Хаякава/Аокигахара)', url: 'https://www.youtube.com/watch?v=aefbNT6BJIw' }
    ]},
    shizuoka: { name: 'Shizuoka', videos: [
        { title: 'Проект 47 префектур: Яманаси/Сидзуока (Хаякава/Аокигахара)', url: 'https://www.youtube.com/watch?v=aefbNT6BJIw' }
    ]},
    // Okinawa
    okinawa: { name: 'Okinawa', videos: [
        { title: 'Проект 47 префектур: Окинава (Ёмитан/Дзампа/Дзакими)', url: 'https://www.youtube.com/watch?v=uSRnwaNp-Fg' },
        { title: 'Проект 47 префектур: Окинава (Наха/Сюри/Сэфа Утаки)', url: 'https://www.youtube.com/watch?v=RDb7Xs7yFy8' }
    ]}
};

// Zoom and pan state management
const zoomState = {
    scale: 1,
    translateX: 0,
    translateY: 0,
    minScale: 1,
    maxScale: 4,
    isPanning: false,
    isPointerDown: false,
    dragThreshold: 10, // pixels to move before it becomes a pan
    hasMoved: false,
    touchStartDistance: 0,
    touchStartScale: 1,
    pointerStart: { x: 0, y: 0, translateX: 0, translateY: 0 }
};

// DOM Elements
const tooltip = document.getElementById('tooltip');

// Calculate stats once (cached)
const cachedStats = (() => {
    const uniqueVideos = new Set();
    for (const key in prefectureData) {
        const videos = prefectureData[key]?.videos || [];
        if (Array.isArray(videos)) {
            videos.forEach(video => {
                if (video.url) uniqueVideos.add(video.url);
            });
        }
    }
    return {
        totalVideos: uniqueVideos.size,
        totalPrefectures: Object.keys(prefectureData).length
    };
})();

// Zoom utility functions
function getDistance(touch1, touch2) {
    const dx = touch2.clientX - touch1.clientX;
    const dy = touch2.clientY - touch1.clientY;
    return Math.sqrt(dx * dx + dy * dy);
}

function getMapTransform() {
    const container = document.querySelector('.map-zoom-container');
    if (!container) return { scale: 1, translateX: 0, translateY: 0 };

    const style = window.getComputedStyle(container);
    const transform = style.transform || style.webkitTransform;

    if (transform === 'none') {
        return { scale: 1, translateX: 0, translateY: 0 };
    }

    const values = transform.match(/matrix\(([^)]+)\)/)[1].split(', ');
    return {
        scale: parseFloat(values[0]),
        translateX: parseFloat(values[4]),
        translateY: parseFloat(values[5])
    };
}

// Core zoom functions
function setTransform(scale, translateX, translateY, animate = true) {
    const container = document.querySelector('.map-zoom-container');
    if (!container) return;

    // Clamp scale to min/max
    scale = Math.max(zoomState.minScale, Math.min(zoomState.maxScale, scale));

    // Clamp translation to prevent excessive panning
    const rect = container.getBoundingClientRect();
    const parentRect = container.parentElement.getBoundingClientRect();
    const maxX = Math.max(0, (rect.width * scale - parentRect.width) / 2);
    const maxY = Math.max(0, (rect.height * scale - parentRect.height) / 2);

    translateX = Math.max(-maxX, Math.min(maxX, translateX));
    translateY = Math.max(-maxY, Math.min(maxY, translateY));

    // Update state
    zoomState.scale = scale;
    zoomState.translateX = translateX;
    zoomState.translateY = translateY;

    // Apply CSS transform
    container.style.transition = animate ? 'transform 0.2s ease-out' : 'none';
    container.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;

    // Update UI
    updateZoomButtons();
    container.classList.toggle('zoomed', scale > 1);
}

function zoomToPoint(originX, originY, zoomFactor) {
    const newScale = zoomState.scale * zoomFactor;
    if (newScale < zoomState.minScale || newScale > zoomState.maxScale) return;

    // Adjust translation to zoom toward the origin point
    const deltaScale = newScale / zoomState.scale;
    const newTranslateX = originX - deltaScale * (originX - zoomState.translateX);
    const newTranslateY = originY - deltaScale * (originY - zoomState.translateY);

    setTransform(newScale, newTranslateX, newTranslateY);
}

function resetZoom() {
    setTransform(1, 0, 0);
}

function updateZoomButtons() {
    const zoomInBtn = document.querySelector('.zoom-in');
    const zoomOutBtn = document.querySelector('.zoom-out');
    const zoomResetBtn = document.querySelector('.zoom-reset');

    if (zoomInBtn) zoomInBtn.disabled = zoomState.scale >= zoomState.maxScale;
    if (zoomOutBtn) zoomOutBtn.disabled = zoomState.scale <= zoomState.minScale;
    if (zoomResetBtn) zoomResetBtn.disabled = zoomState.scale === 1;
}

// Initialize the map
async function initializeMap() {
    try {
        const obj = document.getElementById('japan-map-object');
        if (!obj) { updateVideoCount(); return; }

        const attachInteractivity = (svgDoc) => {
            if (!svgDoc) return;

            // Inject basic interactivity styles inside the SVG
            const styleEl = svgDoc.createElement('style');
            styleEl.textContent = `
                /* Ensure prefecture shapes receive pointer events */
                .prefecture, .prefecture path, .prefecture polygon, .prefecture rect, .prefecture circle, .prefecture ellipse {
                    pointer-events: all;
                    cursor: pointer;
                }
                /* Non-interactive overlay groups should never block clicks */
                .boundary-line, .coastline, .river, .admin-boundary, .graticule { pointer-events: none !important; }
                /* Use JS-applied class for reliable hover across embedded SVG */
                .prefecture.hovered { filter: drop-shadow(0 2px 6px rgba(0,0,0,0.35)); }
                .prefecture.hovered path, .prefecture.hovered polygon, .prefecture.hovered rect, .prefecture.hovered circle, .prefecture.hovered ellipse {
                    stroke: #1a73e8 !important; /* blue accent */
                    stroke-width: 2.2 !important;
                }
                /* Prefectures with videos use accent fill and stroke */
                .has-video path, .has-video polygon { 
                    fill: #FFE8E8 !important; 
                    stroke: #C1121F !important;
                }
                /* Keep hover visible on video-prefectures too */
                .has-video.hovered { filter: drop-shadow(0 2px 6px rgba(193,18,31,0.35)); }
                .has-video.hovered path, .has-video.hovered polygon, .has-video.hovered rect, .has-video.hovered circle, .has-video.hovered ellipse {
                    stroke: #C1121F !important;
                    stroke-width: 2.2 !important;
                }
            `;
            const svgRoot = svgDoc.querySelector('svg');
            if (svgRoot) svgRoot.appendChild(styleEl);

            const prefectures = svgDoc.querySelectorAll('.prefecture');

            prefectures.forEach(prefecture => {
                const prefectureClasses = prefecture.classList;
                let prefectureId = '';
                let prefectureName = '';

                const titleElement = prefecture.querySelector('title');
                if (titleElement) {
                    const titleText = titleElement.textContent;
                    const englishName = titleText.split('/')[1]?.trim() || titleText;
                    prefectureName = englishName;
                    // Normalize to slug: lowercase letters only
                    prefectureId = englishName.toLowerCase().replace(/[^a-z]/g, '');
                }

                if (!prefectureId) {
                    for (let className of prefectureClasses) {
                        if (className !== 'prefecture' && className !== 'kyushu-okinawa' && 
                            className !== 'kyushu' && className !== 'shikoku' && 
                            className !== 'chugoku' && className !== 'kinki' && 
                            className !== 'chubu' && className !== 'kanto' && 
                            className !== 'tohoku' && className !== 'hokkaido') {
                            prefectureId = className.toLowerCase().replace(/[^a-z]/g, '');
                            prefectureName = className.charAt(0).toUpperCase() + className.slice(1);
                            break;
                        }
                    }
                }

                prefecture.id = prefectureId;
                prefecture.setAttribute('data-name', prefectureName);
                prefecture.setAttribute('pointer-events', 'all');

                const hasVideo = !!prefectureData[prefectureId];
                if (hasVideo) {
                    prefecture.classList.add('has-video');
                    prefecture.style.cursor = 'pointer';
                    // Force visible accent by setting SVG presentation attributes directly
                    const accentFill = '#FFE8E8';
                    const accentStroke = '#C1121F';
                    prefecture.setAttribute('fill', accentFill);
                    prefecture.setAttribute('stroke', accentStroke);
                    // Also apply to children to override any inline styles
                    const shapes = prefecture.querySelectorAll('path, polygon, rect, circle, ellipse');
                    shapes.forEach(s => {
                        s.setAttribute('fill', accentFill);
                        s.setAttribute('stroke', accentStroke);
                    });
                } else {
                    prefecture.style.cursor = 'default';
                }

                prefecture.addEventListener('click', (e) => { 
                    e.preventDefault(); 
                    e.stopPropagation(); 
                    if (!prefectureData[prefectureId]) return; 
                    showPrefecturePopup(e, prefecture, prefectureId, prefectureName); 
                });
                prefecture.addEventListener('mouseenter', (e) => { 
                    prefecture.classList.add('hovered');
                    const shapes = prefecture.querySelectorAll('path, polygon, rect, circle, ellipse');
                    const isVideo = prefecture.classList.contains('has-video');
                    const hoverStroke = isVideo ? '#C1121F' : '#1a73e8';
                    shapes.forEach(s => {
                        s.dataset.prevStroke = s.getAttribute('stroke') || '';
                        s.dataset.prevStrokeWidth = s.getAttribute('stroke-width') || '';
                        s.setAttribute('stroke', hoverStroke);
                        s.setAttribute('stroke-width', '2.2');
                    });
                    showTooltip(e, prefectureName);
                });
                prefecture.addEventListener('mousemove', (e) => moveTooltip(e));
                prefecture.addEventListener('mouseleave', () => {
                    prefecture.classList.remove('hovered');
                    const shapes = prefecture.querySelectorAll('path, polygon, rect, circle, ellipse');
                    shapes.forEach(s => {
                        // Restore previous inline stroke attributes
                        if (s.dataset.prevStroke) {
                            s.setAttribute('stroke', s.dataset.prevStroke);
                        } else {
                            s.removeAttribute('stroke');
                        }
                        if (s.dataset.prevStrokeWidth) {
                            s.setAttribute('stroke-width', s.dataset.prevStrokeWidth);
                        } else {
                            s.removeAttribute('stroke-width');
                        }
                        delete s.dataset.prevStroke;
                        delete s.dataset.prevStrokeWidth;
                    });
                    hideTooltip();
                });
            });

            updateVideoCount();
        };

        // If the SVG is already loaded (fast cache), attach immediately; otherwise wait for 'load'
        if (obj.contentDocument && obj.contentDocument.querySelector('svg')) {
            attachInteractivity(obj.contentDocument);
        } else {
            obj.addEventListener('load', () => attachInteractivity(obj.contentDocument));
        }
    } catch (error) {
        console.error('Error loading map:', error);
        const fallback = document.getElementById('japan-map-fallback');
        if (fallback) fallback.textContent = 'Не удалось загрузить карту';
    }
}

// Calculate optimal popup position
function calculatePopupPosition(e, popup) {
    const visualViewport = window.visualViewport || {
        width: window.innerWidth,
        height: window.innerHeight,
        offsetLeft: 0,
        offsetTop: 0,
        scale: 1
    };

    let x = e.clientX;
    let y = e.clientY;
    const margin = 8;
    const gap = 10;

    // For events from embedded SVG, clientX/clientY are relative to the SVG document, not viewport
    // We need to convert them to viewport coordinates
    const obj = document.getElementById('japan-map-object');
    if (obj && e.target && e.target.ownerDocument && obj.contentDocument === e.target.ownerDocument) {
        // Get the object's transformed position
        const objRect = obj.getBoundingClientRect();

        // Get the zoom container to find the actual zoom transform
        const zoomContainer = document.querySelector('.map-zoom-container');
        const currentZoom = getMapTransform();

        // Event coordinates are in the SVG viewport pixel space (unzoomed)
        // We need to: apply zoom scale, then add the transformed object position
        x = objRect.left + (e.clientX * currentZoom.scale);
        y = objRect.top + (e.clientY * currentZoom.scale);
    }

    // Apply zoom-aware max dimensions
    const maxWidth = Math.min(300, visualViewport.width - margin * 2);
    const maxHeight = visualViewport.height - margin * 2 - 80;
    popup.style.maxWidth = `${maxWidth}px`;
    popup.style.maxHeight = `${maxHeight}px`;
    popup.style.overflowY = 'auto';

    // Measure popup size
    popup.style.visibility = 'hidden';
    popup.style.left = '0px';
    popup.style.top = '0px';
    const card = popup.getBoundingClientRect();
    popup.style.visibility = '';

    const vw = visualViewport.width;
    const vh = visualViewport.height;
    const offsetX = visualViewport.offsetLeft || 0;
    const offsetY = visualViewport.offsetTop || 0;

    // Try placements: right, left, below, above
    const candidates = [
        { left: x + gap, top: y - card.height / 2 },
        { left: x - card.width - gap, top: y - card.height / 2 },
        { left: x - card.width / 2, top: y + gap },
        { left: x - card.width / 2, top: y - card.height - gap }
    ];

    let chosen = { left: x + gap, top: y + gap };
    for (const c of candidates) {
        const fitsHoriz = c.left >= (offsetX + margin) && (c.left + card.width) <= (offsetX + vw - margin);
        const fitsVert = c.top >= (offsetY + margin) && (c.top + card.height) <= (offsetY + vh - margin);
        if (fitsHoriz && fitsVert) {
            chosen = c;
            break;
        }
    }

    // Fallback to viewport-centered if nothing fits
    const nothingFits = (
        (chosen.left < (offsetX + margin) || (chosen.left + card.width) > (offsetX + vw - margin)) ||
        (chosen.top < (offsetY + margin) || (chosen.top + card.height) > (offsetY + vh - margin))
    );
    if (nothingFits) {
        chosen.left = offsetX + (vw - card.width) / 2;
        chosen.top = offsetY + (vh - card.height) / 2;
    }

    // Final clamping
    const left = Math.min(
        Math.max(offsetX + margin, chosen.left),
        Math.max(offsetX + margin, offsetX + vw - card.width - margin)
    );
    const top = Math.min(
        Math.max(offsetY + margin, chosen.top),
        Math.max(offsetY + margin, offsetY + vh - card.height - margin)
    );

    popup.style.left = `${left}px`;
    popup.style.top = `${top}px`;
}

// Open popup
function showPrefecturePopup(e, _element, prefectureId, prefectureName) {
    const data = prefectureData[prefectureId];
    const existing = document.querySelector('.prefecture-popup');
    if (existing) existing.remove();
    // Avoid tooltip overlapping with the popup
    hideTooltip();

    const popup = document.createElement('div');
    popup.className = 'prefecture-popup';
    // Build preview-only grid (YouTube thumbnails linking to videos)
    const items = (data && data.videos) ? data.videos : [];
    const thumbnails = items.map(v => {
        const vid = (v.url.match(/v=([\w-]+)/) || [])[1] || '';
        const thumb = vid ? `https://i.ytimg.com/vi/${vid}/hqdefault.jpg` : '';
        return `
            <a class="preview" href="${v.url}" target="_blank" rel="noopener noreferrer" aria-label="${v.title}">
                ${thumb ? `<img src="${thumb}" alt="${v.title}"/>` : ''}
                <span class="preview-title">${v.title}</span>
            </a>
        `;
    }).join('');

    const displayName = (data && data.name) ? data.name : prefectureName;
    popup.innerHTML = `
        <div class="header" style="display:flex;align-items:center;gap:0.5rem;">
            <div class="title">${displayName}</div>
            <button class="close" aria-label="Закрыть">×</button>
        </div>
        <div class="content previews">
            ${thumbnails || `<div class="no-video">Пока нет видео</div>`}
        </div>
    `;

    document.body.appendChild(popup);

    // Position popup optimally
    calculatePopupPosition(e, popup);

    // Close handlers
    popup.querySelector('.close').addEventListener('click', () => popup.remove());
    document.addEventListener('keydown', (evt) => {
        if (evt.key === 'Escape') popup.remove();
    }, { once: true });

    // Close when clicking outside the popup
    const outsideHandler = (evt) => {
        const target = evt.target;
        const isInside = popup.contains(target);
        if (!isInside) {
            popup.remove();
            document.removeEventListener('click', outsideHandler, true);
            if (svgDocRef) svgDocRef.removeEventListener('click', outsideHandlerSvg, true);
        }
    };
    // Use capture to catch early and ignore prefecture click (already stopped)
    document.addEventListener('click', outsideHandler, true);

    // Also close when clicking inside the embedded SVG document (the map)
    const svgDocRef = (e && e.target && e.target.ownerDocument && e.target.ownerDocument !== document) ? e.target.ownerDocument : null;
    const outsideHandlerSvg = () => {
        // Any click within the SVG document should close the popup
        popup.remove();
        if (svgDocRef) svgDocRef.removeEventListener('click', outsideHandlerSvg, true);
        document.removeEventListener('click', outsideHandler, true);
    };
    if (svgDocRef) {
        svgDocRef.addEventListener('click', outsideHandlerSvg, true);
    }
}

// Tooltip functions
function showTooltip(e, text) {
    // Enrich tooltip: show prefecture name and video count if available
    let count = 0;
    let id = null;
    if (e.target && typeof e.target.closest === 'function') {
        const prefEl = e.target.closest('.prefecture');
        if (prefEl && prefEl.id) id = prefEl.id;
    }
    if (id && prefectureData[id] && Array.isArray(prefectureData[id].videos)) {
        count = prefectureData[id].videos.length;
    }
    const subtitle = count > 0 ? `${count} видео` : 'Пока нет видео';
    const idForName = id;
    const ruName = (idForName && prefectureData[idForName] && prefectureData[idForName].name) ? prefectureData[idForName].name : text;
    tooltip.innerHTML = `<strong>${ruName}</strong><br/><span style="color:#4b5563;font-size:0.8rem;">${subtitle}</span>`;
    tooltip.classList.add('active');
    moveTooltip(e);
}

function moveTooltip(e) {
    let x = e.clientX;
    let y = e.clientY;
    const offset = 6;

    // For events from embedded SVG, clientX/clientY are relative to the SVG document, not viewport
    // We need to convert them to viewport coordinates
    const obj = document.getElementById('japan-map-object');
    if (obj && e.target && e.target.ownerDocument && obj.contentDocument === e.target.ownerDocument) {
        // Get the object's transformed position
        const objRect = obj.getBoundingClientRect();

        // Get the current zoom transform
        const currentZoom = getMapTransform();

        // Event coordinates are in the SVG viewport pixel space (unzoomed)
        // We need to: apply zoom scale, then add the transformed object position
        x = objRect.left + (e.clientX * currentZoom.scale);
        y = objRect.top + (e.clientY * currentZoom.scale);
    }

    let left = x + offset;
    let top = y + offset;
    // Keep tooltip within viewport bounds
    const rect = tooltip.getBoundingClientRect();
    const margin = 6;
    if (left + rect.width > window.innerWidth - margin) left = x - rect.width - offset;
    if (top + rect.height > window.innerHeight - margin) top = y - rect.height - offset;
    tooltip.style.left = `${left}px`;
    tooltip.style.top = `${top}px`;
}

function hideTooltip() {
    tooltip.classList.remove('active');
}

// Update video count
function updateVideoCount() {
    const videoCountElement = document.getElementById('video-count');
    if (videoCountElement) {
        animateNumber(videoCountElement, 0, cachedStats.totalVideos, 1000);
    }
}

// Update visited prefectures count (entries in prefectureData)
function updatePrefectureCount() {
    const el = document.getElementById('prefecture-count');
    // Keep this span numeric only to avoid duplicate word labels in UI
    if (el) animateNumber(el, 0, cachedStats.totalPrefectures, 1000);
    // Update separate word label if present, ensuring correct plural (e.g., 25 → "префектур")
    const wordEl = document.getElementById('prefecture-word');
    if (wordEl) wordEl.textContent = ruPluralize(cachedStats.totalPrefectures, ['префектура','префектуры','префектур']);
}

// Initialize zoom and pan controls
function initializeZoomControls() {
    try {
        const mapWrapper = document.querySelector('.map-wrapper');
        const mapObject = document.getElementById('japan-map-object');

        if (!mapWrapper || !mapObject) {
            console.warn('Map wrapper or object not found, skipping zoom initialization');
            return;
        }

        // Prevent double initialization
        if (document.querySelector('.map-zoom-container')) {
            console.warn('Zoom container already exists, skipping initialization');
            return;
        }

        // Check if SVG is loaded
        if (!mapObject.contentDocument || !mapObject.contentDocument.querySelector('svg')) {
            console.warn('SVG not loaded yet, retrying zoom initialization...');
            setTimeout(initializeZoomControls, 200);
            return;
        }

        // Wrap map in zoom container
        const zoomContainer = document.createElement('div');
        zoomContainer.className = 'map-zoom-container';
        mapObject.parentNode.insertBefore(zoomContainer, mapObject);
        zoomContainer.appendChild(mapObject);

        // Create zoom buttons
        const controls = document.createElement('div');
        controls.className = 'map-zoom-controls';
        controls.innerHTML = `
            <button class="zoom-btn zoom-in" aria-label="Zoom in" title="Приблизить">+</button>
            <button class="zoom-btn zoom-out" aria-label="Zoom out" title="Отдалить">−</button>
            <button class="zoom-btn zoom-reset" aria-label="Reset zoom" title="Сбросить">⊙</button>
        `;
        mapWrapper.appendChild(controls);

        // Button handlers
        controls.querySelector('.zoom-in').addEventListener('click', () => {
            const rect = zoomContainer.getBoundingClientRect();
            zoomToPoint(rect.width / 2, rect.height / 2, 1.3);
        });

        controls.querySelector('.zoom-out').addEventListener('click', () => {
            const rect = zoomContainer.getBoundingClientRect();
            zoomToPoint(rect.width / 2, rect.height / 2, 1 / 1.3);
        });

        controls.querySelector('.zoom-reset').addEventListener('click', resetZoom);

        // Function to attach zoom/pan events to SVG document
        const attachZoomPanToSVG = () => {
            const svgDoc = mapObject.contentDocument;
            if (!svgDoc) return;

            const svgElement = svgDoc.querySelector('svg');
            if (!svgElement) return;

            // Mouse wheel zoom on SVG
            svgElement.addEventListener('wheel', (e) => {
                e.preventDefault();
                e.stopPropagation();

                const delta = -e.deltaY;
                const zoomFactor = delta > 0 ? 1.1 : 0.9;

                // Get container rect for calculating origin
                const rect = zoomContainer.getBoundingClientRect();
                const objRect = mapObject.getBoundingClientRect();
                const originX = objRect.left - rect.left + e.clientX;
                const originY = objRect.top - rect.top + e.clientY;

                zoomToPoint(originX, originY, zoomFactor);
            }, { passive: false });

            // Mouse pointer down on SVG - track but don't start panning yet
            svgElement.addEventListener('mousedown', (e) => {
                if (zoomState.scale === 1) return; // Only allow panning when zoomed

                // Convert SVG coordinates to viewport coordinates for consistent handling
                const objRect = mapObject.getBoundingClientRect();

                zoomState.isPointerDown = true;
                zoomState.hasMoved = false;
                zoomState.pointerStart.x = objRect.left + (e.clientX * zoomState.scale);
                zoomState.pointerStart.y = objRect.top + (e.clientY * zoomState.scale);
                zoomState.pointerStart.translateX = zoomState.translateX;
                zoomState.pointerStart.translateY = zoomState.translateY;
            });

            // Mouse move on SVG - handle panning inside the SVG
            svgElement.addEventListener('mousemove', (e) => {
                if (!zoomState.isPointerDown) return;

                // Convert SVG coordinates to viewport coordinates, then calculate delta
                const objRect = mapObject.getBoundingClientRect();
                const currentX = objRect.left + (e.clientX * zoomState.scale);
                const currentY = objRect.top + (e.clientY * zoomState.scale);

                const dx = currentX - zoomState.pointerStart.x;
                const dy = currentY - zoomState.pointerStart.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                // If moved more than threshold, start panning
                if (distance > zoomState.dragThreshold && !zoomState.isPanning) {
                    zoomState.isPanning = true;
                    zoomState.hasMoved = true;
                    zoomContainer.classList.add('dragging');
                }

                // If panning, move the map
                if (zoomState.isPanning) {
                    setTransform(
                        zoomState.scale,
                        zoomState.pointerStart.translateX + dx,
                        zoomState.pointerStart.translateY + dy,
                        false
                    );
                }
            });

            // Mouse up on SVG
            svgElement.addEventListener('mouseup', (e) => {
                if (zoomState.isPointerDown) {
                    // If we panned, prevent the click
                    if (zoomState.hasMoved && zoomState.isPanning) {
                        e.stopPropagation();
                        e.preventDefault();
                    }

                    zoomState.isPointerDown = false;
                    zoomState.isPanning = false;
                    zoomState.hasMoved = false;
                    zoomContainer.classList.remove('dragging');
                }
            });

            // Touch events on SVG
            svgElement.addEventListener('touchstart', (e) => {
                if (e.touches.length === 2) {
                    e.preventDefault();
                    const touch1 = e.touches[0];
                    const touch2 = e.touches[1];
                    zoomState.touchStartDistance = getDistance(touch1, touch2);
                    zoomState.touchStartScale = zoomState.scale;
                } else if (e.touches.length === 1 && zoomState.scale > 1) {
                    // Convert SVG coordinates to viewport coordinates for consistent handling
                    const objRect = mapObject.getBoundingClientRect();

                    // Track touch start but don't prevent default yet (allow prefecture taps)
                    zoomState.isPointerDown = true;
                    zoomState.hasMoved = false;
                    zoomState.pointerStart.x = objRect.left + (e.touches[0].clientX * zoomState.scale);
                    zoomState.pointerStart.y = objRect.top + (e.touches[0].clientY * zoomState.scale);
                    zoomState.pointerStart.translateX = zoomState.translateX;
                    zoomState.pointerStart.translateY = zoomState.translateY;
                }
            }, { passive: false });

            svgElement.addEventListener('touchmove', (e) => {
                if (e.touches.length === 2) {
                    e.preventDefault();
                    const touch1 = e.touches[0];
                    const touch2 = e.touches[1];
                    const distance = getDistance(touch1, touch2);
                    const scale = (distance / zoomState.touchStartDistance) * zoomState.touchStartScale;

                    setTransform(scale, zoomState.translateX, zoomState.translateY, false);
                } else if (zoomState.isPointerDown && e.touches.length === 1) {
                    // Convert SVG coordinates to viewport coordinates, then calculate delta
                    const objRect = mapObject.getBoundingClientRect();
                    const currentX = objRect.left + (e.touches[0].clientX * zoomState.scale);
                    const currentY = objRect.top + (e.touches[0].clientY * zoomState.scale);

                    const dx = currentX - zoomState.pointerStart.x;
                    const dy = currentY - zoomState.pointerStart.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    // If moved more than threshold, start panning
                    if (distance > zoomState.dragThreshold && !zoomState.isPanning) {
                        zoomState.isPanning = true;
                        zoomState.hasMoved = true;
                        zoomContainer.classList.add('dragging');
                    }

                    // If panning, move the map
                    if (zoomState.isPanning) {
                        e.preventDefault();
                        setTransform(
                            zoomState.scale,
                            zoomState.pointerStart.translateX + dx,
                            zoomState.pointerStart.translateY + dy,
                            false
                        );
                    }
                }
            }, { passive: false });

            svgElement.addEventListener('touchend', () => {
                zoomState.isPointerDown = false;
                zoomState.isPanning = false;
                zoomContainer.classList.remove('dragging');
            });
        };

        // Attach to SVG once loaded - try multiple times if needed
        const tryAttach = (attempts = 0) => {
            if (attempts > 10) return;

            if (mapObject.contentDocument && mapObject.contentDocument.querySelector('svg')) {
                attachZoomPanToSVG();
            } else {
                setTimeout(() => tryAttach(attempts + 1), 200);
            }
        };

        tryAttach();

        // Global mouse move handler - handles panning when cursor leaves SVG
        // Note: These events are in viewport space, so no scaling needed
        document.addEventListener('mousemove', (e) => {
            if (!zoomState.isPointerDown) return;

            const dx = e.clientX - zoomState.pointerStart.x;
            const dy = e.clientY - zoomState.pointerStart.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            // If moved more than threshold, start panning
            if (distance > zoomState.dragThreshold && !zoomState.isPanning) {
                zoomState.isPanning = true;
                zoomState.hasMoved = true;
                zoomContainer.classList.add('dragging');
            }

            // If panning, move the map
            if (zoomState.isPanning) {
                setTransform(
                    zoomState.scale,
                    zoomState.pointerStart.translateX + dx,
                    zoomState.pointerStart.translateY + dy,
                    false
                );
            }
        });

        // Mouse up AND mouse leave to reset state
        const resetPanState = (e) => {
            if (zoomState.isPointerDown) {
                // If we were panning, prevent the click event on prefectures
                if (zoomState.hasMoved && zoomState.isPanning && e.type === 'mouseup') {
                    e.stopPropagation();
                    e.preventDefault();
                }

                zoomState.isPointerDown = false;
                zoomState.isPanning = false;
                zoomState.hasMoved = false;
                zoomContainer.classList.remove('dragging');
            }
        };

        document.addEventListener('mouseup', resetPanState, true);
        document.addEventListener('mouseleave', resetPanState); // Reset when cursor leaves window

        // Prevent iOS gesture zoom
        document.addEventListener('gesturestart', (e) => e.preventDefault());
        document.addEventListener('gesturechange', (e) => e.preventDefault());

        updateZoomButtons();
    } catch (error) {
        console.error('Error initializing zoom controls:', error);
    }
}

// Animate number counter
function animateNumber(element, start, end, duration, formatFn) {
    const range = end - start;
    const increment = range / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
            current = end;
            clearInterval(timer);
        }
        const value = Math.floor(current);
        element.textContent = typeof formatFn === 'function' ? formatFn(value) : String(value);
    }, 16);
}

// Russian pluralization helper: one/few/many
function ruPluralize(n, forms) {
    const mod10 = n % 10;
    const mod100 = n % 100;
    if (mod10 === 1 && mod100 !== 11) return forms[0];
    if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) return forms[1];
    return forms[2];
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize map and counters
    initializeMap();
    updatePrefectureCount();

    // Initialize zoom controls after a short delay to ensure map is ready
    setTimeout(() => {
        initializeZoomControls();
    }, 500);

    // Torii click: show inline label briefly then fade
    const torii = document.getElementById('torii');
    const toriiLabel = torii ? torii.querySelector('.torii-label') : null;
    if (torii && toriiLabel) {
        torii.addEventListener('click', () => {
            toriiLabel.classList.add('show');
            setTimeout(() => toriiLabel.classList.remove('show'), 2000);
        });
    }

    // Stamp image click: show friendly text briefly then fade
    const stampWrap = document.querySelector('.stamp-wrap');
    const stampImg = stampWrap ? stampWrap.querySelector('.title-under .title-icon') : null;
    const stampMsg = stampWrap ? stampWrap.querySelector('.stamp-label') : null;
    if (stampImg && stampMsg) {
        stampImg.addEventListener('click', () => {
            stampMsg.classList.add('show');
            setTimeout(() => stampMsg.classList.remove('show'), 2000);
        });
    }

    // Make the videos counter redirect to YouTube channel on click
    const videoCounter = document.getElementById('video-count');
    const channelUrl = 'https://www.youtube.com/@Tjeckon/videos';
    if (videoCounter) {
        videoCounter.style.cursor = 'pointer';
        videoCounter.title = 'Открыть канал на YouTube';
        videoCounter.addEventListener('click', () => {
            window.open(channelUrl, '_blank', 'noopener');
        });
    }
});
