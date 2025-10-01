import React from 'react'

const BtnPrimary = (props) => {
  return (
    <button className={`bg-emerald-900 px-5 py-2 rounded hover:bg-emerald-800 hover:scale-105 `}>
        {props.value}
    </button>
  )
}

export default BtnPrimary
