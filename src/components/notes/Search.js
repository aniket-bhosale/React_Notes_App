import React from "react";
import {BsSearch} from 'react-icons/bs'
import { useDispatch } from "react-redux";
import { searchNotes } from "../../redux/slices/NotesSlice";

function Search() {
    const dispatch = useDispatch();
    function handletext(e){
        console.log(e);
        dispatch(searchNotes)
    }
  return (
    <div className="search-box">
        
        <BsSearch className="search-icons" />
        

        
        <input type="text" onChange={(e) => {handletext(e.target.value)}} placeholder = {'Search To Type...'} />
    </div>
  );
}

export default Search;
