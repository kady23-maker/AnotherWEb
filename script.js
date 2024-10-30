document.getElementById('animateBtn').addEventListener('click', function() {
    const content = document.getElementById('content');
    content.classList.add('animated');

    // Menghapus kelas animasi setelah 0.5 detik
    setTimeout(() => {
        content.classList.remove('animated');
    }, 500);
});

// Smooth scrolling
const scrollSection = document.getElementById('scrollSection');
scrollSection.addEventListener('click', function() {
    scrollSection.scrollIntoView({ behavior: 'smooth' });
});
