import Banner from "../../Assets/bannerHome.jpg"

import "./style.min.css"
export function Home() {
    return (
        <main className="cr-home">
            <div className="cr-home__banner">
                <img src={Banner} alt="Banner" />
            </div>
        </main>
    )
}