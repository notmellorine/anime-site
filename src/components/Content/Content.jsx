import { Banner } from './Banner';
import { PopularHome } from './PopularListHome';
import { RecentAnimeHome } from './RecentAnimeHome';
import { RecentEpisodesHome } from './RecentEpisodesHome';
import { RecentFilmsHome } from './RecentFilmsHome';

import style from './Content.module.css';

const Content = () => {
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

export { Content };