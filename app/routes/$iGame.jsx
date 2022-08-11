import { useLoaderData, Link } from '@remix-run/react';
import { consult} from '../helpers/api'
import { json } from '@remix-run/node';
import Navbar from '~/components/Navbar';

import VGData from '~/components/VGData';

import styles from '~/styles/main.css';


// loader sólo corre en el servidor

export   async function  loader( {params}){
	
	const iGame  =  params.iGame
	const data = await consult()//le enviamos el dato al componente vgdata
  return iGame,json(data);


}

export function links() {
	return [
	  {
		rel: 'preconnect',
		href: 'https://fonts.googleapis.com',
	  },
	  {
		rel: 'preconnect',
		href: 'https://fonts.gstatic.com',
		crossOrigin: true,
	  },
	  {
		rel: 'preconnect',
		href: 'https://unpkg.com',
	  },
	  {
		rel: 'preconnect',
		href: 'https://unpkg.com',
		crossOrigin: true,
	  },
	  {
		rel: 'icon',
		href: 'favicon.png',
		type: 'image/png',
	  },
	  {
		rel: 'stylesheet',
		href: 'https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap',
	  },
	  {
		rel: 'stylesheet',
		href: 'https://unpkg.com/nes.css/css/nes.css',
	  },
	  { rel: 'stylesheet', href: styles },
	];
  }
export function meta({ data: game }) {
 // console.log(`head data: `, game);

  return {
    title: game.name,
    'og:image': game.background_image ?? 'no_img.jpg',
    'og:image:secure_url': game.background_image ?? 'no_img.jpg',
    'og:description': `A Day Like Today but in ${game.released.slice(0, 4)}, ${
      game.name
    } was released`,
  };
}

// Success es un componente de react que corre en el cliente

export  default  function  Success() {

//const  {iGame}  =  useLoaderData()

return (
	<>
	<Navbar/>

	<VGData />
	</>
	

);

}



