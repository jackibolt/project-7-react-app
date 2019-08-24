
// Import Dependencies
import React, {Component} from 'react';
import axios from 'axios';
import {
  BrowserRouter,
} from 'react-router-dom';


// Import Styles
import './App.css';
import './css/index.css';


// Import Components
import PhotoContainer from './components/PhotoContainer';
import SearchForm from './components/SearchForm';
import Nav from './components/Nav';
import apiKey from './components/config';



class App extends Component {

  state = {
    pics: [],
    searchQuery: 'turtles'
  }

  componentDidMount() {

  }

  performSearch = query => {
    // console.log(this.state.searchQuery)
    if (this.state.searchQuery !== query){
      this.setState({
        searchQuery: query
      })

    // console.log(this.state.searchQuery)

    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${this.state.searchQuery}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          pics: response.data.photos.photo
        });
      })
      .catch(function (error) {
        console.log(error)
      })
    }
  }

    render () {
      return (
        <div>
          <header className="App-header">
            <h2>Photo Searcher</h2>
          </header>
          <BrowserRouter>
            <div className="container">
              <SearchForm onSearch={this.performSearch} />
              <Nav />
              <PhotoContainer data={this.state.pics} />
            </div>
          </BrowserRouter>
        </div>  
      );
    }
}

export default App;
