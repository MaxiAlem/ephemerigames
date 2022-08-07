

const date = new Date()

const m = String(date.getMonth() + 1).padStart(2, '0')
const d = String(date.getDate()).padStart(2,'0')//si le agregamo una fecha custom  hay que agregarle +1
 const  dateGen = ()=>{
   const start = 1970;
   const  end = date.getFullYear()
    let dates = []
    for(let i = start; i <= end; i++){
        dates = [`${i}-${m}-${d} ${i}-${m}-${d}` , ...dates]
    
    }
     const datesStr = dates.toString().replace(/,/g,'.').replace(/ /g, ',')
     
     return datesStr
}


export default dateGen