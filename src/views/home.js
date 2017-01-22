import * as React from 'react';
import { withRouter } from 'react-router';
// import {mainStyle} from '../style';

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
        }
    }

    render() {
        return (<p>Home</p>);
    }
}

export default withRouter(Home);