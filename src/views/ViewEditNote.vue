<template>
  <div class="edit-note">
    <AddEditNote
      bgColor="link"
      placeholder="Editing note..."
      ref="addEditNoteRef"
      v-model="noteContent"
      label="Edit Note"
    >
      <template #buttons>
        <button
          @click="$router.back()"
          class="button is-link has-background-warning has-text-black mr-2"
        >
          Cancel
        </button>

        <button
          :disabled="!noteContent"
          class="button is-link has-background-black-bis"
          @click="handleSavedClicked"
        >
          Save Note
        </button>
      </template>
    </AddEditNote>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import AddEditNote from "@/components/Notes/AddEditNote.vue";
import { useStoreNotes } from "@/stores/storeNotes";

const storeNotes = useStoreNotes();

const route = useRoute();
const router = useRouter();

const noteContent = ref("");

console.log(route.params.id);

noteContent.value = storeNotes.getNoteContent(route.params.id);

//* saved click
const handleSavedClicked = () => {
  storeNotes.updateNote(route.params.id, noteContent.value);
  router.push("/");
};
</script>
