import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createNotes } from "../../redux/slices/NotesSlice";
import { nanoid } from "@reduxjs/toolkit";


function CreateNotes() {

    const [title,setTitle] = useState(''); 
     let[desc,setDesc] = useState('');
    const dispatch = useDispatch();

    function handleSubmit(e){
        e.preventDefault();
        
        dispatch(createNotes({
            title,
            desc,
            id: nanoid(10),
        })
        )


    }


  return (
    <div className="note new-note">

        <div>
        <form onSubmit= {handleSubmit}>

            <input placeholder="Note Header" type="text" onChange={(e) => setTitle(e.target.value)}/>

            <textarea placeholder="Type here..." maxLength={250} cols="30" rows="10"  onChange={(e) => setDesc(e.target.value)}></textarea>

            {/* <input type="submit" onClick={handleSubmit}/> */}
            </form>
        </div>

            {/* <input type="text" onChange={(e) => setDesc(e.target.value)}/> */}

            <div className="note-footer">

            <small>Remaining: {250 - desc.length}</small>

            <button className="add-btn" onClick={handleSubmit}>Add</button>

            </div>

            



        


    </div>
  );
}

export default CreateNotes;
