import { Button, Image, NavLink } from "react-bootstrap";

function JumPart2(){
    return(
        <>  
        
            
            <Image src="/assets/images/money.png"
                style={{
                    position: "absolute",
                    width: "537px",
                    height: "54px",
                    left: "150px",
                    top: "300px",
                }} ></Image>
            <Image src="/assets/images/hero/lacasadepapel-title.png"
                style={{
                    position: "absolute",
                    width: "615px",
                    height: "77.62px",
                    left: "150px",
                    top: "202px",
                }}></Image>
                <NavLink
                    style={{
                        position: "absolute",
                        width: "50px",
                        left: "150px",
                        top: "366px",
                        color: "white",
                        fontSize:"18px",
                        lineHeight:"150.2%",
                        fontWeight:"400",
                        textAlign:"center",
                    }}>2017</NavLink>
                <NavLink
                    style={{
                        position: "absolute",
                        width: "95px",
                        left: "218px",
                        top: "366px",
                        color: "white",
                        border:"1px solid",
                        borderRadius:"5px",
                        fontSize:"18px",
                        textAlign:"center",
                    }}>TV Series</NavLink>
                <Button 
                    style={{
                        position: "absolute",
                        width: "300px",
                        height:"60px",
                        left: "150px",
                        top: "442px",
                        color: "white",
                        background: "red",
                        fontWeight: "700",
                        fontSize: "24px",
                        textAlign:"center",
                    }}>Watch Now!</Button>
        </>
    )
}

export default JumPart2;