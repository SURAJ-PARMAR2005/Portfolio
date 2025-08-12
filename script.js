window.addEventListener('scroll',function() {
    let sections = document.querySelectorAll('div');
    let navLinks = document.querySelectorAll('nav a');

    sections.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop - 150;
        let height = section.offsetHeight;  // Section height
        let id = section.getAttribute('id');  // Get section's ID (if it has one)

        if (id && top >= offset && top < offset + height) {  // Check if section is visible in the viewport
            navLinks.forEach(link => {
                link.classList.remove('active');  // Remove active class from all links
                document.querySelector('nav a[href*=' + id + ']').classList.add('active');  // Add active class to the current link
            });
        }
    });
});