import { defineStore, acceptHMRUpdate } from 'pinia'
import { collection, getDocs } from "firebase/firestore";

import { db } from '@/js/firebase'

export const useStoreNotes = defineStore('storeNotes', {
  // * state just storage of data
  state: () => {
    return { 
      notes: [
        // {
        //   id: "id1",
        //   content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque architecto quae modi,tenetur excepturi illo tempore dolorum sed atque a eius numquam nisi quidem quo fugit exercitationem sunt quasi molestias!`,
        // },
        // {
        //   id: "id2",
        //   content: `This is a short note! Wiitwwewww!`,
        // }
      ]
    }
  },
  
  // * actions are methods that access the state and modify it.
  actions: {
    async getNotes () {
      const querySnapshot = await getDocs(collection(db, "notes"));
      querySnapshot.forEach((doc) => {
        let note = {
          id: doc.id,
          content: doc.data().content
        }
        this.notes.push(note)
      });
    },
    addNote(newNoteContent) {
      console.log('storeAddNote:', newNoteContent)
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
      // * accessing the state need to use 'this' keyword
      this.notes = this.notes.filter((note) => note.id !== idToDelete);
    },
    updateNote(id, content) {
      let index = this.notes.findIndex(note => note.id === id)
      this.notes[index].content = content
    }
  },

  getters: {
    getNoteContent: (state) => {
      return (id) => {
        return state.notes.filter(note => note.id === id)[0].content
      }
    },
    totalNotesCount: (state) => {
      return state.notes.length
    },
    totalCharactersCount: (state) => {
      let count = 0;
      state.notes.forEach(note => {
        count += note.content.length
      })

      return count
    }
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useStoreNotes, import.meta.hot));
}
