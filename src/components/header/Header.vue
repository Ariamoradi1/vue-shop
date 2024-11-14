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

<script lang="ts" setup>
import { ref } from "vue";

const selectedKeys = ref<string[]>(["4"]);
</script>

<style scoped>
#components-layout-demo-responsive .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}

[data-theme="dark"] .site-layout-sub-header-background {
  background: #141414;
}
</style>
