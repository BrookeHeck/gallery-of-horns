import React from "react";
import './App.css';

class HornedBeast extends React.Component {

  render() {
    return (
      <>
        <section className="hornedBeast">
          <h2>{this.props.title}</h2>
          <img src={this.props.imageUrl} alt={this.props.imageAlt} title={this.props.imageAlt}></img>
          <p>{this.props.description}</p>
        </section>
      </>
    )
  };
}

export default HornedBeast;