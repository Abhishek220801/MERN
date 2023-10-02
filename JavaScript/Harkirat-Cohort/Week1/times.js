/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for*/

function calculateTime(n) {
    let startTime = new Date().getTime()
    let sum = 0
    for(let i=1;i<=n;i++){
        sum+=i
    }
    let endTime = new Date().getTime()
    console.log((endTime-startTime)/1000)
}
