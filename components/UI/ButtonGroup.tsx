import React from 'react'

interface IProps {
  className?: string
}

function ButtonGroup({ className }: IProps) {
  return (
    <div
      className={`inline-flex flex-wrap rounded-md shadow-sm ${className}`}
      role='group'
    >
      <button type='button' className='btn-group-btn border rounded-l-[10px]'>
        All
      </button>
      <button
        type='button'
        className='btn-group-btn border-t border-b border-r'
      >
        Button
      </button>
      <button
        type='button'
        className='btn-group-btn border-t border-b border-r'
      >
        Free delivery
      </button>
      <button type='button' className='btn-group-btn border-t border-b'>
        New
      </button>
      <button type='button' className='btn-group-btn border rounded-r-[10px] '>
        Coming
      </button>
    </div>
  )
}

export default ButtonGroup
