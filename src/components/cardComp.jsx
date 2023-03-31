import { DummyMovies, DummyTv } from "../data/dummy"
import "./style.css"

export default function CardTvShow (){
    return(
        <div className="flex-col" style={{background:"#000000", width:"1500px"}}>
            <h3 style={{color:"white"}}>TV Series</h3>
                    <div className="flex-wrap d-flex mr-2">
                        <DummyTv ></DummyTv>
                    </div>
                </div>
    )
}
export function CardMovies (){
    return(
        
        <div className="flex-col" style={{background:"#000000", width:"1500px"}}>
            <h3 style={{color:"white"}}>Movies</h3>
            <div className="d-flex flex-wrap " >
                <DummyMovies ></DummyMovies>
            </div>
        </div>
    )
}