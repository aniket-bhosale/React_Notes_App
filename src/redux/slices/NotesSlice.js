import {createSlice} from '@reduxjs/toolkit'

const NotesSlice = createSlice({
    name: 'notesSlice',
    initialState: {
        notes:[]
    }, 

    reducers: {
        createNotes: (state,action) =>{
            state.notes.push(action.payload)
        },

        deleteNotes: (state,action) =>{
            state.notes = state.notes.filter(note => note.id !== action.payload)
        },

        searchNotes:(state,action) =>{
            state.notes = state.notes.filter(note => note.text.includes(action.payload))
        }
    }
})

export default NotesSlice.reducer
export const {createNotes,deleteNotes,searchNotes} = NotesSlice.actions;