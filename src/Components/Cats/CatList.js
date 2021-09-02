import React, { Component } from 'react';

class CatList extends Component {
  constructor(props) {
    super(props)
    console.log(props.breeds)
  }

  render() {

    return (
     <>
        { this.props.breeds.map((breed, breedId) => <li key={breedId}>{breed}</li> )}

        {/*     NOTE: Outer curlies - turn javascript into jsx */}
        {/* map grabs the items from the array one at a time, and returns some type of data (in this case, a list item). */}

        {/*      NOTE: Console log the breedId index */}
        {/* { this.props.breeds.map((breed, breedId)=> (<li key={breedId}>{breed}</li>, console.log(breedId))) } */}

        {/*      NOTE: JSX before adding index (needed because react is returning HTML, not an array) */}
        {/* { this.props.breeds.map(breed => <li>{breed}</li>) } */}

        {/*      NOTE: Access array elements individually (instead of using map )
          <li>{this.props.breeds[0]}</li>
          <li>{this.props.breeds[1]}</li> */}

        {/*      NOTE: <ul> is in CatIndex, and each <li> is provided by CatList.  If the ul was defined in CatList's 
                 map instead of in CatIndex, it would return:
        <ul>
          <li>{this.props.breeds[0]}</li>
        </ul>
        <ul>
          <li>{this.props.breed[1]}</li>
        </ul> */}
     </>
    )
  }
}


  export default CatList
