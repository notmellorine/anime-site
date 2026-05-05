import { RecentFilm } from '../../../Helpers'

import { Link } from 'react-router-dom'
import style from './recentFilmsHome.module.css'

const RecentFilmsHome = () => {

    const filmRecentList = RecentFilm.map(film =>
        <Link key={film.id} to={`/film/${film.id}`}>
            <div className={style.filmRec} style={{backgroundImage: `url(${film.img})`}}>
                <p>{film.rate}</p>
                <p>{film.filmName}</p>
            </div>
        </Link>
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