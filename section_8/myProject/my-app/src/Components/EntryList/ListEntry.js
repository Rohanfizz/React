import react from 'react';
import Card from '../UI/Card';
import './ListEntry.css';
const ListEntry = props => {
    return (
        <Card className='list-entry'>
            <div className='entry-name'>
                {props.name}
            </div>
            <div className='entry-age'>
                's age is {props.age}
            </div>
        </Card>
    )
}

export default ListEntry;