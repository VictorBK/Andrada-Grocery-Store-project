import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {
    const productCartItem = useSelector((state)=>state.product.cartItem)
    console.log(productCartItem)
  return (
    <div className='p-2 md:p-4'>
        <h2 className='text-lg md:text-3xl font-bold text-slate-800'>Your Cart Items</h2>
        
        <div className=''>
          {/* Display Cart Items */}
          <div className=''></div>
              <div className=''>
                  
              </div>

          {/* Total Cart Items */}
          <div className=''></div>
        </div>
    </div>
  )
}

export default Cart
