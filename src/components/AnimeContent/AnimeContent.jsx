import { Link, useParams } from 'react-router-dom';
import { RecentAnime } from '../../Helpers';
import style from './AnimeContent.module.css';

const AnimeContent = () => {

    const { animeName } = useParams();

    const animeInfo = RecentAnime.find(anime =>
        anime.animeName == animeName)

    // const episodesList = RecentAnime.map(anime =>
    //     <Link key={anime.id} to={`/episode/${anime.episodesNumber}`}>
    //         <div style={{backgroundImage: `url(${anime.img})`}}>

    //         </div>
    //     </Link>
    // )

    const episodesList = ({ count }) => (
        <div>
            {Array.from({ length: count }).map((_, anime) => (
            <li key={anime.id}>Item {anime.episodesNumber + 1}</li>
            ))}
        </div>
);

    return (
        <div className={style.AnimeContent}>
            <img src={animeInfo.img} alt="" />
            <h1>{animeInfo.animeName}</h1>
            <div className={style.subtitle}>
                <p>{animeInfo.episodesNumber} episódios |</p>
                <p>| {animeInfo.genre}</p>
            </div>
            <p>{animeInfo.description}</p>
            {episodesList}
        </div>
    )
}

export { AnimeContent };