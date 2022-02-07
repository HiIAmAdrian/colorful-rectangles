import * as React from 'react';
import { connect } from 'react-redux';

function BoxList(props:any) {

    function handleSelectedBox(id: number){
        props.setSelectedBox(id);
    }

    function createBox(R:number, G:number, B:number, id: number){
        const style = {
            ["backgroundColor" as any]: `rgb(${R}, ${G}, ${B})`  as React.CSSProperties,
            border: props.id === id ? '3px solid #39FF14' : 'none'
        }
        return (<div 
                    style={style} 
                    onClick={() => handleSelectedBox(id)} 
                    className="box"
                    key={id}
                >
                {''}
                </div>)
    }

    let showList: JSX.Element[] = [];
    props.list.map((box: { R: number; G: number; B:number; id: number}) => {
        showList.push(createBox(box.R, box.G, box.B, box.id));
        return 0;
    })

    return (
        <div className='box-list'>
            {showList}
        </div>
     );
}

function mapStateToProps(state:any){
    return {
        list: state
    }
}

export default connect(mapStateToProps)(BoxList);