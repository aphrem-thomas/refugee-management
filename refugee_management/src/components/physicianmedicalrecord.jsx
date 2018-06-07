import React from 'react';


class PhysicianMedicalRecord extends React.Component {
    render() {

        return (
            <div>
                <h2>Medical Record</h2>
                <div className="scrollablediv">
                    <div className="p-2">
                        <table class="table">
                            <caption>List of available medical items</caption>
                            <thead>
                                <tr>
                                    <th scope="col">Date</th>
                                    <th scope="col">Hospital</th>
                                    <th scope="col">Medical Issue</th>
                                    <th scope="col">Physician</th>
                                    <th scope="col">Admited</th>
                                    <th scope="col">Released</th>
                                    <th scope="col">Prescription</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>12/31/2017</td>
                                    <td>Red Cresent Aleppo</td>
                                    <td>Feaver</td>
                                    <td>Manuel</td>
                                    <td>Nil</td>
                                    <td>Nil</td>
                                    <td>Parcetamol</td>
                                </tr>
                                <tr>
                                    <td>03/8/2017</td>
                                    <td>Red Cresent Demascus</td>
                                    <td>Feaver</td>
                                    <td>Yakub</td>
                                    <td>2/5/2017</td>
                                    <td>3/8/2017</td>
                                    <td>Nil</td>
                                </tr>
                                <tr>
                                    <td>03/2/2017</td>
                                    <td>Red Cresent Antioch</td>
                                    <td>Feaver</td>
                                    <td>David</td>
                                    <td>Nil</td>
                                    <td>Nil</td>
                                    <td>Parcetamol</td>
                                </tr>
                                <tr>
                                    <td>02/1/2017</td>
                                    <td>Red Cresent Antioch</td>
                                    <td>Feaver</td>
                                    <td>David</td>
                                    <td>Nil</td>
                                    <td>Nil</td>
                                    <td>Parcetamol</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                    Add
                </button>


                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Add medical record</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <form>
                                    <div className="row">
                                        <div className="col-12">
                                            <label>hospital name</label>
                                            <input type="email" className="form-control" id="quantity" placeholder="enter hospital name"/>                               
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-6">
                                            <label>admit date</label>
                                            <input type="date" className="form-control" id="admitdate" placeholder="admit date"/>
                                        </div>
                                        <div className="col-6">
                                            <label>release date</label>
                                            <input type="date" className="form-control" id="quantity" placeholder="release date"/>                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-12">
                                            <label>Medical Issue</label>
                                            <input type="email" className="form-control" id="quantity" placeholder="enter the medical issue"/>                               
                                        </div>
                                    </div>

                                    <div className="row mt-3">
                                        <div className="col-12">
                                            <label>Prescription</label>
                                            <input type="email" className="form-control" id="quantity" placeholder="enter prescription"/>                               
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );

    }
}

export default PhysicianMedicalRecord;
