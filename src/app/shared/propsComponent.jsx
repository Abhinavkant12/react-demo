import React from 'react';
//const PropsComponent = ({name,age}) => { // another way
//const PropsComponent = ((name,...args) => { // another way
const PropsComponent = (props) => {
    const style1 = {
        padding: '5px',
        margin: '10px',
        border: '1px solid #28a745',
    };
    
    return (
        <div style={style1}>
        <h5>props</h5>
        {/* <table>
           <tr>
               <td></td>
                <td></td>
           </tr>
        </table> */}
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>{props.children}</p>
      
        </div>
    );
}

export default PropsComponent;