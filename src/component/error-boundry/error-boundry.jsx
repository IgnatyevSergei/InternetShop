import React, {Component} from 'react';
import ErrorIndicator from "../error-indicator";

class ErrorBoundry extends Component {

    state = {
        hasError: false
    }

    static getDerivedStateFromError(error) {
        return {hasError: true}
    }

    componentDidCatch(error, errorInfo) {
        console.log('componentDidCatch', error)
        console.log('componentDidCatch errorIfo', errorInfo)
    }


    render() {
        if (this.state.hasError) {
            return <ErrorIndicator/>
        }

        return (
            this.props.children
        );
    }
}

export default ErrorBoundry;