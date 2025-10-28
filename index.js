//hobbies
document.addEventListener("DOMContentLoaded", function () {
  const toggleButtons = document.querySelectorAll(".toggle-btn");

  toggleButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const card = btn.closest(".hobby-card");
      const extraContent = card.querySelector(".extra-content");

      if (extraContent) {
        extraContent.classList.toggle("active");
        btn.textContent = extraContent.classList.contains("active") ? "Thu gọn" : "Chi tiết";
      }
    });
  });
});




// Animate fill khi section hiển thị 
document.addEventListener("DOMContentLoaded", function () {
  const fills = document.querySelectorAll(".fill");
  const section = document.querySelector(".skills-box");

 
  if (!("IntersectionObserver" in window)) {
    fills.forEach(f => {
      const p = f.getAttribute("data-percent") || "0";
      f.style.width = p + "%";
    });
    return;
  }

  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        fills.forEach((f, i) => {
          const p = f.getAttribute("data-percent") || "0";
          

          setTimeout(()=> {
            f.style.width = p + "%";
          }, i * 120);
        });
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.25 });

  if (section) obs.observe(section);
});






/* 🔧 Dark Mode Toggle */
const toggleBtn = document.getElementById('mode-toggle');
const body = document.body;

// Lấy trạng thái dark mode đã lưu
const savedMode = localStorage.getItem('darkMode');


if (savedMode === 'true') {
  body.classList.add('dark-mode');
  toggleBtn.textContent = '☀️ Light';
} else {
  // Mặc định khi vừa vào trang là Light mode, nút hiển thị  Dark
  body.classList.remove('dark-mode');
  toggleBtn.textContent = '🌙 Dark';
}

// Khi nhấn nút
toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  const isDark = body.classList.contains('dark-mode');
  toggleBtn.textContent = isDark ? '☀️ Light' : '🌙 Dark';
  localStorage.setItem('darkMode', isDark);
});
