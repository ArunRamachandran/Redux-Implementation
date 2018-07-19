import React, {Component} from 'react';
import { connect } from 'react-redux';
import { removeCounter } from '../actions';
import { bindActionCreators } from 'redux';
import { WSAVERNOTSUPPORTED } from 'constants';

class RemoveCounter extends Component {
    constructor(props) {
        super(props);
    }

    onClickHandler (e) {
        e.preventDefault();
        this.props.dispatch(removeCounter());
    }

    render () {
        return (
            <div>   
                <form>
                    <div className="field is-grouped">
                        <button className="button is-primary"
                            onClick={() => this.onClickHandler(event)}>
                            Remove
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(removeCounter, dispatch) 
    }
}

export default connect(mapDispatchToProps)(RemoveCounter);