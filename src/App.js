import "./App.css";
import { useState } from "react";
import { MovieList } from "./MovieList";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import { AddColor } from "./AddColor";
import { MovieDetails } from "./MovieDetails";
import { NotFound } from "./NotFound";
import { TicTacToe } from "./TicTacToe";

export default function App() {
  const history = useHistory();
  const Initial_Movies = [
    {
      poster:
        "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
      name: "RRR",
      rating: 8.9,
      summary:
        "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
      trailer: "https://www.youtube.com/embed/f_vbAtFSEc0",
    },
    {
      name: "Iron man 2",
      poster:
        "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
      rating: 7,
      summary:
        "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",
      trailer: "https://www.youtube.com/embed/wKtcmiifycU",
    },
    {
      name: "No Country for Old Men",
      poster:
        "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
      rating: 8.1,
      summary:
        "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",
      trailer: "https://www.youtube.com/embed/38A__WT3-o0",
    },
    {
      name: "Jai Bhim",
      poster:
        "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
      summary:
        "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
      rating: 8.8,
      trailer: "https://www.youtube.com/embed/nnXpbTFrqXA",
    },
    {
      name: "The Avengers",
      rating: 8,
      summary: `Marvel's The Avengers (classified under the name Marvel Avengers
      Assemble in the United Kingdom and Ireland), or simply The Avengers, is
      a 2012 American superhero film based on the Marvel Comics superhero team
      of the same name.`,
      poster:
        "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
      trailer: "https://www.youtube.com/embed/eOrNdBpGMv8",
    },
    {
      name: "Interstellar",
      poster: "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
      rating: 8.6,
      summary: `When Earth becomes uninhabitable in the future, a farmer and ex-NASA
  pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team
  of researchers, to find a new planet for humans.`,
      trailer: "https://www.youtube.com/embed/zSWdZVtXT7E",
    },
    {
      name: "Baahubali",
      poster: "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
      rating: 8,
      summary: `In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.`,
      trailer: "https://www.youtube.com/embed/sOEg_YZQsTI",
    },
    {
      name: "Ratatouille",
      poster:
        "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
      rating: 8,
      summary: `Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.`,
      trailer: "https://www.youtube.com/embed/NgsQ8mVkN8w",
    },

    // {
    //   name: 96,
    //   poster:
    //     "https://a10.gaanacdn.com/gn_img/albums/9En3peWXDV/En3pYMLPWX/size_xxl_1535086576.webp",
    //   rating: 8.6,
    //   summary: `K Ramachandran, a photographer, gets nostalgic after he visits his school in his hometown. During a reunion with his classmates, he meets Janaki, his childhood sweetheart.`,
    // },

    // {
    //   name: "M.S. Dhoni: The Untold Story",
    //   poster: "https://m.media-amazon.com/images/I/71miTEyKvYL._SL1112_.jpg",
    //   rating: 7.9,
    //   summary: `M S Dhoni, a boy from Ranchi, aspires to play cricket for India. Though he initially tries to please his father by working for the Indian Railways, he ultimately decides to chase his dreams.`,
    // },
    // {
    //   name: "Dark Knight",
    //   poster:
    //     "https://i.pinimg.com/originals/0f/a9/af/0fa9afc141f0096e064a5ab1854b36f1.jpg",
    //   rating: 9,
    //   summary:
    //     "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    // },
    // {
    //   name: "King Kong",
    //   poster: "https://m.media-amazon.com/images/I/817FBcXLN2L._SL1500_.jpg",
    //   rating: 9,
    //   summary:
    //     "Peter Jackson's expansive remake of the 1933 classic follows director Carl Denham (Jack Black) and his crew on a journey from New York City to the ominous Skull Island to film a new movie. Accompanying him are playwright Jack Driscoll (Adrien Brody) and actress Ann Darrow (Naomi Watts), who is whisked away by the monstrous ape, Kong, after they reach the island. The crew encounters dinosaurs and other creatures as they race to rescue Ann, while the actress forms a bond with her simian captor.",
    // },
  ];
  const [movieList, setMovieList] = useState(Initial_Movies);

  return (
    <div className="App">
      <div className="navBar">
        <AppBar postion="static">
          <Toolbar>
            <Button color="inherit" onClick={() => history.push("/")}>
              🏠Home
            </Button>
            <Button
              color="inherit"
              onClick={() => history.push("/aboutMovies/add")}
            >
              🎞️AboutMovies
            </Button>
            <Button color="inherit" onClick={() => history.push("/addMovie")}>
              📽️AddMovies
            </Button>
            <Button color="inherit" onClick={() => history.push("/addcolor")}>
              📲AddColor
            </Button>
            <Button
              color="inherit"
              onClick={() => history.push("/tic-tac-toe")}
            >
              🎮TicTacToe
            </Button>
          </Toolbar>
        </AppBar>
      </div>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/films">
          <Redirect to="/aboutMovies" />
        </Route>
        <Route path="/aboutMovies/add">
          <div className="add-movie">
            <h2>A Small Website Created By Using "REACT"</h2>
          </div>
          <MovieList movies={movieList} setMovieList={setMovieList} />
        </Route>
        <Route path="/aboutMovies/:id">
          <MovieDetails movies={movieList} />
        </Route>
        <Route path="/addcolor">
          <AddColor />
        </Route>
        <Route path="/tic-tac-toe">
          <TicTacToe />
        </Route>
        <Route path="/addMovie">
          <AddMovie />
        </Route>
        <Route path="**">
          <NotFound />
        </Route>
      </Switch>
    </div>
  );

  function AddMovie() {
    const [name, setName] = useState("");
    const [rating, setRating] = useState("");
    const [poster, setPoster] = useState("");
    const [summary, setSummary] = useState("");
    const history = useHistory();
    return (
      <div className="textField">
        <TextField
          label="Enter a Name"
          variant="standard"
          style={{ width: "100%", margin: "0px 8px", paddingLeft: "5px" }}
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Enter a Name"
        />
        <TextField
          label="Enter Rating"
          variant="standard"
          style={{ width: "100%", margin: "0px 8px", paddingLeft: "5px" }}
          value={rating}
          onChange={(event) => setRating(event.target.value)}
          placeholder="Enter Rating"
        />
        <TextField
          label="Enter Poster Link"
          variant="standard"
          style={{ width: "100%", margin: "0px 8px", paddingLeft: "5px" }}
          value={poster}
          onChange={(event) => setPoster(event.target.value)}
          placeholder="Enter Poster Link"
        />
        <TextField
          label="Enter Summary"
          variant="standard"
          style={{ width: "100%", margin: "0px 8px", paddingLeft: "5px" }}
          value={summary}
          onChange={(event) => setSummary(event.target.value)}
          placeholder="Enter Summary"
        />
        <div className="btn">
          <Button
            variant="outlined"
            style={{ backgroundColor: "black", color: "#FFFFFF" }}
            onClick={() => {
              const newMovie = {
                name,
                poster,
                rating,
                summary,
              };
              // console.log(newMovie);
              setMovieList([...movieList, newMovie]);
              setName("");
              history.push("/aboutMovies/add");
            }}
          >
            AddMovie
          </Button>
        </div>
      </div>
    );
  }
}

function Home() {
  return <h1>Welcome to Movie App🤩😉🤩</h1>;
}


