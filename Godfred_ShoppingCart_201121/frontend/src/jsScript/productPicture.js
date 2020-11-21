import proData from "../productData.js";
//import axios from 'axios';
import Rating from "../components/Rating.js";
const productPicture = {
  render: async () => {
    //const { products } = proData; // sending an ajax request
    const response = await fetch("http://localhost:5050/api/products", {
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response || !response.ok) {
      //   //statusText !=='OK') {
      return `<div> Error in getting data</div>`;
    }
    const products = await response.json(); // return a promise to convert into data

    return `
    <ul class="products">
      ${products
        .map(
          (product) => `
      <li>
        <div class="product">
          <a href="/#/product/${product._id}">
            <img src="${product.image}" alt="${product.name}" />
          </a>
        <div class="product-name">
          <a href="/#/product/1">
            ${product.name}
          </a>
        </div>
        <div class="product-rating">
        ${Rating.render({
          value: product.rating,
          text: `${product.numReviews} reviews`,
        })}
        </div>
        <div class="product-brand">
          ${product.brand}
        </div>
        <div class="product-price">
          GH₵ ${product.price}
        </div>
        </div>
      </li>
      `
        )
        .join("\n")}
    `;
  },
};
export default productPicture;

/* <div class="product-rating">
  $
  {Rating.render({
    value: product.rating,
    text: `${product.numReviews} reviews`,
  })}
</div>; */
