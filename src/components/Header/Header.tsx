import { Link } from "react-router-dom"

import style from "./Header.module.css"

import { SearchBar } from "../SearchBar"
import { UserIcon } from "../Icons"

const Header = () => {
    return (
        <div className={style.Header}>
            <Link to="/">
                <h1>
                    <span>ANIME </span> 
                    SITE
                </h1>
            </Link>
            <SearchBar />
            <UserIcon />
        </div>
    )
}

export { Header }