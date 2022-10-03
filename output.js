import React from 'react';
import OutputRow from './OutputRow';

const Output = props => {
    return(
        <div style={{background:'rgb(64, 196, 196)', borderRadius:'5px', margin:'5px'}}>
            <OutputRow value={props.answer} textSize={{fontSize: '20px'}}/>
            <OutputRow value={props.user}/>
        </div>
    )
}

export default Output;