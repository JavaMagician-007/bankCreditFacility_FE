import React, { useState } from 'react';
import axios from 'axios';
import './css/ApplyLoan.css';

function ApplyLoanPage() {
  const [loanType, setLoanType] = useState('');
  const [loanAmount, setLoanAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [loanStartDate, setLoanStartDate] = useState('');
  const [loanEndDate, setLoanEndDate] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8081/v1/applyloan', {
      loanType: loanType,
      loanAmount: loanAmount,
      interestRate: interestRate,
      loanStartDate: loanStartDate,
      loanEndDate: loanEndDate
    })
    .then((response) => {
      window.alert(response.data.message);
      // Handle successful response
    })
    .catch((error) => {
      console.log(error);
      // Handle error response
    });
    clearFields(event);
   
  };

  function clearFields(event) {
    Array.from(event.target).forEach((e) => (e.value = ""));
  }

  return (
    <div className="center">
      <h1>Apply for a Loan</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Loan Type:
          <input type="text" value={loanType} required onChange={(e) => setLoanType(e.target.value)} />
        </label>
        <br /><br></br>
        <label>
          Loan Amount:
          <input type="number" value={loanAmount} required onChange={(e) => setLoanAmount(e.target.value)} />
        </label>
        <br /><br></br>
        <label>
          Interest Rate:
          <input type="number" value={interestRate} required onChange={(e) => setInterestRate(e.target.value)} />
        </label>
        <br /><br></br>
        <label>
          Loan Start Date:
          <input type="date" value={loanStartDate} required onChange={(e) => setLoanStartDate(e.target.value)} />
        </label>
        <br /><br></br>
        <label>
          Loan End Date:
          <input type="date" value={loanEndDate} required onChange={(e) => setLoanEndDate(e.target.value)} />
        </label>
        <br /><br></br>
        <button type="submit">Apply</button>
      </form>
    </div>

    
    
  );
}

export default ApplyLoanPage;
