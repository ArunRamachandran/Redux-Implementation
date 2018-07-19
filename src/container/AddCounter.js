import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addCounter } from '../actions';
import { bindActionCreators } from 'redux';
import { WSAVERNOTSUPPORTED } from 'constants';

class AddCounter extends Component {
    constructor(props) {
        super(props);
    }

    onClickHandler (e) {
        e.preventDefault();
        this.props.dispatch(addCounter());
    }

    render () {
        return (
            <div>   
                <form>
                    <div className="field is-grouped">
                        <button className="button is-primary"
                            onClick={() => this.onClickHandler(event)}>
                            ADD
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(addCounter, dispatch) 
    }
}

export default connect(mapDispatchToProps)(AddCounter);