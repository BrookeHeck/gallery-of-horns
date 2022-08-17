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

  handleImgClick = () => this.props.handleBeastSelect(this.props.title, this.props.imageUrl, this.props.alt);

  render() {
    return (
      <>
        <Card className="beastCard">
          <Card.Img 
             onClick={this.handleImgClick}
            variant="top" 
            className="beastImg" 
            src={this.props.imageUrl} 
            alt={this.props.imageAlt}
            title={this.props.title}
          />
          <Card.Title>{this.props.title} <sup>{this.state.likes}</sup></Card.Title>
          <Card.Text className="description">{this.props.description}</Card.Text>
          <div className="likeDiv" onClick={this.handleLike}>Like 💖</div>
        </Card>
      </>
    )
  };
}

export default HornedBeast;