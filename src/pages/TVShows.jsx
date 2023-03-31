import CardTvShow, { CardMovies } from "../components/cardComp";
import Jumbo2 from "../components/Jumbotron2";
import JumPart2 from "../components/JumPart2";
import NavbarComponent from "../components/myNavbar";

function TVShows(){
    return(
        <>
            <NavbarComponent></NavbarComponent>
            <Jumbo2></Jumbo2>
            <JumPart2></JumPart2>
            <CardTvShow></CardTvShow>
        </>
    )
}

export default TVShows;