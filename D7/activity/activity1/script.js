function calculateMonthlyPayment(loanAmount, annualInterestRate, loanTermYears) {
      const monthlyInterestRate = annualInterestRate / 12 / 100;
      const totalPayments = loanTermYears * 12;

      const monthlyPayment = 
        (loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalPayments)) /
        (Math.pow(1 + monthlyInterestRate, totalPayments) - 1);

      return monthlyPayment.toFixed(2);
}

function handleSubmit(e) {
    e.preventDefault()
    //Access loan amount input
    const loanAmount = parseFloat(document.querySelector("#loanAmount").value)
    //Access interest rate input
    const interestRate = parseFloat(document.querySelector("#interestRate").value)
    //Access loan term input
    const loanTerm = parseFloat(document.querySelector("#loanTerm").value)
    //Access form element
    const form = document.querySelector("form")

    const monthlyPayment = calculateMonthlyPayment(loanAmount, interestRate, loanTerm)
    
    const monthlyPaymentElement = document.createElement("h3")
    monthlyPaymentElement.textContent = `Monthly Payment: $${monthlyPayment}`
    form.appendChild(monthlyPaymentElement)

}
    


const button = document.querySelector("button")
button.addEventListener("click", handleSubmit)