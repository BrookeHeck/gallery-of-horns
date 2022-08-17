import React from "react";
import './Main.css';
import HornedBeast from "./HornedBeast";

class Main extends React.Component {

  render() {
    return (
      <main>
        {this.props.data.map((beast, idx) => (
          <HornedBeast
            title={beast.title}
            imageUrl={beast.image_url}
            imageAlt={beast.description}
            description={beast.description}
            key={idx}
            handleBeastSelect={this.props.handleBeastSelect}
          />
        ))}
      </main>
    );
  }
}

export default Main;