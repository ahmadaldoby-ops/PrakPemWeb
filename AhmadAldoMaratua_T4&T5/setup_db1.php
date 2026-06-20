<?php
$host = "localhost";
$username = "root";
$pass = "";

// 1. Establish initial MySQL connection without specifying DB
$conn = mysqli_connect($host, $username, $pass);
if (!$conn) {
    die("Koneksi MySQL gagal: " . mysqli_connect_error() . "\n");
}

// 2. Create database db_portofolio1 if it doesn't exist
$sql_db = "CREATE DATABASE IF NOT EXISTS db_portofolio1";
if (mysqli_query($conn, $sql_db)) {
    echo "Database 'db_portofolio1' verified/created successfully.\n";
} else {
    die("Gagal membuat database: " . mysqli_error($conn) . "\n");
}

// Select the database
mysqli_select_db($conn, "db_portofolio1");

// 3. Create 'projects' table
$sql_projects = "CREATE TABLE IF NOT EXISTS projects (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    category VARCHAR(100) NOT NULL,
    link VARCHAR(255) DEFAULT '',
    image_url VARCHAR(255) DEFAULT '',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)";
if (mysqli_query($conn, $sql_projects)) {
    echo "Table 'projects' verified/created successfully.\n";
} else {
    die("Error creating projects table: " . mysqli_error($conn) . "\n");
}

// 4. Create 'todos' table
$sql_todos = "CREATE TABLE IF NOT EXISTS todos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    task_text VARCHAR(255) NOT NULL,
    completed TINYINT(1) DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)";
if (mysqli_query($conn, $sql_todos)) {
    echo "Table 'todos' verified/created successfully.\n";
} else {
    die("Error creating todos table: " . mysqli_error($conn) . "\n");
}

// 5. Seed 'projects' if empty
$count_proj = mysqli_fetch_assoc(mysqli_query($conn, "SELECT COUNT(*) as total FROM projects"))['total'];
if ($count_proj == 0) {
    $projects = [
        [
            'title' => 'Sistem Informasi Kasir AldoMart',
            'description' => 'Aplikasi kasir (Point of Sale) berbasis web yang dirancang khusus untuk mempermudah pencatatan transaksi ritel menengah.',
            'category' => 'Web Application',
            'link' => 'https://github.com/ahmad-aldo/pos-aldomart'
        ],
        [
            'title' => 'Landing Page Studio Foto Aksaa.dev',
            'description' => 'Website portofolio interaktif dan modern dengan transisi animasi halus serta penerapan mode gelap/terang kustom.',
            'category' => 'Frontend & UI Design',
            'link' => 'https://github.com/ahmad-aldo/aksaa-studio'
        ],
        [
            'title' => 'Aplikasi Manajemen Inventaris Kampus',
            'description' => 'Sistem backend andal menggunakan arsitektur MVC PHP Native untuk mendata aset laboratorium Teknik Informatika UIR.',
            'category' => 'Database System',
            'link' => 'https://github.com/ahmad-aldo/lab-inventory'
        ]
    ];

    foreach ($projects as $p) {
        $t = mysqli_real_escape_string($conn, $p['title']);
        $d = mysqli_real_escape_string($conn, $p['description']);
        $c = mysqli_real_escape_string($conn, $p['category']);
        $l = mysqli_real_escape_string($conn, $p['link']);
        mysqli_query($conn, "INSERT INTO projects (title, description, category, link) VALUES ('$t', '$d', '$c', '$l')");
        echo "Seeded project: $t\n";
    }
} else {
    echo "Projects table already has data, seeding skipped.\n";
}

// 6. Seed 'todos' if empty
$count_todos = mysqli_fetch_assoc(mysqli_query($conn, "SELECT COUNT(*) as total FROM todos"))['total'];
if ($count_todos == 0) {
    $todos = [
        ['task_text' => 'Pelajari konsep OOP dasar pada PHP Native', 'completed' => 0],
        ['task_text' => 'Praktikum Pemrograman Web - Selesaikan Modul 4 CRUD', 'completed' => 1],
        ['task_text' => 'Desain layout mockup halaman utama tugas akhir', 'completed' => 0]
    ];

    foreach ($todos as $t) {
        $txt = mysqli_real_escape_string($conn, $t['task_text']);
        $comp = intval($t['completed']);
        mysqli_query($conn, "INSERT INTO todos (task_text, completed) VALUES ('$txt', $comp)");
        echo "Seeded todo task: $txt\n";
    }
} else {
    echo "Todos table already has data, seeding skipped.\n";
}

mysqli_close($conn);
echo "Setup db_portofolio1 completed successfully.\n";
?>
