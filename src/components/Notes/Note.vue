<template>
  <div class="card mb-4">
    <div class="card-content">
      <div class="content">
        {{ prop.content }}
      </div>
    </div>
    <footer class="card-footer">
      <a href="#" class="card-footer-item">Edit</a>
      <a href="#" class="card-footer-item">Delete</a>
    </footer>
  </div>
</template>

<script setup>
const props = defineProps({
  prop: {
    type: Object,
    required: true,
  },
});
</script>
