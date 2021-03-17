import React from 'react';
import Data from './data.json';
import HornedBeasts from './horned-beast';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardDeck from 'react-bootstrap/CardDeck';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: Data
        }
    }


    render() {
        return (
            <div>
                <CardDeck>
                    {Data.map((item, index) => (
                        <div key={index}>
                            <HornedBeasts
                                title={item.title}
                                image={item.image_url}
                                description={item.description}
                            />
                        </div>
                    ))}
                </CardDeck>
            </div>
        )
    }
}

export default Main;