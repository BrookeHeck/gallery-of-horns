import React from "react";
import Modal from 'react-bootstrap/Modal';
import './SelectedBeast.css';

class SelectedBeast extends React.Component {

  render() {
    return (
      <>
        <Modal show={this.props.showBeast}>
          <Modal.Header closeButton onClick={this.props.handleModalClose}>
            <Modal.Title>{this.props.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={this.props.url} alt={this.props.alt} title={this.props.title}/>
          </Modal.Body>
        </Modal>
      </>
    )
  };

} 

export default SelectedBeast;
