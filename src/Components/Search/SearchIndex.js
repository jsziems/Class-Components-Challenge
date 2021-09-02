import React, { Component } from 'react';
import { Input } from 'reactstrap';


class SearchIndex extends Component {
  constructor(props) {
    super(props)
    this.state = {
      things: ['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors', 'highlighter', 'stapler', 'paper clip', 'binder', 'hole punch', 'laminator', 'laminating sheets', 'protective sheets', 'index cards'],
      searchResults: []
    }
    this.searchFunction = this.searchFunction.bind(this)
  }

  searchFunction(value) {
    console.log('in searchFunction, value is', value)
    //     NOTE: Use curlies around the console log.
    // { console.log(this.state.things) }
    let searchResults = this.state.things.filter(srch => srch.includes(value.toLowerCase()))
    this.setState({searchResults: searchResults})
  }

  displaySearch = (result, resultId) => <p key={resultId}>{result}</p>

  render() {
    return (
      <div>
        <Input placeholder='Search Here' onChange={(e) => this.searchFunction(e.target.value)} />

        <h3>Results:</h3>
        {this.state.searchResults && this.state.searchResults.length > 0
          ? this.state.searchResults.map(this.displaySearch)
          : this.state.things.map(this.displaySearch)
        }

      </div>
    )
  }
}
export default SearchIndex;



