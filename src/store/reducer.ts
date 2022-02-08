import { randomIntFromInterval } from '../helper';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Action{
    id: number,
    R: number,
    G: number,
    B: number
}

interface Box{
    id: number,
    number: number,
    R: number,
    G: number,
    B: number,
    creationTime: string
}

interface BoxSliceState {
    boxList: Box[];
}

const initialState: BoxSliceState = {
    boxList: [],
};

let lastId: number = 1;
const RGB_MAX: number= 255;
const RGB_MIN: number = 0;

const boxSlice = createSlice({
    name: "boxList",
    initialState,
    reducers: {
        insert: (state, action: PayloadAction<Action>) => {
            const today = new Date();
            const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            state.boxList = [
                ...state.boxList,
                {
                    id: lastId,
                    number: lastId++,
                    R: action.payload.R,
                    G: action.payload.G,
                    B: action.payload.B,
                    creationTime: time
                }
            ]
        },
        insertRandom: (state) => {
            const today = new Date();
            const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            state.boxList = [...state.boxList,
                {
                    id: lastId,
                    number: lastId++,
                    R: randomIntFromInterval(RGB_MIN, RGB_MAX),
                    G: randomIntFromInterval(RGB_MIN, RGB_MAX),
                    B: randomIntFromInterval(RGB_MIN, RGB_MAX),
                    creationTime: time
                }]
        },
        modify: (state, action: PayloadAction<Action>) => {
            state.boxList = state.boxList.map(box => box.id !== action.payload.id ? box : {...box, 
                R: action.payload.R,
                G: action.payload.G,
                B: action.payload.B
            });
        }
    }
})

export const { insert, insertRandom, modify } = boxSlice.actions;

export default boxSlice;