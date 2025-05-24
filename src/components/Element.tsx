import React from 'react'
import { poppins} from '@/ui/fonts'
const Element = (props: {task:string;del:(id:number)=>void;update: (id: number) => void;id:number}) => {

  return (
    <div className={`${poppins.className} flex justify-between items-center h-[190px] w-[80vw] bg-white rounded-lg p-[20px] bg-black bg-transparent backdrop-blur-[20px] shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] rounded-[10px] border border-white/20 mb-10 cursor-pointer`}>
      <h1 className='text-[60px]'>{props.task}</h1>
      <div className='flex flex-col gap-6'>
        <button className='h-[7vh] w-[10vw] bg-transparent backdrop-blur-[20px] shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] rounded-[10px] border border-white/20 text-white' onClick={()=>props.del(props.  id)}>Delete</button>
        <button className='h-[7vh] w-[10vw] bg-transparent backdrop-blur-[20px] shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] rounded-[10px] border border-white/20 text-white' onClick={()=>props.update(props.  id)}>Update</button>
      </div>
    </div>
  )
}

export default Element
