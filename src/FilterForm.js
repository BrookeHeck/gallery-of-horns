import React from "react";
import './FilterForm.css';
import Form from 'react-bootstrap/Form';

class FilterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {searchStr: ''}
  }

  handleEnteredSearch = (event) => {
    this.setState({searchStr: event.target.value});
    this.props.handleSearch(this.state.searchStr);
  }

  render() {
    return (
      <Form className="searchForm">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="text" placeholder="Search" onChange={this.handleEnteredSearch}/>
        </Form.Group>
      </Form>
    )
  }
}

export default FilterForm;