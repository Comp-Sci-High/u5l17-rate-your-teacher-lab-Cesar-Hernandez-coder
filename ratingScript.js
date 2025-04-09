// Add an event listener to the form that upon submits creates a new rating
// When the rating is created redirect to the ratings page
const teach = document.querySelector('form')
teach.addEventListener("sumbit", async (e)=>{
   e.preventDefault()
   const teachData = new FormData(teach)
   const teachList = Object.fromEntries(teachData)

   const response = await fetch("/", {
       method: "POST",
       headers:{
        "Content-Type":"application/json" 
       },
body: JSON.stringify(teachList)
   })
const data = await response.json()
console.log(data)
})








