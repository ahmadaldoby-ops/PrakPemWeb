<?php include 'koneksi1.php'; ?>
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portofolio | Ahmad Aldo - Teknik Informatika UIR</title>
    <!-- Font Awesome Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <!-- Custom stylesheet -->
    <link rel="stylesheet" href="style1.css">
</head>
<body>

    <!-- Sticky Navigation Bar -->
    <nav class="navbar">
        <div class="nav-logo">
            <span class="gradient-text">Aldo.dev</span>
        </div>
        <ul class="nav-links">
            <li><a href="#hero">Beranda</a></li>
            <li><a href="#about">Tentang Saya</a></li>
            <li><a href="#projects">Proyek Showcase</a></li>
            <li><a href="#todo-app">Daftar Tugas</a></li>
            <li><a href="#contact">Kontak</a></li>
        </ul>
        <div class="nav-actions">
            <button id="theme-toggle" class="btn-theme" title="Ubah Tema">🌙</button>
        </div>
    </nav>

    <!-- Main Container -->
    <main class="container">
        
        <!-- Hero Section -->
        <section id="hero" class="hero-section">
            <div class="hero-content">
                <span class="hero-subtitle">Mahasiswa Teknik Informatika UIR</span>
                <h1 class="hero-title">Halo, Saya <br><span class="gradient-text">Ahmad Aldo</span></h1>
                <p class="hero-desc">
                    Seorang mahasiswa Teknik Informatika yang berminat tinggi dalam bidang Web Development (Frontend & Backend), desain antarmuka pengguna yang bersih, serta manajemen basis data. Bertekad membangun solusi web yang efisien, responsif, dan interaktif.
                </p>
                <div class="hero-actions">
                    <a href="#projects" class="btn gradient-btn"><i class="fas fa-briefcase"></i> &nbsp;Lihat Proyek</a>
                    <a href="#contact" class="btn btn-secondary"><i class="far fa-paper-plane"></i> &nbsp;Hubungi Saya</a>
                </div>
                <div class="hero-socials">
                    <a href="https://github.com" target="_blank" class="social-icon" title="GitHub">
                        <i class="fab fa-github"></i>
                    </a>
                    <a href="https://linkedin.com" target="_blank" class="social-icon" title="LinkedIn">
                        <i class="fab fa-linkedin-in"></i>
                    </a>
                    <a href="https://instagram.com" target="_blank" class="social-icon" title="Instagram">
                        <i class="fab fa-instagram"></i>
                    </a>
                    <a href="mailto:aldo@example.com" class="social-icon" title="Email">
                        <i class="far fa-envelope"></i>
                    </a>
                </div>
            </div>
            
            <div class="hero-image-wrapper">
                <div class="hero-image-glow"></div>
                <img src="image/WhatsApp Image 2026-06-03 at 17.17.26.jpeg" alt="Foto Profil Ahmad Aldo" class="profile-img">
            </div>
        </section>

        <!-- About & Skills Section -->
        <section id="about" class="page-section">
            <div class="section-title-wrapper">
                <span class="section-subtitle">Resume Singkat</span>
                <h2 class="section-title">Tentang Saya</h2>
            </div>
            <div class="about-grid">
                <div class="about-text">
                    <h3>Pendidikan & Kompetensi</h3>
                    <p>
                        Saat ini saya sedang menempuh pendidikan sarjana (S1) Teknik Informatika di Universitas Islam Riau (UIR). Saya aktif mengeksplorasi pemrograman web, arsitektur basis data, serta integrasi CRUD guna memecahkan berbagai tantangan pengembangan aplikasi digital.
                    </p>
                    <div class="edu-wrapper">
                        <h4>Riwayat Pendidikan</h4>
                        <div class="table-responsive">
                            <table class="edu-table">
                                <thead>
                                    <tr>
                                        <th>Jenjang</th>
                                        <th>Institusi</th>
                                        <th>Periode</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Sekolah Menengah Atas</td>
                                        <td>SMA PERGURUAN WAHIDIN</td>
                                        <td>2021 - 2024</td>
                                    </tr>
                                    <tr>
                                        <td>S1 Teknik Informatika</td>
                                        <td>Universitas Islam Riau</td>
                                        <td>2024 - Sekarang</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                
                <div class="skills-wrapper">
                    <h3>Keterampilan Teknis</h3>
                    <p>
                        Daftar teknologi dan perkakas pengembangan perangkat lunak yang saya gunakan untuk mewujudkan solusi web:
                    </p>
                    <div class="skills-grid">
                        <div class="skill-badge">
                            <i class="fab fa-html5" style="color: #e34f26;"></i> HTML5
                        </div>
                        <div class="skill-badge">
                            <i class="fab fa-css3-alt" style="color: #1572b6;"></i> CSS3
                        </div>
                        <div class="skill-badge">
                            <i class="fab fa-js-square" style="color: #f7df1e;"></i> JavaScript
                        </div>
                        <div class="skill-badge">
                            <i class="fab fa-php" style="color: #777bb4;"></i> PHP (Backend)
                        </div>
                        <div class="skill-badge">
                            <i class="fas fa-database" style="color: #336791;"></i> MySQL / Database
                        </div>
                        <div class="skill-badge">
                            <i class="fab fa-git-alt" style="color: #f05032;"></i> Git & GitHub
                        </div>
                        <div class="skill-badge">
                            <i class="fas fa-pencil-ruler" style="color: #ff61f6;"></i> UI/UX Design
                        </div>
                        <div class="skill-badge">
                            <i class="fab fa-react" style="color: #61dafb;"></i> React / Web Tools
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Projects Showcase (CRUD #1) -->
        <section id="projects" class="page-section">
            <div class="section-title-wrapper">
                <span class="section-subtitle">Pengelolaan CRUD #1</span>
                <h2 class="section-title">Showcase Proyek</h2>
            </div>
            
            <div class="projects-header">
                <div class="projects-header-info">
                    <h2>Daftar Proyek Akademik & Pribadi</h2>
                    <p>Semua data proyek di bawah ini dikelola dan diperbarui secara dinamis langsung dari database MySQL.</p>
                </div>
                <button onclick="openAddModal()" class="btn gradient-btn">
                    <i class="fas fa-plus"></i> &nbsp;Tambah Proyek
                </button>
            </div>

            <div class="projects-grid">
                <?php
                // Mengambil seluruh data proyek dari database
                $query_proj = mysqli_query($conn, "SELECT * FROM projects ORDER BY id DESC");
                if (mysqli_num_rows($query_proj) == 0) {
                    echo '<p style="grid-column: 1/-1; text-align: center; color: var(--text-secondary); padding: 3rem 0;">Belum ada proyek yang ditambahkan. Silakan klik tombol "Tambah Proyek" di atas.</p>';
                } else {
                    while ($row = mysqli_fetch_assoc($query_proj)) {
                        $safe_id = $row['id'];
                        $safe_title = htmlspecialchars($row['title']);
                        $safe_category = htmlspecialchars($row['category']);
                        $safe_description = htmlspecialchars($row['description']);
                        $safe_link = htmlspecialchars($row['link']);
                        
                        // Escape parameter JavaScript
                        $js_title = addslashes($safe_title);
                        $js_category = addslashes($safe_category);
                        $js_description = addslashes($safe_description);
                        $js_link = addslashes($safe_link);
                ?>
                    <div class="project-card">
                        <div class="project-card-header">
                            <span class="project-cat"><?php echo $safe_category; ?></span>
                            <div class="project-actions-quick">
                                <button class="action-icon-btn edit" onclick="openEditModal(<?php echo $safe_id; ?>, '<?php echo $js_title; ?>', '<?php echo $js_category; ?>', '<?php echo $js_description; ?>', '<?php echo $js_link; ?>')" title="Edit Proyek">
                                    <i class="fas fa-edit"></i>
                                </button>
                                <a href="proses.project1.php?delete=<?php echo $safe_id; ?>" class="action-icon-btn delete" onclick="return confirm('Apakah Anda yakin ingin menghapus proyek \'<?php echo $js_title; ?>\'?')" title="Hapus Proyek">
                                    <i class="fas fa-trash-alt"></i>
                                </a>
                            </div>
                        </div>
                        <div class="project-body">
                            <h3 class="project-title"><?php echo $safe_title; ?></h3>
                            <p class="project-desc"><?php echo $safe_description; ?></p>
                        </div>
                        <?php if (!empty($safe_link)): ?>
                            <div class="project-footer">
                                <a href="<?php echo $safe_link; ?>" target="_blank" class="project-link">
                                    Lihat Kode Sumber <i class="fas fa-arrow-right"></i>
                                </a>
                            </div>
                        <?php endif; ?>
                    </div>
                <?php 
                    }
                } 
                ?>
            </div>
        </section>

        <!-- Todo List Section (CRUD #2) -->
        <section id="todo-app" class="page-section">
            <div class="section-title-wrapper">
                <span class="section-subtitle">Pengelolaan CRUD #2</span>
                <h2 class="section-title">Daftar Tugas & Rencana Belajar</h2>
            </div>

            <div class="todo-container-box">
                <h2>Rencana Kegiatan Aldo</h2>
                <p class="todo-info">Daftar tugas di bawah ini disimpan di MySQL. Klik pada tugas untuk mencentang/membatalkan centang.</p>
                
                <form action="proses.todo1.php" method="POST" class="todo-input-group">
                    <input type="text" name="task_text" placeholder="Masukkan tugas baru (contoh: Pelajari React JS)..." required>
                    <button type="submit" name="add_task">
                        <i class="fas fa-plus"></i> Tambah
                    </button>
                </form>

                <ul id="todo-list">
                    <?php
                    $query_todo = mysqli_query($conn, "SELECT * FROM todos ORDER BY id DESC");
                    if (mysqli_num_rows($query_todo) == 0) {
                        echo '<p style="text-align: center; color: var(--text-secondary); padding: 1.5rem 0;">Belum ada tugas. Tuliskan tugas di atas untuk mulai membuat rencana belajar!</p>';
                    } else {
                        while ($row = mysqli_fetch_assoc($query_todo)) {
                            $item_class = ($row['completed'] == 1) ? 'completed' : 'normal';
                            $text_class = ($row['completed'] == 1) ? 'done' : '';
                            $check_icon = ($row['completed'] == 1) ? 'fa-solid fa-circle-check' : 'fa-regular fa-circle';
                    ?>
                        <li class="todo-item <?php echo $item_class; ?>">
                            <a href="proses.todo1.php?toggle=<?php echo $row['id']; ?>&status=<?php echo $row['completed']; ?>" class="todo-text <?php echo $text_class; ?>" style="text-decoration: none; color: inherit;">
                                <i class="<?php echo $check_icon; ?>"></i>
                                <span><?php echo htmlspecialchars($row['task_text']); ?></span>
                            </a>
                            <a href="proses.todo1.php?delete=<?php echo $row['id']; ?>" class="todo-delete-btn" title="Hapus Tugas" onclick="return confirm('Hapus tugas ini?')">
                                <i class="fas fa-trash-alt"></i>
                            </a>
                        </li>
                    <?php 
                        }
                    } 
                    ?>
                </ul>
            </div>
        </section>

        <!-- Contact Section -->
        <section id="contact" class="page-section">
            <div class="section-title-wrapper">
                <span class="section-subtitle">Hubungi Aldo</span>
                <h2 class="section-title">Kontak Saya</h2>
            </div>
            
            <div class="contact-grid">
                <div class="contact-info-wrapper">
                    <h3>Hubungi Secara Langsung</h3>
                    <p>Apakah Anda memiliki pertanyaan atau ingin berdiskusi mengenai proyek web? Hubungi saya kapan saja!</p>
                    
                    <div class="contact-info-card">
                        <div class="contact-info-icon"><i class="fas fa-map-marker-alt"></i></div>
                        <div class="contact-info-text">
                            <h4>Lokasi</h4>
                            <p>Pekanbaru, Riau, Indonesia</p>
                        </div>
                    </div>
                    
                    <div class="contact-info-card">
                        <div class="contact-info-icon"><i class="fas fa-phone-alt"></i></div>
                        <div class="contact-info-text">
                            <h4>WhatsApp / Telepon</h4>
                            <p>+62 895 4047 08205</p>
                        </div>
                    </div>
                    
                    <div class="contact-info-card">
                        <div class="contact-info-icon"><i class="fas fa-envelope"></i></div>
                        <div class="contact-info-text">
                            <h4>Surel / Email</h4>
                            <p>ahmad.aldo@student.uir.ac.id</p>
                        </div>
                    </div>
                </div>
                
                <form action="#" method="POST" class="contact-form" onsubmit="event.preventDefault(); alert('Terima kasih! Pesan Anda berhasil dikirim (simulasi).'); this.reset();">
                    <div class="form-group">
                        <label for="contact-name">Nama Lengkap</label>
                        <input type="text" id="contact-name" class="form-control" placeholder="Masukkan nama lengkap Anda" required>
                    </div>
                    <div class="form-group">
                        <label for="contact-email">Email</label>
                        <input type="email" id="contact-email" class="form-control" placeholder="nama@email.com" required>
                    </div>
                    <div class="form-group">
                        <label for="contact-message">Pesan Anda</label>
                        <textarea id="contact-message" class="form-control" placeholder="Tuliskan pesan kerja sama atau penawaran..." required></textarea>
                    </div>
                    <button type="submit" class="btn gradient-btn" style="width: 100%; justify-content: center; margin-top: 1rem;">
                        Kirim Pesan &nbsp;<i class="fas fa-paper-plane"></i>
                    </button>
                </form>
            </div>
        </section>

    </main>

    <!-- Footer -->
    <footer class="main-footer">
        <div class="container footer-content">
            <span class="footer-logo gradient-text">Aldo.dev</span>
            <p>&copy; 2026 Teknik Informatika UIR. Didesain & Dikembangkan oleh Ahmad Aldo.</p>
        </div>
    </footer>

    <!-- Glassmorphic Modal Overlay for Project CRUD Form -->
    <div id="project-modal" class="modal-overlay">
        <div class="modal-container">
            <div class="modal-header">
                <h3 id="modal-title" class="modal-title">Tambah Proyek Baru</h3>
                <button onclick="closeModal()" class="modal-close-btn">&times;</button>
            </div>
            
            <form id="project-form" action="proses.project1.php" method="POST">
                <input type="hidden" name="id" id="project-id">
                
                <div class="form-group">
                    <label for="project-title">Nama Proyek *</label>
                    <input type="text" name="title" id="project-title" class="form-control" placeholder="Contoh: Sistem Informasi Akademik" required>
                </div>
                
                <div class="form-group">
                    <label for="project-category">Kategori Proyek *</label>
                    <input type="text" name="category" id="project-category" class="form-control" placeholder="Contoh: Web Application, UI/UX Design" required>
                </div>
                
                <div class="form-group">
                    <label for="project-description">Deskripsi Proyek *</label>
                    <textarea name="description" id="project-description" class="form-control" placeholder="Deskripsikan gambaran umum proyek, fitur, serta teknologi yang digunakan..." required></textarea>
                </div>
                
                <div class="form-group">
                    <label for="project-link">Link Proyek / Repositori GitHub</label>
                    <input type="url" name="link" id="project-link" class="form-control" placeholder="https://github.com/username/project">
                </div>
                
                <div class="modal-actions">
                    <button type="button" class="btn btn-secondary btn-modal-cancel" onclick="closeModal()">Batal</button>
                    <button type="submit" id="btn-submit-modal" name="add_project" class="btn gradient-btn">Tambah Proyek</button>
                </div>
            </form>
        </div>
    </div>

    <!-- JS Scripts -->
    <script src="skript1.js"></script>
</body>
</html>