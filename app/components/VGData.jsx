import { useLoaderData, Link } from '@remix-run/react';
import { useState } from 'react';

const VGData = () => {
  //test routing dinamico

  const [iGame,setIGame]=useState('0')
  const game = useLoaderData();
 
  //console.log(game);

  let fbUrl = `https://www.facebook.com/sharer/sharer.php?u=https://ephemerigames.vercel.app/`;

  const urlYT = `https://www.youtube.com/results?search_query=${game.name.replaceAll(
    ' ',
    '+',
  )}+walkthrough`;

  const img = () => {
    if (game.background_image === null) {
      return 'no_img.jpg';
    } else {
      return game.background_image;
    }
  };
  const rndPage =()=>{
    //conseguir el value de data.result.leght
    let r =Math.floor(Math.random() * 40)
    setIGame(r)
    return console.log(r);
  }

  return (
    <>
    <div>estamos en la page {iGame}</div>
      <div className="VGData">
        <div className="div-data">
          <div className="data">
            <div className="first-data">
              A Day Like Today but in {game.released.slice(0, 4)}
            </div>
            <div>{game.name} was released</div>
            <div className="yt-link">
              <a href={urlYT} target="_blank" rel="noreferrer">
                Look on Youtube
              </a>
            </div>
          </div>
          <img className="game-img" src={img()} alt={game.name} />
        </div>

        <div className="div-btn">
          <div>
            {/* prueba Routuing */}

            <Link to={`/${iGame}`}>
             
            <button
              //disabled={iGame===''}
              className="nes-btn is-error"
              onClick={ ()=>{rndPage()}}
            >
              <div>try again</div>
            </button>
           </Link >
          </div>
          <div className="div-share">
            <button>
              <a
                target="_blank"
                rel="noreferrer"
                href={fbUrl}
                className="fb-xfbml-parse-ignore"
              >
                <i className="nes-icon facebook is-medium"></i>
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default VGData;
