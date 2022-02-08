import * as actions from "./actionTypes"

export function boxAdded(R: number, G: number, B: number){
    return ({
        type: actions.BOX_ADDED,
        payload: {
            R,
            G,
            B
        }});
}

export function boxRandomAdded(){
    return ({
        type: actions.BOX_RANDOM_ADDED,
        payload: {}
    });
}

export function boxModified(id: number, R: number, G: number, B: number){
    return ({
        type: actions.BOX_MODIFIED,
        payload: {
            id,
            R,
            G,
            B
        }});
}