"use client"

import styles from "./page.module.css";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import { useEffect, useState } from "react";


export default function Home() {

const [city , setcity] = useState("")
const [weatherData, setWeatherData] = useState(null);

async function fetchdata(city)
{


const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=en&appid=f4657e88a64dd665af7ebeb591031b1c
` , { method:"GET"})

const resdata = await res.json()
setWeatherData(resdata)
console.log(resdata);
}

useEffect(()=>{

  if(city)
  {

fetchdata(city)

  }


} , [city])


  return (
    <div className={styles.maindiv}>

<Header />
<SearchBar city={city} setcity={setcity} weatherData={weatherData} />




    </div>
  );
}
