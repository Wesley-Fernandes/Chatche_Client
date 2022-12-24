import React from 'react'
import './index.sass'

const Main = ({children}) => {
  return (
    <main className='mainRoom'>
        <div className='Msgs'>
            {children}
        </div>
    </main>
  )
}

export default Main;
