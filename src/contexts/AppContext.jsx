import { createContext, useState } from "react";
import { api } from '../services/api';

export const AppContext = createContext({});

export const AppContextProvider = (props) => {
    const [animes, setAnimes] = useState([]);
    const { children } = props;

    const getAnime = async () => {
        const { animes = [] } = await api.get('anime');
        setAnimes([
            ...animes
        ])
    }

    return (
        <AppContext.Provider value={{
            getAnime
        }}>
            {children}
        </AppContext.Provider>
    )
}

