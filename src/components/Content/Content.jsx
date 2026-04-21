import { PopularHome } from './PopularHome';
import { Banner } from './Banner';

import style from './Content.module.css';

const Content = () => {
    return (
        <div className={style.Content}>
            <Banner />
            <PopularHome />
        </div>
    )
}

export { Content };