import React from 'react'
import { useSelector } from 'react-redux'
import CartProduct from '../component/CartProduct'
import emptyCartImage from "../assets/4496-empty-cart.gif"

const Cart = () => {
    const productCartItem = useSelector((state)=>state.product.cartItem)
    console.log(productCartItem)

    const totalPrice = productCartItem.reduce((acc,curr)=>acc + parseInt(curr.total),0)
    const totalQty = productCartItem.reduce((acc,curr)=>acc + parseInt(curr.qty),0)
  return (
    <> 
    
    <div className='p-2 md:p-4'>
        <h2 className='text-lg md:text-3xl font-bold text-slate-800'>Your Cart Items</h2>

        {productCartItem[0] ?
        <div className='my-4 flex gap-3'>
          {/* Display Cart Items */}
          <div className='w-full max-w-3xl'>
              {
                    productCartItem.map(el =>{
                      return(
                          <CartProduct 
                              key={el._id} 
                              id={el._id}
                              name={el.name}
                              image={el.image}
                              category={el.category}
                              qty={el.qty}
                              price={el.price}
                              total={el.total}
                              />
                      )
                    })
                  }    
              </div>

          {/* Total Cart Items */}
          <div className='w-full max-w-md ml-auto'>
              <h2 className='bg-blue-500 text-white p-2 text-lg'>Order Summary</h2>
              <div className="flex w-full py-2 text-lg border-b">
                <p>Total Quantity : </p>
                <p className='ml-auto w-32 font-bold'>{totalQty}</p>
              </div>
              <div className='flex w-full py-2 text-lg border-b'>
                <p>Total Price</p>
                <p className='ml-auto w-32 font-bold'><span className="text-green-600">Ksh</span>{totalPrice}</p>
              </div>
              <button className='bg-green-600 w-full text-lg font-bold py-2 text-white'>Payment</button>
          </div>
        </div>

        :
        <>
          <div className='flex w-full justify-center items-center flex-col'>
            <img src={emptyCartImage} className="w-full max-w-sm"/>
            <p className='text-slate-800 text-3xl font-bold'>Your Cart is Empty</p>
          </div> 
        </>
      }
    </div>
  
  </>
  )
}

export default Cart
