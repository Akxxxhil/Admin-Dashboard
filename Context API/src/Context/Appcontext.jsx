import { useState } from "react"
import { createContext } from "react"
import { Baseurl } from "../Baseurl"

 export const AppContext=createContext()   // 1st step


 export default function Appcontextprovider({children}){
    const[loading,setLoading]=useState(false)
    const[posts,setPosts]=useState([])
    const[pagecount,setPageCount]=useState(1)
    const[totalpagecount,setTotalPAgeCount]=useState(null)


    async function fetchingblogPosts(page=1){
        setLoading(true)
        let url=`${Baseurl}?page=${page}`
        console.log("here is the url");
        console.log(url);
        
        try {
            const data=await fetch(url)
            const output= await data.json()
            console.log(output);
            setPosts(output.posts)
            setPageCount(output.page)
            setTotalPAgeCount(output.totalPages)
        } catch (error) {
            console.log("error in fetching data");
            setPageCount(1)
            setPosts([])
            setTotalPAgeCount(null)
            
        }
        setLoading(false)
    }

    function handlePage(page){
        setPageCount(page)
        fetchingblogPosts(page)
    }






    const value={
        loading,
        setLoading,
        posts,
        setPosts,
        pagecount,
        setPageCount,
        totalpagecount,
        setTotalPAgeCount,
        fetchingblogPosts,
        handlePage
    
    
     }



     return <AppContext.Provider value={value}> 
        {children}
     </AppContext.Provider>

 }


 
//  import { createContext, useState } from "react";
//  import { baseUrl } from "../baseUrl";
 
 // Step1
//  export const AppContext = createContext();
 
//  function AppContextProvider({ children }) {
//      const [loading, setLoading] = useState(false);
//      const [posts, setPosts] = useState([])
//      const [page, setPage] = useState(1)
//      const [totalPages, setTotalPages] = useState(null);
 
     // Data Filling
    //  async function fetchBlogPosts(page = 1) {
    //      setLoading(true)
    //      let url = `${baseUrl}?page=${page}`;
    //      try {
    //          const result = await fetch(url);
    //          const data = await result.json();
    //          console.log(data)
    //          setPage(data?.page);
    //          setPosts(data?.posts);
    //          setTotalPages(data?.totalPages);
    //      }
    //      catch (e) {
    //          console.log("Error")
    //          setPage(1);
    //          setPosts([]);
    //          setTotalPages(null);
    //      }
    //      setLoading(false);
    //  }
 
 
    //  function handlerPageChange(page) {
    //      setPage(page);
    //      fetchBlogPosts(page);
    //  }
 
 
//      const value = {
//          posts,
//          setPosts,
//          page,
//          setPage,
//          totalPages,
//          setTotalPages,
//          loading,
//          setLoading,
//          handlerPageChange,
//          fetchBlogPosts
//      };
 
//      return <AppContext.Provider value={value}>
//          {children}
//      </AppContext.Provider>
//  }
 
//  export default AppContextProvider;