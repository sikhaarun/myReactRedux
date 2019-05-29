import React ,{Component} from 'react';

import {connect} from 'react-redux';
import MapDispatchUsers from '../reducers/UserAction'

class Login extends Component{

  
    constructor(props){
        super(props);
        console.log(props)
        this.changeEmail = ev => this.props.setEmail(ev.target.value);
    this.changePassword = ev => this.props.setPassword(ev.target.value);
    //     this.changeEmail = ev => this.props.email =ev.target.value;
    // this.changePassword = ev =>  this.props.password=ev.target.value;
        this.submitForm = (email, password) => ev => {
            ev.preventDefault();
            console.log(email)
            this.props.Login( email, password);
          };
    }

    componentDidMount()
    {
        
    }


    render()
    {
        const {state}= this.props;
        console.log(state)
        const email = state.email;
    const password = state.password;
        return(
            <div className="auth-page">
            <div className="container page">
              <div className="row">
    
                <div className="col-md-6 offset-md-3 col-xs-12">
                  <h1 className="text-xs-center">Login</h1>
                  <p className="text-xs-center">
                    {/* <Link to="/register">
                      Need an account?
                    </Link> */}
                  </p>
    
                 
                  <form onSubmit={this.submitForm(state.email, state.password)}>
                    <fieldset>
                  
                      <fieldset className="form-group">
                        <input
                          className="form-control form-control-lg"
                          type="email"
                          placeholder="Email"
                          value={email}
                          onChange={this.changeEmail}
                        />
                      </fieldset>
    
                      <fieldset className="form-group">
                        <input
                          className="form-control form-control-lg"
                          type="password"
                          placeholder="Password"
                          value={password}
                          onChange={this.changePassword}
                        />
                      </fieldset>
    
                      <button
                        className="btn btn-lg btn-primary pull-xs-right"
                        type="submit"
                       >
                        Login
                      </button>
    
                    </fieldset>
                  </form>
                </div>
    
              </div>
            </div>
          </div>
        )
    }
}



const mapStateToProps = (state) => {return {state:state}}

export default connect(mapStateToProps,MapDispatchUsers)(Login);
























