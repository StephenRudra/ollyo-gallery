import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Checkbox from '@mui/material/Checkbox';

function App() {
  const [count, setCount] = useState(0)
  const handleChange= () =>{

  }
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
  <div className='bg-purple-300 w-36 rounded h-40'>11</div> absolute left-80
  <div className='bg-purple-300 w-36 rounded h-40'>12</div>
  <div className='bg-purple-300 w-36 rounded h-40'>13</div>
  <div className='bg-purple-300 w-36 rounded h-40'>14</div>
  
</div>*/}
<section>
<div className="grid lg:grid-cols-5 md:grid-cols-3 gap-2 ml-10 relative">
 
<div className='bg-purple-300 w-96 rounded h-80 row-span-2 col-span-2 bg-[url()] no-repeat'><Checkbox className='' /><img src='images/image-1.webp'/></div>
  
  <div className='bg-purple-300 w-36 rounded h-40 -ml-8'><Checkbox /><img className='' src='images/image-2.webp'/></div>
  <div className='bg-purple-300 w-36 rounded h-40 -ml-8'><Checkbox /><img src='images/image-3.webp'/></div>
  <div className='bg-purple-300 w-36 rounded h-40 -ml-8'><Checkbox /><img src='images/image-4.webp'/></div>
  <div className='bg-purple-300 w-36 rounded h-40 -ml-8'><Checkbox /><img src='images/image-5.webp'/></div>
  <div className='bg-purple-300 w-36 rounded h-40 -ml-8'><Checkbox /><img src='images/image-6.webp'/></div>
  <div className='bg-purple-300 w-36 rounded h-40 -ml-8'><Checkbox /><img src='images/image-7.webp'/></div>

  <div className='bg-purple-300 w-36 rounded h-40'><Checkbox /><img src='images/image-8.webp'/></div>
  <div className='bg-purple-300 w-36 rounded h-40 -ml-12'><Checkbox /><img src='images/image-9.webp'/></div>
  <div className='bg-purple-300 w-36 rounded h-40 -ml-8'><Checkbox /><img src='images/image-10.jpeg'/></div>
  <div className='bg-purple-300 w-36 rounded h-40 -ml-8'><Checkbox /><img src='images/image-11.jpeg'/></div>
  <div className='bg-purple-300 w-36 rounded h-40 -ml-8'>Add more</div>
  
</div>

</section>
    </>
  )
}

export default App
