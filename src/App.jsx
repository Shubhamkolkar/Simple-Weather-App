
import { useEffect, useState } from 'react'
import './App.css'


function App() {
const [cityLocation,setcityLocation] = useState(`mumbai`)
const [weatherData,setWeatherData] = useState(null)


const handelOnChange = (e) => { 
	setcityLocation(e.target.value)
	console.log(cityLocation)
	console.log(weatherData)
}
const url = `http://api.weatherapi.com/v1/current.json?key=e21e1a48a5694b4396a52246242304&q=${cityLocation}&aqi=no`

useEffect(()=>{
fetch(url).then((res)=>{
	if(!res.ok){
		throw new Error("Error")
	}
	return res.json()}).then((data)=>setWeatherData(data) ).catch((error)=> console.log(error))
},[cityLocation])


const img = `${weatherData&& weatherData.current.condition.icon}`
  return (
    <>
		<div className="flex w-screen h-screen bg-[#1F213A] justify-center content-center align-middle">
			<div className="text-[#c1b2b2] font-semibold mt-20 ">
				<span>Right now in </span>
				
				<input type='text' defaultValue="Mumbai" className='outline-none bg-[#2f3150] px-3 focus:border focus:border-[#c4c4c4] focus:text-cyan-200'
				onChange={handelOnChange}>
				</input>

			<div className="mt-5 flex justify-between">
				<div className='left'>
				<span className='font-bold text-2xl'>{cityLocation}</span>
				<p>{weatherData && weatherData.location.localtime}</p>
				</div>
				<div className="right">
					<span className='text-3xl'>
						{weatherData && weatherData.current.temp_c}
						</span>
						<img src={img} alt="" />
				</div>
			</div>
			</div>
		</div>
    </>
  )
}

export default App
