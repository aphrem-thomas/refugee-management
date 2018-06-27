import React from 'react';


class Navbar extends React.Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand orangefont" href="/">{this.props.title}</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            
                            <li className="nav-item">
                                <a className="nav-link" href="/about">About</a>
                            </li>
                            
                        </ul>
                        </div>
                    </nav>
            </div>
                );
            }
        }
        
export default Navbar;