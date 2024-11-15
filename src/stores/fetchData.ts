import { defineStore } from "pinia";

export interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

export interface ProductState {
  products: Product[];
  isLoading: boolean;
  loaded: boolean;
  error: string | null;
}

export const useProductStore = defineStore("products", {
  state: (): ProductState => ({
    products: [],
    isLoading: false,
    loaded: false,
    error: null,
  }),

  actions: {
    async fetchProducts() {
      this.isLoading = true;
      this.error = null;
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products?limit=8",
        );
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
