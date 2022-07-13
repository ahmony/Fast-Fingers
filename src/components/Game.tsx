import { notDeepEqual } from 'assert';
import { useState, useRef, useEffect } from 'react'
import { TbH1 } from 'react-icons/tb';
import { QandA } from '../data/questions&answers';

const getQuestionNumber = Math.floor(Math.random() * QandA.length);

const Game = () =>
{

    const [start, setStart] = useState(false)
    const [score, setScore] = useState(0)
    const [end, setEnd] = useState(false)
    const [value, setValue] = useState('')
    const gameBox = useRef<any>();
    const counter = useRef<any>();
    const timeForPlay = useRef<any>();

    useEffect(() =>
    {
        const id = setInterval(() =>
        {
            if (counter.current.textContent >= 0)
            {
                counter.current.textContent -= 1;
            }
        }, 1000)

        setTimeout(() =>
        {
            setStart(true);
            clearInterval(id);

            const id2 = setInterval(() =>
            {
                if (timeForPlay.current.textContent > 0)
                {
                    timeForPlay.current.textContent -= 1;
                }
                else
                {
                    setStart(false)
                    setEnd(true)
                    clearInterval(id2)
                }
            }, 1000)
        }, 5000)
    }, [])

    const appendResult = () =>
    {
        const validity = QandA[getQuestionNumber].answers.includes(value);
        const node = `<p class='game__box-answer'>${value}<span class=${validity ? 'true' : 'false'}> +${+validity}</span ></p > `;
        if (validity) setScore((prev: number) => prev + 1)
        gameBox.current.innerHTML += node;
        setValue('');
    }

    return (
        <div className='game'>
            {!start && !end && (
                <div className='game__counter'><p>Starting for <span ref={counter}>5</span></p></div>
            )}

            {start && (
                <>
                    <div className="game__question"><h1>{QandA[getQuestionNumber].question}</h1> <h2 ref={timeForPlay}>20</h2></div>
                    <div className="game__box" ref={gameBox}>
                    </div>
                    <input type="text" placeholder='Your answers...' className='game__input' value={value}
                        onChange={(e: any) => { setValue(e.target.value) }}
                        onKeyDown={(e: any) =>
                        {
                            if (e.key === 'Enter')
                            {
                                appendResult();
                            }
                        }} />
                </>
            )}
            {end && <h1 className='end'>You scored: <span style={{ color: 'red' }}>{score}</span></h1>}
        </div>
    )
}

export default Game