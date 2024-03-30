import Testimonails from './Components/Testimonails'
import './App.css'
import Reviews from './Data'

function App() {
 

  return (
    <>
      <h1 className='font-bold text-3xl text-center my-4 ml-[-22px] '>Our Testimonials</h1>
      <div className='border-4 w-[800px] py-5 ml-12'>
      <Testimonails Reviews={Reviews}></Testimonails>
      </div>
    </>
  )
}

export default App
