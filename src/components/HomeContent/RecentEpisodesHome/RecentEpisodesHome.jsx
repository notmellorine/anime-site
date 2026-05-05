import { EpisodesAnime } from '../../../Helpers'

import { Link } from 'react-router-dom'
import style from './RecentEpisodesHome.module.css'

const RecentEpisodesHome = () => {

    // const episodesAnime = [
    //    {
    //     id: 1,
    //     animeName: "Atelier of Witch Hat",
    //     episodeNumber: 1,
    //     img: "https://i.redd.it/xc7nhtys0f3f1.gif"
    //    },
    //    {
    //     id: 2,
    //     animeName: "Re:Zero kara Hajimeru Isekai Seikatsu 4th Season",
    //     episodeNumber: 2,
    //     img: "https://i.redd.it/xc7nhtys0f3f1.gif"
    //    },
    //    {
    //     id: 3,
    //     animeName: "Classroom of the Elite 4th Season: Second Year, First Semester",
    //     episodeNumber: 3,
    //     img: "https://i.redd.it/xc7nhtys0f3f1.gif"
    //    },
    //    {
    //     id: 4,
    //     animeName: "That Time I Got Reincarnated as a Slime Season 4",
    //     episodeNumber: 4,
    //     img: "https://i.redd.it/xc7nhtys0f3f1.gif"
    //    },
    //    {
    //     id: 5,
    //     animeName: "Daemons of the Shadow Realm",
    //     episodeNumber: 5,
    //     img: "https://i.redd.it/xc7nhtys0f3f1.gif"
    //    },
    //    {
    //     id: 6,
    //     animeName: "The Angel Next Door Spoils Me Rotten 2",
    //     episodeNumber: 6,
    //     img: "https://i.redd.it/xc7nhtys0f3f1.gif"
    //    }
    // ]

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