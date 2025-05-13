document.addEventListener("DOMContentLoaded", function () {
  console.log('Navbar script loaded'); // Tes apakah script dijalankan

  const currentPath = window.location.pathname;
  console.log('Current Path:', currentPath); // Tes path saat ini

  document.querySelectorAll('.nav-link').forEach(link => {
    const linkPath = new URL(link.href).pathname;
    console.log('Checking link:', linkPath); // Tes semua link

    const isRoot = (linkPath === '/' && (currentPath === '/' || currentPath === '/index.html'));

    if (linkPath === currentPath || isRoot) {
      document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
      link.classList.add('active');
      console.log('Active set on:', link.textContent.trim()); // Konfirmasi siapa yang aktif
    }
  });
});



const hamburger = document.getElementById("hamburger");
  const navbarMenu = document.getElementById("navbarMenu");

  hamburger.addEventListener("click", () => {
    navbarMenu.classList.toggle("active");
  });




const track = document.getElementById('mainBannerTrack');
const cards = document.querySelectorAll('.main-banner-card');
let index = 0;

document.getElementById('scrollRight').onclick = () => {
  if (index < cards.length - 1) {
    index++;
    updateSlide();
  }
};

document.getElementById('scrollLeft').onclick = () => {
  if (index > 0) {
    index--;
    updateSlide();
  }
};

function updateSlide() {
  const cardWidth = cards[0].offsetWidth;
  track.style.transform = `translateX(-${cardWidth * index}px)`;
}






