<script setup lang="ts">
import { type Product, useProductStore } from "@/stores/fetchData";
import { onMounted, ref } from "vue";
import { Modal } from "ant-design-vue";

const postStore = useProductStore();

onMounted(() => {
  if (!postStore.loaded) {
    postStore.fetchProducts();
  }
});

const reloadProduct = () => {
  postStore.fetchProducts();
};

const priceDialogVisible = ref<boolean>(false);
let selectedProduct: Product;

const openPriceDialog = (product: Product) => {
  selectedProduct = product;
  priceDialogVisible.value = true;
};

const openSuccessfullyBuyDialog = () => {
  let secondsToGo = 5;
  priceDialogVisible.value = false;
  const modal = Modal.success({
    title: `${selectedProduct.title}`,
    content: `The purchase was made successfully!`,
  });
  const interval = setInterval(() => {
    secondsToGo -= 1;
    modal.update({
      content: `The purchase was made successfully!`,
    });
  }, 1000);
  setTimeout(() => {
    clearInterval(interval);
    modal.destroy();
  }, secondsToGo * 1000);
};
</script>

<template>
  <a-layout-content :style="{ margin: '24px 16px 0' }">
    <div :style="{ padding: '24px', background: '#fff', minHeight: '200px' }">
      <div v-if="postStore.isLoading">
        <div class="error-template">
          <a-spin />
          <p>Please wait...</p>
        </div>
      </div>
      <div v-else-if="postStore.error">
        <div class="error-template">
          <h2>Please try again...</h2>
          <a-button type="primary" @click="reloadProduct">Try again</a-button>
        </div>
      </div>
      <div class="grid grid-cols-4 gap-4">
        <a-card
          hoverable
          style="min-width: 300px"
          v-for="product in postStore.products"
          :key="product.id"
        >
          <template #cover>
            <img alt="example" :src="product.image" class="w-[300] h-[200px]" />
          </template>
          <template #actions>
            <a-button
              type="primary"
              class="w-[123px]"
              @click="openPriceDialog(product)"
              >Price {{ product.price }}$</a-button
            >
            <a-button class="w-[123px]">About Product</a-button>
          </template>
          <a-card-meta>
            <template #title>
              {{ product.title }}
            </template>
            <template #description>
              <p>{{ product.category }}</p>
            </template>
            <template #avatar>
              <a-avatar :src="product.image" />
            </template>
          </a-card-meta>
        </a-card>
      </div>
    </div>

    <a-modal
      v-model:open="priceDialogVisible"
      centered
      @ok="openSuccessfullyBuyDialog"
    >
      <template #title>
        <p>{{ selectedProduct.title }}</p>
      </template>
      <p>{{ selectedProduct.category }}</p>
      <p>Price {{ selectedProduct.price }}$</p>
    </a-modal>
  </a-layout-content>
</template>

<style scoped>
.error-template {
  @apply flex flex-col items-center py-20;
}
</style>
