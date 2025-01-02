<script setup lang="ts">
import { onMounted, ref } from "vue";
interface Information {
  name: string;
  family: string;
  email: string;
  age: number;
  id: number;
}
const information = ref<Information[]>([]);
onMounted(() => {
  fetch("http://localhost:8080/api/v1/information")
    .then((res) => res.json())
    .then((data) => {
      information.value = data;
    });
});
</script>
<template>
  <a-layout-content :style="{ margin: '24px 16px 0' }">
    <div :style="{ padding: '24px', background: '#fff', minHeight: '600px' }">
      <ul>
        <li>name: {{ information[0]?.name }}</li>
        <li>family: {{ information[0]?.family }}</li>
        <li>email: {{ information[0]?.email }}</li>
        <li>age: {{ information[0]?.age }}</li>
      </ul>
    </div>
  </a-layout-content>
</template>
