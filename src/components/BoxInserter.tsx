import { useForm, SubmitHandler } from "react-hook-form";
import { boxAdded, boxRandomAdded } from '../actions';
import store from '../store/store';

interface DataSubmit{
    R: number,
    G: number,
    B: number,
}

function BoxInserter() {
    const { register, handleSubmit } = useForm<DataSubmit>();
    
    const onSubmit: SubmitHandler<DataSubmit> = data => {
        if (store.getState().length === 9)
            alert("Number of boxes cannot exceed 9.");
        else if (data.R && data.G && data.B)
            store.dispatch(boxAdded(Number(data.R), Number(data.G), Number(data.B)));   
    };
 
    function insertRandom(){
        if (store.getState().length === 9)
            alert("Number of boxes cannot exceed 9.");
        else
            store.dispatch(boxRandomAdded());
    }

    return (
        <div className="box-green">
            <h4 className='title'>Box Inserter</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='selectors'>
                    <label className="label-inserter" htmlFor="R">R: <input min="0" max="255" type="number" {...register('R')}/></label>                  
                    <label className='label-inserter' htmlFor="G">G: <input min="0" max="255" type="number" {...register('G')}/></label>
                    <label className='label-inserter' htmlFor="B">B: <input min="0" max="255" type="number" {...register('B')}/></label>
                </div>
                <div className="buttons">       
                    <button className="button-insert" type="submit">Insert</button> 
                </div>
            </form>
            <button className="button-insert" onClick={insertRandom}>Insert Random</button>

        </div>
      );
}

export default BoxInserter;