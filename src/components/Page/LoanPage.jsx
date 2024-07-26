import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-bottom: 10px;
`;


const Title = styled.h1`
  text-align: center;
  font-size: 24px;
  color: #333;
`;

const Subtitle = styled.p`
  text-align: center;
  font-size: 14px;
  color: #666;
  margin-bottom: 20px;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-size: 16px;
  color: #333;
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const SliderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SliderLabel = styled.span`
  font-size: 16px;
  color: #333;
`;

const Slider = styled.input`
  width: 100%;
  margin: 0 10px;
`;

const Button = styled.button`
  width: 100%;
  padding: 15px;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #0056b3;
  }
`;

const SummaryContainer = styled.div`
  background-color: #fff;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
`;

const SummaryItem = styled.p`
  font-size: 16px;
  color: #333;
  margin: 5px 0;
`;

const LoanPage = () => {
  const selectOptions = [
    'Undergraduate',
    'Graduate',
    'Personal',
    'Business'
  ];

  const [loanAmount, setLoanAmount] = useState(50000);
  const [loanTerm, setLoanTerm] = useState(3);
  const [selectedPurpose, setSelectedPurpose] = useState('Undergraduate');
  const [showSummary, setShowSummary] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleLoanAmountChange = (event) => {
    setLoanAmount(event.target.value);
  };

  const handleLoanTermChange = (event) => {
    setLoanTerm(event.target.value);
  };

  const handlePurposeChange = (event) => {
    setSelectedPurpose(event.target.value);
  };

  const handleContinue = (event) => {
    event.preventDefault();
    setShowSummary(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowConfirmation(true);
  };

  return (
    <Container>
      {!showSummary && !showConfirmation && (
        <>
          <Title>Request a Specific Amount</Title>
          <Subtitle>Fill in the following options to establish how much you want to borrow and how long</Subtitle>
          <form onSubmit={handleContinue}>
            <FormGroup>
              <Label>Loan Amount:</Label>
              <SliderContainer>
                <SliderLabel>{loanAmount.toLocaleString()}</SliderLabel>
                <Slider
                  type="range"
                  min="1000"
                  max="100000"
                  step="1000"
                  value={loanAmount}
                  onChange={handleLoanAmountChange}
                />
              </SliderContainer>
            </FormGroup>
            <FormGroup>
              <Label>Loan Time Period (Months):</Label>
              <SliderContainer>
                <SliderLabel>{loanTerm} Months</SliderLabel>
                <Slider
                  type="range"
                  min="1"
                  max="60"
                  step="1"
                  value={loanTerm}
                  onChange={handleLoanTermChange}
                />
              </SliderContainer>
            </FormGroup>
            <FormGroup>
              <Label>Purpose of Loan:</Label>
              <Select value={selectedPurpose} onChange={handlePurposeChange}>
                {selectOptions.map((purpose, index) => (
                  <option key={index} value={purpose}>{purpose}</option>
                ))}
              </Select>
            </FormGroup>
            <Button type="submit">Continue</Button>
          </form>
        </>
      )}

      {showSummary && !showConfirmation && (
        <>
          <Title>Submit Loan Request</Title>
          <SummaryContainer>
            <SummaryItem>Loan Amount: {loanAmount.toLocaleString()}</SummaryItem>
            <SummaryItem>Interest: 500</SummaryItem>
            <SummaryItem>Duration: {loanTerm} Months</SummaryItem>
            <SummaryItem>Total Due: 55000</SummaryItem>
          </SummaryContainer>
          <form onSubmit={handleSubmit}>
            <FormGroup>
              <Label>Purpose of Loan:</Label>
              <Select value={selectedPurpose} onChange={handlePurposeChange}>
                {selectOptions.map((purpose, index) => (
                  <option key={index} value={purpose}>{purpose}</option>
                ))}
              </Select>
            </FormGroup>
            <FormGroup>
              <Label>Bank Account Information:</Label>
              <Input type="text" placeholder="Account No" required />
              <Input type="text" placeholder="" required />
              <Input type="text" placeholder="Branch" required />
            </FormGroup>
            <Button type="submit">Submit</Button>
          </form>
        </>
      )}

      {showConfirmation && (
        <>
          <Title>Loan Request Submitted</Title>
          <SummaryContainer>
            <SummaryItem>Loan Amount: {loanAmount.toLocaleString()}</SummaryItem>
            <SummaryItem>Interest: 500</SummaryItem>
            <SummaryItem>Duration: {loanTerm} Months</SummaryItem>
            <SummaryItem>Total Due: 55000</SummaryItem>
            <SummaryItem>Purpose: {selectedPurpose}</SummaryItem>
          </SummaryContainer>
        </>
      )}
    </Container>
  );
};

export default LoanPage;
