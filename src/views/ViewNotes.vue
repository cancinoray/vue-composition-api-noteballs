<template>
  <div class="notes px-2">
    <!-- How to use slot -->
    <!-- Passing v-model to component -->
    <AddEditNote v-model="newNote" ref="addEditNoteRef" placeholder="Add a new note...">
      <template #buttons>
        <button
          class="button is-link has-background-black-bis"
          :disabled="!newNote"
          @click="addNote"
        >
          Add New Note
        </button>
      </template>
    </AddEditNote>

    <Note v-for="note in storeNotes.notes" key="note.id" :prop="note" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import Note from "@/components/Notes/Note.vue";
import { useStoreNotes } from "@/stores/storeNotes";
import AddEditNote from "@/components/Notes/AddEditNote.vue";
import { useWatchCharacters } from "@/use/useWatchCharacters";

// * store
const storeNotes = useStoreNotes();

const newNote = ref("");
const addEditNoteRef = ref(null);

const addNote = () => {
  // * using parameters to pass the value of newNote.value to the store action addNote
  console.log("newNote:", newNote.value);

  // * accessing the pinia store
  storeNotes.addNote(newNote.value);
  newNote.value = "";

  // * focusTextarea is a function of the child component
  addEditNoteRef.value.focusTextarea();

  //* watch character
  useWatchCharacters(newNote);
};
</script>
