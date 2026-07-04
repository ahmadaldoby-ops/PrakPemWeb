/* ============================================================
   WARISAN MELAYU PORTFOLIO — script.js
   Logika interaktif tanpa framework (Vanilla JS)
   ============================================================ */

"use strict";

/* ============================================================
   DATA
   ============================================================ */
const cultureItems = [
    {
        id: 1,
        name: 'Baju Kurung & Tanjak',
        category: 'pakaian',
        region: 'Riau & Kepulauan Riau',
        desc: 'Busana adat agung Melayu yang melambangkan kesopanan, marwah diri, serta kepatuhan pada nilai-nilai ketuhanan.',
        philosophy: 'Bentuk longgar tidak menampilkan lekuk tubuh melambangkan kesantunan islami. Tanjak hiasan kepala pria melambangkan kedaulatan, martabat, tingkatan strata sosial, dan wibawa ksatria Melayu.',
        history: 'Baju kurung diperkenalkan pada masa Kesultanan Malaka abad ke-15 oleh Sultan Muhammad Syah sebagai pakaian resmi istana.',
        image: 'https://images.unsplash.com/photo-1617135671512-cae5e782ea24?q=80&w=800&auto=format&fit=crop',
        facts: 'Tinggi lipatan tanjak dan arah layarnya mencerminkan status kekerabatan pemakainya di lingkungan Kesultanan.',
    },
    {
        id: 2,
        name: 'Gulai Ikan Patin',
        category: 'makanan',
        region: 'Riau',
        desc: 'Sup ikan patin berkuah kuning kaya rempah dengan rasa asam gurih yang luar biasa menggugah selera.',
        philosophy: 'Menggunakan ikan sungai (patin) melambangkan kedekatan kehidupan masyarakat Melayu dengan sungai-sungai besar sebagai sumber kehidupan utama.',
        history: 'Masakan ini dahulu disajikan sebagai santapan kehormatan para raja dan pemuka adat Riau.',
        image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800&auto=format&fit=crop',
        facts: 'Gulai patin paling nikmat menggunakan patin liar sungai deras yang dagingnya kenyal dan rendah lemak dibanding patin budidaya.',
    },
    {
        id: 3,
        name: 'Rumah Selaso Jatuh Kembar',
        category: 'rumah',
        region: 'Riau',
        desc: 'Rumah adat panggung berbentuk balai pertemuan adat dengan hiasan ornamen ukiran yang megah.',
        philosophy: 'Selaso Jatuh Kembar bermakna rumah memiliki selasar yang lebih rendah (jatuh) secara simetris di kedua sisi, melambangkan musyawarah mufakat, keterbukaan menerima tamu, dan keadilan.',
        history: 'Merupakan rumah adat utama Riau yang digunakan khusus untuk pertemuan musyawarah, upacara adat, dan penyimpanan benda pusaka.',
        image: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?q=80&w=800&auto=format&fit=crop',
        facts: 'Setiap sudut atap dihiasi ukiran bermotif Selembayung atau Pucuk Rebung yang berfungsi menangkal petir secara spiritual dan estetika.',
    },
    {
        id: 4,
        name: 'Keris Melayu Laksamana',
        category: 'senjata',
        region: 'Nusantara',
        desc: 'Senjata tikam legendaris dengan bilah berluk ganjil yang sarat akan kekuatan mistis dan simbol kedaulatan.',
        philosophy: 'Keris bukan sekadar alat perlindungan diri, melainkan lambang kehormatan keluarga, kelengkapan adat ksatria, dan media pengontrol amarah diri.',
        history: 'Dipopulerkan oleh pahlawan legendaris Laksamana Hang Tuah dari Kesultanan Melaka pada abad ke-15.',
        image: 'https://images.unsplash.com/photo-1534224039826-c7a0eda0e6b3?q=80&w=800&auto=format&fit=crop',
        facts: 'Bilah keris Melayu tradisional dilumuri air kelapa dicampur jeruk nipis dan empedu ular untuk menghasilkan pamor besi yang bertekstur indah.',
    },
    {
        id: 5,
        name: 'Alat Musik Gambus',
        category: 'musik',
        region: 'Pesisir Riau & Jambi',
        desc: 'Alat musik petik dawai berduri mirip kecapi Arab yang memandu iringan lagu spiritual Melayu.',
        philosophy: 'Gambus melambangkan perpaduan suci antara pengaruh Islam Timur Tengah dengan rasa seni musik melodi lembut khas Melayu.',
        history: 'Masuk bersamaan dengan syiar Islam oleh para pedagang Hadramaut di pesisir selat Malaka sejak abad ke-13.',
        image: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?q=80&w=800&auto=format&fit=crop',
        facts: 'Bagian depan tubuh gambus ditutupi oleh kulit kambing atau kulit biawak untuk menghasilkan gema petikan dawai yang khas.',
    },
    {
        id: 6,
        name: 'Tari Zapin Tradisional',
        category: 'tari',
        region: 'Kepulauan Riau & Riau',
        desc: 'Tari berpasangan yang atraktif dengan gerakan kaki cepat diiringi lantunan musik gambus dan marwas.',
        philosophy: 'Gerakan zapin mengutamakan kesopanan dan ketangkasan kaki, melambangkan solidaritas tim, sikap rendah hati, dan rasa syukur.',
        history: 'Diadaptasi dari tarian Arab Al-Zafn menjadi tarian pergaulan bangsawan hingga masyarakat pesisir kepulauan Melayu.',
        image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=800&auto=format&fit=crop',
        facts: 'Dahulu tari zapin hanya boleh ditarikan oleh penari pria saja, namun seiring waktu, kini penari wanita juga diperbolehkan dengan busana sangat santun.',
    },
    {
        id: 7,
        name: 'Sastra Gurindam Dua Belas',
        category: 'sastra',
        region: 'Kepulauan Riau',
        desc: 'Sastra puisi dua baris sarat nasihat keagamaan, budi pekerti, dan kepemimpinan raja Melayu.',
        philosophy: 'Setiap pasal gurindam memiliki kaitan sebab-akibat yang mengarahkan pembacanya untuk senantiasa mawas diri menjaga lisan dan perbuatan.',
        history: 'Ditulis oleh Raja Ali Haji pada tahun 1847 di Pulau Penyengat, Kepulauan Riau.',
        image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=800&auto=format&fit=crop',
        facts: 'Gurindam Dua Belas diukir pada dinding kompleks pemakaman bersejarah di Pulau Penyengat sebagai pengingat abadi bagi peziarah.',
    },
    {
        id: 8,
        name: 'Asam Pedas Melayu',
        category: 'makanan',
        region: 'Kepulauan Riau & Riau',
        desc: 'Kuah asam pedas ikan baung atau duri dengan kesegaran bumbu belimbing wuluh dan daun kunyit.',
        philosophy: 'Rasa asam yang tegas melambangkan kejujuran bertindak, sementara rasa pedas melambangkan keberanian ksatria berprinsip.',
        history: 'Merupakan kuliner harian pesisir Melayu Kepulauan yang mengandalkan kesegaran hasil tangkapan nelayan selat Malaka.',
        image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=800&auto=format&fit=crop',
        facts: 'Kunci kelezatan asam pedas sejati terletak pada proses menumis bumbu halus tanpa menggunakan minyak (disangrai kering) agar aromanya pekat.',
    }
];

const articles = [
    {
        id: 'art-1',
        title: 'Rahasia Filosofi Di Balik Motif Tenun Songket Melayu',
        category: 'Budaya',
        date: '25 April 2026',
        author: 'Raja Iskandar',
        excerpt: 'Menelisik keunikan motif pucuk rebung, awan larat, dan tampuk manggis dalam tradisi tenun mulia Melayu Riau.',
        img: 'https://images.unsplash.com/photo-1617135671512-cae5e782ea24?q=80&w=800&auto=format&fit=crop'
    },
    {
        id: 'art-2',
        title: 'Menyusuri Jejak Kejayaan Bahasa Melayu Klasik di Pulau Penyengat',
        category: 'Sejarah',
        date: '10 Mei 2026',
        author: 'Siti Aminah',
        excerpt: 'Bagaimana sebuah pulau kecil menjadi episentrum penyebaran sastra Melayu terkemuka hingga melahirkan bahasa pemersatu.',
        img: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=800&auto=format&fit=crop'
    },
    {
        id: 'art-3',
        title: 'Upacara Adat Tepuk Tepung Tawar: Simbolisme Berkah & Doa Restu',
        category: 'Festival',
        date: '02 Juni 2026',
        author: 'Datuk Mahathir',
        excerpt: 'Memahami makna di balik ritual pencipratan air mawar dan adonan tepung beras di pernikahan adat Melayu.',
        img: 'https://images.unsplash.com/photo-1596422846543-75c6fc18a513?q=80&w=800&auto=format&fit=crop'
    }
];

/* ============================================================
   STATE
   ============================================================ */
const state = {
    darkMode: false,
    mobileMenuOpen: false,
    scrolled: false,
    activeCategory: 'semua',
    activeGallery: 'semua',
    activeProvince: 'riau',
    bookmarkedArticles: [],
    showBookmarksOnly: false,
    selectedCulture: null,
    activeFaq: null,
    searchQuery: '',
    activeModalTab: 'deskripsi',
    formData: { name: '', email: '', subject: '', message: '' }
};

/* ============================================================
   TOAST
   ============================================================ */
let toastTimer = null;

function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    if (!toast) return;
    const iconMap = {
        success: 'fa-circle-check',
        info:    'fa-circle-info',
        error:   'fa-circle-xmark'
    };
    toast.querySelector('.toast-icon').className = `toast-icon fa-solid ${iconMap[type] || 'fa-circle-check'}`;
    toast.querySelector('.toast-message').textContent = message;
    toast.className = `toast ${type}`;
    toast.style.display = 'flex';
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => { toast.style.display = 'none'; }, 3200);
}

/* ============================================================
   DARK MODE
   ============================================================ */
function toggleDarkMode() {
    state.darkMode = !state.darkMode;
    document.body.classList.toggle('dark', state.darkMode);
    // Update all dark mode icon buttons
    document.querySelectorAll('.dark-mode-icon').forEach(icon => {
        icon.className = `dark-mode-icon fa-solid ${state.darkMode ? 'fa-sun' : 'fa-moon'}`;
    });
    showToast(state.darkMode ? 'Mode Gelap diaktifkan' : 'Mode Terang diaktifkan', 'info');
}

/* ============================================================
   NAVBAR — Scroll & Mobile Menu
   ============================================================ */
function initNavbar() {
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', () => {
        state.scrolled = window.pageYOffset > 50;
        if (state.scrolled) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }, { passive: true });

    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu    = document.getElementById('mobile-menu');
    const menuIcon      = document.getElementById('menu-icon');

    mobileMenuBtn && mobileMenuBtn.addEventListener('click', () => {
        state.mobileMenuOpen = !state.mobileMenuOpen;
        mobileMenu.classList.toggle('open', state.mobileMenuOpen);
        menuIcon.className = state.mobileMenuOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
    });

    // Close mobile menu on link click
    document.querySelectorAll('.mobile-menu-link').forEach(link => {
        link.addEventListener('click', () => {
            state.mobileMenuOpen = false;
            mobileMenu.classList.remove('open');
            menuIcon.className = 'fa-solid fa-bars';
        });
    });

    // Dark mode toggles
    document.querySelectorAll('.dark-toggle').forEach(btn => {
        btn.addEventListener('click', toggleDarkMode);
    });
}

/* ============================================================
   INTERACTIVE MAP
   ============================================================ */
const provinceData = {
    riau: {
        title: 'Riau (Bumi Lancang Kuning)',
        icon: 'fa-anchor',
        desc: 'Dikenal sebagai pusat bahasa Melayu baku yang menjadi fondasi bahasa pemersatu Indonesia. Pusat kesultanan Siak Sri Indrapura dengan kekayaan adat istiadat yang masih sangat kental hingga hari ini.',
        items: [
            { label: 'Rumah Adat', value: 'Selaso Jatuh Kembar' },
            { label: 'Makanan',   value: 'Gulai Ikan Patin, Bolu Kemojo' },
            { label: 'Bahasa',    value: 'Melayu Riau (Logat Darat)' },
            { label: 'Pakaian',   value: 'Baju Kurung & Tanjak' },
        ]
    },
    kepri: {
        title: 'Kepulauan Riau (Bumi Segantang Lada)',
        icon: 'fa-ship',
        desc: 'Provinsi kepulauan dengan sejarah maritim legendaris. Merupakan pusat spiritual kebudayaan Melayu dengan peninggalan bersejarah di Pulau Penyengat, tempat lahirnya pujangga Raja Ali Haji.',
        items: [
            { label: 'Rumah Adat', value: 'Rumah Belah Bubung' },
            { label: 'Makanan',   value: 'Mie Lendir, Gonggong, Roti Jala' },
            { label: 'Bahasa',    value: 'Melayu Kepulauan (Logat Laut)' },
            { label: 'Sastra',    value: 'Gurindam 12, Pantun Maritim' },
        ]
    },
    jambi: {
        title: 'Jambi (Bumi Sepucuk Jambi Sembilan Lurah)',
        icon: 'fa-archway',
        desc: 'Wilayah Melayu pedalaman yang subur di sepanjang aliran Sungai Batanghari. Terkenal dengan Candi Muaro Jambi yang megah sebagai salah satu situs warisan tertua sejarah peradaban Melayu kuno.',
        items: [
            { label: 'Rumah Adat', value: 'Rumah Kajang Lako' },
            { label: 'Makanan',   value: 'Tempoyak, Gulai Tepek Ikan' },
            { label: 'Kesenian',  value: 'Tari Sekapur Sirih, Krin' },
            { label: 'Senjata',   value: 'Keris Siginjai' },
        ]
    },
    sumut: {
        title: 'Sumatera Utara (Melayu Pesisir / Deli)',
        icon: 'fa-place-of-worship',
        desc: 'Representasi Kesultanan Deli yang berpusat di Istana Maimun, Medan. Memiliki sentuhan budaya Melayu pesisir timur yang elegan dengan pertunjukan musik ronggeng dan tari Melayu Deli yang mendunia.',
        items: [
            { label: 'Situs Sejarah', value: 'Istana Maimun, Masjid Raya Al-Mashun' },
            { label: 'Makanan',       value: 'Roti Jala kuah kari, Lemang' },
            { label: 'Musik',         value: 'Ronggeng Deli, Orkes Melayu' },
            { label: 'Busana',        value: 'Songket Deli, Baju Teluk Belanga' },
        ]
    },
    kalbar: {
        title: 'Kalimantan Barat (Melayu Pontianak)',
        icon: 'fa-compass-drafting',
        desc: 'Berakar dari Kesultanan Kadriyah Pontianak di muara Sungai Kapuas. Hubungan dagang dan asimilasi budaya melahirkan adat pernikahan Melayu Sambas dan kerajinan tenun corak insang yang sangat anggun.',
        items: [
            { label: 'Rumah Adat', value: 'Rumah Panggung Pontianak' },
            { label: 'Makanan',   value: 'Bubur Pedas, Kue Bingka' },
            { label: 'Kesenian',  value: 'Tari Jepin Lembut, Lagu Cik Cik Periuk' },
            { label: 'Wastra',    value: 'Tenun Corak Insang' },
        ]
    }
};

function setProvince(provinceKey) {
    state.activeProvince = provinceKey;

    // Update SVG provinces
    document.querySelectorAll('.province-path').forEach(el => {
        const isActive = el.dataset.province === provinceKey;
        el.classList.toggle('active', isActive);
    });
    document.querySelectorAll('.province-text').forEach(el => {
        el.classList.toggle('active', el.dataset.province === provinceKey);
    });

    // Update info box
    const data = provinceData[provinceKey];
    if (!data) return;
    const box = document.getElementById('peta-info-box');
    box.innerHTML = `
        <div class="box-header">
            <h3>${data.title}</h3>
            <i class="fa-solid ${data.icon}"></i>
        </div>
        <p>${data.desc}</p>
        <ul>
            ${data.items.map(item => `
                <li>
                    <strong>${item.label}:</strong>
                    <span>${item.value}</span>
                </li>
            `).join('')}
        </ul>
    `;
}

function initMap() {
    document.querySelectorAll('.province-path, .province-text').forEach(el => {
        el.addEventListener('click', () => {
            setProvince(el.dataset.province);
        });
    });
    // Set initial province
    setProvince(state.activeProvince);
}

/* ============================================================
   BUDAYA ENCYCLOPEDIA (Culture Cards)
   ============================================================ */
function renderCultureCards() {
    const grid = document.getElementById('budaya-grid');
    if (!grid) return;
    grid.innerHTML = '';

    const query = state.searchQuery.toLowerCase();
    const filtered = cultureItems.filter(item => {
        const matchSearch = !query ||
            item.name.toLowerCase().includes(query) ||
            item.desc.toLowerCase().includes(query) ||
            item.region.toLowerCase().includes(query);
        const matchCat = state.activeCategory === 'semua' || item.category === state.activeCategory;
        return matchSearch && matchCat;
    });

    const emptyState = document.getElementById('budaya-empty');
    if (emptyState) emptyState.style.display = filtered.length === 0 ? 'block' : 'none';

    filtered.forEach(item => {
        const card = document.createElement('div');
        card.className = 'culture-card glass-panel hover-glow';
        card.innerHTML = `
            <div class="culture-card-img">
                <img src="${item.image}" alt="${item.name}" loading="lazy">
                <span class="culture-card-badge">${item.category}</span>
            </div>
            <div class="culture-card-body">
                <div>
                    <div class="culture-card-region">
                        <i class="fa-solid fa-map-location-dot"></i>
                        <span>${item.region}</span>
                    </div>
                    <h3>${item.name}</h3>
                    <p>${item.desc}</p>
                </div>
                <div class="culture-card-footer">
                    <span>Lihat Selengkapnya</span>
                    <i class="fa-solid fa-arrow-right-long"></i>
                </div>
            </div>
        `;
        card.addEventListener('click', () => openCultureModal(item));
        grid.appendChild(card);
    });
}

function initBudayaFilters() {
    // Category filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            state.activeCategory = btn.dataset.category;
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderCultureCards();
        });
    });

    // Search input
    const searchInput = document.getElementById('budaya-search');
    searchInput && searchInput.addEventListener('input', e => {
        state.searchQuery = e.target.value;
        renderCultureCards();
    });
}

/* ============================================================
   CULTURE DETAIL MODAL
   ============================================================ */
function openCultureModal(item) {
    state.selectedCulture = item;
    const modal = document.getElementById('detail-modal');
    if (!modal) return;

    // Fill image area
    modal.querySelector('.modal-image img').src = item.image;
    modal.querySelector('.modal-image img').alt = item.name;
    modal.querySelector('.modal-region').textContent = item.region;
    modal.querySelector('.modal-name').textContent = item.name;

    // Fill tab content
    modal.querySelector('#tab-desc-h').textContent = 'Sejarah Singkat';
    modal.querySelector('#tab-desc-p1').textContent = item.desc;
    modal.querySelector('#tab-desc-p2').textContent = item.history;
    modal.querySelector('#tab-philo-p').textContent = item.philosophy;
    modal.querySelector('#tab-fact-p').textContent = item.facts;

    // Share button
    modal.querySelector('.modal-share-btn').onclick = () => shareContent(item.name);

    // Reset to first tab
    setModalTab('deskripsi');

    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeCultureModal() {
    const modal = document.getElementById('detail-modal');
    if (modal) {
        modal.classList.remove('open');
        document.body.style.overflow = '';
    }
    state.selectedCulture = null;
}

function setModalTab(tabName) {
    state.activeModalTab = tabName;
    document.querySelectorAll('.modal-tab-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.tab === tabName);
    });
    document.querySelectorAll('.modal-tab-panel').forEach(panel => {
        panel.classList.toggle('active', panel.dataset.panel === tabName);
    });
}

function initModal() {
    const modal = document.getElementById('detail-modal');
    if (!modal) return;

    // Close on backdrop click
    modal.querySelector('.modal-backdrop').addEventListener('click', closeCultureModal);
    // Close on X button
    modal.querySelector('.modal-close').addEventListener('click', closeCultureModal);
    modal.querySelector('.modal-close-btn').addEventListener('click', closeCultureModal);

    // Tab buttons
    modal.querySelectorAll('.modal-tab-btn').forEach(btn => {
        btn.addEventListener('click', () => setModalTab(btn.dataset.tab));
    });

    // Close on Escape
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && state.selectedCulture) closeCultureModal();
    });
}

/* ============================================================
   GALLERY FILTER
   ============================================================ */
function initGallery() {
    document.querySelectorAll('.gallery-tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            state.activeGallery = btn.dataset.gallery;
            document.querySelectorAll('.gallery-tab-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            document.querySelectorAll('.gallery-item').forEach(item => {
                const cats = item.dataset.categories ? item.dataset.categories.split(' ') : [];
                const show = state.activeGallery === 'semua' || cats.includes(state.activeGallery);
                item.classList.toggle('hidden', !show);
            });
        });
    });
}

/* ============================================================
   ARTICLES — Bookmark & Filter
   ============================================================ */
function renderArticles() {
    const grid = document.getElementById('artikel-grid');
    if (!grid) return;
    grid.innerHTML = '';

    const emptyState = document.getElementById('bookmark-empty');

    articles.forEach(art => {
        const isBookmarked = state.bookmarkedArticles.includes(art.id);
        if (state.showBookmarksOnly && !isBookmarked) return;

        const card = document.createElement('div');
        card.className = 'article-card glass-panel hover-glow';
        card.id = `article-${art.id}`;
        card.innerHTML = `
            <div class="article-img">
                <img src="${art.img}" alt="${art.title}" loading="lazy">
                <span class="article-category-badge">${art.category}</span>
            </div>
            <div class="article-body">
                <div>
                    <div class="article-meta">
                        <span><i class="fa-regular fa-calendar"></i> ${art.date}</span>
                        <span><i class="fa-regular fa-user"></i> ${art.author}</span>
                    </div>
                    <h3>${art.title}</h3>
                    <p>${art.excerpt}</p>
                </div>
                <div class="article-footer">
                    <button class="bookmark-btn ${isBookmarked ? 'bookmarked' : ''}" data-id="${art.id}" title="${isBookmarked ? 'Hapus Bookmark' : 'Simpan Artikel'}">
                        <i class="fa-solid fa-bookmark"></i>
                        <span>${isBookmarked ? 'Tersimpan' : 'Simpan'}</span>
                    </button>
                    <button class="share-link-btn" data-title="${art.title}">
                        Bagikan <i class="fa-solid fa-share ml-1"></i>
                    </button>
                </div>
            </div>
        `;

        card.querySelector('.bookmark-btn').addEventListener('click', (e) => {
            e.stopPropagation();
            toggleBookmark(art.id);
        });
        card.querySelector('.share-link-btn').addEventListener('click', (e) => {
            e.stopPropagation();
            shareContent(art.title);
        });

        grid.appendChild(card);
    });

    // Empty state for bookmarks
    const visibleCards = grid.querySelectorAll('.article-card').length;
    if (emptyState) {
        emptyState.classList.toggle('show', state.showBookmarksOnly && visibleCards === 0);
    }
}

function toggleBookmark(id) {
    const idx = state.bookmarkedArticles.indexOf(id);
    if (idx > -1) {
        state.bookmarkedArticles.splice(idx, 1);
        showToast('Artikel dihapus dari bookmark', 'info');
    } else {
        state.bookmarkedArticles.push(id);
        showToast('Artikel berhasil disimpan ke bookmark!', 'success');
    }
    updateBookmarkBadge();
    renderArticles();
}

function updateBookmarkBadge() {
    const count = state.bookmarkedArticles.length;
    document.querySelectorAll('.bookmark-count-badge').forEach(badge => {
        badge.textContent = count;
        badge.classList.toggle('hidden', count === 0);
    });
}

function initBookmarkToggle() {
    document.querySelectorAll('.bookmark-filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            state.showBookmarksOnly = !state.showBookmarksOnly;
            const icon = btn.querySelector('i');
            if (icon) icon.style.color = state.showBookmarksOnly ? 'var(--melayu-gold)' : '#fff';
            showToast(
                state.showBookmarksOnly ? 'Menampilkan artikel yang di-bookmark saja' : 'Menampilkan semua artikel',
                'info'
            );
            renderArticles();
        });
    });

    // Empty state button
    const showAllBtn = document.getElementById('show-all-articles-btn');
    showAllBtn && showAllBtn.addEventListener('click', () => {
        state.showBookmarksOnly = false;
        renderArticles();
    });
}

/* ============================================================
   SHARE CONTENT — Fixed using Clipboard API
   ============================================================ */
function shareContent(title) {
    const url = window.location.href;
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(url).then(() => {
            showToast(`Tautan "${title}" berhasil disalin ke clipboard!`, 'success');
        }).catch(() => {
            showToast('Gagal menyalin tautan. Coba lagi.', 'error');
        });
    } else {
        // Fallback for older browsers
        const el = document.createElement('textarea');
        el.value = url;
        el.style.cssText = 'position:fixed;pointer-events:none;opacity:0;';
        document.body.appendChild(el);
        el.select();
        try {
            document.execCommand('copy');
            showToast(`Tautan "${title}" berhasil disalin!`, 'success');
        } catch {
            showToast('Gagal menyalin tautan.', 'error');
        }
        document.body.removeChild(el);
    }
}

/* ============================================================
   FAQ ACCORDION
   ============================================================ */
function initFaq() {
    document.querySelectorAll('.faq-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const faqId = btn.dataset.faq;
            const isOpen = state.activeFaq === faqId;
            state.activeFaq = isOpen ? null : faqId;

            document.querySelectorAll('.faq-btn').forEach(b => {
                b.classList.toggle('open', b.dataset.faq === state.activeFaq);
            });
            document.querySelectorAll('.faq-answer').forEach(ans => {
                ans.classList.toggle('open', ans.dataset.faq === state.activeFaq);
            });
        });
    });
}

/* ============================================================
   CONTACT FORM
   ============================================================ */
function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', e => {
        e.preventDefault();
        const name    = form.querySelector('#form-name').value.trim();
        const email   = form.querySelector('#form-email').value.trim();
        const message = form.querySelector('#form-message').value.trim();

        if (!name || !email || !message) {
            showToast('Harap lengkapi semua kolom wajib!', 'error');
            return;
        }

        showToast('Terima kasih! Pesan Anda telah terkirim kepada kami.', 'success');
        form.reset();
    });
}

/* ============================================================
   MOBILE BOOKMARK BUTTON
   ============================================================ */
function initMobileBookmark() {
    const btn = document.getElementById('mobile-bookmark-btn');
    if (!btn) return;
    btn.addEventListener('click', () => {
        state.showBookmarksOnly = !state.showBookmarksOnly;
        const mobileMenu = document.getElementById('mobile-menu');
        mobileMenu && mobileMenu.classList.remove('open');
        state.mobileMenuOpen = false;
        const menuIcon = document.getElementById('menu-icon');
        if (menuIcon) menuIcon.className = 'fa-solid fa-bars';
        showToast(
            state.showBookmarksOnly ? 'Menampilkan artikel yang di-bookmark saja' : 'Menampilkan semua artikel',
            'info'
        );
        renderArticles();
    });
}

/* ============================================================
   INIT — Run on DOM ready
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    initMap();
    initBudayaFilters();
    renderCultureCards();
    initModal();
    initGallery();
    renderArticles();
    initBookmarkToggle();
    initMobileBookmark();
    initFaq();
    initContactForm();
});
