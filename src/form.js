import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';


class FormInfo extends React.Component{
    render() {
        return(
            <Dropdown onSelect={this.props.handleInput}>
                <Dropdown.Toggle variants="success" id="dropdown-basic">
                    Dropdown Button
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1" value="all" as="button" onClick={this.props.handleInput}>All</Dropdown.Item>
                    <Dropdown.Item href="#/action-2" value="1" as="button" onClick={this.props.handleInput}>1</Dropdown.Item>
                    <Dropdown.Item href="#/action-3" value="2" as="button" onClick={this.props.handleInput}>2</Dropdown.Item>
                    <Dropdown.Item href="#/action-4" value="3" as="button" onClick={this.props.handleInput}>3</Dropdown.Item>
                    <Dropdown.Item href="#/action-5" value="100" as="button" onClick={this.props.handleInput}>Horny</Dropdown.Item>



   
                </Dropdown.Menu>
            </Dropdown>
        );
    }
}

export default FormInfo;