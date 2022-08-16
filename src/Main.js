import React from "react";
import './App.css';
import HornedBeast from "./HornedBeast";
import data from "./data.json"

class Main extends React.Component {

  render() {
    return (
      <main>
        {data.map(beast => (
          <HornedBeast
          title={beast.title}
          imageUrl={beast.image_url}
          imageAlt={beast.description}
          description={beast.description}
        />
        ))}
      </main>
    );
  }
}

export default Main;