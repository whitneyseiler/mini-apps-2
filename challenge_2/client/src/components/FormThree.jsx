import React from 'react';
import {Row, Input} from 'react-materialize'

let FormThree = ({onSubmit, event}) => {
    return (
        <div>
            <h3>Please Enter Your Billing Information:</h3>
            <Row>
                Credit Card #:
                <Input type="text" id="first" className="f3" />
                Expiration Date:
                <Input type="date" id="last" className="f3" /><br />
                CVV:
                <Input type="number" id="cvv" className="f3" />
                Billing Zip Code:
                <Input type="number" id="zip" className="f3" />
                <Input type="submit" onClick={(event) => onSubmit(event)}/>
            </Row>
        </div>
    )
}

export default FormThree;