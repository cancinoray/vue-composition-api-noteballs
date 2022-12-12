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

const newNote = ref("");
const newNoteRef = ref("");

const notes = ref([
  {
    id: "id1",
    content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque architecto quae modi,tenetur excepturi illo tempore dolorum sed atque a eius numquam nisi quidem quo fugit exercitationem sunt quasi molestias!`,
  },
  {
    id: "id2",
    content: `This is a shorte note! Wiitwwewww!`,
  },
]);

const addNote = () => {
  let currentDate = new Date().getTime();
  let id = currentDate.toString();

  let note = {
    id,
    content: newNote.value,
  };

  notes.value.unshift(note);
  newNote.value = "";
  newNoteRef.value.focus();
};

//delete note
const deleteNote = (idToDelete) => {
  notes.value = notes.value.filter(note => {
    return note.id !== idToDelete;
  })
};
</script>
