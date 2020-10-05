import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import './SideMenu.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'material-design-icons'

class SideMenu extends Component{
    render(){
 
        return(
            <div className="col-sm-3 h-100 full-height">
                 <div className="row mt-3 clearfix">
                    <Button className="btn-primary">Search for place</Button>
                    <Button className="btn-info pull-right text-right">
                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-geo-alt-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                    </svg>
                    </Button>
                    </div>
                    <div className="row mt-3">
                        <div className="col-sm-4"></div>
                        <div className="col-sm-4"><svg width="20em" height="20em" viewBox="0 0 16 16" className="bi bi-sun" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M3.5 8a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0z"/>
  <path fill-rule="evenodd" d="M8.202.28a.25.25 0 0 0-.404 0l-.91 1.255a.25.25 0 0 1-.334.067L5.232.79a.25.25 0 0 0-.374.155l-.36 1.508a.25.25 0 0 1-.282.19l-1.532-.245a.25.25 0 0 0-.286.286l.244 1.532a.25.25 0 0 1-.189.282l-1.509.36a.25.25 0 0 0-.154.374l.812 1.322a.25.25 0 0 1-.067.333l-1.256.91a.25.25 0 0 0 0 .405l1.256.91a.25.25 0 0 1 .067.334L.79 10.768a.25.25 0 0 0 .154.374l1.51.36a.25.25 0 0 1 .188.282l-.244 1.532a.25.25 0 0 0 .286.286l1.532-.244a.25.25 0 0 1 .282.189l.36 1.508a.25.25 0 0 0 .374.155l1.322-.812a.25.25 0 0 1 .333.067l.91 1.256a.25.25 0 0 0 .405 0l.91-1.256a.25.25 0 0 1 .334-.067l1.322.812a.25.25 0 0 0 .374-.155l.36-1.508a.25.25 0 0 1 .282-.19l1.532.245a.25.25 0 0 0 .286-.286l-.244-1.532a.25.25 0 0 1 .189-.282l1.508-.36a.25.25 0 0 0 .155-.374l-.812-1.322a.25.25 0 0 1 .067-.333l1.256-.91a.25.25 0 0 0 0-.405l-1.256-.91a.25.25 0 0 1-.067-.334l.812-1.322a.25.25 0 0 0-.155-.374l-1.508-.36a.25.25 0 0 1-.19-.282l.245-1.532a.25.25 0 0 0-.286-.286l-1.532.244a.25.25 0 0 1-.282-.189l-.36-1.508a.25.25 0 0 0-.374-.155l-1.322.812a.25.25 0 0 1-.333-.067L8.203.28zM8 2.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11z"/>
</svg></div>
                    <div className="col-sm-4"></div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-sm-4"></div>
                        <div className="col-sm-4"><h1>15 ºC</h1></div>
                        <div className="col-sm-4"></div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-sm-4"></div>
                        <div className="col-sm-4"><h4>Shower</h4></div>
                        <div className="col-sm-4"></div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-sm-4"></div>
                        <div className="col-sm-4"><h3>Today * </h3></div>
                        <div className="col-sm-4"></div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-sm-4"></div>
                        <div className="col-sm-4">
                            <h5><svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-geo-alt-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                </svg>
                                Helsinki
                            </h5>
                        </div>
                        <div className="col-sm-4"></div>
                    </div>
            </div>
        )
    }
}

export default SideMenu