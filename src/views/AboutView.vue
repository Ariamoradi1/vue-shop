<script setup lang="ts">
import { onMounted, ref } from "vue";

const information = ref<Information[]>([]);
const image = ref<ImageResponse | null>(null);

const fetchData = async (url: string) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch data from ${url}`);
  }
  return response.json();
};

onMounted(async () => {
  try {
    const [infoData, imageData] = await Promise.all([
      fetchData("http://localhost:8080/api/v1/information"),
      fetchData("http://localhost:8080/api/v1/image"),
    ]);

    information.value = infoData;
    image.value = imageData;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
});
</script>
<template>
  <a-layout-content :style="{ margin: '24px 16px 0' }">
    <div
      :style="{ padding: '24px', background: '#fff', minHeight: '600px' }"
      class="flex flex-col items-center justify-center"
    >
      <img :src="image?.image" alt="" class="rounded-lg w-[400px] h-[400px]" />
      <ul>
        <li>name: {{ information[0]?.name }}</li>
        <li>family: {{ information[0]?.family }}</li>
        <li>email: {{ information[0]?.email }}</li>
        <li>age: {{ information[0]?.age }}</li>
      </ul>
    </div>
  </a-layout-content>
</template>
