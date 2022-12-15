import { defineStore } from 'pinia'

export const useStoreNotes = defineStore('storeNotes', {
  // * state just storage of data
  state: () => {
    return { 
      notes: [
        {
          id: "id1",
          content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque architecto quae modi,tenetur excepturi illo tempore dolorum sed atque a eius numquam nisi quidem quo fugit exercitationem sunt quasi molestias!`,
        },
        {
          id: "id2",
          content: `This is a short note! Wiitwwewww!`,
        }
      ]
    }
  },
  
  // * actions are methods that access the state and modify it.
  actions: {
    addNote(newNoteContent) {
      console.log('addNote', newNoteContent)
    }
  },
})
