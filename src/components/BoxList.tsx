import { useSelector } from 'react-redux';
import { getBoxList } from '../store/store'

interface BoxListProps{
    id: number,
    setSelectedBox(id:number): void;
}

function BoxList(props:BoxListProps) {

    const boxes = useSelector(getBoxList);

    function handleSelectedBox(id: number){
        props.setSelectedBox(id);
    }

    function createBox(R:number, G:number, B:number, id: number){
        const style = {
            backgroundColor: `rgb(${R}, ${G}, ${B})`,
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
    boxes.forEach((box: { R: number; G: number; B:number; id: number}) => {
        showList.push(createBox(box.R, box.G, box.B, box.id));
    })

    return (
        <div className='box-list'>
            {showList}
        </div>
     );
}

export default BoxList;