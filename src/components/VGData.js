import React, { useState,useEffect } from 'react'
import { consult } from '../helpers/api'



  let data = {}
const VGData = () => {
  const [game, setGame] =useState({name:'',background_image:'', released:'',dominant_color:''})
  const [loading, setLoading]= useState(true)
  const onClick = async()=>{
    try {
    const res = await consult()
    data = await res
    setGame(data)
    setLoading(false) 
    } catch (error) {
    console.log(error)
    }

  }
    const urlYT =`https://www.youtube.com/results?search_query=${game.name.replaceAll(' ','+')}+walkthrough`
    
    useEffect(() => {
      
    
      return () => {
        onClick()
      }
    },[]);
    
  return (
    <div className='VGData'>
      {loading ? <div>Cargando ...</div>
                
                :<div className='div-data'>
                  <div className='data'>
                    <div className='first-data'>A Day Like Today but in  {game.released.slice(0,4)}</div>
                    <div>{game.name} was released</div>
                    <div className='yt-link'><a href={urlYT} target="_blank" rel="noreferrer">
                    Look on Youtube</a></div>
                  </div>                         
                  <img className='game-img' src={game.background_image} alt={game.name}/>
                  

            </div>}
      
      
      <div className='div-btn'>
        <button
          className="nes-btn is-error"
          onClick={onClick}>
        <div>try again</div>
        </button>
      </div>  
    </div>
  )
}

export default VGData
