import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

import style from './SearchIcon.module.css';

const SearchIcon = () => {
    return (
        <div className={style.SearchIcon}>
            <MagnifyingGlassIcon />
        </div>
  )
}

export { SearchIcon };