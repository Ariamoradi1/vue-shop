<script setup lang="ts">
import { useProductStore } from "@/stores/fetchData";
import { onMounted } from "vue";

const postStore = useProductStore();

onMounted(() => {
  if (!postStore.loaded) {
    postStore.fetchProducts();
  }
});

const reloadProduct = () => {
  postStore.fetchProducts();
};
</script>

<template>
  <a-layout-content :style="{ margin: '24px 16px 0' }">
    <div :style="{ padding: '24px', background: '#fff', minHeight: '600px' }">
      <div v-if="postStore.isLoading">
        <a-spin />
      </div>
      <div v-else-if="postStore.error">
        <h2>Please try again...</h2>
        <a-button type="primary" @click="reloadProduct">Try again</a-button>
      </div>
      <div class="grid grid-cols-4 gap-4">
        <a-card
          hoverable
          style="min-width: 300px; min-height: 200px"
          v-for="product in postStore.products"
          :key="product.id"
        >
          <template #cover>
            <img alt="example" :src="product.image" class="w-[300] h-[200px]" />
          </template>
          <template #actions>
            <a-button type="primary" shape="round" size="large">
              Download
            </a-button>
          </template>
          <a-card-meta
            :title="product.title"
            :description="product.description"
          >
            <template #avatar>
              <a-avatar :src="product.image" />
            </template>
          </a-card-meta>
        </a-card>
      </div>
    </div>
  </a-layout-content>
</template>
