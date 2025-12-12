// Manual prefecture video mapping — ONLY "Проект 47 префектур Японии" videos
// Supports multiple videos per prefecture; each entry is { title, url }
const prefectureData = {
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
        { title: 'Проект 47 префектур: Осака (Cosmos Square)', url: 'https://www.youtube.com/watch?v=55UWSSfvTM0' }
    ]},
    nara: { name: 'Nara', videos: [
        { title: 'Проект 47 префектур: Нара (Икаруга)', url: 'https://www.youtube.com/watch?v=4PbjVYNthIE' },
        { title: 'Проект 47 префектур: Нара (Ямато)', url: 'https://www.youtube.com/watch?v=ZE5wusC8f3U' },
        { title: 'Проект 47 префектур: Нара (Тодай-дзи)', url: 'https://www.youtube.com/watch?v=vUChQ74eU5Q' }
    ]},
    hyogo: { name: 'Hyogo', videos: [
        { title: 'Проект 47 префектур: Хёго (Химэдзи)', url: 'https://www.youtube.com/watch?v=QCXdhgoBiXc' },
        { title: 'Проект 47 префектур: Хёго (Кобэ/Рокко)', url: 'https://www.youtube.com/watch?v=c_YeIfNnbPI' }
    ]},
    kyoto: { name: 'Kyoto', videos: [
        { title: 'Проект 47 префектур: Киото (Времена года)', url: 'https://www.youtube.com/watch?v=HzHaEqqLLNU' },
        { title: 'Проект 47 префектур: Киото (Фусими-Инари/Гинкакудзи)', url: 'https://www.youtube.com/watch?v=rMTLdsM_psw' },
        { title: 'Проект 47 префектур: Киото (Арасияма/Кинкакудзи)', url: 'https://www.youtube.com/watch?v=SY4vyG9WmO0' }
    ]},
    shiga: { name: 'Shiga', videos: [
        { title: 'Проект 47 префектур: Киото/Сига (гора Хиэй)', url: 'https://www.youtube.com/watch?v=3vPj0tZAM3Q' }
    ]},
    wakayama: { name: 'Wakayama', videos: [
        { title: 'Проект 47 префектур: Вакаяма (Кумано)', url: 'https://www.youtube.com/watch?v=dELPwINXvfA' },
        { title: 'Проект 47 префектур: Вакаяма (гора Коя)', url: 'https://www.youtube.com/watch?v=zm2hvvdexDk' }
    ]},
    // Tokai / Chubu
    aichi: { name: 'Aichi', videos: [
        { title: 'Проект 47 префектур: Айти (Нагоя/Замок/Осу Канон)', url: 'https://www.youtube.com/watch?v=gQhQICASevY' },
        { title: 'Проект 47 префектур: Айти (Нагоя/Ацута/Океанариум)', url: 'https://www.youtube.com/watch?v=3vn5eokL8YM' }
    ]},
    mie: { name: 'Mie', videos: [
        { title: 'Проект 47 префектур. Часть восьмая. Префектура Миэ. Город Исэ, храм Исэ, Мэото Ива, остров Момотори.', url: 'https://www.youtube.com/watch?v=fEc2juhKQi8' }
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
        { title: 'Проект 47 префектур: Идзумо (Шимане)', url: 'https://www.youtube.com/watch?v=GobiGjXwYI0' }
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

// DOM Elements
// Modal deprecated; using anchored popups instead
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalContent = document.getElementById('modal-content');
const closeBtn = document.querySelector('.close-btn');
const modalBackdrop = document.querySelector('.modal-backdrop');
const tooltip = document.getElementById('tooltip');
// Using inline SVG; no fetch/object needed

// Initialize the map
async function initializeMap() {
    try {
        const obj = document.getElementById('japan-map-object');
        if (!obj) {
            updateVideoCount();
            return;
        }

        obj.addEventListener('load', async () => {
            const svgDoc = obj.contentDocument;
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
        });
    } catch (error) {
        console.error('Error loading map:', error);
        const fallback = document.getElementById('japan-map-fallback');
        if (fallback) fallback.textContent = 'Не удалось загрузить карту';
    }
}

// Open modal
function showPrefecturePopup(e, element, prefectureId, prefectureName) {
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
            ${thumbnails || `<div class="no-video">Пока нет видео из серии.</div>`}
        </div>
    `;

    document.body.appendChild(popup);

    // Position popup near the click cursor, translating if inside embedded SVG
    let x = e.clientX;
    let y = e.clientY;
    const offset = 10;
    const margin = 10;
    const obj = document.getElementById('japan-map-object');
    if (obj && e.target && e.target.ownerDocument && obj.contentDocument === e.target.ownerDocument) {
        const objRect = obj.getBoundingClientRect();
        x = objRect.left + x;
        y = objRect.top + y;
    }

    // Initial placement near cursor
    let left = x + offset;
    let top = y + offset;
    const card = popup.getBoundingClientRect();
    // Clamp within viewport
    if (left + card.width > window.innerWidth - margin) left = x - card.width - offset;
    if (top + card.height > window.innerHeight - margin) top = y - card.height - offset;
    // Ensure minimum margins
    left = Math.max(margin, left);
    top = Math.max(margin, top);
    popup.style.left = `${left}px`;
    popup.style.top = `${top}px`;

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
    const outsideHandlerSvg = (evt) => {
        // Any click within the SVG document should close the popup
        popup.remove();
        if (svgDocRef) svgDocRef.removeEventListener('click', outsideHandlerSvg, true);
        document.removeEventListener('click', outsideHandler, true);
    };
    if (svgDocRef) {
        svgDocRef.addEventListener('click', outsideHandlerSvg, true);
    }
}

// Close modal
function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300);
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
    const subtitle = count > 0 ? `${count} видео` : 'Пока нет видео из серии';
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

    // If the event originated inside the embedded SVG object, translate coordinates
    const obj = document.getElementById('japan-map-object');
    if (obj && e.target && e.target.ownerDocument && obj.contentDocument === e.target.ownerDocument) {
        const objRect = obj.getBoundingClientRect();
        x = objRect.left + x;
        y = objRect.top + y;
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
    let count = 0;
    for (const key in prefectureData) {
        const videos = prefectureData[key]?.videos || [];
        count += Array.isArray(videos) ? videos.length : 0;
    }
    const videoCountElement = document.getElementById('video-count');
    if (videoCountElement) {
        animateNumber(videoCountElement, 0, count, 1000);
    }
}

// Update visited prefectures count (entries in prefectureData)
function updatePrefectureCount() {
    const count = Object.keys(prefectureData).length;
    const el = document.getElementById('prefecture-count');
    if (el) animateNumber(el, 0, count, 1000);
}

// Animate number counter
function animateNumber(element, start, end, duration) {
    const range = end - start;
    const increment = range / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
            current = end;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current);
    }, 16);
}

// Event listeners
// Deprecated modal handlers
if (closeBtn) closeBtn.addEventListener('click', closeModal);
if (modalBackdrop) modalBackdrop.addEventListener('click', closeModal);

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});

// Prevent modal content clicks from closing modal
document.querySelector('.modal-content').addEventListener('click', (e) => {
    e.stopPropagation();
});



// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeMap);
document.addEventListener('DOMContentLoaded', updatePrefectureCount);
