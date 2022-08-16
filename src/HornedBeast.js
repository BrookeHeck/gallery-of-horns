import React from "react";
import './HornedBeast.css';
import Card from 'react-bootstrap/Card';

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: 0
    }
  }

  handleLike = () => this.setState({likes: this.state.likes + 1});

  render() {
    return (
      <>
        <Card className="beastCard">
          <Card.Img variant="top" src={this.props.imageUrl} alt={this.props.imageAlt} title={this.props.imageAlt} />
          <Card.Title>{this.props.title} <sup>{this.state.likes}</sup></Card.Title>
          <Card.Text>{this.props.description}</Card.Text>
          <div className="likeDiv" onClick={this.handleLike}>Like 💖</div>
        </Card>
      </>
    )
  };
}

export default HornedBeast;