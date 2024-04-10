
import { useContext, useEffect } from 'react'
import './App.css'
import Blogs from './Components/Blogs'
import Header from './Components/Header'
import Pagination from './Components/Pagination'
import { AppContext } from './Context/Appcontext'

function App() {
   const{fetchingblogPosts}=useContext(AppContext)
   useEffect(()=>{
     fetchingblogPosts()
   },[])
  

  return (
    <>
      
       <Header></Header>
       <Blogs></Blogs>
       <Pagination></Pagination>
    </>
  )
}

export default App
