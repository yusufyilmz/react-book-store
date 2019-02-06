import React, { Component } from 'react';
import { connect } from 'react-redux';

class LoaderContainer extends Component {

    getStateAndHelpers() {
        return {
            loading: this.props.loading,
        }
    }

    render() {
        return this.props.children(this.getStateAndHelpers())
    }
}


const mapStateToProps = (state) => {
    return {
        loading: state.loader.loading,
    }
}

export default connect(mapStateToProps, null)(LoaderContainer);
