import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Checkbox from '@mui/material/Checkbox';
import {Draggable} from 'react-beautiful-dnd';
import { DragDropContext } from 'react-beautiful-dnd';
import { Droppable } from 'react-beautiful-dnd';
//import Dragged from './Drag';

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
     <div className="navbar bg-base-100">
  <a className="btn btn-ghost normal-case text-xl">Gallery</a>
</div>
<div className="divider"></div> 

{/*<div class="grid grid-cols-5 gap-1">
  <div className='bg-purple-300 row-span-2 col-span-2 w-64 rounded h-80 ml-5 gap-y-px'><img src='images/image-1.webp'/></div>
  <div className='bg-purple-300 w-36 rounded h-40'><img src='images/image-2.webp'/></div>
  <div className='bg-purple-300 w-36 rounded h-40'><img src='images/image-3.webp'/></div>
  <div className='bg-purple-300 w-36 rounded h-40'><img src='images/image-4.webp'/></div>
  <div className='bg-purple-300 w-36 rounded h-40'><img src='images/image-5.webp'/></div>
  <div className='bg-purple-300 w-36 rounded h-40'><img src='images/image-6.webp'/></div>
  <div className='bg-purple-300 w-36 rounded h-40'><img src='images/image-7.webp'/></div>
  <div className='bg-purple-300 w-36 rounded h-40 ml-5'><img src='images/image-8.webp'/></div>
  <div className='bg-purple-300 w-36 rounded h-40'><img src='images/image-9.webp'/></div>
  <div className='bg-purple-300 w-36 rounded h-40'><img src='images/image-10.jpeg'/></div>
  <div className='bg-purple-300 w-36 rounded h-40'><img src='images/image-11.jpeg'/></div>
  <div className='bg-purple-300 w-36 rounded h-40'>Add more</div>
  </div>*/}

  {/*<div class="grid grid-cols-5 gap-1 ml-5">
  <div className='bg-purple-300 w-36 rounded h-40 row-span-2 col-span-2'>01</div>
  <div className='bg-purple-300 w-36 rounded h-40'>02</div>
  <div className='bg-purple-300 w-36 rounded h-40'>03</div>
  <div className='bg-purple-300 w-36 rounded h-40'>04</div>
  
  <div className='bg-purple-300 w-36 rounded h-40'>06</div>
  <div className='bg-purple-300 w-36 rounded h-40'>07</div>
  <div className='bg-purple-300 w-36 rounded h-40'>08</div>
  
  <div className='bg-purple-300 w-36 rounded h-40'>10</div> 
  <div className='bg-purple-300 w-36 rounded h-40'>11</div> 
  <div className='bg-purple-300 w-36 rounded h-40'>12</div> 
  <div className='bg-purple-300 w-36 rounded h-40'>13</div>
  <div className='bg-purple-300 w-36 rounded h-40'>14</div> <Dragged></Dragged>
  
</div>*/}
<section>
  <DragDropContext>
    <Droppable droppableId='images'>
      {(provided) =>(
        <Draggable>
           {(provided) =>(
<div {...provided.droppableProps} ref={provided.innerRef}  {...provided.draggableProps} {...provided.dragHandleProps} className="images grid lg:grid-cols-5 md:grid-cols-3 gap-2 ml-10 relative">
 
 
    <>
<div className='w-96 rounded h-80 row-span-2 col-span-2'><input type="checkbox" class="checkbox absolute left-80" id="check1" /><img src='images/image-1.webp'/></div>
  
  <div className='w-36 rounded h-40 -ml-8 img'><Checkbox className='check' /><img src='images/image-2.webp'/></div>
  <div className='w-36 rounded h-40 -ml-8'><Checkbox className='check' /><img src='images/image-3.webp'/></div>
  <div className='w-36 rounded h-40 -ml-8'><Checkbox className='check' /><img className='draggable' src='images/image-4.webp'/></div>
  <div className='w-36 rounded h-40 -ml-8'><Checkbox className='check' /><img src='images/image-5.webp'/></div>
  <div className=' w-36 rounded h-40 -ml-8'><Checkbox className='check' /><img src='images/image-6.webp'/></div>
  <div className='w-36 rounded h-40 -ml-8'><Checkbox className='check' /><img src='images/image-7.webp'/></div>

  <div className='w-36 rounded h-40'><Checkbox className='check' /><img src='images/image-8.webp'/></div>
  <div className='w-36 rounded h-40 -ml-12'><Checkbox className='check' /><img src='images/image-9.webp'/></div>
  <div className='w-36 rounded h-40 -ml-8'><Checkbox className='check' /><img src='images/image-10.jpeg'/></div>
  <div className='w-36 rounded h-40 -ml-8'><Checkbox className='check' /><img src='images/image-11.jpeg'/></div>
  <div className='w-36 rounded h-40 -ml-8'>Add more</div>
  </>
 
  
</div>
)}
</Draggable>
)}
 
</Droppable>
</DragDropContext>


</section>
    </>
  )
}

export default App
