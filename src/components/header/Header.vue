<script lang="ts" setup>
import { ref } from "vue";

const selectedKeys = ref<string[]>(["4"]);
</script>

<template>
  <a-layout-header :style="{ background: '#fff', padding: 0 }">
    <div class="logo" />
    <a-menu
      v-model:selectedKeys="selectedKeys"
      mode="horizontal"
      :style="{ lineHeight: '64px' }"
    >
      <a-menu-item key="1">Home</a-menu-item>
      <a-menu-item key="2">Product</a-menu-item>
      <a-menu-item key="3">About</a-menu-item>
    </a-menu>
  </a-layout-header>
</template>

<style scoped></style>
