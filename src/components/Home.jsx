import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToNote, updateToNote } from "../redux/notesSlice";


const Home = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [searhParams, setSesrchParams] = useSearchParams();
  const notesId = searhParams.get("notesId");
  const Allnotes = useSelector((state)=> state.notes.value)

  const dispatch = useDispatch();

  useEffect(()=>{
    if(notesId){
      const note= Allnotes.find((note)=> note._id === notesId)
      setTitle(note.title)
      setContent(note.content)
    }
  },[notesId])


  function createNote() {
    const note = {
      title: title,
      content: content,
      _id: notesId || Date.now().toString(36),
      date: new Date().toISOString(),
    };

    if (notesId) {
      dispatch(updateToNote(note));
    } else {
      dispatch(addToNote(note));
    }

    setTitle("");
    setContent("");
    setSesrchParams({});
  }
  return (
    <div>
      <div>
        <input
          className="mt-10 border-solid border-4 border-teal-400 w-96 h-12 rounded-xl p-5"
          type="text"
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button
          onClick={createNote}
          className="m-6 border-solid border-2 p-2 border-teal-400 text-slate-50 bg-cyan-500 rounded-xl"
        >
          {notesId ? "Update" : "Create"}
        </button>
      </div>
      <div>
        <textarea
          className="rounded-xl border-solid border-4 border-teal-400 p-4"
          typeof="text"
          value={content}
          rows={20}
          cols={100}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Home;
