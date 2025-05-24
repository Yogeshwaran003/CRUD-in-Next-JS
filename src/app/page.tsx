"use client";

import Element from "@/components/Element";
import { useState } from "react";

export default function Home() {
  const [job, setJob] = useState<string[]>([]);
  const [statement, setStatement] = useState("");
  const [editIndex, setEditIndex] = useState<number | null>(null);


  function addingTask() {
    if (editIndex !== null) {
      const updatedJobs = [...job];
      updatedJobs[editIndex] = statement;
      setJob(updatedJobs);
      setEditIndex(null); 
    } else if(statement.trim() !== "") {
      setJob([...job, statement]);
    }
    setStatement("");
  }

  function deleteTask(index: number) {
    const updatedJobs = job.filter((_, i) => i !== index);
    setJob(updatedJobs);
  }

  function startUpdate(index: number) {
    setStatement(job[index]);
    setEditIndex(index);
  }



  return (
    <div className="flex flex-col justify-center items-center w-[100vw] gap-20">
      <div className="flex flex-col items-center">
        <h1 className="text-[100px]">CRUD</h1>
        <div className=" flex gap-10">
          <input type="text" onChange={(e)=>setStatement(e.target.value)} placeholder="Enter the Task" className="w-[40vw] h-[7vh] px-10 rounded-lg text-black" />
          <button onClick={addingTask} className="h-[7vh] w-[10vw] bg-transparent backdrop-blur-[20px] shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] rounded-[10px] border border-white/20 text-white">ADD</button>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        {job.map((task,i)=><Element key={i} task={task} update={startUpdate} del={deleteTask} id={i}/>)}
      </div>
    </div>
  );
}