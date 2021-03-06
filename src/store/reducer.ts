import { randomIntFromInterval } from '../helper';
import * as actions from './actionTypes'

let lastId: number = 1;

interface Action{
    type: string,
    payload: {
        id: number,
        R: number,
        G: number,
        B: number
    }
}

interface Box{
    id: number,
    number: number,
    R: number,
    G: number,
    B: number,
    creationTime: string
}

export default function reducer(state: Array<Box> = [], action: Action) {
    const today = new Date();
    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const RGB_MAX = 255;
    const RGB_MIN = 0;
    if (action.type === actions.BOX_ADDED)
    {
        return [...state,
        {
            id: lastId,
            number: lastId++,
            R: action.payload.R,
            G: action.payload.G,
            B: action.payload.B,
            creationTime: time
        }];
    }
    else if (action.type === actions.BOX_RANDOM_ADDED)
    {
        return [...state,
            {
                id: lastId,
                number: lastId++,
                R: randomIntFromInterval(RGB_MIN, RGB_MAX),
                G: randomIntFromInterval(RGB_MIN, RGB_MAX),
                B: randomIntFromInterval(RGB_MIN, RGB_MAX),
                creationTime: time
            }];
    }
    else if (action.type === actions.BOX_MODIFIED)
    {
        return state.map(box => box.id !== action.payload.id ? box : {...box, 
            R: action.payload.R,
            G: action.payload.G,
            B: action.payload.B
        });
    }

    return state;
}