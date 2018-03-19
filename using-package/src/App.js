import React, {Component} from 'react';
import {Alert, Modal, Sunset} from 'assignment5';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
    };
  }

  handleClose = () => {
    this.setState({
      modalOpen: false,
    });
  };
  render() {
    return (
      <div>
        <Alert type="success">
          <Alert.Title>Success!</Alert.Title>
          <Alert.Text>Success!</Alert.Text>
        </Alert>
        <Alert type="info">
          <Alert.Title>Info!</Alert.Title>
          <Alert.Text>Info!</Alert.Text>
        </Alert>
        <Alert type="warning">
          <Alert.Title>Warning!</Alert.Title>
          <Alert.Text>Warning!</Alert.Text>
        </Alert>
        <Alert type="danger">
          <Alert.Title>Danger!</Alert.Title>
          <Alert.Text>Danger!</Alert.Text>
        </Alert>
        <button onClick={() => this.setState({modalOpen: true})}>Open Modal!!</button>
        <Modal isOpen={this.state.modalOpen} onClose={() => this.handleClose()}>
          <Modal.Title>My modal title</Modal.Title>
          <Modal.Body>My modal body</Modal.Body>
          <Modal.Footer>My modal footer</Modal.Footer>
        </Modal>
        <Sunset degree={0} />
        <Sunset degree={45} />
        <Sunset degree={90} />
        <Sunset degree={135} />
        <Sunset degree={180} />
      </div>
    );
  }
}

export default App;
