import { randomIntFromInterval } from './helper';

let lastId: number = 0;

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
    B: number
}

export default function reducer(state: Array<Box> = [], action: Action) {
    if (action.type === 'inserted')
    {
        return [...state,
        {
            id: lastId,
            number: lastId++,
            R: action.payload.R,
            G: action.payload.G,
            B: action.payload.B
        }];
    }
    else if (action.type === "insertedRandom")
    {
        return [...state,
            {
                id: lastId,
                number: lastId++,
                R: randomIntFromInterval(0, 255),
                G: randomIntFromInterval(0, 255),
                B: randomIntFromInterval(0, 255)
            }];
    }
    else if (action.type === 'modified')
    {
        return state.map(box => box.id !== action.payload.id ? box : {...box, 
            R: action.payload.R,
            G: action.payload.G,
            B: action.payload.B
        });
    }

    return state;
}