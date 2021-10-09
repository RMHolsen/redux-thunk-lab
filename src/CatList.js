// write your CatList component here
import React from 'react';

class CatList extends React.Component {

  render() {
    return (
      <div>
        {this.props.catPics.map(cat => <img key={cat.id} src={cat.url} alt={cat.id} />)}
      </div>
    )
  }
}

export default CatList;