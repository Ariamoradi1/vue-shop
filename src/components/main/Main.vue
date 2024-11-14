<script setup lang="ts">
import Sider from "@/components/sider/Sider.vue";
import Footer from "@/components/footer/Footer.vue";
import Header from "@/components/header/Header.vue";
</script>

<template>
  <a-layout class="min-h-[100vh]">
    <Sider />
    <a-layout>
      <Header />
      <router-view />
      <Footer />
    </a-layout>
  </a-layout>
</template>
