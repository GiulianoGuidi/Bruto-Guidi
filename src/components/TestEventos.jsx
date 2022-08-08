import React from 'react'

const TestEventos = () => {

function handleOnClick (e) {
console.log(e)
}

function handleOnKeyDown (e) {
e.preventDefault()
}

  return (
    <>
    <div onClick={handleOnClick}>TestEventos</div>

    <input onKeyDown={handleOnKeyDown} />

    </>
  )
}

export default TestEventos