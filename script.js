document.getElementById("year").textContent = new Date().getFullYear();
const targets = document.querySelectorAll(".feature,.card,.paper,.course-grid>div,.stack-row");
targets.forEach(el => el.classList.add("reveal"));
const io = new IntersectionObserver(entries => entries.forEach(e => {
  if(e.isIntersecting){ e.target.classList.add("visible"); io.unobserve(e.target); }
}), {threshold:.08});
targets.forEach(el => io.observe(el));