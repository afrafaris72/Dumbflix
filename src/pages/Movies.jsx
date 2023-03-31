import CardTvShow, { CardMovies } from "../components/cardComp";
import Jumbo2 from "../components/Jumbotron2";
import Jumbo3 from "../components/Jumbotron3";
import JumPart2 from "../components/JumPart2";
import JumPart3 from "../components/JumPart3";
import NavbarComponent from "../components/myNavbar";

function Movies(){
    return(
        <>
            <NavbarComponent></NavbarComponent>
            <Jumbo3></Jumbo3>
            <JumPart3></JumPart3>
            <CardMovies></CardMovies>
        </>
    )
}

export default Movies;