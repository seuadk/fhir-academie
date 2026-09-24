// ===== FHIR Académie — Script principal =====

function courseCardHTML(c){
  const levelClass = c.level === "Avancé" ? "avance" : (c.level === "Intermédiaire" ? "intermediaire" : "");
  const priceHTML = c.oldPrice
    ? `<span class="old">${formatPrice(c.oldPrice)}</span>${formatPrice(c.price)}`
    : formatPrice(c.price);
  return `
    <div class="course-card">
      <div class="course-thumb">${c.icon}</div>
      <div class="course-body">
        <span class="course-level ${levelClass}">${c.level}</span>
        <h3>${c.title}</h3>
        <p class="course-desc">${c.short}</p>
        <div class="course-meta">
          <span>⏱ ${c.duration}</span>
          <span>📚 ${c.lessons} leçons</span>
        </div>
        <div class="course-foot">
          <span class="course-price">${priceHTML}</span>
          <a href="module.html?id=${c.id}" class="btn btn-outline btn-sm">Voir le module</a>
        </div>
      </div>
    </div>`;
}

document.addEventListener("DOMContentLoaded", () => {
  // Nav toggle (mobile)
  const toggle = document.getElementById("navToggle");
  const nav = document.getElementById("mainNav");
  if(toggle && nav){
    toggle.addEventListener("click", () => {
      nav.style.display = nav.style.display === "flex" ? "none" : "flex";
      nav.style.flexDirection = "column";
      nav.style.position = "absolute";
      nav.style.top = "72px";
      nav.style.left = "0";
      nav.style.right = "0";
      nav.style.background = "#fff";
      nav.style.padding = "16px 24px";
      nav.style.borderBottom = "1px solid #e2e8f0";
    });
  }

  // Featured courses on homepage
  const featured = document.getElementById("featuredCourses");
  if(featured){
    featured.innerHTML = COURSES.slice(0, 3).map(courseCardHTML).join("");
  }
});
