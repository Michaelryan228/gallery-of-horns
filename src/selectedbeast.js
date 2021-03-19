import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'

class SelectedBeast extends React.Component {
    render(){
        return (
            <>
                <Modal show={this.props.show} onHide={this.props.handleClose}>
                    <Card bg="dark" text="light" onClick={this.displayAsModal}>
                    <Button onClick={this.props.handleClose}>Close</Button>
                    <Card.Img src={this.props.favoriteBeast.image_url} width={450}/>
                    <Card.Text>{this.props.favoriteBeast.description}</Card.Text>
                    </Card>
                </Modal>
            </>
        );
    }
}

export default SelectedBeast;