import { createSlice } from '@reduxjs/toolkit'

import toast from 'react-hot-toast';

export const notesSlice = createSlice({
  name: 'notes',
  initialState: {
    value: localStorage.getItem("notes")
    ? JSON.parse(localStorage.getItem("notes"))
    :[]
  },
  reducers: {
    addToNote: (state, action) => {
      const note= action.payload;
      state.value.push(note);
      localStorage.setItem("notes",JSON.stringify(state.value))

      toast.success("created successfully")
    },

    deleteNote: (state, action) => {
     const noteId= action.payload;
     const index= state.value.findIndex((item)=>
      item._id== noteId
    )
    if(index>=0){
      state.value.splice(index,1)
      localStorage.setItem("notes",JSON.stringify(state.value))
      toast.success("Deleted successfully")
    }
    

    },
    updateToNote: (state, action) => {
      const note =action.payload;
      const index= state.value.findIndex((item)=>item._id== note._id)
      if(index>=0){
        state.value[index]= note;
        localStorage.setItem("notes",JSON.stringify(state.value));

        toast.success("updated successfuly");
      }
    },
    resetALLNotes:(state, action)=>{
      state.value= [];
      localStorage.removeItem("notes");
    }
  }
})

// Action creators are generated for each case reducer function
export const { addToNote, resetALLNotes, deleteNote, updateToNote} = notesSlice.actions

export default notesSlice.reducer