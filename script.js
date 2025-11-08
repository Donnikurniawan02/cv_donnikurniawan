// Pesan di halaman utama
const toggleBtn = document.getElementById("toggleMessage");
const msg = document.getElementById("message");

if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    msg.classList.toggle("hidden");
  });
}

// Alert di halaman kontak
const form = document.getElementById("contactForm");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Terima kasih, pesan Anda telah terkirim!");
    form.reset();
  });
}
