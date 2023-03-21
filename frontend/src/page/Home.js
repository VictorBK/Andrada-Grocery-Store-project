import React from 'react';
import { useSelector } from 'react-redux';
import HomeCard from '../component/HomeCard';

const Home = () => {
  const productData = useSelector((state)=>state.product.productList)
  console.log(productData)
  const homeProductCartList = productData.slice(1,5)
  return (
    <div className='p-2 md:p4'>
      <div className='md:flex gap-4 py-2'>

        <div className='md:w-1/2'>
          <div className='flex gap-3 bg-slate-300 w-36 px-2 items-center rounded-full'>
            <p className='text-sm font-medium text-slate-900'>Organic Choices</p>
            <img src='https://www.healthkart.com/connect/wp-content/uploads/2022/07/900x500_thumbnail_HK-how-to-have-a-balanced-diet-1.png' className='h-7'/>
          </div>
          <h2 className='text-4xl md:text-7xl font-bold py-3'>The <span className='text-green-500 '> Healthiest</span> Choice in <span className='text-red-600 '>Town</span></h2>
          <p className='py-3 text-base'> Our mission is to change the way you eat.
                                         By connecting you to organically grown and bred meal options in categories such as fruits, vegetables, meats, cereals, spices, and other healthy choices, we trust that you shall appreciate the dedication and passion that our producers put into their work to ensure that you are provided with an array of the healthiest meal options in town. 
                                         We believe that everyone has a right to access organically grown food at a time when individuals still battle with the safety of chemically-grown and bred food options. Our heroes are the subsistent farmers who choose to adopt organic farming no matter the time it takes to get the food and meal options ready for the market.
                                         With that in mind, we believe that the greatest things ever made take time and food is no exception especially at a time when authentic meal options continue to be scarce. </p>
          <button className='font-bold bg-green-500 text-slate-200 px-4 py-2 rounded-md'>Order Now</button>
        </div>

        <div className='md:w-1/2 flex flex-wrap gap-5 p-4 justify-center'>
        {
          homeProductCartList[0] && homeProductCartList.map(el =>{
            return(
              <HomeCard
                key={el._id}
                image={el.image}
                name={el.name}
                price={el.price}
                category={el.category}
              />
            )
          })
        }   
        </div>
      </div>

      <div className=''>
          <h2 className='font-bold text-2xl text-slate-900'>Fresh Vegetables</h2>
          <div className=''>
            
          </div>
      </div>
    </div>
  );
};

export default Home;