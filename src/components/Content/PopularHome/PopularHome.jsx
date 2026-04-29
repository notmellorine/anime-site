import style from './PopularHome.module.css'

const PopularHome = () => {

    const popularAnime = [
        {
            id: 1,
            animeName: "Atelier of Witch Hat",
            rate: 9.8
        },
        {
            id: 2,
            animeName: "Re:Zero kara Hajimeru Isekai Seikatsu 4th Season",
            rate: 8.91
        },
        {
            id: 3,
            animeName: "Classroom of the Elite 4th Season: Second Year, First Semester",
            rate: 8.16
        },
        {
            id: 4,
            animeName: "That Time I Got Reincarnated as a Slime Season 4",
            rate: 8.14
        },
        {
            id: 5,
            animeName: "Daemons of the Shadow Realm",
            rate: 8.04
        },
        {
            id: 6,
            animeName: "The Angel Next Door Spoils Me Rotten 2",
            rate: 7.90
        }
    ]

    return (
        <div className={style.PopularHome}>
            <h2>POPULARES NO MOMENTO</h2>
            <div className={style.animePop}>
                <p>rate</p>
            </div>
            <p>anime title</p>
        </div>
    )
}

export { PopularHome };