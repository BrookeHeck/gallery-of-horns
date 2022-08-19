import React from "react";
import './FilterForm.css';
import Form from 'react-bootstrap/Form';

class FilterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchStr: '',
      hornsSelected: 0
    }
  }

  handleEnteredSearch = (event) => {
    this.setState({searchStr: event.target.value}, () => {this.props.handleSearch(this.state.searchStr)});
  }

  handleHornFilter = (event) => {
    this.setState({hornsSelected: Number.parseInt(event.target.value)}, () => {this.props.handleHornSearch(this.state.hornsSelected)});
  }

  render() {
    return (
      <Form className="searchForm">
        <Form.Group className="mb-3">
          <Form.Label htmlFor="search">Search: </Form.Label>
          <Form.Control type="text" id="search" placeholder="Search" onChange={this.handleEnteredSearch}/>
          <Form.Label htmlFor="hornSelect">Number of Horns: </Form.Label>
          <Form.Select id="hornSelect" aria-label="Default select example" onChange={this.handleHornFilter}>
            <option value="0">Search by Number of Horns</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Form.Group>
      </Form>
    )
  }
}

export default FilterForm;