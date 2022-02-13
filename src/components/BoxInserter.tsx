import { useForm, SubmitHandler } from "react-hook-form";
import { getBoxList } from '../store/store'
import { useSelector, useDispatch } from 'react-redux';
import { insert, insertRandom } from '../store/reducer'

interface DataSubmit{
    R: number,
    G: number,
    B: number,
}

function BoxInserter() {
    const { register, handleSubmit } = useForm<DataSubmit>();
    const boxes = useSelector(getBoxList);
    const dispatch = useDispatch()
    const MAX_BOXES = 9;
    
    const onSubmit: SubmitHandler<DataSubmit> = data => {
        if (boxes.length === MAX_BOXES)
        {
            alert("Number of boxes cannot exceed 9.");
        }
        else if (data.R && data.G && data.B)
        {
            dispatch(insert({
                id: 0,
                R: +data.R, 
                G: +data.G,
                B: +data.B}
                ));
        }
    };
 
    function handleRandom(){
        if (boxes.length === MAX_BOXES)
        {
            alert("Number of boxes cannot exceed 9.");
        }
        else
        {
            dispatch(insertRandom());
        }
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
            <button className="button-insert" onClick={handleRandom}>Insert Random</button>
        </div>
      );
}

export default BoxInserter;