import React from 'react';
import Data from './data.json';
import HornedBeasts from './horned-beast';

class Main extends React.Component {



    render() {
        return (
            <div>
                <ul>
                    {Data.map((item) => {
                        return(
                        <HornedBeasts
                        title={item.title}
                        image={item.image_url}
                        description={item.description}
                        />
                    )
                    })
                }
                </ul>
            </div>
        )
    }
}

export default Main;