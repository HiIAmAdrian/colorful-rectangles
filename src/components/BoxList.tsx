import { connect } from 'react-redux';

interface Box{
    id: number,
    number: number,
    R: number,
    G: number,
    B: number,
    creationTime: string
}

interface BoxListProps{
    id: number,
    setSelectedBox(id:number): void;
    list: Box[];
}

function BoxList(props:BoxListProps) {

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
    props.list.forEach((box: { R: number; G: number; B:number; id: number}) => {
        showList.push(createBox(box.R, box.G, box.B, box.id));
    })

    return (
        <div className='box-list'>
            {showList}
        </div>
     );
}

function mapStateToProps(state:Box[]){
    return {
        list: state
    }
}

export default connect(mapStateToProps)(BoxList);