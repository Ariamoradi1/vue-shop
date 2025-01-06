<script setup lang="ts">
import { useRoute } from "vue-router";
import { useProductStore } from "@/stores/fetchProducts";
import router from "@/router";
import { Modal } from "ant-design-vue";
import { ref } from "vue";

const priceDialogVisible = ref<boolean>(false);
const $route = useRoute();
const postStore = useProductStore();
const id = $route.query.productId;
const selectedProduct = postStore.products.find(
  (product) => product.id === +id!,
);

if (!selectedProduct) {
  router.push("/");
}

const openSuccessfullyBuyDialog = () => {
  let secondsToGo = 5;
  priceDialogVisible.value = false;
  const modal = Modal.success({
    title: `${selectedProduct?.title}`,
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
    <div
      :style="{ padding: '24px', background: '#fff', minHeight: '600px' }"
      class="flex justify-center"
    >
      <div
        class="!flex !flex-col !justify-center !items-center !w-1/3 mt-16 gap-4 sm:!w-full"
      >
        <img
          :src="selectedProduct?.image"
          alt="Image of selected product."
          class="w-[300px] h-[200px]"
        />
        <h2 class="font-bold">{{ selectedProduct?.title }}</h2>
        <h2>Category: {{ selectedProduct?.category }}</h2>
        <h2>{{ selectedProduct?.description }}</h2>
        <h2>Price: {{ selectedProduct?.price }}$</h2>
        <a-button
          type="primary"
          class="mb-2 md:mb-0 w-1/3"
          @click="openSuccessfullyBuyDialog()"
        >
          Buy
        </a-button>
      </div>
    </div>
  </a-layout-content>
</template>
