import { RecentAnime } from '../../../Helpers'

import { Link } from 'react-router-dom'
import style from './RecentAnimeHome.module.css'

const RecentAnimeHome = () => {


    const animeRecentList = RecentAnime.map(anime =>
        <Link key={anime.id} to={`/anime/${anime.animeName}`}>
            <div className={style.animeRec} style={{backgroundImage: `url(${anime.img})`}}>
                <p>{anime.rate}</p>
                <p>{anime.animeName}</p>
            </div>
        </Link>
    )

    return (
        <div className={style.RecentAnimeHome}>
            <h2>ANIMES LANÇADOS RECENTEMENTE</h2>
                <div className={style.animeRow}>
                    {animeRecentList}  
                </div>
        </div>
    )
}

export { RecentAnimeHome };