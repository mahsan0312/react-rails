import * as React from 'react'
import * as ReactDOM from 'react-dom'

const Hello = () => {
  return (<div>Hello, Rails 7!</div>)
}

// Use it if you don't plan to use "remount"
// document.addEventListener('DOMContentLoaded', () => {
  // ReactDOM.render(<Hello />, document.getElementById('hello'))
// })

export default Hello
