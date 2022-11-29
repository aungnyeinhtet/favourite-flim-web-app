import React from 'react'
import Button from '../Button/Button'

const Input = (props) => {
    return (
        <div className='w-4/5 mx-auto flex border border-RED-TEXT flex-row items-center justify-between rounded-full bg-PRIMARY-BG'>
            <input onChange={props.onChange} className={props.className} type={props.type} placeholder={props.placeholder} value={props.value} />
            <Button onClick={props.onClick} className="px-6 hover:opacity-90 transition-opacity duration-150 ease-linear py-3 rounded-full bg-RED-TEXT font-semibold text-PRIMARY-TEXT">Search</Button>
        </div>
    )
}

export default Input
