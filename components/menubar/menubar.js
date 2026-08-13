const time = document.querySelector(".time");

function CurrentTime() {
    const now = new Date();
    
    const day = now.getDay();
    const days = {
        1 : "Sun",
        2 : "Mon",
        3 : "Tue",
        4 : "Wed",
        5 : "Thu",
        6 : "Fri",
        7 : "Sat",
    }

    const date = now.getDate();
    const month = now.getMonth();
    const months = {
        1 : "Jan",
        2 : "Feb",
        3 : "Mar",
        4 : "Apr",
        5 : "May",
        6 : "Jun",
        7 : "Jul",
        8 : "Aug", 
        9 : "Sep",
        10 : "Oct",
        11 : "Nov",
        12 : "Dec"
    }
    const hours = now.getHours();
    const minutes = now.getMinutes();

    return {}

}