const whatWeDoLink = document.getElementById('whatWeDoLink');
const ourWorkLink = document.getElementById('ourWorkLink');
const megaMenu = document.getElementById('megaMenu');
const ourWorkMenu = document.getElementById('ourWorkMenu');
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navMenu = document.getElementById('navMenu');

let menuTimeout;

// Mobile menu toggle
mobileMenuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('mobile-active');
});

// Function to close all mega menus
function closeAllMegaMenus() {
    megaMenu.classList.remove('active');
    ourWorkMenu.classList.remove('active');
}

// What We Do menu handlers
whatWeDoLink.addEventListener('mouseenter', () => {
    if (window.innerWidth > 768) {
        clearTimeout(menuTimeout);
        closeAllMegaMenus();
        megaMenu.classList.add('active');
    }
});

whatWeDoLink.addEventListener('click', (e) => {
    if (window.innerWidth <= 768) {
        e.preventDefault();
        if (megaMenu.classList.contains('active')) {
            closeAllMegaMenus();
        } else {
            closeAllMegaMenus();
            megaMenu.classList.add('active');
        }
    }
});

whatWeDoLink.addEventListener('mouseleave', () => {
    if (window.innerWidth > 768) {
        menuTimeout = setTimeout(() => {
            megaMenu.classList.remove('active');
        }, 100);
    }
});

megaMenu.addEventListener('mouseenter', () => {
    if (window.innerWidth > 768) {
        clearTimeout(menuTimeout);
    }
});

megaMenu.addEventListener('mouseleave', () => {
    if (window.innerWidth > 768) {
        megaMenu.classList.remove('active');
    }
});

// Our Work menu handlers
ourWorkLink.addEventListener('mouseenter', () => {
    if (window.innerWidth > 768) {
        clearTimeout(menuTimeout);
        closeAllMegaMenus();
        ourWorkMenu.classList.add('active');
    }
});

ourWorkLink.addEventListener('click', (e) => {
    if (window.innerWidth <= 768) {
        e.preventDefault();
        if (ourWorkMenu.classList.contains('active')) {
            closeAllMegaMenus();
        } else {
            closeAllMegaMenus();
            ourWorkMenu.classList.add('active');
        }
    }
});

ourWorkLink.addEventListener('mouseleave', () => {
    if (window.innerWidth > 768) {
        menuTimeout = setTimeout(() => {
            ourWorkMenu.classList.remove('active');
        }, 100);
    }
});

ourWorkMenu.addEventListener('mouseenter', () => {
    if (window.innerWidth > 768) {
        clearTimeout(menuTimeout);
    }
});

ourWorkMenu.addEventListener('mouseleave', () => {
    if (window.innerWidth > 768) {
        ourWorkMenu.classList.remove('active');
    }
});

// Handle submenu switching for both menus
const allMenuItems = document.querySelectorAll('.menu-column-item');

allMenuItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        if (window.innerWidth > 768) {
            switchSubmenu(item);
        }
    });

    item.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            switchSubmenu(item);
        }
    });
});

function switchSubmenu(item) {
    const submenuId = item.getAttribute('data-submenu');
    const menuType = item.getAttribute('data-menu');

    // Determine which menu we're in
    const parentMenu = item.closest('.mega-menu');
    const submenuColumns = parentMenu.querySelectorAll('.submenu-column');

    // Remove active class from all submenus in this menu
    submenuColumns.forEach(col => {
        col.classList.remove('active');
    });

    // Add active class to the corresponding submenu
    const activeSubmenu = document.getElementById(submenuId);
    if (activeSubmenu) {
        activeSubmenu.classList.add('active');
    }
}

// Close mega menus when clicking outside
document.addEventListener('click', (e) => {
    if (!megaMenu.contains(e.target) &&
        !ourWorkMenu.contains(e.target) &&
        !whatWeDoLink.contains(e.target) &&
        !ourWorkLink.contains(e.target)) {
        closeAllMegaMenus();
    }
});

// Handle window resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navMenu.classList.remove('mobile-active');
    }
});