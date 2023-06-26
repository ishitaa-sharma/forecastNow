let myDate=new Date();

let x=myDate.getDay();
if(x==1)
{
    str="Monday";
}
else if(x==2)
{
    str="Tuesday";
}
else if(x==3)
{
    str="Wednesday";
}
else if(x==4)
{
    str="Thursday";
}
else if(x==5)
{
    str="Friday";
}
else if(x==6)
{
    str="Saturday";
}
else
{
    str="Sunday";
}
let y=myDate.getDate();

let z=myDate.getMonth();
if(z==0)
{
    str1="January";
}
else if(z==1)
{
    str1="February";
}
else if(z==2)
{
    str1="March";
}
else if(z==3)
{
    str1="April";
}
else if(z==4)
{
    str1="May";
}
else if(z==5)
{
    str1="June";
}
else if(z==6)
{
    str1="July";
}
else if(z==7)
{
    str1="August";
}

else if(z==8)
{
    str1="September";
}

else if(z==9)
{
    str1="October";
}

else if(z==10)
{
    str1="November";
}

else 
{
    str1="December";
}
let year=myDate.getFullYear();
let dd=myDate.getDate();
let final_str=str+' '+dd+' '+','+' '+str1+' '+year;
let element1=document.getElementById('date');
element1.innerHTML=final_str;

//Dynamic Temperature related parameters
const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a65eade5ffmshab1922ac19c868bp1147cajsna19813387833',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi',options)
.then(response => response.json())
.then((response) => {
	console.log(response);
    let element2=document.getElementById('temp');
    element2.innerHTML=response.temp;

    let element3=document.getElementById('cloud_pct');
    element3.innerHTML=response.cloud_pct;

    let element4=document.getElementById('sunrise');
    element4.innerHTML=response.sunrise;

    let element5=document.getElementById('sunset');
    element5.innerHTML=response.sunset;

    let element6=document.getElementById('wind_deg');
    element6.innerHTML=response.wind_degrees;

    let element7=document.getElementById('wind_speed');
    element7.innerHTML=response.wind_speed;
    
    let element8=document.getElementById('feels_like');
    element8.innerHTML=response.feels_like;

    let element9=document.getElementById('humidity');
    element9.innerHTML=response.humidity;

    let element10=document.getElementById('max_temp');
    element10.innerHTML=response.max_temp;

    let element11=document.getElementById('min_temp');
    element11.innerHTML=response.min_temp;
	
})

newbtn.addEventListener('click',function()
 {
 let ele1=document.getElementById('search123');
 let cityname=ele1.value;
 let ele2=document.getElementById('box13');
 ele2.innerHTML=cityname;

 fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+cityname,options)
.then(response => response.json())
.then((response) => {
	console.log(response);
    let element2=document.getElementById('temp');
    element2.innerHTML=response.temp;

    let element3=document.getElementById('cloud_pct');
    element3.innerHTML=response.cloud_pct;

    let element4=document.getElementById('sunrise');
    element4.innerHTML=response.sunrise;

    let element5=document.getElementById('sunset');
    element5.innerHTML=response.sunset;

    let element6=document.getElementById('wind_deg');
    element6.innerHTML=response.wind_degrees;

    let element7=document.getElementById('wind_speed');
    element7.innerHTML=response.wind_speed;
    
    let element8=document.getElementById('feels_like');
    element8.innerHTML=response.feels_like;

    let element9=document.getElementById('humidity');
    element9.innerHTML=response.humidity;

    let element10=document.getElementById('max_temp');
    element10.innerHTML=response.max_temp;

    let element11=document.getElementById('min_temp');
    element11.innerHTML=response.min_temp;
	
})
 



})


let hour=myDate.getHours();
let min=myDate.getMinutes();
let ele3=document.getElementById('time1');
ele3.innerHTML=hour+':'+min;
