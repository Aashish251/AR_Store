import React from 'react'

function item() {
  return (
    <div className='item'>
        <h4>
            {item.title}</h4>
            <img src = {item.image} alt="" height='100' width='100'/>
            <h4>{item.price}</h4>
    </div>
  )
}

export default item