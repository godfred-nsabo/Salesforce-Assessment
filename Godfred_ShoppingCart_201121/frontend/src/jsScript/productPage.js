// const productPage = {
//   render: async () => {
//     return `<div>productPage</div>`;
//   },

import { getProduct } from "../api.js";
import { parseRequestUrl } from "../utils.js";
import Rating from "../components/Rating.js";
// };
const productPage = {
  after_render: () => {
    const request = parseRequestUrl();
    document.getElementById("add-button").addEventListener("click", () => {
      document.location.hash = `/cart/${request.id}`;
    });
  },
  render: async () => {
    const request = parseRequestUrl();
    const product = getProduct(request.id);
    if (product.error) {
      return `<div>${product.error}</div>`;
    }
    return `
    <div class="content">
    <div class="back-to-search">
    <a href = "/#/">Back</a>
    </div>
    <div class="details">
      <img src="${product.image}" alt="${product.name}"/>
      </div>
       <div class="details-info">
      <ul>
      <li>
      <h1>${product.name}</h1>
      </li>
      <li>
      ${Rating.render({
        value: product.rating,
        text: `${product.numReviews} reviews`,
      })}
      </li>
      <li>
      Price:<strong>GH₵ ${product.price}</strong>
      </li>
      <li>
      <div>
        ${product.description}
      </div>
      </li>
      </ul>
    </div>  
    <div class="details-action"> 
      <ul>
      <li>
      Price: GH₵ ${product.price}
      </li>
      <li>
      Status: 
        ${
          product.countInStock > 0
            ? `<span class="success">In Stock</span>`
            : `<span class="success">Product Unavailable</span>`
        }
      </li>
      <li>
        <button id="add-button" class="fw primary"> Add to Cart </div>
      </li>
      </ul>
      </div>
    </div>
    </div>
    `;
  },
};

export default productPage;
