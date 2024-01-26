import React, { useState } from 'react'
import styles from "@/app/page.module.css"


export default function SearchBar(props) {

    const [inp , setinp] = useState("")

function handlesubmit(e)
{

e.preventDefault() ; 
props.setcity(inp)



}

const handlechange =(e)=>{

setinp(e.target.value)

}




  return (
    <div>
<form onSubmit={handlesubmit}>
<input className={styles.searchbar} type='text' placeholder='Enter A City' value={inp} onChange={handlechange} id='input'/>
<button className={styles.searchbutton} type='submit' > GO </button>
</form>
    </div>
  )
}
