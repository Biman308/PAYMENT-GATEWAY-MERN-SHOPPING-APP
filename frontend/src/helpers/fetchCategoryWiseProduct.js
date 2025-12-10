import SummaryApi from "../common";

const fetchCategoryWiseProduct = async (category) => {
  try {
    const response = await fetch(SummaryApi.categoryWiseProduct.url, {
      method: SummaryApi.categoryWiseProduct.method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ category }),
    });

    if (!response.ok) {
      console.error("API Error:", response.status, response.statusText);
      return { success: false, message: "Failed to fetch products" };
    }

    const dataResponse = await response.json();
    return dataResponse;

  } catch (error) {
    console.error("Fetch Error:", error);
    return { success: false, message: "Network error" };
  }
};

export default fetchCategoryWiseProduct;
