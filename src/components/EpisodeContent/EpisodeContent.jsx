import { useParams } from "react-router-dom"
import { EpisodesAnime } from "../../Helpers"
import { VideoPlayer } from "./VideoPlayer/VideoPlayer"

import style from "./EpisodeContent.module.css"

const EpisodeContent = () => {

    const { id } = useParams();

    const episodeInfo = EpisodesAnime.find(episode =>
        episode.id == id)

    return (
        <div className={style.EpisodeContent}>
            <VideoPlayer />
            <div>
                <h1>{episodeInfo.animeName}</h1>
                <h2>Episódio {episodeInfo.id}</h2>
            </div>
        </div>
    )
}

export { EpisodeContent };