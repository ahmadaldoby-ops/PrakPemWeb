document.addEventListener("DOMContentLoaded", () => {
    // 1. Theme Toggle & Mode Manager
    const themeToggle = document.getElementById("theme-toggle");
    
    // Check localStorage or device system preference
    const currentTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (currentTheme === "dark" || (!currentTheme && systemPrefersDark)) {
        document.body.classList.add("dark");
        themeToggle.innerHTML = "☀️";
    } else {
        document.body.classList.remove("dark");
        themeToggle.innerHTML = "🌙";
    }

    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark");
        if (document.body.classList.contains("dark")) {
            themeToggle.innerHTML = "☀️";
            localStorage.setItem("theme", "dark");
        } else {
            themeToggle.innerHTML = "🌙";
            localStorage.setItem("theme", "light");
        }
    });

    // 2. Project Modal Manager (CRUD)
    const projectModal = document.getElementById("project-modal");
    const modalTitle = document.getElementById("modal-title");
    const projectForm = document.getElementById("project-form");
    const btnSubmit = document.getElementById("btn-submit-modal");
    
    const inputId = document.getElementById("project-id");
    const inputTitle = document.getElementById("project-title");
    const inputCategory = document.getElementById("project-category");
    const inputDescription = document.getElementById("project-description");
    const inputLink = document.getElementById("project-link");

    // Open Add Modal
    window.openAddModal = () => {
        projectForm.reset();
        inputId.value = "";
        
        modalTitle.textContent = "Tambah Proyek Baru";
        btnSubmit.name = "add_project";
        btnSubmit.textContent = "Tambah Proyek";
        
        projectModal.classList.add("active");
        document.body.style.overflow = "hidden"; // Disable scroll when modal is active
    };

    // Open Edit Modal
    window.openEditModal = (id, title, category, description, link) => {
        inputId.value = id;
        inputTitle.value = title;
        inputCategory.value = category;
        inputDescription.value = description;
        inputLink.value = link;

        modalTitle.textContent = "Edit Proyek";
        btnSubmit.name = "edit_project";
        btnSubmit.textContent = "Simpan Perubahan";

        projectModal.classList.add("active");
        document.body.style.overflow = "hidden";
    };

    // Close Modal
    window.closeModal = () => {
        projectModal.classList.remove("active");
        document.body.style.overflow = ""; // Enable scroll
    };

    // Close modal clicking outside
    projectModal.addEventListener("click", (e) => {
        if (e.target === projectModal) {
            closeModal();
        }
    });

    // Form Client-side Validation
    projectForm.addEventListener("submit", (e) => {
        const titleVal = inputTitle.value.trim();
        const categoryVal = inputCategory.value.trim();
        const descVal = inputDescription.value.trim();

        if (titleVal === "" || categoryVal === "" || descVal === "") {
            e.preventDefault();
            alert("Harap lengkapi semua kolom wajib (Nama, Kategori, dan Deskripsi)!");
        }
    });

    // 3. Dynamic Navbar Scroll Polish
    const navbar = document.querySelector(".navbar");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 30) {
            navbar.style.boxShadow = "var(--shadow-md)";
            navbar.style.background = "var(--bg-glass)";
            navbar.style.height = "65px";
        } else {
            navbar.style.boxShadow = "";
            navbar.style.height = "var(--navbar-height)";
        }
    });
});
