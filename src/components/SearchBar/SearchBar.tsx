import style from './SearchBar.module.css';

const SearchBar = () => {
    return (
        <input type="text" placeholder="Ex. 3-gatsu no Lion" className={style.SearchBar} />
    )
}

export { SearchBar };