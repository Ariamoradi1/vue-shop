<script lang="ts" setup>
import { ref } from "vue";

import { aMenuItems } from "@/components/header/header.contant";
import router from "@/router";

const selectedKeys = ref<string[]>(["4"]);

const handleNavigation = (route: string) => {
  router.push({ path: route });
};
</script>

<template>
  <a-layout-header :style="{ background: '#fff', padding: 0 }">
    <div class="logo" />
    <a-menu
      v-model:selectedKeys="selectedKeys"
      mode="horizontal"
      :style="{ lineHeight: '64px' }"
    >
      <a-menu-item
        v-for="item in aMenuItems"
        :key="item.key"
        @click="handleNavigation(item.route)"
        >{{ item.text }}</a-menu-item
      >
    </a-menu>
  </a-layout-header>
</template>

<style scoped></style>
