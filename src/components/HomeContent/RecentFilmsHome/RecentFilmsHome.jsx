import style from './recentFilmsHome.module.css'

const RecentFilmsHome = () => {

    const recentFilm = [
        {
            id: 1,
            filmName: "Atelier of Witch Hat",
            rate: 9.8,
            img: "https://i.redd.it/xc7nhtys0f3f1.gif"
        },
        {
            id: 2,
            filmName: "Re:Zero kara Hajimeru Isekai Seikatsu 4th Season",
            rate: 8.91,
            img: "https://i.redd.it/xc7nhtys0f3f1.gif"
        },
        {
            id: 3,
            filmName: "Classroom of the Elite 4th Season: Second Year, First Semester",
            rate: 8.16,
            img: "https://i.redd.it/xc7nhtys0f3f1.gif"
        },
        {
            id: 4,
            filmName: "That Time I Got Reincarnated as a Slime Season 4",
            rate: 8.14,
            img: "https://i.redd.it/xc7nhtys0f3f1.gif"
        },
        {
            id: 5,
            filmName: "Daemons of the Shadow Realm",
            rate: 8.04,
            img: "https://i.redd.it/xc7nhtys0f3f1.gif"
        },
        {
            id: 6,
            filmName: "The Angel Next Door Spoils Me Rotten 2",
            rate: 7.90,
            img: "https://i.redd.it/xc7nhtys0f3f1.gif"
        }
    ]

    const filmRecentList = recentFilm.map(film =>
        <div key={film.id} className={style.filmRec} style={{backgroundImage: `url(${film.img})`}}>
                <p>{film.rate}</p>
                <p>{film.filmName}</p>
            </div>
    )

    return (
        <div className={style.recentFilmsHome}>
            <h2>FILMES LANÇADOS RECENTEMENTE</h2>
            <div className={style.filmRow}>
                {filmRecentList}  
            </div>
        </div>
    )
}

export { RecentFilmsHome };