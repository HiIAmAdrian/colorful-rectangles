import React from 'react';

function Modal(props:any){
    if (!props.show){
        return null;
    }

    

    return (
        <div className='modal' onClick={props.onClose}>
            <div className='modal-content' onClick={e => e.stopPropagation()}>
                <div className='modal-header'>
                    <h4 className='modal-title'>BOX #{props.box.number}</h4>
                </div>
                <div className='modal-body'>
                    <ul>
                        <li>ID: {props.box.id}</li>
                        <li>Number: {props.box.number}</li>
                        <li>R: {props.box.R}</li>
                        <li>G: {props.box.G}</li>
                        <li>B: {props.box.B}</li>
                        <li>Creation time: {props.box.creationTime}</li>
                    </ul>
                    

                </div>
                <div className='modal-footer'>
                    <button onClick={props.onClose} className='button-modal'>Close</button>
                </div>
            </div>
        </div>
    );
}

export default Modal;