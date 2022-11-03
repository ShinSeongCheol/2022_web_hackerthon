import React from 'react';

class ListButton extends React.Component {
    render() {
        return(
            <li>{this.props.name}</li>
        );
    }
}

export default ListButton;