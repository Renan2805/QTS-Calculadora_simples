const form = document.querySelector('#form')
const button = document.querySelector('#calc-btn')

const calculate = (e) => {
  // Previne que o botão de submit recarregue a pagina
	e.preventDefault()
	const number1 = form.n1.value
	const number2 = form.n2.value
	const operator = form.op.value
	
	let result = 0 
  
  // Verifica o operador e faz o calculo
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
  
  // Reseta o formulario e foca no primeiro input
  form.reset()
  form.n1.focus()
}

// Não permite que a letra 'e' nem o '_' sejam inseridos no campo do operador
form.op.addEventListener('keydown', (e) => {
  let invalidChars= [
    'e',
    '_'
  ]
  if(invalidChars.includes(e.key)) e.preventDefault()
})

button.addEventListener('click', calculate)

