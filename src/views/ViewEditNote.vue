<template>
  <div class="edit-note">
    <AddEditNote ref="addEditNoteRef">
      <template #buttons>
        <button class="button is-link has-background-black-bis">Add New Note</button>
      </template>
    </AddEditNote>
  </div>
</template>

<script setup>
import AddEditNote from "@/components/Notes/AddEditNote.vue";
</script>
