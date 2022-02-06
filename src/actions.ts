export function boxAdded(R: number, G: number, B: number){
    return ({
        type: "inserted",
        payload: {
            R,
            G,
            B
        }});
}

export function boxRandomAdded(){
    return ({
        type: "insertedRandom",
        payload: {}
    });
}

export function boxModified(id: number, R: number, G: number, B: number){
    return ({
        type: "modified",
        payload: {
            id,
            R,
            G,
            B
        }});
}