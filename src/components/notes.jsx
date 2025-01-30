import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import{deleteNote} from '../redux/notesSlice'
import { NavLink } from 'react-router';

const Notes = () => {

    const notes = useSelector((state)=> state.notes.value);
    const [searchTerm, setSearchTerm]= useState('');
    const dispatch = useDispatch();

    const filterData = notes.filter((note)=>
        note.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <>
        <input
           className='border-solid border-4 border-teal-400 w-96 h-14 rounded-xl mt-10 text-blue-950 font-bold p-7'
           type='search'
           placeholder='search'
           value={searchTerm}
           onChange={(e)=>setSearchTerm(e.target.value)}
        />
        
        <div className='w-full flex judtify-center justify-evenly mt-10 h-auto flex-wrap'>
          
          {
            filterData.length > 0 && filterData.map((note)=>{
                return(
                <div  
                key = {note._id}
                className="border-solid border-4 border-teal-400 w-96 h-52 mt-10 p-4 relative rounded-xl bg-[#2D2D2D]">
                
                  <h1 className='text-[#A7E8F2] font-bold w-full'>{note.title}</h1>
                  <p className='text-[#CFCFCF] line-clamp-4 overflow-hidden w-full'>{note.content}</p>
                  <div className='absolute bottom-4 right-4 flex justify-evenly space-x-2'>
                  <button
                  className='bg-red-500 text-white font-bold p-1 rounded-lg hover:bg-red-700 transition duration-300 ease-in-out'
                  onClick={()=>dispatch(deleteNote(note._id))}>
                  Delete
                  </button>
                  <NavLink 
                  to={`/?notesId=${note._id}`}
                  className='bg-blue-500 text-white font-bold p-1 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out'>
                  Edit
                  </NavLink>
                  <NavLink
                  to={`/notes/${note._id}`}
                  className='bg-green-500 text-white font-bold p-1 rounded-lg hover:bg-green-700 transition duration-300 ease-in-out'>
                  View
                  </NavLink>
                  </div>
                </div>
                )
            })
          }
        </div>

    </>
  )
}

export default Notes