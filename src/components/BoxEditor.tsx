import { useEffect, useState } from 'react';
import { getBoxList } from '../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { modify } from '../store/reducer'
import Modal from './Modal';

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
    const RGB_MAX = 255;
    const RGB_MIN = 0;
    const boxes = useSelector(getBoxList);
    const dispatch = useDispatch();
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
      const boxData: Box  = boxes.filter((box: { id: number; }) => box.id === props.id)[0];
    setCurrentBoxData({
        ...currentBoxData,
        ...boxData
    });
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [ props.id]);

    const boxStyle = {
        backgroundColor: `rgb(${currentBoxData.R}, ${currentBoxData.G}, ${currentBoxData.B})`,
    }

    function handleSetColors(){
        if (currentBoxData.R && currentBoxData.G && currentBoxData.B)
        {
            dispatch(modify({
                id: props.id, 
                R: +currentBoxData.R, 
                G: +currentBoxData.G,
                B: +currentBoxData.B
            }));
            setCurrentBoxData({
                ...currentBoxData,
                id: 0,
                number: 0,
                R: 0,
                G: 0,
                B: 0,
                creationTime: ''
            });
        }
    };

    function handleChange(event: React.ChangeEvent<HTMLInputElement>){
        let updatedValue = {};

        if (+event.target.value > RGB_MAX || +event.target.value < RGB_MIN)
        {
            alert("Insert a value between 0 and 255.")
        }
        else
        {
            updatedValue = {[event.target.name]: +event.target.value};
            setCurrentBoxData({
                ...currentBoxData,
                ...updatedValue
            });
        }
    }

    return(
       <div className='box-green'>
            <h4 className='title'>Box Editor</h4>
            <button className='button-modal' onClick={() => setShow(true)}>Info</button>
            <div className="box-edit" style={boxStyle}></div>
            <form>
            <div className='selectors'>
                <label className="label-inserter" htmlFor="R">R: <input min="0" max="255" onChange={handleChange} type="number" name='R' value={currentBoxData.R} /></label>
                <label className='label-inserter' htmlFor="G">G: <input min="0" max="255" onChange={handleChange} type="number" name='G' value={currentBoxData.G} /></label>
                <label className='label-inserter' htmlFor="B">B: <input min="0" max="255" onChange={handleChange} type="number" name='B' value={currentBoxData.B} /></label>
            </div>
            </form>
            <div className="buttons">
                <button className="button-insert" onClick={handleSetColors}>Apply Color</button>
            </div>
            <Modal box={currentBoxData} onClose={() => setShow(false)} show={show} />
        </div>
    );
}

export default BoxEditor;