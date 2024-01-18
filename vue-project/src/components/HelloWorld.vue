<script setup>
  import { ref } from "vue"

  const showComponent = ref(false) // hiding it by default
</script>


<template>
  <div class="buttontest">
  <v-btn class="button" @click="showComponent = !showComponent">Click Me!</v-btn>
  <div class="test" v-if="showComponent">
    <h3>Hidden Text</h3>
  </div>
  </div>
  <!-- <v-checkbox label="checkbox"></v-checkbox> -->
</template>


<style scoped>
h3 {
  font-size: 1.2rem;
}
</style>
