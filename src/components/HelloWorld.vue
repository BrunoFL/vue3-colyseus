<script setup lang="ts">
import { computed } from '@vue/reactivity';
import { ref } from 'vue';

const count = ref(0);
function increment() {
  count.value++;
}

const double = computed(() => {
  return count.value * 2;
});
const triple = computed(() => {
  return count.value * 3;
});
const misc = computed(() => {
  return double.value + triple.value;
});
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h2>{{ count }}</h2>
    <h2>Double {{ double }}, triple {{ triple }}, misc {{ misc }}</h2>
    <button @click="increment">+1</button>
    <h3>
      You’ve successfully created a project with
      <a target="_blank" href="https://vitejs.dev/">Vite</a> +
      <a target="_blank" href="https://vuejs.org/">Vue 3</a>.
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {

  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
