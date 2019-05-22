import React from 'react';
import { connect } from 'react-redux';

class HeaderPage extends React.Component {
    render() {
        const { user } = this.props;
        return (
            <React.Fragment>
                <span></span>
                <h1>HELLO {user.firstName}!</h1>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    const { authentication } = state
    const { user } = authentication
    return {
        user
    }
}


const connectedHeaderPage = connect(mapStateToProps)(HeaderPage);
export { connectedHeaderPage as HeaderPage };