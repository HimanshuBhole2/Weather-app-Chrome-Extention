const submitBtn = document.getElementById('submitBtn');
const cityName = document.getElementById('cityName');
const top_div = document.getElementById('top_div');
const temp = document.getElementById('temp');
const temp_status = document.getElementById('temp_status');
const middlelayer = document.querySelector('.middle_layer');


const getInfo =async (event)=>{
    event.preventDefault();
    let city = cityName.value;
    
    if(city ===""){
       alert("Please Enter the City Name.")
       middlelayer.classList.add('data_hide');
    }
    else{
        try{
            let url = `https://j1igj5rnef.execute-api.ap-south-1.amazonaws.com/default/weather-himanshu?city=${city}`;

            const response = await fetch(url);
            const data =await response.json();
            const arr = [data];
            const tempp = arr[0].main.temp;
            const weather = arr[0].weather[0].main;

            top_div.innerText = `${arr[0].name},${arr[0].sys.country}`
            if(weather == "Clear"){
                temp_status.innerHTML = " <img src='images/Clear.jpeg' style='color:#eccc68'>";
            }
            else if(weather == "Clouds"){
                temp_status.innerHTML = " <img src='images/Clouds.jpeg' style='color:#f1f2f6'>";
            }
            else if(weather == "Thunderstorm"){
                temp_status.innerHTML = " <img src='images/Thunderstorm.jpeg' style='color:#a4b0be'>";
            }
            else if(weather == "Rain"){
                temp_status.innerHTML = " <img src='images/Rain.jpeg' style='color:#a4b0be'>";
            } else {
                temp_status.innerHTML = " <img src='images/Clouds.jpeg' style='color:#f1f2f6'>";
            }


            temp.innerHTML = tempp;
            middlelayer.classList.remove('data_hide');

        }
        catch{
            top_div.innerText = "Please Enter The City Name Properly";
            middlelayer.classList.add('data_hide');
        }
    }
}

let getD = async() => {
    var day1 = document.getElementById("day");
    var date = document.getElementById("today_data");
    var Days = ['Sunday', 'Monday', 'Tuesday',
        'Wednesday', 'Thursday', 'Friday', 'Saturday'
    ];

    var Months = ['Jan', 'Feb', 'Mar', 'Apr',
        'May', 'Jun', 'Jul', 'Aug', 'Sep',
        'Oct', 'Nov', 'Dec'
    ];

    var currentDay = new Date();

    // Get the current day name
    var day = Days[currentDay.getDay()];

    // Get the current month name
    var month = Months[currentDay.getMonth()];
    var ddd = currentDay.getDate();

    date.innerHTML = `${ddd} ${month}`;
    day1.innerHTML = day;

}

submitBtn.addEventListener('click',getInfo);
// submitBtn.addEventListener('click',getD);
document.addEventListener("DOMContentLoaded", getD);