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
    <a-menu v-model:selectedKeys="selectedKeys" mode="inline">
      <a-menu-item key="1">
        <div class="!flex !items-center">
          <user-outlined />
          <a href="https://github.com/Ariamoradi1" target="_blank">Github</a>
        </div>
      </a-menu-item>
      <a-menu-item key="2">
        <div class="!flex !items-center">
          <video-camera-outlined />
          <a
            href="https://stackoverflow.com/users/21594929/aria?tab=profile"
            target="_blank"
            >Stackoverflow</a
          >
        </div>
      </a-menu-item>
      <a-menu-item key="3">
        <div class="!flex !items-center">
          <upload-outlined />
          <a href="https://discordapp.com/users/aria_man." target="_blank"
            >Discord</a
          >
        </div>
      </a-menu-item>
      <a-menu-item key="4">
        <div class="!flex !items-center">
          <user-outlined />
          <a
            href="https://ir.linkedin.com/in/aria-moradi-a4402a244"
            target="_blank"
            >linkedin</a
          >
        </div>
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>

<style scoped>
a {
  @apply ms-2;
}
</style>
