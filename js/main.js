window.onload = function(){
const hourly = document.querySelector('#hourly');
const daily = document.querySelector('#daily');
const weekly = document.querySelector('#weekly');
const monthly = document.querySelector('#monthly');
const hourlybtn = document.querySelector('#hourlybtn');
const weeklyBtn = document.querySelector('#weeklybtn');
const monthlyBtn = document.querySelector('#monthlybtn');
const newMemberBtn = document.querySelector('#nmembersbut');
const dailyBtn = document.querySelector('#dailybtn');
const deskMenuIcons = document.querySelector('.ul-desk');
const deskMicos = deskMenuIcons.children;
const charts = document.querySelector('.charts');
const chartList = charts.children;
const chartButtonContainer = document.querySelector('.buttonscon');
const chartButtons = chartButtonContainer.children;
const barChart = document.querySelector('#bar');
const members = document.querySelector('#members');
const recentActivitySec = document.querySelector('#activity-sec');
const recentActivityBut = document.querySelector('#ractivitybut');
const gearBtn = document.querySelector('#gear');
const messageUserCont = document.querySelector('#messagecon');
const cancelBtn = document.querySelector('#cancel');
const settingsContainer = document.querySelector('#settings');
const notificationIcon = document.querySelector('.new-note');
const sendButton = document.querySelector('#submit');
const bell = document.querySelector('.bell');
const notiContainer = document.querySelector(".notifications");
const msjs = ["Charles Elkins made a post...", "Layla Fischer joined Twitter.", "James Rogers Likes Bsn's news post."];
const userField = document.querySelector('#s-user');
const msjField = document.querySelector('#m-user');
const userValCon = document.querySelector('.val-user');
const msjValCon = document.querySelector('.val-msj');


daily.classList.add("hidden");
weekly.classList.add("hidden");
monthly.classList.add("hidden");
hourlybtn.classList.add("selected");
newMemberBtn.classList.add("selected");
recentActivitySec.classList.add("recent-act-hide");
settingsContainer.classList.add("hidden-sett");
cancelBtn.classList.add("hide");




 sendButton.addEventListener('click', function(e) {
      
      if (userField.value === '') {
          e.preventDefault();
          userValCon.innerHTML = '<p class="s-user-warning">This is required.</p>';
          userField.classList.add('error');      
         } else {
            userField.classList.remove('error');
            userValCon.innerHTML = '';
           }

         if (msjField.value === '') {
             e.preventDefault();
             msjValCon.innerHTML = '<p class="s-user-warning">This is required.</p>';
             msjField.classList.add('error');
         } else {
             msjField.classList.remove('error');
             msjValCon.innerHTML = '';
           }
 });


bell.addEventListener('click', function(e) {
    
   for (let i = 0; i < msjs.length; i++) {      
    notiContainer.innerHTML += '<li class="alert"><span>Alert</span> ' + msjs[i] + ' <img class="close" src="icons/close.svg"></li>';
}
       e.target.removeEventListener('click', arguments.callee);
       notificationIcon.classList.add("hide");

});

//CLOSE BUTTON
notiContainer.addEventListener('click', function(e) {
          if(e.target.className === 'close') {
            e.target.parentNode.classList.add("hide");
 
          }

    });


deskMenuIcons.addEventListener('click', function(e) {
           
        for (let i = 0; i < deskMicos.length; i++) {
          deskMicos[i].classList.remove('icon-selected');         
          
        if (e.target.tagName === 'A'){
             e.target.parentNode.classList.add('icon-selected');  
        } 
       
     } 
    
});


chartButtonContainer.addEventListener('click', function(e) {

      for (let i = 0; i < chartButtons.length; i++) {
        chartButtons[i].classList.remove('selected');
        if (e.target.tagName == 'BUTTON') {
          e.target.classList.add('selected');       
       }
     } 
});



recentActivityBut.addEventListener('click', function() {     
    recentActivityBut.classList.add("selected");
    newMemberBtn.classList.remove("selected");
    recentActivitySec.classList.remove("recent-act-hide");
    members.classList.add("hidden");

});

newMemberBtn.addEventListener('click', function() {       
   newMemberBtn.classList.add("selected");
    recentActivityBut.classList.remove("selected");
    recentActivitySec.classList.add("recent-act-hide");
    members.classList.remove("hidden");

});

gearBtn.addEventListener('click', function() {
   gearBtn.classList.add("hide");
    settingsContainer.classList.remove("hidden-sett");
   messageUserCont.classList.add("hidden");
    cancelBtn.classList.remove("hide");

});

cancelBtn.addEventListener('click', function() {
    cancelBtn.classList.add("hide");
    gearBtn.classList.remove("hide");
    settingsContainer.classList.add("hidden-sett");
   messageUserCont.classList.remove("hidden");
});



var lineChart = new Chart(hourly, {
  type: 'line',
  data: {
    labels: ["8:00am", "10:00am", "12:00pm", "2:00pm", "4:00pm"],
    datasets: [
        {
            label: "Hourly",
            fill: true,
            lineTension: 0.1,
            backgroundColor: "rgba(227,228,247,0.7)",
            borderColor: "rgba(172,174,230,1)",
            borderCapStyle: 'butt',
            pointStyle: 'circle',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 1,
            pointRadius: 5,
            pointHitRadius: 10, 
            data: [10, 45, 5, 20, 10],
        }
         ]
  },
       options: {
           legend: false,
          maintainAspectRatio: false,
          responsive: true
                
    }

});

hourlybtn.addEventListener('click', function() {

     for (let i = 0; i < chartList.length; i++) {
        chartList[i].classList.add('hidden');
        hourly.classList.remove("hidden"); 
     } 
});




var lineChart = new Chart(daily, {
  type: 'line',
  data: {
    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
    datasets: [
        {
            label: "Daily",
            fill: true,
            lineTension: 0.1,
            backgroundColor: "rgba(227,228,247,0.7)",
            borderColor: "rgba(172,174,230,1)",
            borderCapStyle: 'butt',
            pointStyle: 'circle',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 1,
            pointRadius: 5,
            pointHitRadius: 10, 
            data: [20, 50, 14, 56, 45, 80, 78, 90, 125],
        
        }
        
    ]

    },
         options: {
          legend: false,
          maintainAspectRatio: false,
          responsive: true
    }

});


dailyBtn.addEventListener('click', function() {
    
     for (let i = 0; i < chartList.length; i++) {
        chartList[i].classList.add('hidden');
        daily.classList.remove("hidden"); 
     } 
});








lineChart = new Chart(weekly, {
  type: 'line',
  data: {
    labels: ["16-22", "23-29", "30-5", "6-12", "20-26", "27-3", "4-10", "11-17", "18-28"],
    datasets: [
        {
            label: "Weekly",
            fill: true,
            lineTension: 0.1,
            backgroundColor: "rgba(227,228,247,0.7)",
            borderColor: "rgba(172,174,230,1)",
            borderCapStyle: 'butt',
            pointStyle: 'circle',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 1,
            pointRadius: 5,
            pointHitRadius: 10, 
            data: [500, 1000, 500, 2000, 2500, 800, 788, 900, 1255],

        }
        
    ]

    },

        options: {
          legend: false,
          maintainAspectRatio: false,
          responsive: true
                
    }

});


 weeklyBtn.addEventListener("click", function () {
       for (let i = 0; i < chartList.length; i++) {
        chartList[i].classList.add('hidden');
        weekly.classList.remove("hidden"); 
     } 
});


lineChart = new Chart(monthly, {
  type: 'line',
  data: {
    labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September",
    "October", "November", "December"],
    datasets: [
        {
            label: "Monthly",
            fill: true,
            lineTension: 0.1,
            backgroundColor: "rgba(227,228,247,0.7)",
            borderColor: "rgba(172,174,230,1)",
            borderCapStyle: 'butt',
            pointStyle: 'circle',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 1,
            pointRadius: 5,
            pointHitRadius: 10, 
            data: [500, 1000, 700, 267, 500, 800, 1188, 520, 925, 450, 578, 1521],

        }
        
    ]

    },
        options: {
          legend: false,
          maintainAspectRatio: false,
          responsive: true
                
    }

});

monthlyBtn.addEventListener("click", function () {
      for (let i = 0; i < chartList.length; i++) {
        chartList[i].classList.add('hidden');
        monthly.classList.remove("hidden"); 
     } 
});



var bar = new Chart(barChart, {
    type: 'bar',
    data: {
    labels: ["Sun", "Mon", "Tus", "Wed", "Thur", "Fri", "Sat"],
    datasets: [{
            label: 'Daily Traffic',
            fill: true,
            backgroundColor: "rgba(115, 119, 191, 0.9)",
            borderColor: "rgba(172,174,230,1)",
            data: [30, 50, 80, 45, 75, 54, 78],
    },

{
            label: 'Average Hourly ',
            fill: true,
            backgroundColor: "rgba(115, 119, 191, 0.9)",
            borderColor: "rgba(172,174,230,1)", 
            data: [3, 12, 7, 13, 9, 9, 14],
        

         }]
    },
        options: {
           legend: false,
          maintainAspectRatio: false,
          responsive: true
                
    }
});





var dnutChart = new Chart(dnut, {
    type: 'doughnut',
    data: {
    labels: ["Phones", "Tablets", "Desktop", "Notebooks"],
    datasets: [
        {       
            backgroundColor: ["#74B1BF", "#81C98F", "#7377BF", "#4D4C72"],
            borderColor: ["#74B1BF", "#81C98F", "#7377BF","#4D4C72"],
            data: [330, 200, 850, 540],

        }
        
    ]

    },

     options: {

          
          maintainAspectRatio: false,
          responsive: true,
          display: true,
          padding: 7774,

            
                
        legend: {
             position: 'right',


            labels: {

                boxWidth: 23,
                fontSize: 20,
                padding: 25,
                yPadding: 8,
          
                

            }
        }
    }
});



//MARGIN LINKS
function margin() {
    if(location.hash.length !== 0) {
        window.scrollTo(window.scrollX, window.scrollY - 110);
    }
}

window.addEventListener("hashchange", margin);






 $(".icon").click(function() {
    $(".mobilenav").fadeToggle(500);
    $(".top-menu").toggleClass("top-animate");
    $(".mid-menu").toggleClass("mid-animate");
    $(".bottom-menu").toggleClass("bottom-animate");
    $("body").toggleClass("noscroll");
  });




$('.ul-mobile').click(function(){
   
  $(".mobilenav ").fadeToggle();
     $(".top-menu").toggleClass("top-animate");
    $(".mid-menu").toggleClass("mid-animate");
    $(".bottom-menu").toggleClass("bottom-animate");
     $("body").toggleClass("noscroll");

});






};


