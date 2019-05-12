import React from 'react';
import './App.scss';
import Gallery from '../Gallery';

class App extends React.Component {
  static propTypes = {
  };
  static searchTimeout = 500

  constructor() {
    super();
    this.timer = null
    this.state = {
      tag: 'art'
    };

    this.searchChangeHandler = this.searchChangeHandler.bind(this);
  }

  searchChangeHandler(event) {
    if (this.timer != null) {
      clearTimeout(this.timer)
    }
    let tag = event.target.value
    this.timer = setTimeout(()=> {
      this.setState({tag: tag})
    }, App.searchTimeout)
  }

  render() {
    return (
      <div className="app-root">
        <div className="app-header">
          <h2>Flickr Gallery</h2>
          <input className="app-input" onChange={this.searchChangeHandler} defaultValue={this.state.tag} />
        </div>
        <Gallery tag={this.state.tag}/>
      </div>
    );
  }
}

export default App;
