import React from 'react';
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css';

class HornedBeasts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numberOfClicks: 0

        };
    }

    render() {
        const likeImage = () => {
            this.setState({ numberOfClicks: this.state.numberOfClicks + 1 });
            popOut(this.props.index);
        }

        const popOut = (index) => {
            this.props.displayAsModal(index);
        }

        return (
            <div id="Horned Beasts">
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>
                            {this.props.description}
                        </Card.Text>
                        <Card.Text>
                            ❤️ {this.state.numberOfClicks}
                        </Card.Text>
                        <Card.Img
                            onClick={likeImage}
                            src={this.props.image}
                            description={this.props.description}
                            title={this.props.title} />
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default HornedBeasts;