import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  margin-bottom: 5px;
  font-size: 16px;
`;

const Input = styled.input`
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const Summary = styled.div`
  margin-top: 20px;
`;

const LoanPage = () => {
  const [loanAmount, setLoanAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [loanTerm, setLoanTerm] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);

  const handleLoanAmountChange = (event) => {
    setLoanAmount(event.target.value);
  };

  const handleInterestRateChange = (event) => {
    setInterestRate(event.target.value);
  };

  const handleLoanTermChange = (event) => {
    setLoanTerm(event.target.value);
  };

  const calculateLoan = () => {
    const principal = parseFloat(loanAmount);
    const rate = parseFloat(interestRate) / 100 / 12;
    const term = parseInt(loanTerm);

    if (principal && rate && term) {
      const monthly = principal * (rate * Math.pow(1 + rate, term)) / (Math.pow(1 + rate, term) - 1);
      setMonthlyPayment(monthly.toFixed(2));
      setTotalPayment((monthly * term).toFixed(2));
    }
  };

  return (
    <Container>
      <Title>Get A Loan</Title>
      <Form>
        <FormGroup>
          <Label>Loan Amount:</Label>
          <Input type="number" value={loanAmount} onChange={handleLoanAmountChange} />
        </FormGroup>
        
        <Button type="button" onClick={calculateLoan}>Calculate</Button>
      </Form>
      {monthlyPayment > 0 && totalPayment > 0 && (
        <Summary>
          <h2>Loan Summary</h2>
          <p>Monthly Payment: ${monthlyPayment}</p>
          <p>Total Payment: ${totalPayment}</p>
        </Summary>
      )}
    </Container>
  );
};

export default LoanPage;
