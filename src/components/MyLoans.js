import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './css/MyLoans.css';

function MyLoans({ userId }) {
  const [loans, setLoans] = useState([]);

  useEffect(() => {
    // Make API call to get loans for the user
    axios.get(`http://localhost:8081/v1/loans?userId=f4b2883f-4b8e-4c35-9e1a-42769698c8ba`)
      .then(response => {
        setLoans(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [userId]);

  return (
    <div>
    <div class="center">
    <table className="loan-table">
      <thead>
        <tr>
          <th>Loan Type</th>
          <th>Loan Amount</th>
          <th>Payment Made So Far</th>
        </tr>
      </thead>
      <tbody>
        {loans.map((loan, index) => (
          <tr key={index}>
            <td>{loan.loanType}</td>
            <td>{loan.loanAmount} SGD</td>
            <td>{loan.paymentMadeSoFar} SGD</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
    </div>
  );
}

export default MyLoans;
