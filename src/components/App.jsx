import { Component } from 'react';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
// import Modal from './Modal';

class App extends Component {
  state = {
    query: '',
  };

  changeQuery = query => {
    this.setState({ query });
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.changeQuery} />
        <ImageGallery query={this.state.query} />
      </>
    );
  }
}

export default App;
