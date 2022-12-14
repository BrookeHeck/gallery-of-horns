import React from "react";
import Header from './Header';
import Main from './Main';
import Footer from "./Footer";
import './App.css';
import data from "./data.json"
import SelectedBeast from "./SelectedBeast";
import FilterForm from "./FilterForm";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredData: data,
      showBeast: false,
      title: '',
      url: '',
      alt: ''
    }
  }

  handleBeastSelect = (title, url, alt) => {
    this.setState({
      showBeast: true,
      title: title,
      url: url,
      alt: alt
    });
  }

  handleModalClose = () => {
    this.setState({showBeast: false})
  }

  handleSearch = inputString => {
    if(inputString !== '') {
      this.setState({
        filteredData: data.filter(beast => beast.title.toLowerCase().includes(inputString.toLowerCase()))
      });
    } else if(inputString === '') {
      this.setState({filteredData: data})
    }
  }

  handleHornSearch = (hornsSelected) => {
    console.log(hornsSelected);
    if(hornsSelected !== 0) {
      this.setState({filteredData: data.filter(beast => beast.horns === hornsSelected)})
    } else {
      this.setState({filteredData: data})
    }
  }
  
  render() {
    return (
      <>
        <Header/>
        <FilterForm 
          handleSearch={this.handleSearch}
          handleHornSearch={this.handleHornSearch}
        />
        <Main
          data={this.state.filteredData}
          handleBeastSelect={this.handleBeastSelect}
        />
        <SelectedBeast 
          showBeast={this.state.showBeast}
          handleBeastSelect={this.handleBeastSelect}
          handleModalClose={this.handleModalClose}
          title={this.state.title}
          url={this.state.url}
          alt={this.state.alt}
        />
        <Footer/>
      </>
    );
  }
}

export default App;
