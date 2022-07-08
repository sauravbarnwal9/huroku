
function Items({item,price}){
    return (
        <tr style={{border:"1px solid green"}}>
            <td>{item}</td>
            <td>{price}</td>
            <td>More details</td>
        </tr>
    )
}

export const AllProducts = () => {
    const [data,SetData]=useState()
 async function Fetch() {
   try {
    
    let res=await fetch("http://localhost:3004/posts")
    res=await res.json()
   SetData(res)
   } catch (error) {
    console.log(error)
   }
  }
  useEffect(()=>{
Fetch()
  },[])

return (
    
<table style={{border:"1px solid green" ,width:"40%"}}>
    


  {
  
    data.map((el)=>(
       <Items item={el.name}
       price={el.price}

       />
    ))
    
  }

{/* <Items item="mobile" 
price="21331"
/> */}

</table>
)

}
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

//rfc
