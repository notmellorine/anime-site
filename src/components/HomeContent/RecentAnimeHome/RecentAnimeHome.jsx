import { RecentAnime } from '../../../Helpers'

import { Link } from 'react-router-dom'
import style from './RecentAnimeHome.module.css'

const RecentAnimeHome = () => {

    // const recentAnime = [
    //     {
    //         id: 1,
    //         animeName: "Atelier of Witch Hat",
    //         rate: 9.8,
    //         img: "https://i.redd.it/xc7nhtys0f3f1.gif"
    //     },
    //     {
    //         id: 2,
    //         animeName: "Re:Zero kara Hajimeru Isekai Seikatsu 4th Season",
    //         rate: 8.91,
    //         img: "https://i.redd.it/xc7nhtys0f3f1.gif"
    //     },
    //     {
    //         id: 3,
    //         animeName: "Classroom of the Elite 4th Season: Second Year, First Semester",
    //         rate: 8.16,
    //         img: "https://i.redd.it/xc7nhtys0f3f1.gif"
    //     },
    //     {
    //         id: 4,
    //         animeName: "That Time I Got Reincarnated as a Slime Season 4",
    //         rate: 8.14,
    //         img: "https://i.redd.it/xc7nhtys0f3f1.gif"
    //     },
    //     {
    //         id: 5,
    //         animeName: "Daemons of the Shadow Realm",
    //         rate: 8.04,
    //         img: "https://i.redd.it/xc7nhtys0f3f1.gif"
    //     },
    //     {
    //         id: 6,
    //         animeName: "The Angel Next Door Spoils Me Rotten 2",
    //         rate: 7.90,
    //         img: "https://i.redd.it/xc7nhtys0f3f1.gif"
    //     }
    // ]

    const animeRecentList = RecentAnime.map(anime =>
        <Link key={anime.id} to={`/animeRec/${anime.id}`}>
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