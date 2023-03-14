// this component is use to where to display content

import React from "react";
import {BsTrashFill} from "react-icons/bs"

import { useDispatch, useSelector } from "react-redux";
import { deleteNotes } from "../../redux/slices/NotesSlice";
import CreateNotes from "./CreateNotes";

function ListNotes() {
    const notes = useSelector((state) => state.notesReducer.notes)

    const date = new Date().toLocaleDateString();

    

    const dispatch = useDispatch();
  return (
    <div className=" notes-container">
    {
        <CreateNotes />
    }
    {notes.map(note=>{
                return <div className="note">
                  <div>
                    <h2>{note.title}</h2>
                    <p>{note.desc}</p>
                  </div>
                    <div className="note-footer">

                    {/* <p>{note.id}</p> */}
                    <small>{date}</small>
                    <button className="delete-btn" onClick={()=> dispatch(deleteNotes(note.id))}><BsTrashFill/></button>

                    </div>

                </div>
            })
        }
    </div>
  );
}

export default ListNotes;

