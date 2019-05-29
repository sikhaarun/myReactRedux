import React ,{Component} from 'react';

import {connect} from 'react-redux';

class Register extends Component{
    constructor(props)
    {
        super(props);
    }

    render(){
        return(
            <div className="auth-page">
            <div className="container page">
              <div className="row">
    
                <div className="col-md-6 offset-md-3 col-xs-12">
                  <h1 className="text-xs-center">Register</h1>
                  <p className="text-xs-center">
                    {/* <Link to="/register">
                      Need an account?
                    </Link> */}
                  </p>
    
                 
                  <form >
                    <fieldset>
                    <fieldset className="form-group">
                        <input
                          className="form-control form-control-lg"
                          type="text"
                          placeholder="Name"
                        />
                      </fieldset>
                      <fieldset className="form-group">
                        <input
                          className="form-control form-control-lg"
                          type="email"
                          placeholder="Email"
                        />
                      </fieldset>
    
                      <fieldset className="form-group">
                        <input
                          className="form-control form-control-lg"
                          type="password"
                          placeholder="Password"
                        />
                      </fieldset>
    
                      <button
                        className="btn btn-lg btn-primary pull-xs-right"
                        type="submit"
                       >
                        Register
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


export default Register;