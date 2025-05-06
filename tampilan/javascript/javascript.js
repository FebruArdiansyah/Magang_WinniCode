// Ambil semua link di navbar menu
const menuLinks = document.querySelectorAll('.navbar-menu a');

// Tambahkan event listener untuk masing-masing link
menuLinks.forEach(link => {
  link.addEventListener('click', function () {
    // Hapus class 'active' dari semua link
    menuLinks.forEach(item => item.classList.remove('active'));
    
    // Tambahkan class 'active' ke link yang diklik
    this.classList.add('active');
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





