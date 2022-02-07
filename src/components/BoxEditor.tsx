import React, {useEffect, useState} from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import store from '../store/store';
import { boxModified } from '../actions';
import { connect } from 'react-redux';
import Modal from './Modal';

interface DataSubmit{
    R: number,
    G: number,
    B: number,
}

interface Box{
    id: number,
    number: number,
    R: number,
    G: number,
    B: number,
    creationTime: string
}

interface BoxEditorProps{
    id: number;

}

function BoxEditor(props:BoxEditorProps){
    const { register, handleSubmit } = useForm<DataSubmit>();
    const [show, setShow] = useState(false);

    const [currentBoxData, setCurrentBoxData] = useState({
        id: 0,
        number: 0,
        R: 0,
        G: 0,
        B: 0,
        creationTime: ''
    });

   useEffect(() => {
      const boxData: Box  = store.getState().filter((box: { id: number; }) => box.id === props.id)[0];
    setCurrentBoxData({
        ...currentBoxData,
        ...boxData
    });
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [ props.id]);

    const boxStyle = {
        ["backgroundColor" as string]: `rgb(${currentBoxData.R}, ${currentBoxData.G}, ${currentBoxData.B})`  as React.CSSProperties,
    }

    const onSubmit: SubmitHandler<DataSubmit> = data => {
        if (data.R && data.G && data.B)
        {
            store.dispatch(boxModified(props.id, Number(data.R), Number(data.G), Number(data.B)));
        }
    };

    function updateCurrentBox(event: any){
        //console.log(event.target.name);
        let updatedValue = {};
        updatedValue = {[`${event.target.name}` as string]: Number(`${event.target.value}`)};
        console.log(currentBoxData);
        setCurrentBoxData({
            ...currentBoxData,
            ...updatedValue
        });
    }

    return(
       <div className='box-green'>
           <h4 className='title'>Box Editor</h4>
           <button className='button-modal' onClick={() => setShow(true)}>Info</button>
           <div className="box-edit" style={boxStyle}></div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='selectors'>
                    <label className="label-inserter" htmlFor="R">R: <input min="0" max="255" onKeyUp={updateCurrentBox} type="number" {...register('R')}/></label>            
                    <label className='label-inserter' htmlFor="G">G: <input min="0" max="255" onKeyUp={updateCurrentBox} type="number" {...register('G')}/></label>               
                    <label className='label-inserter' htmlFor="B">B: <input min="0" max="255" onKeyUp={updateCurrentBox} type="number" {...register('B')}/></label>
                </div>
                <div className="buttons">       
                    <button className="button-insert" type="submit">Apply Color</button>
                </div>
            </form>
            <Modal box={currentBoxData} onClose={() => setShow(false)} show={show}/>
        </div>
    );
}

function mapStateToProps(state:Box[]){
    return {
        list: state
    }
}

export default connect(mapStateToProps)(BoxEditor);
