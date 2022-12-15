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

    <Note v-for="note in notes" key="note.id" :prop="note" @deleteClicked="deleteNote" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import Note from "@/components/Notes/Note.vue";
import { useStoreNotes } from "@/stores/storeNotes";

// * store
const storeNotes = useStoreNotes();

const newNote = ref("");
const newNoteRef = ref("");

// * accesing the state notes in the store
const notes = storeNotes.notes;

// * accessing the action addNote in the store
const storeAddNote = storeNotes.addNote;

const addNote = () => {
  //using parameters to pass the value of newNote.value to the store action addNote
  storeAddNote(newNote.value);
  // let currentDate = new Date().getTime();
  // let id = currentDate.toString();

  // // * creating new object based on the text field
  // let note = {
  //   id,
  //   content: newNote.value,
  // };

  // notes.value.unshift(note);
  newNote.value = "";
  newNoteRef.value.focus();
};

//delete note
const deleteNote = (idToDelete) => {
  notes.value = notes.value.filter((note) => {
    return note.id !== idToDelete;
  });
};
</script>
