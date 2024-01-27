import React, { useState } from 'react'
import styles from "@/app/page.module.css"
import Image from "next/image"
import WeatherReport from './WeatherReport'

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
    <div className={styles.s_b}>
<Image src="/1.png" alt="img" height={140} width={140} className={styles.d1} />

            <Image src="/5.png" alt="img" height={190} width={200} className={styles.d5} />
            <Image src="/6.png" alt="img" height={130} width={130} className={styles.d6} />

<form onSubmit={handlesubmit}>
<input className={styles.searchbar} type='text' placeholder='Enter A City' value={inp} onChange={handlechange} id='input'/>
<button className={styles.searchbutton} type='submit' > <Image src="/s.png" alt="search image" height={20} width={20}/></button>
</form>
<WeatherReport  weatherData={props.weatherData}/> 
    </div>
  )
}
