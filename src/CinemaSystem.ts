// 🎟️ Create a Movie Ticket Booking System where users can book tickets and check seat availability.
// 1. Create an enum called MovieGenre with at least 5 movie genres.
// 2. Create a tuple type called Seat which holds (rowLetter: string, seatNumber: number).
// 3. Create a type alias called Movie which contains: movieId (number), title (string), genre (MovieGenre), availableSeats (Seat[]).
// 4. Create a function called addMovie which adds a movie to the movies array. The function needs to return a Movie object.
// 5. Create a function called bookSeat which removes a seat from availableSeats if available. The return needs to be a string.
// 6. Create a function called checkSeatAvailability which returns true if a seat is available and false otherwise.

enum MovieGenre {
  Action = "Action",
  // add 4 more
  Horror = "Horror",
  SF = "SF",
  Anime = "Anime",
  Mystery = "Mystery"
}

type Seat = [string, number]

type Movie = {
  movieId: number;
  title: string;
  genre: MovieGenre;
  availableSeats: Seat[];
}

let movies: Movie[] = [];

function addMovie(movieId: number, title: string, genre: MovieGenre, availableSeats: Seat[]): Movie {
  const movie: Movie = {
    movieId,
    title,
    genre,
    availableSeats,
  };
  movies.push(movie);
  return movie;
}

function bookSeat(movieId: number, rowLetter: string, seatNumber: number): string {
  let message: string = " "
  let seatsLeft: Seat[] = []
  movies.forEach(movie =>{
    if(movie.movieId == movieId){
      movie.availableSeats.forEach(seat=>{
        if(seat[0] == rowLetter && seat[1] == seatNumber){
          message = `Seat ${rowLetter}${seatNumber} Booked Succesfully`
        }else{
          seatsLeft.push(seat)
        }
      })
      movie.availableSeats = seatsLeft
    }
  })
  return message
}

function checkSeatAvailability(movieId: number, rowLetter: string, seatNumber: number):boolean {
  const movie = movies.find((movie: Movie) => movie.movieId === movieId);
  if (!movie) {
    return false;
  }
  return movie.availableSeats.some(
    (seat: Seat) => seat[0] === rowLetter && seat[1] === seatNumber
  );
}

// Test cases (Create more if needed)
console.log(addMovie(1, "Avengers", MovieGenre.Action, [["A", 1], ["A", 2]])) // { movieId: 1, title: "Avengers", genre: MovieGenre.Action, availableSeats: [["A", 1], ["A", 2]] }
console.log(bookSeat(1, "A", 1)) // "Seat A1 booked successfully"
console.log(checkSeatAvailability(1, "A", 1)) // false