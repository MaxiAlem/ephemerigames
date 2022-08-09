import { useLoaderData } from '@remix-run/react';

const VGData = () => {
  const game = useLoaderData();
  console.log(game);

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

  return (
    <>
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
            <button
              className="nes-btn is-error"
              onClick={() => {window.location.reload()
                /*take one*/
              }}
            >
              <div>try again</div>
            </button>
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
