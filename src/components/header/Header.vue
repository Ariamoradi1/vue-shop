<template>
  <a-menu v-model:selectedKeys="current" mode="horizontal" :items="items" />
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { items } from "@/components/header/header.constant";
const current = ref<string[]>(["mail"]);
</script>
