import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { getProducts } from '../../redux/productSlice'
import { RootState } from '../../redux/store'
import ButtonGroup from '../UI/ButtonGroup'
import SelectBox from '../UI/SelectBox'
import SingleProduct from './SingleProduct'

function Products() {
  const dispatch = useAppDispatch()
  const { isLoading, products, error } = useAppSelector(
    (state: RootState) => state.products
  )

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  return (
    <div className='mt-[105px] bg-[#F7F8FA] px-[50px] sm:px-[80px] xl:px-[132px] pb-[60px] text-[24px] leading-[24px] tracking-[-0.012em]'>
      <h2>Home Kitchen</h2>
      <ButtonGroup className='mt-[16px]' />
      <SelectBox className='mt-[32px]' />
      <div className='mt-[32px] flex flex-wrap justify-center md:justify-between items-center gap-y-[39px]'>
        {products.map((product: any) => (
          <SingleProduct key={product.id} data={product} />
        ))}
      </div>
      <button
        // onClick={() => dispatch(loadMoreProducts())}
        className='mt-[50px] sm:mt-[105px] block mx-auto py-[15px] pl-[20px] pr-[40px] border border-[#F3BA00] rounded-[10px] text-base font-normal text-[#929292] leading-[20px] tracking-[-0.012em] hover:bg-[#F3BA00] hover:text-[black] hover:font-semibold'
      >
        <span className='mr-[7px]'>+</span> Load more...
      </button>
    </div>
  )
}

export default Products
