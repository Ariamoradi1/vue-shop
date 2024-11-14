<script setup lang="ts">
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons-vue";
import { ref } from "vue";

const onCollapse = (collapsed: boolean, type: string) => {
  console.log(collapsed, type);
};

const onBreakpoint = (broken: boolean) => {
  console.log(broken);
};

const selectedKeys = ref<string[]>(["4"]);
</script>
<template>
  <a-layout-sider
    breakpoint="lg"
    collapsed-width="0"
    @collapse="onCollapse"
    @breakpoint="onBreakpoint"
    theme="light"
  >
    <div class="logo" />
    <a-menu v-model:selectedKeys="selectedKeys" mode="inline">
      <a-menu-item key="1">
        <user-outlined />
        <span class="nav-text">nav 1</span>
      </a-menu-item>
      <a-menu-item key="2">
        <video-camera-outlined />
        <span class="nav-text">nav 2</span>
      </a-menu-item>
      <a-menu-item key="3">
        <upload-outlined />
        <span class="nav-text">nav 3</span>
      </a-menu-item>
      <a-menu-item key="4">
        <user-outlined />
        <span class="nav-text">nav 4</span>
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>
