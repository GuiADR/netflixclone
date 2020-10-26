/*
- originais da netflix
- recomendados (trending)
- em alta (top rated)
- ação
- comédia
- terror
- romance
- documentários
*/
import lang from './lang';


const basicFetch = async (endpoint) => {
    const req = await fetch(`${process.env.REACT_APP_API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}

export default {


    getHomeList: async () => {
        return [
            {
                slug: 'originals',
                title: lang.originals[sessionStorage.getItem('lang')],
                items: await basicFetch(`${lang.originals.query}language=${sessionStorage.getItem('lang')}&api_key=${process.env.REACT_APP_TMDB_KEY}`)
            },
            {
                slug: 'trending',
                title: lang.trending[sessionStorage.getItem('lang')],
                items: await basicFetch(`${lang.trending.query}language=${sessionStorage.getItem('lang')}&api_key=${process.env.REACT_APP_TMDB_KEY}`)
            },
            {
                slug: 'toprated',
                title: lang.toprated[sessionStorage.getItem('lang')],
                items: await basicFetch(`${lang.toprated.query}language=${sessionStorage.getItem('lang')}&api_key=${process.env.REACT_APP_TMDB_KEY}`)
            },
            {
                slug: 'action',
                title: lang.action[sessionStorage.getItem('lang')],
                items: await basicFetch(`${lang.action.query}language=${sessionStorage.getItem('lang')}&api_key=${process.env.REACT_APP_TMDB_KEY}`)
            },
            {
                slug: 'comedy',
                title: lang.comedy[sessionStorage.getItem('lang')],
                items: await basicFetch(`${lang.comedy.query}language=${sessionStorage.getItem('lang')}&api_key=${process.env.REACT_APP_TMDB_KEY}`)
            },
            {
                slug: 'horror',
                title: lang.horror[sessionStorage.getItem('lang')],
                items: await basicFetch(`${lang.horror.query}language=${sessionStorage.getItem('lang')}&api_key=${process.env.REACT_APP_TMDB_KEY}`)
            },
            {
                slug: 'romance',
                title: lang.romance[sessionStorage.getItem('lang')],
                items: await basicFetch(`${lang.romance.query}language=${sessionStorage.getItem('lang')}&api_key=${process.env.REACT_APP_TMDB_KEY}`)
            },
            {
                slug: 'documentary',
                title: lang.documentary[sessionStorage.getItem('lang')],
                items: await basicFetch(`${lang.documentary.query}language=${sessionStorage.getItem('lang')}&api_key=${process.env.REACT_APP_TMDB_KEY}`)
            },
        ];
    },
    getMovieInfo: async (movieId, type) => {
        let info = {};

        if(movieId) {
            switch(type) {
                case 'movie':
                    info = await basicFetch(`/movie/${movieId}?language=${sessionStorage.getItem('lang')}&api_key=${process.env.REACT_APP_TMDB_KEY}`);
                break;
                case 'tv':
                    info = await basicFetch(`/tv/${movieId}?language=${sessionStorage.getItem('lang')}&api_key=${process.env.REACT_APP_TMDB_KEY}`);
                break;
                default:
                    info = null;
                break;
            }
        }

        return info;
    }
}