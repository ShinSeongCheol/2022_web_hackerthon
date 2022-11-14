import axios from 'axios';
import { Component } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { Image, Button } from "react-bootstrap";

class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {
            host:'',
        }
    }

    componentDidMount() {
        this._getHost();
    }

    _getHost = async() => {
        const res = await axios.get('/api/host');
        this.setState({host: res.data.host});
    }

    render() {
        return(
            <div>
                <h3>Welcome to {this.state.host} Blog</h3>
            </div>
        )
    }
}
export default Test;
