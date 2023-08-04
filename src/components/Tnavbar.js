import React , {Component} from 'react' ;

export class Tnavbar extends Component{
  render() {
    return (
      
      <div className="bg-cyan-950 grid grid-cols-2 p-4 "> 
        <div className=" flex gap-3 content-center ">
        <a href="/" className='text-white font-mono font-bold flex flex-wrap  gap-3 items-center' >
          <img className='bg-black p-1 rounded-3xl w-10 flex-wrap' src='./tailwindlogo.png' alt='Portfoilo'/>
           Portfolio</a>
        </div>
        <div>
        <nav className='text-white font-mono font-bold flex flex-wrap justify-end'>
          <ul className='flex flex-wrap gap-6 content-center '>
            <div className='hover:bg-cyan-500 hover:text-black hover:rounded-sm  p-2 '><li><a href="/">Home </a></li></div>
            <div className='hover:bg-cyan-500 hover:text-black rounded-sm p-2'><li><a href="/">Contact</a></li></div>
            <div className='hover:bg-cyan-500 hover:text-black rounded-sm p-2 '><li><a href="/">About</a></li></div>
            <div className=' hover:bg-cyan-500 hover:text-black rounded-sm p-2'><li><a href="/">Blog</a></li></div>
          </ul>
        </nav>
        </div>
      </div>
    )
  }
}