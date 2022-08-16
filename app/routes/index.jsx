import { consult } from '~/helpers/api';

import Navbar from '~/components/Navbar';

import StarterVGData from '~/components/StarterVGData'
import styles from '~/styles/main.css';
import { json } from '@remix-run/node';

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

export function meta({ data: data}) {
	
	
	const {data:game,gameId:gameId}=data

    
    
  	//como modificamos el loader, ahora nos devuelve un object con los dos elementos que contiene
  	//haciendo magia con destructuring, nos olvidamos del problema
    return {
      title: game[1].name,
      'og:image': game[1].background_image ?? 'no_img.jpg',
      'og:image:secure_url': game[1].background_image ?? 'no_img.jpg',
      'og:description': `A Day Like Today but in ${game[1].released.slice(0, 4)}, ${
        game[1].name
      } was released`,
    };
  }

export async function   loader({request,params}){

	
	const data = await consult();
	const  gameId  =  params.gameId
	return  json({data,gameId})
}

export default function Index() {
  return (
    <>
      <Navbar />
      <StarterVGData/>
    </>
  );
}
