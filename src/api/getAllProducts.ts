import { API_BASE_URL, ENDPOINTS } from "@constants/urls";
import type { GetAllProductsResponse } from "@custom-types/products";
import ky from "ky";

export const getAllProducts = async () => {
	const data = await ky.get(`${API_BASE_URL}${ENDPOINTS.PRODUCTS}`).json<GetAllProductsResponse>();

	return data.products;
};
