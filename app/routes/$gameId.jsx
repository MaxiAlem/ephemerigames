 import { useLoaderData, Link } from '@remix-run/react';
 import { json } from '@remix-run/node';

 import { consult,lenGames} from '../helpers/api'


 import Navbar from '~/components/Navbar';
 import VGData from '~/components/VGData';

 import styles from '~/styles/main.css';

const lenG = lenGames
// // loader sólo corre en el servidor

export async function   loader({request,params}){

	
	const data = await consult();
	const  gameId  =  params.gameId
	return  json({data,gameId})

}
export function links() {
	return [
	  {
		rel: 'preconnect',
		href: 'https://fonts.googleapis.com',
	  },
	//   {
	// 	rel: 'preconnect',
	// 	href: 'https://fonts.gstatic.com',
	// 	crossOrigin: true,
	//   },
	  {
		rel: 'preconnect',
		href: 'https://unpkg.com',
	  },
	//   {
	// 	rel: 'preconnect',
	// 	href: 'https://unpkg.com',
	// 	crossOrigin: true,
	//   },
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

	console.log(`head data: `, game[gameId].name);
	
	//como modificamos el loader, ahora nos devuelve un object con los dos elementos que contiene
	//haciendo magia con destructuring, nos olvidamos del problema
  return {
    title: game[gameId].name,
    'og:image': game[gameId].background_image ?? 'no_img.jpg',
    'og:image:secure_url': game[gameId].background_image ?? 'no_img.jpg',
    'og:description': `A Day Like Today but in ${game[gameId].released.slice(0, 4)}, ${
      game[gameId].name
    } was released`,
  };
}

// Success es un componente de react que corre en el cliente

export  default  function  Success() {

	const  {data, gameId}  =  useLoaderData()
	console.log(data[gameId])
return (
	<>
		<Navbar/>
		
		<VGData />
	</>
	 );



}



// //////////



// Success es un componente de react que corre en el cliente

// export  default  function  Success() {

// const  {data,gameId}   =  useLoaderData()
// console.log(data)
// return (

// 	<div>

// 		 <h2>index {gameId} </h2> 

// 		<p>juego : {data.name}</p>

// 	</div>

// );

// }

