const moods = document.getElementById('moods')
const moodselect = document.querySelectorAll('.mood')
const mainlog = document.getElementById('log')
const ullist = document.getElementById('list')
const lilist = document.querySelectorAll('.item')
const lidate = document.querySelectorAll('.date')
const todayKey = new Date().toDateString()



const storedMood = localStorage.getItem(todayKey)
if(storedMood){
    const li = document.createElement('li')
    li.classList.add('item')
    li.innerText = storedMood

    const datenow = new Date()
    const formattedTime = datenow.toLocaleString('en-US', { 
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: 'numeric', 
        minute: 'numeric', 
        second: 'numeric', 
        hour12: true 
    });
    
    const h5 = document.createElement('h5')
    h5.innerText = formattedTime
    li.appendChild(h5)
    ullist.appendChild(li)
}

moodselect.forEach((mood)=>{
    mood.addEventListener('click', function(event){
        const moodvalue= event.target.textContent
        console.log(moodvalue)

        localStorage.setItem(todayKey,moodvalue)
        ullist.innerHTML = "";
        const li = document.createElement('li')
        li.classList.add('item')
        li.innerText = moodvalue
        ullist.appendChild(li)
        const datenow = new Date
        const formattedTime = datenow.toLocaleString('en-US', { 
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: 'numeric', 
            minute: 'numeric', 
            second: 'numeric', 
            hour12: true 
        });
        const h5 = document.createElement('h5')
        h5.innerText = formattedTime
        li.appendChild(h5)
        ullist.appendChild(li)
        
        
             
        
    
    })
})