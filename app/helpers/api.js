import dateGen from './dateGenerator';

const baseUrl = 'https://api.rawg.io/api';

async function consult() {
  const searchParams = new URLSearchParams();

  searchParams.append('key', process.env.API_KEY);
  searchParams.append('dates', dateGen());
  searchParams.append('platforms', '12,119,167,107,49,79,43,24,83,27');
  searchParams.append('-rating', '3');
  searchParams.append('page_size', '40');

  const url = `${baseUrl}/games?${searchParams}`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    let rand = Math.floor(Math.random() * data.results.length);

    return data.results[rand];
  } catch (error) {
    console.log(error);
  }
}

export { consult };
