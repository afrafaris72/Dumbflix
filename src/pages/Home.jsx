import CardTvShow, { CardMovies } from "../components/cardComp";
import Jumbo from "../components/Jumbotron";
import JumPart from "../components/JumPart";
import NavbarComponent from "../components/myNavbar";

function Home () {
    document.title = `Dumbflix`;

    return (
        <div>
            <NavbarComponent/>
            <Jumbo></Jumbo>
            <JumPart></JumPart>
            <CardTvShow></CardTvShow>
            <CardMovies></CardMovies>
        </div>
    )

}

export default Home;