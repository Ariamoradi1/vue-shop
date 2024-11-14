<script setup lang="ts">
import Sider from "@/components/sider/Sider.vue";
import Footer from "@/components/footer/Footer.vue";
import Header from "@/components/header/Header.vue";
import HomeView from "@/views/HomeView.vue";
</script>

<template>
  <a-layout>
    <Sider />
    <a-layout>
      <Header />
      <router-view />
      <Footer />
    </a-layout>
  </a-layout>
</template>
