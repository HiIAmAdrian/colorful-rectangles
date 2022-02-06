import * as React from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import { boxAdded, boxRandomAdded, boxModified } from '../actions';
import store from '../store/store';
interface BoxInserterProps{

}

interface DataSubmit{
    R: number,
    G: number,
    B: number,
}


function BoxInserter(props: BoxInserterProps) {
    const { register, handleSubmit } = useForm<DataSubmit>();
    const onSubmit: SubmitHandler<DataSubmit> = data => {
        store.dispatch(boxAdded(Number(data.R), Number(data.G), Number(data.B)));
        console.log(store.getState());
    };
 
    function insertRandom(){
        store.dispatch(boxRandomAdded());
    }

    return (
        <div className="box-green">
            <h4 className='title'>Box Inserter</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='selectors'>
                    <label className="label-inserter" htmlFor="R">R: <input type="number" {...register('R', { min: 0, max: 255 })}/></label>
                    
                    <label className='label-inserter' htmlFor="G">G: <input type="number" {...register('G', { min: 0, max: 255 })}/></label>
                    
                    <label className='label-inserter' htmlFor="B">B: <input type="number" {...register('B', { min: 0, max: 255 })}/></label>
                </div>
                <div className="buttons">       
                    <button className="button-insert" type="submit">Insert</button>
                    <button className="button-insert" onClick={insertRandom}>Insert Random</button>
                </div>
            </form>

        </div>
      );
}

export default BoxInserter;