import React from "react";
import './HornedBeast.css';

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      votes: 0
    }
  }

  handleVote = () => this.setState({votes: this.state.votes + 1});

  render() {
    return (
      <>
        <section className="hornedBeast">
          <h2>{this.props.title} <sup>{this.state.votes}</sup></h2>
          <p className="vote" onClick={this.handleVote}>Vote</p>          
          <img src={this.props.imageUrl} alt={this.props.imageAlt} title={this.props.imageAlt}></img>
          <p>{this.props.description}</p>
        </section>
      </>
    )
  };
}

export default HornedBeast;