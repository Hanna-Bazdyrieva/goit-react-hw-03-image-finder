// import Box from 'components/Box';
import { Component } from 'react';
import {
  StyledBar,
  SearchForm,
  ButtonSearch,
  SearchInput,
} from './Searchbar.styled';
import { FcSearch } from 'react-icons/fc';
// import { GoSearch } from 'react-icons/go';

class Searchbar extends Component {
  state = {
    input: '',
  };

  handleInput = e => {
    this.setState({ input: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.input);
  };

  render() {
    return (
      <StyledBar>
        <SearchForm onSubmit={this.handleSubmit}>
          <ButtonSearch type="submit">
            {/* <ButtonLabel class="button-label"> */}
            <FcSearch />
            {/* <GoSearch /> */}
            {/* </ButtonLabel> */}
          </ButtonSearch>
          <SearchInput
            type="text"
            autocomplete="off"
            value={this.state.input}
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleInput}
          />
        </SearchForm>
      </StyledBar>
    );
  }
}
export default Searchbar;
