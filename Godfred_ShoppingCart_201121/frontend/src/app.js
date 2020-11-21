import cartPage from "./jsScript/cartPage.js";
import error404 from "./jsScript/Error404.js";
import productPage from "./jsScript/productPage.js";
import productPicture from "./jsScript/productPicture.js";
import { parseRequestUrl } from "./utils.js";

const routes = {
  "/": productPicture,
  "/product/:id": productPage,
  "/cart/:id": cartPage,
  "/cart": cartPage,
};
// const router = async () => {
//   const request = parseRequestUrl();
//   const parseUrl =
//     (request.resource ? `/${request.resource}` : "/") +
//     (request.id ? "/:id" : "") +
//     (request.verb ? `/${request.verb}` : "");
//   const page = routes[parseUrl] ? routes[parseUrl] : error404;
//   const main = document.getElementById("main-container");
//   main.innerHTML = await page.render();
//   await page.after_render();
// };
// window.addEventListener("load", router);
// window.addEventListener("hashchange", router);

const router = async () => {
  //showLoading();
  const request = parseRequestUrl();
  const parseUrl =
    (request.resource ? `/${request.resource}` : '/') +
    (request.id ? '/:id' : '') +
    (request.verb ? `/${request.verb}` : '');
  console.log(request);
  const page = routes[parseUrl] ? routes[parseUrl] : error404;
 // const header = document.getElementById('header-container');
  //header.innerHTML = await Header.render();
  //await Header.after_render();
  const main = document.getElementById('main-container');
  main.innerHTML = await screen.render();
  //if (screen.after_render) 
  await page.after_render();
  //hideLoading();
};
window.addEventListener('load', router);
window.addEventListener('hashchange', router);
