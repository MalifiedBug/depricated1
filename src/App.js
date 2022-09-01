import logo from './logo.svg';
import './App.css';
import unirest from 'unirest';

class App extends React.Component {

  sendRequest = (title) => {
    const req = unirest("GET", "https://movie-database-imdb-alternative.p.rapidapi.com/");
  
    req.query({
      "page": "1",
      "r": "json",
      "s": title
    });
  
    req.headers({
      "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
      "x-rapidapi-key": "cb69ccf1c8msh1ae5867f9fea874p1dde37jsna823b6df44ad"
    });
  
  
    req.end(function (res) {
      if (res.error) throw new Error(res.error);
  
      console.log(res.body);
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
      </div>
    );
  }






  
}
  



export default App;
