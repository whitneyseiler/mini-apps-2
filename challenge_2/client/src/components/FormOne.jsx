import React from 'react';
import {Row, Input} from 'react-materialize'

let FormOne = ({onSubmit, event}) => {
    return (
        <div>
            <h3>Please Enter Your Contact Information:</h3>
            <Row>
                <Input type="text" id="first" className="f1" label="First:"/>
                <Input type="text" id="last" className="f1" label="Last:"/>
                <Input type="email" id="email" className="f1" label="Email:"/>
                <Input type="password" id="password" className="f1" label="Password:"/>
                <Input type="submit" onClick={(event) => onSubmit(event)} value="NEXT"/>
            </Row>
        </div>
    )
}

export default FormOne;