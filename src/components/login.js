import React from "react";

function Login(){
   
    return(
        <div className="d-flex flex-row justify-content-center">
            <div className="card">
                <form>
                    <div className="form-group">
                        <label for="email">Email</label>
                        <input type="mail" class="form-control"></input>
                    </div>
                    <div className="form-group">
                        <label for="pswd">Password</label>
                        <input type="password" class="form-control"></input>
                    </div>
                    <div>
                        <input type="submit"></input>
                    </div>
                </form>
            </div>
        </div> 
    )
}

export default Login;
