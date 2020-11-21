// const productPage = {
//   render: async () => {
//     const request = parseRequestUrl();
//     const product = await getProduct(request.id);
//     //return `<h1>${product.name}</h1>`;
//     return `<div>productPage</div>`;
//   },
// };
const error404 = {
   render: () => {
     return `<div>Page not Found!</div>`;
   },
};
 
export default error404;
