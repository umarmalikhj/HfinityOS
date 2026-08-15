const time = document.querySelector(".time");
setInterval(() => {
    CurrentTime()
},1000);

function CurrentTime() {
    const now = new Date();
    
    const day = now.getDay();
    const days = {
        0 : "Sun",
        1 : "Mon",
        2 : "Tue",
        3 : "Wed",
        4 : "Thu",
        5 : "Fri",
        6 : "Sat",
    }
    const currentDay = days[day];

    const date = now.getDate();

    const month = now.getMonth();
    const months = {
        0 : "Jan",
        1 : "Feb",
        2 : "Mar",
        3 : "Apr",
        4 : "May",
        5 : "Jun",
        6 : "Jul",
        7 : "Aug", 
        8 : "Sep",
        9 : "Oct",
        10 : "Nov",
        11 : "Dec"
    }
    const currentMonth = months[month];

    const hours = now.getHours();
    const currentHour = (hours % 12) || 12;

    const period = hours >= 12 ? "PM" : "AM";

    const minutes = now.getMinutes();
    const currentMinutes = minutes < 10 ? '0' + minutes : minutes;

    return time.textContent = `${currentDay} ${date} ${currentMonth} ${currentHour}:${currentMinutes} ${period}`;
}