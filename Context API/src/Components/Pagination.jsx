import React, { useContext, useState } from 'react'
import { AppContext } from '../Context/Appcontext'

function Pagination() {
  const { pagecount,handlePage,totalpagecount } = useContext(AppContext)
  
  return (
    <div>
      <div>
        {
          pagecount > 1 && <button onClick={()=>handlePage(pagecount-1)}>Previous</button>
        }
        {
          pagecount <totalpagecount && <button onClick={()=>handlePage(pagecount+1)}>Next</button>
        }
      </div>

      <div>
        <p>Page {pagecount} of {totalpagecount}</p>
      </div>
    </div>
  )
}

export default Pagination
