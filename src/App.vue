<script lang="ts">
import Home from "@/components/Home.vue";

export default {
  components: {Home},
  name: 'App',
  data(){
    return {
      isHome: true
    }
  }
}
</script>

<template>
  <Home v-if="isHome"></Home>
</template>

