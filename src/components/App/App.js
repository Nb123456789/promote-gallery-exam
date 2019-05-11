import React from 'react';
import './App.scss';
import Gallery from '../Gallery';

class App extends React.Component {
  static propTypes = {
  };

  constructor() {
    super();
    this.doSearch = this.doSearch.bind(this);
    this.timeout=0;
    this.state = {
      tag: 'art'
    };
  }

  doSearch(event){
     var searchText = event.target.value;
     if(this.timeout) clearTimeout(this.timeout);
     this.timeout = setTimeout(function(){
                      this.setState({
                          tag: event.target.value
                      })
                    }.bind(this),500);
   }

  render() {
    return (
      <div className="app-root">
        <div className="app-header">
          <h2>Flickr Gallery</h2>
          <input className="app-input" onChange={event => this.doSearch({event})} value={this.state.tag}/>
        </div>
        <Gallery tag={this.state.tag}/>
      </div>
    );
  }
}

export default App;
