const baseURL = process.env.REACT_APP_BACKEND_URL;

const SummaryApi = {
  signUP: {
    url: `${baseURL}/api/signup`,
    method: "post",
  },
  signIn: {
    url: `${baseURL}/api/signin`,
    method: "post",
  },
  current_user: {
    url: `${baseURL}/api/user-details`,
    method: "get",
  },
  logout_user: {
    url: `${baseURL}/api/userLogout`,
    method: "get",
  },
  allUser: {
    url: `${baseURL}/api/all-user`,
    method: "get",
  },
  updateUser: {
    url: `${baseURL}/api/update-user`,
    method: "post",
  },
  uploadProduct: {
    url: `${baseURL}/api/upload-product`,
    method: "post",
  },
  allProduct: {
    url: `${baseURL}/api/get-product`,
    method: "get",
  },
  updateProduct: {
    url: `${baseURL}/api/update-product`,
    method: "post",
  },
  categoryProduct: {
    url: `${baseURL}/api/get-categoryProduct`,
    method: "get",
  },
  categoryWiseProduct: {
    url: `${baseURL}/api/category-product`,
    method: "post",
  },
  productDetails: {
    url: `${baseURL}/api/product-details`,
    method: "post",
  },
  addToCartProduct: {
    url: `${baseURL}/api/addtocart`,
    method: "post",
  },
  addToCartProductCount: {
    url: `${baseURL}/api/countAddToCartProduct`,
    method: "get",
  },
  addToCartProductView: {
    url: `${baseURL}/api/view-cart-product`,
    method: "get",
  },
  updateCartProduct: {
    url: `${baseURL}/api/update-cart-product`,
    method: "post",
  },
  deleteCartProduct: {
    url: `${baseURL}/api/delete-cart-product`,
    method: "post",
  },
  searchProduct: {
    url: `${baseURL}/api/search`,
    method: "get",
  },
  filterProduct: {
    url: `${baseURL}/api/filter-product`,
    method: "post",
  },
  payment: {
    url: `${baseURL}/api/checkout`,
    method: "post",
  },
};

export default SummaryApi;
