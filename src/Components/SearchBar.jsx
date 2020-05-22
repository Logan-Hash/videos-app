import React, { Component } from 'react'

class SearchBar extends Component {
  state = { term: ''};

  onChangeHandler = (e) => {
    this.setState({ term: e.target.value })
  }

  onSubmitHandler = (e) => {
    e.preventDefault();
    this.props.onSubmitHandler(this.state.term)
  }
  render() {
    return (
      <div>
        <form className="ui form" onSubmit={this.onSubmitHandler}>
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.value}
              onChange={this.onChangeHandler}
            />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar
