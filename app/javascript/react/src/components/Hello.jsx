import * as React from 'react'
import * as ReactDOM from 'react-dom'

const Hello = () => {
  return (<div>Hello, My name is Muhammad Ahsan</div>)
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Hello />, document.getElementById('hello'))
})

export default Hello
