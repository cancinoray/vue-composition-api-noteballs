<template>
  <div class="notes px-2">
    <div class="card has-background-dark p-4 mb-5">
      <div class="field">
        <div class="control">
          <textarea
            class="textarea"
            placeholder="Add a new note"
            v-model="newNote"
            ref="newNoteRef"
          />
        </div>
      </div>

      <div class="field is-grouped is-grouped-right">
        <div class="control">
          <button
            class="button is-link has-background-black-bis"
            :disabled="!newNote"
            @click="addNote"
          >
            Add New Note
          </button>
        </div>
      </div>
    </div>

    <Note v-for="note in notes" key="note.id" :prop="note" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import Note from "@/components/Notes/Note.vue";
import { useStoreNotes } from "@/stores/storeNotes";

// * store
const storeNotes = useStoreNotes();

// * accessing the action addNote in the store
const storeAddNote = storeNotes.addNote;
// * accesing the state notes in the store
const notes = storeNotes.notes;

const newNote = ref("");
const newNoteRef = ref("");

const addNote = () => {
  //using parameters to pass the value of newNote.value to the store action addNote
  storeAddNote(newNote.value);
  newNote.value = "";
  newNoteRef.value.focus();
};
</script>
