<template>
  <div class="card mb-4">
    <div class="card-content">
      <div class="content">
        {{ prop.content }}
        <div class="has-text-right has-text-grey-light">
          <small>{{ characterLength }}</small>
        </div>
      </div>
    </div>
    <footer class="card-footer">
      <router-link :to="`editNote/${ prop.id }`" class="card-footer-item" href="#"> Edit </router-link>
      <a @click.prevent="storeNotes.deleteNote(prop.id)" class="card-footer-item" href="#">
        Delete
      </a>
    </footer>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useStoreNotes } from "@/stores/storeNotes";

// * store
const storeNotes = useStoreNotes();

// * props
const props = defineProps({
  prop: {
    type: Object,
    required: true,
  },
});

const characterLength = computed(() => {
  let length = props.prop.content.length;
  let description = length > 1 ? "characters" : "character";
  return `${length} ${description}`;
});
</script>
