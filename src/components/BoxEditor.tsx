import React from 'react';
import { useForm } from "react-hook-form";

interface BoxEditorProps {
    
}
 
function BoxEditor(props: BoxEditorProps){
    const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => {
    alert(JSON.stringify(data));
  };
    return(
       <div className='box-green'>
           <h4 className='title'>Box Editor</h4>
           <div className="box"></div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='selectors'>
                    <label className="label-inserter" htmlFor="R">R: <input type="number" {...register('R')}/></label>
                    
                    <label className='label-inserter' htmlFor="G">G: <input type="number" {...register('G')}/></label>
                    
                    <label className='label-inserter' htmlFor="B">B: <input type="number" {...register('B')}/></label>
                </div>
                <div className="buttons">       
                    <button className="button-insert" type="submit">Apply Color</button>
                </div>
            </form>
        </div>
    );
}
 
export default BoxEditor;
