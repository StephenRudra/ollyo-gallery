import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Checkbox from '@mui/material/Checkbox';
import {Draggable} from 'react-beautiful-dnd';
import { DragDropContext } from 'react-beautiful-dnd';
import { Droppable } from 'react-beautiful-dnd';
//import Dragged from './Drag';
import img1 from '../images/image-1.webp'
import img2 from '../images/image-2.webp'
import img3 from '../images/image-3.webp'
import img4 from '../images/image-4.webp'
import img5 from '../images/image-5.webp'
import img6 from '../images/image-6.webp'
import img7 from '../images/image-7.webp'
import img8 from '../images/image-8.webp'
import img9 from '../images/image-9.webp'
import img10 from '../images/image-10.jpeg'
import img11 from '../images/image-11.jpeg'






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
  <div className='bg-purple-300 w-36 rounded h-40'>08</div> <div className='w-96 h-80 row-span-2 col-span-2 rounded border-solid border-2 border-slate-300'><input type="checkbox" class="check checkbox absolute left-80 ml-4 top-5" id="check1" /><img className='h-80 w-96'/></div>
  
  <div className='bg-purple-300 w-36 rounded h-40'>10</div> 
  <div className='bg-purple-300 w-36 rounded h-40'>11</div> 
  <div className='bg-purple-300 w-36 rounded h-40'>12</div> <Checkbox className='absolute left-20' />  src={img1}
  <div className='bg-purple-300 w-36 rounded h-40'>13</div>
  <div className='bg-purple-300 w-36 rounded h-40'>14</div> <Dragged></Dragged> rounded    
  w-96 h-80 row-span-2 col-span-2 rounded border-solid border-2 border-slate-300
</div>*/}
<section>
  
    
      
       
<div className="images grid lg:grid-cols-5 md:grid-cols-3 gap-2 ml-10 relative bg-red-200">
 
 
    <>
  <div className='w-96 h-80 row-span-2 col-span-2 border-solid border-2 border-slate-300 rounded'><input type="checkbox" class="check checkbox absolute left-80 ml-4 top-5" id="check1" /><img className='w-96 h-80 rounded' src={img1}></img></div>  
  <div className='w-40 rounded h-11/12 -ml-8 relative border-solid border-2 border-slate-300 bg-violet-200'><input type="checkbox" class="check checkbox absolute left-28 top-3" id="check2" /><img className='rounded h-11/12 w-40' src={img2}/></div>
  <div className='w-40 rounded h-40 -ml-8 bg-violet-200 relative border-solid border-2 border-slate-300'><input type="checkbox" class="check checkbox absolute left-28 top-3" id="check2" /><img className='h-max rounded' src={img3}/></div>
  <div className='w-40 rounded h-40 -ml-8 relative bg-violet-200 border-solid border-2 border-slate-300'><input type="checkbox" class="check checkbox absolute left-28 top-3" id="check2" /><img  className='h-11/12 rounded' src={img4}/></div>
  <div className='w-40 rounded h-40 -ml-8 relative bg-violet-200 border-solid border-2 border-slate-300'><input type="checkbox" class="check checkbox absolute left-28 top-3" id="check2" /><img className='h-11/12 rounded' src={img5}/></div>
  <div className=' w-40 rounded h-40 -ml-8 bg-violet-200 relative border-solid border-2 border-slate-300'><input type="checkbox" class="check checkbox absolute left-28 top-3" id="check2" /><img className='h-max rounded' src={img6}/></div>
  <div className='w-40 rounded h-40 -ml-8 relative bg-violet-200 border-solid border-2 border-slate-300'><input type="checkbox" class="check checkbox absolute left-28 top-3" id="check2" /><img className='h-max rounded' src={img7}/></div>

  <div className='w-40 rounded h-40 relative bg-violet-200 border-solid border-2 border-slate-300'><input type="checkbox" class="check checkbox absolute left-28 top-3" id="check2" /><img className='h-max rounded' src={img8}/></div>
  <div className='w-40 rounded h-40 -ml-12 relative bg-violet-200 border-solid border-2 border-slate-300 -ml-16'><input type="checkbox" class="check checkbox absolute left-28 top-3" id="check2" /><img className='h-40 rounded' src={img9}/></div>
  <div className='w-40 rounded h-40 -ml-8 relative bg-violet-200 border-solid border-2 border-slate-300'><input type="checkbox" class="check checkbox absolute left-28 top-3" id="check2" /><img className='h-11/12 rounded' src={img10}/></div>
  <div className='w-40 rounded h-40 -ml-8 relative bg-violet-200 border-solid border-2 border-slate-300'><input type="checkbox" class="check checkbox absolute left-28 top-3" id="check2" /><img className='h-11/12 rounded' src={img11}/></div>
  <div className='w-40 rounded h-40 -ml-8 bg-violet-200'>Add more</div>
  </>
 
  
</div>


 




</section>
    </>
  )
}

export default App;
