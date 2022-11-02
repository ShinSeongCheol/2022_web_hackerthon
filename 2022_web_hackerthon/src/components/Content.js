import React from 'react';

class Content extends React.Component {
    render() {
        return(
            <div>
                <h2>{this.props.name}</h2>
            </div>
        );
    }
}

export default Content;