import React, { useState } from 'react';

const Userform = props => {
    const [state,setState] = useState({
        firstName: "",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:"",
    });
    const createUser = e => {
        e.preventDefault();
        props.addUser(state);
        setState({
            firstName:"",
            lastName:"",
            email:"",
            password:"",
            confirmPassword:"",
        });
    }
    const changefirstName = e => {
        setState({...state, firstName: e.target.value});
    }
    const changelastName = e => {
        setState({...state, lastName: e.target.value});
    }
    const changeemail = e => {
        setState({...state, email: e.target.value});
    }
    const changepassword = e => {
        setState({...state, password: e.target.value});
    }
    const changeconfirmPassword = e => {
        setState({...state, confirmPassword: e.target.value});
    }
    return (
        <>
            <form onSubmit={createUser}>
                <div className="form-group">
                    <label> First Name: </label>
                    <input 
                        type="text"
                        className="form-control"
                        onChange={changefirstName}
                        value={state.firstName}
                    />
                </div>
                <div className="form-group">
                    <label>Last Name: </label>
                    <input 
                        type="text"
                        className="form-control"
                        onChange={changelastName}
                        value={state.lastName}
                    />
                </div>
                <div className="form-group">
                    <label>Email: </label>
                    <input 
                        type="text"
                        className="form-control"
                        onChange={changeemail}
                        value={state.email}
                    />
                </div>
                <div className="form-group">
                    <label>Password: </label>
                    <input 
                        type="password"
                        className="form-control"
                        onChange={changepassword}
                        value={state.password}
                    />
                </div>
                <div className="form-group">
                    <label>Confirm Password: </label>
                    <input 
                        type="password"
                        className="form-control"
                        onChange={changeconfirmPassword}
                        value={state.confirmPassword}
                    />
                </div>
                <input type="submit" className="btn btn-outline btn-outline-primary "/>
            </form>
        </>
    );
}

export default Userform;