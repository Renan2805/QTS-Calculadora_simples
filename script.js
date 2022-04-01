const form = document.querySelector('#form')
const button = document.querySelector('#calc-btn')

const calculate = (e) => {
	e.preventDefault()
	const number1 = form.n1.value
	const number2 = form.n2.value
	const operator = form.op.value

	console.log(form.op.value)
	
	let result = 0 

	switch(operator) {
		case '+':
			result = parseInt(number1) + parseInt(number2)
			alert('Resultado: ' + result)
			break
		case '-':
			result = number1 - number2
			alert('Resultado: ' + result)
			break
		case '/':
			result = number1 / number2
			alert('Resultado: ' + result)
			break
		case '*':
			result = number1 * number2
			alert('Resultado: ' + result)
			break
		default:
			alert('Insira um operador válido')
			break
	}

  form.reset()
  form.n1.focus()
}

form.op.addEventListener('keydown', (e) => {
  console.log(e)
  let invalidChars= [
    'e',
    '_'
  ]
  if(invalidChars.includes(e.key)) e.preventDefault()
})

button.addEventListener('click', calculate)

