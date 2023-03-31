export function DummyTv(){
    const tv = [
        {
            image:'/assets/images/film/tv-1',
            name:'The Witcher',
            year:'2019'
        },
        {
            image:'/assets/images/film/tv-2',
            name:'Persona 3 The Movie',
            year:'2016'
        },
        {
            image:'/assets/images/film/tv-3',
            name:'Game Of Thrones',
            year:'2011'
        },
        {
            image:'/assets/images/film/tv-4',
            name:'Money Heist',
            year:'2017'
        },
        {
            image:'/assets/images/film/tv-5',
            name:'Touch',
            year:'2020'
        },
        {
            image:'/assets/images/film/tv-6',
            name:'Arrow',
            year:'2012'
        },
        {
            image:'/assets/images/film/tv-12',
            name:'You',
            year:'2018'
        },
        {
            image:'/assets/images/film/tv-7',
            name:'Castlevania',
            year:'2017'
        },
        {
            image:'/assets/images/film/tv-8',
            name:'The OA',
            year:'2016'
        },
        {
            image:'/assets/images/film/tv-9',
            name:'Locke & Key',
            year:'2020'
        },
        {
            image:'/assets/images/film/tv-10',
            name:'Reply 1988',
            year:'2015'
        },
        {
            image:'/assets/images/film/tv-11',
            name:'Panji Manusia Millenium',
            year:'1999'
        },
        
    ];

    return tv.map(({image,name,year})=> {
        return (
            <div className="card_custom">
             <img src={`${image}.png`}></img>
             <div ><a className="name_style" href="#">{name}</a></div>
             <h3 className="text-slate-700" style={{color:"#929292", fontSize:"14px"}}>{year}</h3>   
            </div>
            );    
        }
    )
}

export function DummyMovies(){
    const movies = [
        {
            images:'/assets/images/film/movie-1',
            name:'The Godfather',
            year:'1972'
        },
        {
            images:'/assets/images/film/movie-2',
            name:'The Dark Knight',
            year:'2008'
        },
        {
            images:'/assets/images/film/movie-3',
            name:'Avenger: Endgame',
            year:'2019'
        },
        {
            images:'/assets/images/film/movie-4',
            name:'Joker',
            year:'2019'
        },
        {
            images:'/assets/images/film/movie-5',
            name:'Gisaengchung',
            year:'2019'
        },
        {
            images:'/assets/images/film/movie-6',
            name:'Chernobyl',
            year:'2019'
        },
        {
            images:'/assets/images/film/movie-7',
            name:'Serigala Terakhir',
            year:'2009'
        },
        {
            images:'/assets/images/film/movie-8',
            name:'Grave of the Fireflies',
            year:'1988'
        },
        {
            images:'/assets/images/film/movie-9',
            name:'My Neighbor Totoro',
            year:'1988'
        },
        {
            images:'/assets/images/film/movie-10',
            name:'A Quiet Place: Part II',
            year:'2020'
        },
        {
            images:'/assets/images/film/movie-11',
            name:'Frozen 2',
            year:'2019'
        },
        {
            images:'/assets/images/film/movie-12',
            name:'Suicide Squad',
            year:'2016'
        },
    ];

    return movies.map(({images,name,year})=> {
        return (
            <div className="card_custom">
             <img src={`${images}.png`}></img>
             <div ><a className="name_style" href="#">{name}</a></div>
             <h3 className="text-slate-700" style={{color:"#929292", fontSize:"14px"}}>{year}</h3>   
            </div>
            )    
        }
    )
}
