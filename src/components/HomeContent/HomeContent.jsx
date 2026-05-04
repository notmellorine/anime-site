import { Banner } from './Banner';
import { PopularHome } from './PopularListHome';
import { RecentAnimeHome } from './RecentAnimeHome';
import { RecentEpisodesHome } from './RecentEpisodesHome';
import { RecentFilmsHome } from './RecentFilmsHome';

import style from './HomeContent.module.css';

const HomeContent = () => {
    return (
        <div className={style.Content}>
            <Banner />
            <RecentEpisodesHome />
            <RecentAnimeHome />
            <RecentFilmsHome />
            <PopularHome />
        </div>
    )
}

export { HomeContent };