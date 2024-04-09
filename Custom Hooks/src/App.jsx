import Tag from './Components/Tag'
import Random from './Components/Random'
import './App.css'

function App() {
  

  return (
    <>
     
      <div className="bg-blue-500 text-white p-4  text-center">Custom Hooks-Random GIF</div>

      <div className='rounded-sm w-[700px] h=[200px] bg-green-500 p-[130px] m-[10px] mx-auto ' >
        <Random></Random>
      </div>


      <div className= ' rounded-sm w-[700px] h=[200px] bg-blue-500 p-[130px] m-[10px] mx-auto' >
        <Tag></Tag>
      </div>

        
    </>
  )
}

export default App
