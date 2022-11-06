const stopwatch = document.getElementById("display");
const startBtn = document.getElementById('start');
const resetBtn = document.getElementById('reset');
const stopBtn = document.getElementById('stop');

let [ms, s, m, h] = [0, 0, 0, 0]

let interval = null

const timeFunc = () => {
  ms += 1000
  if (ms === 1000) {
    ms = 0;
    s += 1;
    if (s === 60) {
      s = 0;
      m += 1;
      if (m === 60) {
        m = 0;
        h++;
        
      }
    }
  }

  let hours = h < 10 ? `0${h}` : h
  let mins = m < 10 ? `0${m}` : m
  let secs = s < 10 ? `0${s}` : s
  stopwatch.innerHTML = `${hours}:${mins}:${secs}`
}

startBtn.addEventListener('click', () => {
  

  resetBtn.classList.remove("clicked")
  stopBtn.classList.remove("clicked-stop")
  startBtn.classList.add("clicked")

  interval = setInterval(timeFunc, 1000)
  
})

resetBtn.addEventListener('click', () => {

  resetBtn.classList.add("clicked")
  stopBtn.classList.remove("clicked-stop")
  startBtn.classList.remove("clicked")

  clearInterval(interval)
  s = 0;
  m = 0;
  h = 0;
  stopwatch.innerHTML = "00:00:00"

})

stopBtn.addEventListener('click', () => {
 
  resetBtn.classList.remove("clicked")
  stopBtn.classList.add("clicked-stop")
  startBtn.classList.remove("clicked")

  clearInterval(interval)
  

})




console.log(stopwatch.innerHTML)

