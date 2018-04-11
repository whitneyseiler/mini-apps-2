import React from 'react';
import {Row, Input, Dropdown, Button, NavItem} from 'react-materialize'

let FormTwo = ({onSubmit, event}) => {
    return (
        <div>
            <h3>Please Enter Your Address:</h3>
            <Row>
                <Input type="text" id="line-one" className="f2" label="Line One:"/>
                <Input type="text" id="line-two" className="f2" label="Line Two:"/>
                <Input type="text" id="city" className="f2" label="City"/>
                <Dropdown trigger={
                    <Button>State</Button>
                }>
                    <NavItem value="AL">Alabama</NavItem>
                    <NavItem value="AK">Alaska</NavItem>
                    <NavItem value="AZ">Arizona</NavItem>
                    <NavItem value="AR">Arkansas</NavItem>
                    <NavItem value="CA">California</NavItem>
                    <NavItem value="CO">Colorado</NavItem>
                    <NavItem value="CT">Connecticut</NavItem>
                    <NavItem value="DE">Delaware</NavItem>
                    <NavItem value="DC">District Of Columbia</NavItem>
                    <NavItem value="FL">Florida</NavItem>
                    <NavItem value="GA">Georgia</NavItem>
                    <NavItem value="HI">Hawaii</NavItem>
                    <NavItem value="ID">Idaho</NavItem>
                    <NavItem value="IL">Illinois</NavItem>
                    <NavItem value="IN">Indiana</NavItem>
                    <NavItem value="IA">Iowa</NavItem>
                    <NavItem value="KS">Kansas</NavItem>
                    <NavItem value="KY">Kentucky</NavItem>
                    <NavItem value="LA">Louisiana</NavItem>
                    <NavItem value="ME">Maine</NavItem>
                    <NavItem value="MD">Maryland</NavItem>
                    <NavItem value="MA">Massachusetts</NavItem>
                    <NavItem value="MI">Michigan</NavItem>
                    <NavItem value="MN">Minnesota</NavItem>
                    <NavItem value="MS">Mississippi</NavItem>
                    <NavItem value="MO">Missouri</NavItem>
                    <NavItem value="MT">Montana</NavItem>
                    <NavItem value="NE">Nebraska</NavItem>
                    <NavItem value="NV">Nevada</NavItem>
                    <NavItem value="NH">New Hampshire</NavItem>
                    <NavItem value="NJ">New Jersey</NavItem>
                    <NavItem value="NM">New Mexico</NavItem>
                    <NavItem value="NY">New York</NavItem>
                    <NavItem value="NC">North Carolina</NavItem>
                    <NavItem value="ND">North Dakota</NavItem>
                    <NavItem value="OH">Ohio</NavItem>
                    <NavItem value="OK">Oklahoma</NavItem>
                    <NavItem value="OR">Oregon</NavItem>
                    <NavItem value="PA">Pennsylvania</NavItem>
                    <NavItem value="RI">Rhode Island</NavItem>
                    <NavItem value="SC">South Carolina</NavItem>
                    <NavItem value="SD">South Dakota</NavItem>
                    <NavItem value="TN">Tennessee</NavItem>
                    <NavItem value="TX">Texas</NavItem>
                    <NavItem value="UT">Utah</NavItem>
                    <NavItem value="VT">Vermont</NavItem>
                    <NavItem value="VA">Virginia</NavItem>
                    <NavItem value="WA">Washington</NavItem>
                    <NavItem value="WV">West Virginia</NavItem>
                    <NavItem value="WI">Wisconsin</NavItem>
                    <NavItem value="WY">Wyoming</NavItem>
                </Dropdown>
                <Input type="text" pattern="[0-9]{5}" id="zip" className="f2" label="Zip Code:"/>
                <Input type="tel" id="phone" className="f2" label="Phone Number:"/>
                <Input type="submit" onClick={(event) => onSubmit(event)} value="NEXT"/>
            </Row>
        </div>
    )
}

export default FormTwo;