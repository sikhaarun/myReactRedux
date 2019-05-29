import React ,{Component} from 'react';

import {connect} from 'react-redux';
import MapDispatchUsers from '../reducers/UserAction'


class User extends Component{

    constructor(props){
        super(props);
    }

    componentDidMount()
    {
        this.props.getUserName();
    }


    render()
    {
        const {state}= this.props;
        console.log(state)
        return(
            <div className="container">
                <p>{state.username}</p>
            </div>
        )
    }
}



const mapStateToProps = (state) => {return {state:state}}

export default connect(mapStateToProps,MapDispatchUsers)(User);
























