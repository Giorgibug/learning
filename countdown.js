const countDown = document.getElementById("count");

Function countDownFn() {
    const deadline = new Date("May 7, 2023 02:00:00").getTime();
    const now = new Date().getTime();
    const gap = deadline - now;
    // console.log(gap);

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const daysLeft = Math.floor(gap/day);
    const hoursLeft = Math.floor((gap%day) / hour);
    const minutesLeft = Math.floor((gap%hour)/minute);
    const secondsLeft = Math.floor((gap%minute)/second);

    countDown.innerHTML = `${daysLeft} days, ${hoursLeft} hours, ${minutesLeft} minutes and ${secondsLeft} 
    seconds left until my birthday`;
}
countDownFn();