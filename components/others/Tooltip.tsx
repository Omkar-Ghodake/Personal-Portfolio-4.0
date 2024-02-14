import React from 'react'

const Tooltip = ({
  content,
  position,
  className,
}: {
  content: string
  position: 'top' | 'right' | 'bottom' | 'left'
  className?: string
}) => {
  return (
    <div
      className={`absolute hidden sm:flex items-center justify-center mx-auto text-center text-sm min-w-[10vw] max-w-[15vw] rounded-md cursor-text scale-0 group-hover:scale- duration-10 delay-[1000ms] transition-tooltip ease-in
      ${position === 'top' && 'flex-col -top-[160%] left-1/2 -translate-x-1/2'}
      ${position === 'right' && '-right-[85%] top-1/2 -translate-y-1/2'}
      ${
        position === 'bottom' &&
        'flex-col -bottom-[160%] left-1/2 -translate-x-1/2'
      }
      ${position === 'left' && '-left-[85%] top-1/2 -translate-y-1/2'}
      ${className}`}
      id='tooltip'
    >
      <div
        className={`text-white bg-gray-800/80 p-2 rounded-md
        ${position === 'top' && 'order-1'}
        ${position === 'right' && 'order-2'}
        ${position === 'bottom' && 'order-2'}
        ${position === 'left' && 'order-1'}
      `}
      >
        {content}
      </div>

      <div
        className={`mx-auto h-4 w-4 border-t-8 border-r-8 border-b-8 border-l-8
        ${
          position === 'top' &&
          'order-2 border-t-gray-800/80 border-r-transparent border-b-transparent border-l-transparent'
        }
        ${
          position === 'right' &&
          'order-1 border-t-transparent border-r-gray-800/80 border-b-transparent border-l-transparent'
        }
        ${
          position === 'bottom' &&
          'order-1 border-t-transparent border-r-transparent border-b-gray-800/80 border-l-transparent'
        }
        ${
          position === 'left' &&
          'order-2 border-t-transparent border-r-transparent border-b-transparent border-l-gray-800/80'
        }
      `}
      ></div>
    </div>
  )
}

export default Tooltip
