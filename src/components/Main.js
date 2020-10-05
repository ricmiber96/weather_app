import React, {Component}from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Main.css'


class Main extends Component {
    render(){
        return(
            <div className="col-sm-9 wrapper-main">

                <div className="row mt-3">
                    <div className="col-sm-4"></div>
                    <div className="col-sm-4"></div>
                    <div className="col-sm-4">
                        <div class="custom-control custom-switch">
                            <input type="checkbox" class="custom-control-input" id="customSwitch1"/>
                            <label class="custom-control-label" for="customSwitch1">ºC / ºF</label>
                        </div>
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col-sm-3">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="#" class="btn btn-primary">Button</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="#" class="btn btn-primary">Button</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="#" class="btn btn-primary">Button</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="#" class="btn btn-primary">Button</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-5 text-center d-flex justify-content-center">
                    <h4 className="">Today's Highligths</h4>
                </div>
                   <div className="row mt-3">
                        <div className="col-sm-6">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="#" class="btn btn-primary">Button</a>
                            </div>
                        </div>
                        </div>
                        <div className="col-sm-6">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="#" class="btn btn-primary">Button</a>
                            </div>
                        </div>
                        </div>
                        </div>                      
                <div className="row mt-4">
                        <div className="col-sm-6">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="#" class="btn btn-primary">Button</a>
                            </div>
                        </div>
                        </div>
                        <div className="col-sm-6">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="#" class="btn btn-primary">Button</a>
                            </div>
                        </div>
                        </div>
                </div>

            </div>
        )
    }
}


export default Main