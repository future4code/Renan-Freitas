enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

type Info = {
    movieName: string,
    releaseYear: number,
    movieGenre: GENERO,
    rating?: number
}

function movieInfoObject(movieName: string, releaseYear: number, movieGenre: GENERO, rating?: number): Info {
    return rating > 0 ? {
        movieName: movieName,
        releaseYear: releaseYear,
        movieGenre: movieGenre,
        rating: rating
    }
    :
    {
        movieName: movieName,
        releaseYear: releaseYear,
        movieGenre: movieGenre
    }
}

console.log(movieInfoObject('Duna', 2021, GENERO.ACAO, 74))