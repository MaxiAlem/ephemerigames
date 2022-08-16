import dateGen from './dateGenerator';

const baseUrl = 'https://api.rawg.io/api';
 let lenGames = 0
async function consult() {
  const searchParams = new URLSearchParams();

  searchParams.append('key', process.env.API_KEY);
  searchParams.append('dates', dateGen());
  searchParams.append('platforms', '12,119,167,107,49,79,43,24,83,27');
  //searchParams.append('-rating', '3');
  searchParams.append('page_size', '40');

  const url = `${baseUrl}/games?${searchParams}`;
  
  try {
    const res = await fetch(url);
    const data = await res.json();
    
    //
    if (res.status !== 200) {
      const errorMsg = `Can't get data from api, status: ${
        res.status
      }, error: ${JSON.stringify(data)}`;

      throw new Error(errorMsg);
    }//
    //let rand = Math.floor(Math.random() * data.results.length);
    //lenGames =  await data.results.length
    return data.results;
  } catch (error) { 
    console.log(error);
    throw error;
  }

  
}

export { consult,lenGames };
