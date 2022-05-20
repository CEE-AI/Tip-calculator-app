
const bill = document.querySelector('#bill')
const people = document.querySelector('#people')
const inputPercent = document.querySelector('.percent-input')
const tipAmount = document.querySelector('.tip-amount')
const totalAmount = document.querySelector('.amount-total')
const reset = document.querySelector('.btn-reset')

window.onload = () => {

  setTimeout(() => {
    bill.focus();
    alert('If you want a percentage of your preference, just type the value in the "Custom" area and click Enter');

  }, 2000)
}

function controlBorders() {
  bill.classList.add('active') 
  people.classList.add('active') 
  inputPercent.classList.add('active') 

}

reset.addEventListener('click', () => {
  bill.value = ''
  people.value = ''
  inputPercent.value = ''
  tipAmount.innerHTML = '0.00'
  totalAmount.innerHTML = '0.00'

  bill.classList.remove('active')
  people.classList.remove('active')
  inputPercent.classList.remove('active')

  reset.disabled = true //disable reset button
  bill.focus();
})


function OnClickEnter(event) {
  var x = event.keyCode;

  if (x == 13) { //13 is the code of button enter on keyboard

    if (bill.value == '' && people.value == '' && inputPercent.value == '') {

      alert('fill in the fields')
      controlBorders();

    } else if(bill.value == '' && people.value !== '' && inputPercent.value == ''){
      alert('fill in the bill field')

      people.focus();


    } else if (bill.value !== '' && people.value == '' && inputPercent.value == '') {
      alert('Fill in the Number of People field')
      people.focus();
      
    } else if (bill.value !== '' && people.value !== '' && inputPercent.value == '') {

      alert('Choose a percentage, or set a value of your own')
      inputPercent.focus()

    } else {

      if (inputPercent.value > 100) {

        alert('the maximum value is 100')

        inputPercent.value = ''
        inputPercent.focus()

      } else {
        inputPercentage(inputPercent.value) 

      }

    }
  }
}



function inputPercentage(inputPercent) {
  calcPercentage(inputPercent)

}

function show(tipForAmount, totalForAmount) { 
  tipAmount.innerHTML = tipForAmount.toFixed(2)
  totalAmount.innerHTML = totalForAmount.toFixed(2)

}

function calcPercentage(percent) { 

  const newPercent = percent / 100 

  const tipForAmount = (bill.value * newPercent) / people.value  
  const totalForAmount = (bill.value / people.value) + tipForAmount

  if (bill.value == '' || people.value == '') {
    alert('fill in the fields')

    controlBorders();

  } else {
    show(tipForAmount, totalForAmount)
    reset.disabled = false 

  }
}