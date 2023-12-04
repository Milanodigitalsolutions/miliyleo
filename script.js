document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.querySelector(".preloader").style.display = "none";
        document.querySelector(".content").style.display = "block";
    }, 2000);
});


const countdown = () => {
    const countDate = new Date('January 27, 2024 19:00:00').getTime()
    const now = new Date().getTime()
    const gap = countDate - now

    const second = 1000
    const minute = second * 60
    const hour = minute * 60
    const day = hour * 24

    const textDay = String(Math.floor(gap / day)).padStart(2, '0');
    const textHour = String(Math.floor((gap % day) / hour)).padStart(2, '0');
    const textMinute = String(Math.floor((gap % hour) / minute)).padStart(2, '0');
    const textSecond = String(Math.floor((gap % minute) / second)).padStart(2, '0');
  
    document.querySelector('.dias').innerText = textDay
    document.querySelector('.horas').innerText = textHour
    document.querySelector('.minutos').innerText = textMinute
    document.querySelector('.segundos').innerText = textSecond
}

setInterval(countdown, 1000)
