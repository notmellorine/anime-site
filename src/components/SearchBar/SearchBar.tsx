import style from './SearchBar.module.css';

const SearchBar = () => {
    return (
        <div className={style.SearchBar}>
            <input type="text" placeholder="Ex. 3-gatsu no Lion" />
            <button>🔍︎</button>
        </div>
    )
}

export { SearchBar };