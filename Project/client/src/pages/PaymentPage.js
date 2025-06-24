// client/src/pages/PaymentPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../components/PaymentPage.css';


/*const PaymentPage = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [cvv, setCvv] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handlePayment = (e) => {
    e.preventDefault();
    // Dummy validation
    if (cardNumber && cvv && name) {
      alert('Payment Successful!');
      navigate('/'); // redirect to homepage or success page
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Enter Payment Details</h2>
      <form onSubmit={handlePayment} style={{ maxWidth: '400px' }}>
        <div>
          <label>Cardholder Name</label><br />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{ width: '100%', padding: '8px', marginBottom: '1rem' }}
          />
        </div>
        <div>
          <label>Card Number</label><br />
          <input
            type="text"
            maxLength={16}
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            required
            style={{ width: '100%', padding: '8px', marginBottom: '1rem' }}
          />
        </div>
        <div>
          <label>CVV</label><br />
          <input
            type="password"
            maxLength={3}
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            required
            style={{ width: '100%', padding: '8px', marginBottom: '1rem' }}
          />
        </div>
        <button type="submit" style={{ padding: '10px 20px', background: 'blue', color: 'white', border: 'none' }}>
          Pay Now
        </button>
      </form>
    </div>
  );
};
*/

const PaymentPage = () => {

  return (

    <div className="payment-container">
      <h2>Enter Payment Details</h2>
      <form>
        <label>Cardholder Name</label>
        <input type="text" placeholder="John Doe" />
        <label>Card Number</label>
        <input type="text" placeholder="1234 5678 9012 3456" />
        <label>CVV</label>
        <input type="text" placeholder="123" />
        <a href="https://www.paypal.com/signin" target="_blank" rel="noopener noreferrer">
          <button type="button">Pay Now</button>
        </a>

      </form>
      <div className="payment-footer">
        Secured by PayPal • © 2025
      </div>

    </div>
  );
};



export default PaymentPage;