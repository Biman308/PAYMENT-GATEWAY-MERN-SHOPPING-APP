const { default: SummaryApi } = require("../common");

const fetchCategoryWiseProduct = async (category) => {
  try {
    const response = await fetch(SummaryApi.categoryWiseProduct.url, {
      method: SummaryApi.categoryWiseProduct.method,
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ category }),
    });

    const dataResponse = await response.json();

    return dataResponse?.data ? dataResponse : { data: [] };
  } catch (err) {
    console.error("Fetch category-wise product error:", err);
    return { data: [] };
  }
};

export default fetchCategoryWiseProduct;
