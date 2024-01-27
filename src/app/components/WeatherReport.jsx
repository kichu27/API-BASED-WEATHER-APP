import React from 'react';
import styles from "@/app/page.module.css";
import Image from "next/image";

export default function WeatherReport({ weatherData }) {
  // Check if weatherData is available
  if (!weatherData) {
    return (
        <div className={styles.wmain}>

        <div className={styles.firstbox}>
          <div className={styles.citynamebox}>
            <h3>--</h3>
          </div>
          <div className={styles.collection}>
            <div className={styles.citynamebox_1}>
              <h4>Longitude</h4>
              <div className={styles.values}>--</div>
              <h4>Latitude</h4>
              <div className={styles.values}>--</div>
            </div>
            <div className={styles.citynamebox_2}>
              <h4>Country</h4>
              <div className={styles.values}>--</div>
            </div>
            <div className={styles.citynamebox_3}>
              <h4>Sunrise</h4>
              <div className={styles.values}>--</div>
              <h4>Sunset</h4>
              <div className={styles.values}>--</div>
            </div>
          </div>
        </div>
  
        {/* Additional weather properties */}
        <div className={styles.secondbox}>
          <div className={styles.citynamebox_1}>
            <p>--</p>
          </div>
          <div className={styles.citynamebox_1}>
            <p>--</p>
          </div>
          <div className={styles.citynamebox_1}>
            <p>--</p>
          </div>
        </div>
  
        <div className={styles.secondbox}>
          <div className={styles.citynamebox_1}>
            <p>Feels Like</p>
            <div className={styles.values}>--</div>
          </div>
          <div className={styles.citynamebox_1}>
            <p>Humidity</p>
            <div className={styles.values}>--</div>
          </div>
          <div className={styles.citynamebox_1}>
            <p>Pressure</p>
            <div className={styles.values}>--</div>
          </div>
          <div className={styles.citynamebox_1}>
            <p>Temperature</p>
            <div className={styles.values}>--</div>
          </div>
          <div className={styles.citynamebox_1}>
            <p>Max Temperature</p>
            <div className={styles.values}>--</div>
          </div>
          <div className={styles.citynamebox_1}>
            <p>Min Temperature</p>
            <div className={styles.values}>--</div>
          </div>
        </div>
  
        <div className={styles.secondbox}>
          <div className={styles.citynamebox_1}>
            <p>Timezone</p>
            <div className={styles.values}>--</div>
          </div>
          <div className={styles.citynamebox_1}>
            <p>Visibility</p>
            <div className={styles.values}>--</div>
          </div>
          <div className={styles.citynamebox_1}>
            <p>Wind Degree</p>
            <div className={styles.values}>--</div>
          </div>
          <div className={styles.citynamebox_1}>
            <p>Wind Speed</p>
            <div className={styles.values}>--</div>
          </div>
        </div>
  
      </div>
    );
  }

  return (
    <div className={styles.wmain}>

      <div className={styles.firstbox}>
        <div className={styles.citynamebox}>
          <h3>{weatherData.name}</h3>
        </div>
        <div className={styles.collection}>
          <div className={styles.citynamebox_1}>
            <h4>Longitude</h4>
            <div className={styles.values}>{weatherData.coord.lon}</div>
            <h4>Latitude</h4>
            <div className={styles.values}>{weatherData.coord.lat}</div>
          </div>
          <div className={styles.citynamebox_2}>
            <h4>Country</h4>
            <div className={styles.values}>{weatherData.sys.country}</div>
          </div>
          <div className={styles.citynamebox_3}>
            <h4>Sunrise</h4>
            <div className={styles.values}>{new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString()}</div>
            <h4>Sunset</h4>
            <div className={styles.values}>{new Date(weatherData.sys.sunset * 1000).toLocaleTimeString()}</div>
          </div>
        </div>
      </div>

      {/* Additional weather properties */}
      <div className={styles.secondbox}>
        <div className={styles.citynamebox_1}>
          <p>{weatherData.weather[0].description}</p>
        </div>
        <div className={styles.citynamebox_1}>
          <p><Image src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`} alt="icon" height={50} width={50}/></p>
        </div>
        <div className={styles.citynamebox_1}>
          <p>{weatherData.weather[0].main}</p>
        </div>
      </div>

      <div className={styles.secondbox}>
        <div className={styles.citynamebox_1}>
          <p>Feels Like</p>
          <div className={styles.values}>{weatherData.main.feels_like}</div>
        </div>
        <div className={styles.citynamebox_1}>
          <p>Humidity</p>
          <div className={styles.values}>{weatherData.main.humidity}</div>
        </div>
        <div className={styles.citynamebox_1}>
          <p>Pressure</p>
          <div className={styles.values}>{weatherData.main.pressure}</div>
        </div>
        <div className={styles.citynamebox_1}>
          <p>Temperature</p>
          <div className={styles.values}>{weatherData.main.temp}</div>
        </div>
        <div className={styles.citynamebox_1}>
          <p>Max Temperature</p>
          <div className={styles.values}>{weatherData.main.temp_max}</div>
        </div>
        <div className={styles.citynamebox_1}>
          <p>Min Temperature</p>
          <div className={styles.values}>{weatherData.main.temp_min}</div>
        </div>
      </div>

      <div className={styles.secondbox}>
        <div className={styles.citynamebox_1}>
          <p>Timezone</p>
          <div className={styles.values}>{weatherData.timezone}</div>
        </div>
        <div className={styles.citynamebox_1}>
          <p>Visibility</p>
          <div className={styles.values}>{weatherData.visibility}</div>
        </div>
        <div className={styles.citynamebox_1}>
          <p>Wind Degree</p>
          <div className={styles.values}>{weatherData.wind.deg}</div>
        </div>
        <div className={styles.citynamebox_1}>
          <p>Wind Speed</p>
          <div className={styles.values}>{weatherData.wind.speed}</div>
        </div>
      </div>

    </div>
  );
}
