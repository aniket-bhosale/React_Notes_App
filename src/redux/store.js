import { configureStore } from "@reduxjs/toolkit";
import NotesSlice from "./slices/NotesSlice";

export default configureStore({
    reducer: {
        notesReducer:NotesSlice
    }
})