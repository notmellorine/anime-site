import style from './Banner.module.css';

const Banner = () => {
    return (
        <div className={style.banner}>
                <img src='src\assets\img-home.png' alt='home' className={style.bannerImg} />
                <div className={style.bannerContent}>
                    <h1><span>NEO GENESIS:</span> RISING</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div className={style.buttons}>
                        <button className={style.btnRosa}>ASSISTIR AGORA</button>
                        <button className={style.btnVazado}>+ MINHA LISTA</button>
                    </div>
                </div>
            </div>
    )
}

export { Banner };