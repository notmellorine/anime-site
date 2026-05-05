import { EpisodesAnime } from '../../../Helpers'

import { Link } from 'react-router-dom'
import style from './RecentEpisodesHome.module.css'

const RecentEpisodesHome = () => {


    const episodesRecentList = EpisodesAnime.map(episode =>
        <Link key={episode.id} to={`/episode/${episode.id}`}>
            <div className={style.episodesRec} style={{backgroundImage: `url(${episode.img})`}}>
                <p>{episode.episodeNumber}</p>
                <p>{episode.animeName}</p>
            </div>
        </Link>
    )

    return (
        <div className={style.RecentEpisodesHome}>
            <h2>ÚLTIMOS EPISÓDIOS</h2>
            <Link to="">
                <div className={style.episodesRow}>
                    {episodesRecentList}  
                </div>
            </Link>
        </div>
    )
}

export { RecentEpisodesHome };