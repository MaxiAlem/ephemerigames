import dateGen from "./dateGenerator"



const key = 'key=c2d7851c2c8043b6a0543f082d6323fb'
const query = `dates=${dateGen()}`
const ratingQ = `metacritic=60,100`
const platforms = 'platforms=12,119,167,107,49,79,43,24,83,27'
const base= 'https://api.rawg.io/api'
const url = `${base}/games?&${key}&${query}&${platforms}&-rating=3,5&page_size=40`//&${ratingQ}`


    
    
    async function consult(){
      
      try {
      const res = await fetch(url)
      const data = await res.json()
      let rand = Math.floor(Math.random()*data.results.length)
      return (data.results[rand])    
      } catch (error) {
        console.log(error)
      }

    } 

export {
    consult,
}