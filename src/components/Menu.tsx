import React from 'react'
import { TbNewSection } from 'react-icons/tb'
import { FaRegNewspaper } from 'react-icons/fa'

const Menu = (props: { setPlaying: React.Dispatch<React.SetStateAction<boolean>> }) =>
{
    return (
        <div className="main-menu">
            <button type='button' className='btn' onClick={() => props.setPlaying(true)}><TbNewSection /> New game</button>
            <button type='button' className='btn btn--green'><FaRegNewspaper /> Rules</button>
            <h1 className='header-right-text'>Best score: 0</h1>
        </div>
    )
}

export default Menu