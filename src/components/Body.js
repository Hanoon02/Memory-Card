import React , {useState} from 'react';
import ImageCard from './ImageCard';
import ScoreBoard from './ScoreBoard';
function Body(){
    const [points, setPoints] = useState(0);

    const addPoints = () => {
        setPoints(points + 1);
    }

    return(
        <>
            <div className='py-5'>
                <ScoreBoard score = {points}/>
            </div>
            <div className='flex flex-row h-64 bg-cyan-100' onClick={addPoints}>
                <ImageCard fruit="banana"/>
                <ImageCard fruit="cherry"/>
                <ImageCard fruit="pineapple"/>
                <ImageCard fruit="pomegranate"/>
                <ImageCard fruit="strawberry" />
                <ImageCard fruit="watermelon"/>
                <ImageCard fruit="tangerine"/>
            </div>

        </>
    )
}

export default Body;