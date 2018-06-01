import React from 'react';


class UserMedicalRecord extends React.Component{
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
      </div>

    );  
    
  }
}

export default UserMedicalRecord;
