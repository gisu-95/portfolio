// 🌙 다크모드 토글
const darkToggle = document.getElementById("darkToggle");
darkToggle.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
});

// 🔥 스크롤 애니메이션
const fadeEls = document.querySelectorAll(".fade");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) e.target.classList.add("show");
    });
  },
  { threshold: 0.2 }
);

fadeEls.forEach((el) => observer.observe(el));

// 🔗 GitHub API 프로젝트 자동 로드
const projectList = document.getElementById("projectList");

fetch("https://api.github.com/users/kisooeng/repos")
  .then((res) => res.json())
  .then((data) => {
    projectList.innerHTML = data
      .map(
        (repo) => `
      <div class="project-card">
        <h3>${repo.name}</h3>
        <p>${repo.description || "설명 없음"}</p>
      </div>`
      )
      .join("");
  });
