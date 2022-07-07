import logo from './logo.png';
import './App.css';
import React, { useState, useEffect } from 'react';
import PaymentPlan from './PaymentPlan';

function App() {
 const [amount, setAmount] = useState(0)
 const [payments, setPayments] = useState([])
 const handleChange = (e) => {
  setAmount(e.target.value)
 }
  /**
    * This function calculates the installments for a purchase plan.
    * Assume there are always four installments.
    * The function need not return anything but should be used to display
    * the four installments back to the user after the user inputs a valid
    * dollar amount and clicks submit.
    * @param {number} amount the amount the customer intends to purchase
  */
  const createPaymentPlan = (e) => {
    e.preventDefault();
    const todaysDate = new Date();
    const secondDate = new Date(); // 14
    secondDate.setDate(todaysDate.getDate() + 14)
    const thirdDate = new Date(); // 28
    thirdDate.setDate(todaysDate.getDate() + 28)
    const fourthDate = new Date(); // 42
    fourthDate.setDate(todaysDate.getDate() + 42)
    const payment = (parseFloat(amount) / 4).toFixed(2); //payment

    setPayments([
      {
        date: todaysDate.toLocaleDateString([], {
          month: "short",
          year: "numeric",
          day: "numeric"
        }),
        name: 'First Payment',
        payment
      },
      {
        date: secondDate.toLocaleDateString([], {
          month: "short",
          year: "numeric",
          day: "numeric"
        }),
        name: 'Second Payment',
        payment
      },
      {date: thirdDate.toLocaleDateString([], {
        month: "short",
        year: "numeric",
        day: "numeric"
      }),
      name: 'Third Payment',
      payment},
      {date: fourthDate.toLocaleDateString([], {
        month: "short",
        year: "numeric",
        day: "numeric"
      }),
      name: 'Fourth Payment',
      payment}
    ])


  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <form onSubmit={createPaymentPlan}>
          <label>How much do you plan to spend?</label>
          <input type="text" id="amount" value={amount} onChange={handleChange}/>
          <input type="submit" value="Submit" />
        </form>
        <PaymentPlan payments={payments}/>
      </header>
    </div>
  );
}

export default App;
