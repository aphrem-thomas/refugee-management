import React from 'react';
import Navbar from "./Navbar.jsx";

class Medicalpublic extends React.Component {

    render() {
        return (
            <div>
                <Navbar title={"Medical Supply"} />
                <div className="scrollablediv">
                <div className='row d-flex justify-content-center align-items-center h-100 p-5'>
                    <table class="table">
                        <caption>List of available medical items</caption>
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Item</th>
                                <th scope="col">Quantity</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Syringe</td>
                                <td>2356</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Polio Vaccine</td>
                                <td>35L</td>
                                
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Hepetitis B Vaccine</td>
                                <td>120L</td>
                                
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Asprin</td>
                                <td>2310</td>
                                
                            </tr>
                        </tbody>
                    </table>
                </div>
                </div>
            </div>
        );
    }
}

export default Medicalpublic;