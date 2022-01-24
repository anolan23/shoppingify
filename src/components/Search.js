import { Component } from 'react';
import { searchItems } from '../api';

class Search extends Component {
  state = { query: '' };

  async _onChange(e) {
    this.setState({ query: e.target.value });
    try {
      const items = await searchItems({ q: e.target.value });
      this.props.setItems(items);
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return (
      <div className="search">
        <span className="material-icons search__icon">search</span>
        <input
          type="text"
          className="search__input"
          placeholder="search items"
          value={this.state.query}
          onChange={this._onChange.bind(this)}
        />
      </div>
    );
  }
}
export default Search;
