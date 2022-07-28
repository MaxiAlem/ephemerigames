import React, { useState } from 'react'
import { consult } from '../helpers/api'



  let data = {}
const VGData = () => {
  const [game, setGame] =useState({name:'',background_image:'', released:'',dominant_color:''})
  const onClick = async()=>{
  
  try {
    data = await consult()
    setGame(data)
    
    
  } catch (error) {
    console.log(error)
  }
  
  console.log(game)
  }
  const style= {bgcolor:game.dominant_color}
  return (
    <div style={style}>
      <div>nombre : {game.name}</div>
      <div>fecha: {game.released}</div>
      <img className='game-img' src={game.background_image} alt={game.name}/>
      <div>
        <button id="start"
      className=""
      onClick={onClick}><div>try again</div></button>
      </div>
 
      
    </div>
  )
}

export default VGData
