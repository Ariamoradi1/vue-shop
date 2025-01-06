import { defineStore } from "pinia";
import type { Product } from "@/model/product/product.model";

export interface ProductState {
  products: Product[];
  isLoading: boolean;
  loaded: boolean;
  error: string | null;
}

const apiPath = "https://fakestoreapi.com/products";

export const useProductStore = defineStore("products", {
  state: (): ProductState => ({
    products: [],
    isLoading: false,
    loaded: false,
    error: null,
  }),

  actions: {
    async fetchProducts(value: string) {
      this.isLoading = true;
      this.error = null;
      try {
        const response = await fetch(`${apiPath}?limit=${value}`);
        if (!response.ok) throw new Error("Failed to fetch products");
        this.products = await response.json();
        this.loaded = true;
      } catch (err: any) {
        this.error = err.message;
        this.loaded = false;
      } finally {
        this.isLoading = false;
      }
    },
  },
});
