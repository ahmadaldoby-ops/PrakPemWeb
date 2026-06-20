<?php
include 'koneksi1.php';

// Helper to sanitize inputs to prevent XSS and SQL Injection
function sanitize($conn, $data) {
    return mysqli_real_escape_string($conn, htmlspecialchars(trim($data), ENT_QUOTES, 'UTF-8'));
}

// 1. CREATE - PROCESS ADD PROJECT
if (isset($_POST['add_project'])) {
    $title = sanitize($conn, $_POST['title']);
    $category = sanitize($conn, $_POST['category']);
    $description = sanitize($conn, $_POST['description']);
    $link = sanitize($conn, $_POST['link']);

    if (!empty($title) && !empty($category) && !empty($description)) {
        $query = "INSERT INTO projects (title, category, description, link) VALUES ('$title', '$category', '$description', '$link')";
        mysqli_query($conn, $query);
    }
    
    header("Location: pert4.1.php#projects");
    exit();
}

// 2. UPDATE - PROCESS EDIT PROJECT
if (isset($_POST['edit_project'])) {
    $id = intval($_POST['id']);
    $title = sanitize($conn, $_POST['title']);
    $category = sanitize($conn, $_POST['category']);
    $description = sanitize($conn, $_POST['description']);
    $link = sanitize($conn, $_POST['link']);

    if ($id > 0 && !empty($title) && !empty($category) && !empty($description)) {
        $query = "UPDATE projects SET title='$title', category='$category', description='$description', link='$link' WHERE id=$id";
        mysqli_query($conn, $query);
    }

    header("Location: pert4.1.php#projects");
    exit();
}

// 3. DELETE - PROCESS DELETE PROJECT
if (isset($_GET['delete'])) {
    $id = intval($_GET['delete']);
    if ($id > 0) {
        $query = "DELETE FROM projects WHERE id=$id";
        mysqli_query($conn, $query);
    }

    header("Location: pert4.1.php#projects");
    exit();
}
?>
