const dayselem = document.querySelector(".days");
const hourselem = document.querySelector(".hours");
const minuteselem = document.querySelector(".minutes");
const secondselem = document.querySelector(".seconds");
const counterTimer = document.getElementById("counterTimer");
const heading = document.querySelector("h1");

const second = 1000,
      minute = 60 * second,
      hour = 60 * minute,
      day = 24 * hour;


const timerFunction = () =>{

    let now = new Date(),
     dd = String(now.getDate()).padStart(2,"0"),
     mm = String(now.getMonth()+1).padStart(2,"0"),
     yyyy = now.getFullYear();

     now=`${mm}/${dd}/${yyyy}`;

     const enterDate = prompt("Enter Date : ").padStart(2,"0");
     const enterMonth = prompt("Enter Month :").padStart(2,"0");

     if(enterDate>31) alert("Invalid date !!");
     if(enterMonth>12) alert("Invalid month !!");
     if((yyyy%4==0) && enterMonth=="02" && enterDate>29) alert("This is Leap Year");

     let targetDate = `${enterMonth}/${enterDate}/${yyyy}`;

     if(now>targetDate)   targetDate = `${enterMonth}/${enterDate}/${yyyy+1}`;
   


     const intervalID = setInterval(()=>{
        const timer = new Date(targetDate).getTime();
        const todayTime = new Date().getTime();

        const difference=timer-todayTime;

        const leftday = Math.floor(difference/day);
        const leftHours = Math.floor((difference%day)/hour);
        const leftMinutes = Math.floor((difference%hour)/minute);
        const leftSeconds = Math.floor((difference%minute)/second);

        dayselem.innerHTML=leftday;
        hourselem.innerHTML=leftHours;
        minuteselem.innerHTML=leftMinutes;
        secondselem.innerHTML=leftSeconds;

        if(difference<0){
           counterTimer.style.display="none";
           heading.innerText="Time's Up";
           clearInterval(intervalID);
        }

 

     },0);
}  

timerFunction();