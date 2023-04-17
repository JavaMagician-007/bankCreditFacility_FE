import React, { useState } from 'react';
import axios from 'axios';
import './css/ApplyLoan.css';

function PayLoan() {
  const [loanAccountNo, setLoanAccountNo] = useState('');
  const [paymentAmount, setPaymentAmount] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Make API call to Java backend to process payment
    axios.put('http://localhost:8081/v1/loanpayment', {
      loanAccountNo,
      paymentAmount,
    })
    .then(response => {
      window.alert(response.data.message);
      // Handle success case
    })
    .catch(error => {
      console.error(error);
      // Handle error case
    });
    clearFields(event);
  };

  function clearFields(event) {
    Array.from(event.target).forEach((e) => (e.value = ""));
  }

  return (
    <div class="center">
    <h1>Pay your Loan</h1>
    <form onSubmit={handleSubmit}>
      <label>
        Loan Account No:
        <input type="text" value={loanAccountNo} required onChange={(e) => setLoanAccountNo(e.target.value)} />
      </label>
      <br /><br></br>
      <label>
        Payment Amount:
        <input type="number" value={paymentAmount} required onChange={(e) => setPaymentAmount(e.target.value)} />
      </label>
      
      <br /><br></br>
      <button type="submit">Pay</button>
    </form>
  </div>
  );
};


export default PayLoan;
