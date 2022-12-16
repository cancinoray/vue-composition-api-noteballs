import { defineStore, acceptHMRUpdate } from 'pinia'

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
      let currentDate = new Date().getTime();
      let id = currentDate.toString();

      // * creating new object based on the text field
      let note = {
        id,
        content: newNoteContent
      };
      // * this keyword will use to access the notes in state.
      this.notes.unshift(note)
    },
    deleteNote(idToDelete){
      console.log('this should be working!', idToDelete)
      this.notes = this.notes.filter((note) => {
        return note.id !== idToDelete;
      });
    }
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useStoreNotes, import.meta.hot));
}
