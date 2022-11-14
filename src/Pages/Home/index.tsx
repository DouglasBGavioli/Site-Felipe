import Banner from "../../Assets/bannerHome.jpg"
import Caminhao from "../../Assets/caminhao.jpg"
import Terra from "../../Assets/terra.jpg"

import "./style.min.css"
export function Home() {
    return (
        <main className="cr-home">
            <div className="cr-home__banner">
                <img src={Banner} alt="Banner" />
            </div>
            <div className="cr-home__miniBanners">
                <img src={Caminhao} alt="caminhao" />
                <img src={Terra} alt="terra" />
            </div>
        </main>
    )
}