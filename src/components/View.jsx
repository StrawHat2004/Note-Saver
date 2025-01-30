import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useParams, useSearchParams } from 'react-router-dom';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


const View = () => {
    const {id} = useParams(); 
    const Allnotes= useSelector((state)=> state.notes.value)
    const note= Allnotes.find((note)=> note._id===id)
    
    return (
        <div className="w-full mt-10">
            <div className="border-solid border-2 h-auto w-auto p-5 border-gray-400 rounded-xl m-10">
                <h1 className='text-2xl font-bold text-slate-200'>Title: {note.title}</h1>
            </div>
            <div className="border-solid border-2 h-auto w-auto p-5 border-gray-400 rounded-xl">
                <p className='text-slate-200 font-sans'>{note.content}</p>
            </div>
            <div className="flex justify-end mt-4">
                <NavLink 
                    to='/notes' 
                    className='text-white font-bold p-2 rounded-xl hover:text-cyan-500 text-xl'
                >
                    <FontAwesomeIcon icon={faArrowRight}/>
                </NavLink>
            </div>
        </div>
    );
};

export default View;