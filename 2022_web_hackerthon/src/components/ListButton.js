import React from 'react';

class ListButton extends React.Component {
    render() {
        return(
            <li><a href={this.props.href}>{this.props.name}</a></li>
        );
    }
}

export default ListButton;