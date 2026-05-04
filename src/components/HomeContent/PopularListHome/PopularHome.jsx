import { Link } from 'react-router-dom'
import style from './PopularHome.module.css'

const PopularHome = () => {

    const popularAnime = [
        {
            id: 1,
            animeName: "Atelier of Witch Hat",
            rate: 9.8,
            img: "https://i.redd.it/xc7nhtys0f3f1.gif"
        },
        {
            id: 2,
            animeName: "Re:Zero kara Hajimeru Isekai Seikatsu 4th Season",
            rate: 8.91,
            img: "https://i.redd.it/xc7nhtys0f3f1.gif"
        },
        {
            id: 3,
            animeName: "Classroom of the Elite 4th Season: Second Year, First Semester",
            rate: 8.16,
            img: "https://i.redd.it/xc7nhtys0f3f1.gif"
        },
        {
            id: 4,
            animeName: "That Time I Got Reincarnated as a Slime Season 4",
            rate: 8.14,
            img: "https://i.redd.it/xc7nhtys0f3f1.gif"
        },
        {
            id: 5,
            animeName: "Daemons of the Shadow Realm",
            rate: 8.04,
            img: "https://i.redd.it/xc7nhtys0f3f1.gif"
        },
        {
            id: 6,
            animeName: "The Angel Next Door Spoils Me Rotten 2",
            rate: 7.90,
            img: "https://i.redd.it/xc7nhtys0f3f1.gif"
        }
    ]

    // const animeNameList = popularAnime.map(animes => <p>{animes.animeName}</p>)

    const animePopularList = popularAnime.map(anime =>
        <Link key={anime.id} to={`/animePop/${anime.id}`}>
            <div className={style.animePop} style={{backgroundImage: `url(${anime.img})`}}>
                    <p>{anime.rate}</p>
                    <p>{anime.animeName}</p>
            </div> 
        </Link>
    )

    return (
        <div className={style.PopularHome}>
            <h2>POPULARES NO MOMENTO</h2>
                <div className={style.animeRow}>
                    {animePopularList}  
                </div>
        </div>
    )
}

export { PopularHome };