<script setup lang="ts">
import { type Product, useProductStore } from "@/stores/fetchData";
import { onMounted, ref } from "vue";
import { Modal } from "ant-design-vue";
import { options } from "@/stores/options.contant";

const postStore = useProductStore();

const inputSelectValue = ref("");

onMounted(() => {
  if (!postStore.loaded) {
    postStore.fetchProducts("8");
  }
});

const reloadProduct = () => {
  postStore.fetchProducts(inputSelectValue.value);
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

const onValueChange = (value: string) => {
  inputSelectValue.value = value;
  postStore.fetchProducts(value);
};
</script>

<template>
  <a-layout-content :style="{ margin: '24px 16px 0' }">
    <a-select
      placeholder="Select option!"
      style="width: 200px"
      @change="onValueChange"
    >
      <a-select-option
        v-for="option in options"
        :key="option.option"
        :value="option.option"
      >
        {{ option.option }}
      </a-select-option>
    </a-select>
    <div
      :style="{ padding: '24px', background: '#fff', minHeight: '200px' }"
      class="mt-9"
    >
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
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
      >
        <a-card
          hoverable
          class="min-w-[300px]"
          v-for="product in postStore.products"
          :key="product.id"
        >
          <template #cover>
            <img
              alt="example"
              :src="product.image"
              class="h-[200px] w-full object-cover"
            />
          </template>
          <template #actions>
            <a-button
              type="primary"
              class="mb-2 md:mb-0"
              @click="openPriceDialog(product)"
            >
              Price {{ product.price }}$
            </a-button>
            <a-button>About Product</a-button>
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
      ok-text="Buy"
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
