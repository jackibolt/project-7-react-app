
// Import Dependencies
import React, {Component} from 'react';
import axios from 'axios';
import {
  BrowserRouter,
  // Switch,
  Redirect,
  Route,
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
    searchQuery: '',
    buttonTags: ['Cats', 'Dogs', 'Kangaroos']
  }

  componentDidMount() {

  }

  performSearch = query => {

    // set state of searchQuery to form input value
    if (this.state.searchQuery !== query){
      this.setState({
        searchQuery: query
      })
    
      // get JSON data corresponding to searchQuery
      axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
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
    // console.log(this.state.searchQuery)
    const searchInput = this.state.searchQuery
    return (
      <div>
        <header className="App-header">
          <h2>Photo Searcher</h2>
        </header>
        <BrowserRouter>
          <div className="container">
            <SearchForm 
              onSearch={this.performSearch} />
            
            <Nav 
              onClick={this.performSearch}
              navButtons={this.state.buttonTags} />

            <Route exact path='/' render={ () => <Redirect to={`/${this.state.buttonTags[0]}`} /> } /> 
            <Route path={`/:${searchInput}`} render={ () => 
              <PhotoContainer 
                data={this.state.pics}
                searchTitle={this.state.searchQuery} />} />
          </div>

        </BrowserRouter>
      </div>  
    );
  }
}

export default App;
