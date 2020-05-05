function toggleTheme() {
  if (localStorage.getItem("pageThemeLocal") === "dark") {
    $("body").addClass("body-bg-dark font-dark");
    $(".card-body").addClass("news-Card-Dark");
    $(".card-body").removeClass("card-Body-Style");
    $(".card").addClass("bg-dark");
    $(".card img").addClass("card-Img-Dark");
    $(".recent-stories ul").addClass("card-bottom-sec");
    $(".list-group li").addClass("btn-dark-mode");
    $(".recent-stories.btn").addClass("btn-dark btn-secondary");
    $(".navbar").addClass("navbar-dark bg-dark");
    $(".footer").addClass("footer-dark");
    $(".news-Card h5").addClass("sub-text-dark card-title");
    $(".header-icon").addClass("header-icon-dark");
    $(".search-button").toggleClass("btn-outline-dark btn-outline-secondary");
    $(".navbar-search").addClass("bg-dark");
    $(".dropdown-menu").addClass("bg-dark");
  } else if (localStorage.getItem("pageThemeLocal") === "light") {
    $("body").removeClass("body-bg-dark font-dark");
    $(".card-body").removeClass("news-Card-Dark card-Body-Style");
    $(".card-body").addClass("card-Body-Style");
    $(".card").removeClass("bg-dark");
    $(".card img").removeClass("card-Img-Dark");
    $(".recent-stories ul").removeClass("card-bottom-sec");
    $(".list-group li").removeClass("btn-dark-mode");
    $(".recent-stories.btn").removeClass("btn-dark btn-secondary");
    $(".navbar").removeClass("navbar-dark bg-dark");
    $(".footer").removeClass("footer-dark");
    $(".news-Card h5").removeClass("sub-text-dark card-title");
    $(".header-icon").removeClass("header-icon-dark");
    $(".search-button").toggleClass("btn-outline-dark btn-outline-secondary");
    $(".navbar-search").removeClass("bg-dark");
    $(".dropdown-menu").removeClass("bg-dark");
  }
}

$(".dark-mode-toggler").click(function () {
  if (localStorage.getItem("pageThemeLocal") === "light") {
    var pageTheme = "dark";
    localStorage.setItem("pageThemeLocal", "dark");
  } else if (localStorage.getItem("pageThemeLocal") === "dark") {
    var pageTheme = "light";
    localStorage.setItem("pageThemeLocal", "light");
  }
  toggleTheme();
});
if (localStorage.getItem("pageThemeLocal") === null) {
  localStorage.setItem("pageThemeLocal", "light");
}
toggleTheme();
