# Mortgage Calculator

## Description

This is a simple Mortgage Calculator built using React and TypeScript. It allows users to calculate their monthly mortgage repayments based on different mortgage types: Repayment and Interest-Only. The application leverages the React Context API to manage state efficiently.

## Features

- Enter mortgage amount, term, and interest rate.
- Choose between Repayment and Interest-Only mortgage types.
- Calculate monthly repayment and total repayment amount.
- Clear all input fields with a single click.
- Uses React Context API for state management.
- Responsive and user-friendly UI built with Tailwind CSS.

## Technologies Used

- React (TypeScript)
- Context API
- Tailwind CSS

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/mortgage-calculator.git
   ```

2. Navigate to the project directory:

   ```bash
   cd mortgage-calculator
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

## Usage

1. Enter the mortgage amount, term (in years), and interest rate.
2. Select either Repayment or Interest-Only mortgage type.
3. Click the Calculate button to see the monthly repayment and total repayment amount.
4. Click Clear All to reset all values.

## Project Structure

```plaintext
├── src
│ ├── components
│ │ ├── MortgageCalculator.tsx # Main component
│ │ ├── Results.tsx # Results component
│ ├── context
│ │ ├── MortgageContext.tsx # Context provider
│ ├── styles
│ │ ├── index.css # Tailwind styles
│ ├── App.tsx # Main entry file
│ ├── main.tsx # ReactDOM render
│
├── public
│ ├── index.html # HTML template
│
├── package.json
├── tsconfig.json
├── README.md
```

![Image](https://github.com/user-attachments/assets/abfeb5a4-4d1d-4d69-96d7-44b1ab889f12)

### That´s all folks :D
