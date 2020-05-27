import React, { Component } from "react";

class GifSearch extends Component {
  state = {
    search: "",
  };

  handleSubmit = (event) => {
      event.preventDefault()
      this.props.fetchGifs(this.state.search)
  }
  
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.search} onChange={event => this.setState({search: event.target.value})}/>
      </form>
    );
  }
}

export default GifSearch;
