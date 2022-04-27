// ---------------- Header JS ----------------
let screenHeight = window.innerHeight;
$(document).scroll(() => {
  let scrollTop = $(this).scrollTop();
  if (scrollTop > screenHeight / 5) {
    $(".header-position").addClass("header-sticky");
  } else {
    $(".header-position").removeClass("header-sticky");
  }
});
// ---------------- Accordion JS ----------------
$(".acnav__label").click(function () {
  let label = $(this);
  let parent = label.parent(".has-children");
  let list = label.siblings(".acnav__list");

  if (parent.hasClass("is-open")) {
    list.slideUp(600);
    parent.removeClass("is-open");
  } else {
    list.slideDown(600);
    parent.addClass("is-open");
  }
});

// --------------------------------
let navCollapse = document.querySelector(".navbar-collapse");
let navItem = document.querySelectorAll(".nav-item");
document.querySelector(".navbar-toggler").addEventListener("click", () => {
  let hasClass = navCollapse.classList.contains("show");
  if (hasClass) {
    navItem.forEach((item) => {
      item.classList.remove("animate__fadeInDown");
    });
  } else {
    navItem.forEach((item) => {
      item.classList.add("animate__fadeInDown");
    });
  }
});

// --------------------------- welcome alert message ----------------------
window.addEventListener('load', () => {
    if(!sessionStorage.getItem('show')){
        $("#bar").modal('show');
        sessionStorage.setItem('show', true);
    }
});
