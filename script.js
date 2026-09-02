function openMenu() {
    document.body.classList.add("menu--open");
}

function closeMenu() {
    document.body.classList.remove("menu--open");
}

const plans = document.querySelectorAll(".plan");

function revealPlans() {
plans.forEach((plan) => {
const revealTop = plan.getBoundingClientRect().top;
const revealBottom = plan.getBoundingClientRect().bottom;
const windowHeight = window.innerHeight;

if (revealTop < windowHeight - 100 && revealBottom > 0) {
plan.classList.add("show");
} else {
plan.classList.remove("show");
}
});
}

window.addEventListener("scroll", revealPlans);
window.addEventListener("load", revealPlans);