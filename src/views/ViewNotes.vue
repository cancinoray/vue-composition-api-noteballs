<template>
  <div class="notes px-2">
    <div class="card has-background-success-dark p-4 mb-5">
      <div class="field">
        <div class="control">
          <textarea class="textarea" placeholder="Add a new note" />
        </div>
      </div>

      <div class="field is-grouped is-grouped-right">
        <div class="control">
          <button class="button is-link has-background-success">Add New Note</button>
        </div>
      </div>
    </div>

    <div class="card mb-4" v-for="note in notes" key="note.id">
      <div class="card-content">
        <div class="content">
          {{ note.content }}
        </div>
      </div>
      <footer class="card-footer">
        <a href="#" class="card-footer-item">Edit</a>
        <a href="#" class="card-footer-item">Delete</a>
      </footer>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

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
</script>
