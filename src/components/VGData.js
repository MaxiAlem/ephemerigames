import React, { useState,useEffect,useLayoutEffect } from 'react'
import { consult } from '../helpers/api'



  let data = {}
const VGData = () => {
  
  const [game, setGame] =useState({name:'',background_image:'', released:'',dominant_color:''})
  const [loading, setLoading]= useState(true)
  const takeOne = async()=>{
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
    const img =()=>{
      if(game.background_image === null){
        return 'no_img.jpg'
      }else {
        return game.background_image}
      
    }
    const  metaTags=()=>{
      const metaogs = document.getElementsByTagName('meta')
      console.log(metaogs[3])

      metaogs[3].setAttribute('content', game.name) //title
      metaogs[5].setAttribute('content', img())//image
      metaogs[6].setAttribute('content', img())//image:secure_url
      metaogs[4].setAttribute('content', `A Day Like Today but in  ${game.released.slice(0,4)}, ${game.name} was released`)
      //  const ogTitle = document.createElement('meta');
  //  ogTitle.setAttribute('property', 'og:type');
  //  ogTitle.setAttribute('content', game.name);

  //  const ogImg = document.createElement('meta');
  //  ogImg.setAttribute('property', 'og:image');
  //  ogImg.setAttribute('content', img());
   
  //  const ogdescr = document.createElement('meta');
  //  ogdescr.setAttribute('property', 'og:description');
  //  ogdescr.setAttribute('content', `A Day Like Today but in  ${game.released.slice(0,4)}, ${game.name} was released`);

  //  document.head.prepend(ogImg)
  //  document.head.prepend(ogTitle)
   console.log(game.name)
   
   }
    
   

    useEffect(() => {
      
      takeOne();
      
    },[])// eslint-disable-line react-hooks/exhaustive-deps
    useLayoutEffect(() => {
  
      return metaTags()
     
    }, [game])// eslint-disable-line react-hooks/exhaustive-deps
  return (
    <>
    <div className='VGData'>
      {loading ? <div className='div-load'>loading ...</div>
                
                :<div className='div-data'>
                  <div className='data'>
                    <div className='first-data'>A Day Like Today but in  {game.released.slice(0,4)}</div>
                    <div>{game.name} was released</div>
                    <div className='yt-link'><a href={urlYT} target="_blank" rel="noreferrer">
                    Look on Youtube</a></div>
                  </div>                         
                  <img className='game-img' src={img()} alt={game.name}/>
                  

            </div>}
      
      
      <div className='div-btn'>
        <button
          className="nes-btn is-error"
          onClick={takeOne}>
        <div>try again</div>
        </button>
      </div>  
    </div>
    </>
    
  )
}

export default VGData
