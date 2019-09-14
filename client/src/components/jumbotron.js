import React from "react";
import "../App.css";

function Jumbotron() {
    return(
        // Jumbotron
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 class="display-4">FurEver Home</h1>
                <p class="lead">Slogan goes here</p>
                <button type="button" class="btn btn-primary">Login</button>


                {/* Modal */}
                <div class="modal" tabindex="-1" role="dialog">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">Modal title</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                            <form>
                                {/* Login form */}
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Email address</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Password</label>
                                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                                </div>
                                <button type="submit" class="btn btn-primary">Submit</button>
                                </form>                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Jumbotron;