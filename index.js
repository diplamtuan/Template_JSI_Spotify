import { loadAboutUs } from "./aboutus.js";
import { loginPage } from "./login.js";
import { searchPage } from "./search.js";

// Hàm getAPI PodCast

// Hàm loadSpinner

// Hàm getArtistAPI
// https://65d16bd9ab7beba3d5e455e6.mockapi.io/todolist/artists

// Hàm homePage

// Hàm checkLogin

// Hàm debounce để ngăn chặn javascript search của chúng ta sau 1 khoảng thời gian
const debounce = (func, delay) => {
  let debounceTimeout;
  return function (...args) {
    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
};
const debounceAPI = debounce((e) => {
  searchPage(e.target.value);
}, 500);

const inputSearch = document.querySelector(".header-search input");
inputSearch.addEventListener("input", (e) => {
  if (localStorage.getItem("name")) {
    debounceAPI(e);
  } else {
    e.target.value = "";
    alert("MỜI BẠN ĐĂNG NHẬP");
    loginPage();
  }
});

// Về lại trang chủ
