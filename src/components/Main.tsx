import { useState } from 'react'
import Game from './Game';
import Menu from './Menu'

const Main = () =>
{
    const [playing, setPlaying] = useState(false);

    return (
        <div className='main'>
            {!playing && <Menu setPlaying={setPlaying} />}
            {playing && <Game />}
        </div>
    )
}

export default Main