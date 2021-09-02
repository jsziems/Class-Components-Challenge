import React, { Component } from 'react';
import CatIndex from './CatIndex'
import { Container } from 'reactstrap';


class Cats extends Component {

  render() {
    return (
      <div>
        <Container className="App">
          <br />
          <h1 className="App-intro">
            To complete this challenge, complete and fix the existing code to have it do the following:
          </h1>

          <hr />

          <ul>
            <li>Render the list of cat breeds to the screen</li>
            <li>Use props correctly</li>
            <li>Use .map() correctly</li>
            <li>Ensure there are no errors</li>
          </ul>
          <hr />
          < CatIndex />
        </Container>

      </div>
    );
  }
}

export default Cats
