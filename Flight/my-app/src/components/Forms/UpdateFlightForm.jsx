import { useRef } from "react";
import { Form } from "./FlightForm";
import axios from 'axios';
import { FormRow, Center } from "../../components/Styles/StyledComponents";

export const UpdateFlightForm = (data) => {
    const flightNum = useRef();
    const depAirport = useRef();
    const arrAirport = useRef();
    const depDate = useRef();
    const arrDate = useRef();
    const depTime = useRef();
    const arrTime = useRef();
    const passangerAmount = useRef();
    let success = false;

    const handleSubmit = async(event) => {
            event.preventDefault()
            const urlPath = 'http://localhost:8088/flights/:id';
        
            try{
                await axios.put(urlPath, {
                    flightNum: flightNum.current.value,
                    departureAirport: depAirport.current.value,
                    arrivalAirport: arrAirport.current.value,
                    departureDate: depDate.current.value,
                    arrivalDate: arrDate.current.value,
                    departureTime: depTime.current.value,
                    arrivalTime: arrTime.current.value,
                    flightPassangerCurrent: passangerAmount.current.value,
                }).then(response => console.log("Flight successfully updated!"))
            
            flightNum.current.value = null;
            depAirport.current.value = null;
            arrAirport.current.value = null;
            depDate.current.value = null;
            arrDate.current.value = null;
            depTime.current.value = null;
            arrTime.current.value = null;
            passangerAmount.current.value = null;
            }catch (err) {
                console.log(err);
                success = false
            }
            if(success)alert("Flight has been Updated")
            else{
                alert("Flight was NOT Updated\nPlease Review Form and try again!");
            }

        }
        return (
            <Form>
                <Center>
                    <h3>Flight Update Form</h3>
                </Center>
                <Center>
                <FormRow>
                    <lable htmlFor='depAirport'>Departure Airport: </lable>
                    <input id='depAirport' type="string" size="25" placeHolder="Enter a Departure Airport" ref={depAirport} required />
                </FormRow>
                </Center>
                <Center>
                <FormRow>
                    <lable htmlFor='arrAirport'>Arrival Airport: </lable>
                    <input id='arrAirport' type="String" size="25" placeHolder="Enter an Arrival Airport" ref={arrAirport} required />
                </FormRow>
                </Center>
                <Center>
                <FormRow>
                    <lable htmlFor='depDate'>Departure Date: </lable>
                    <input id='depDate' type="Date" ref={depDate} required />
                </FormRow>
                </Center>
                <Center>
                <FormRow>
                    <lable htmlFor='arrDate'>Arrival Date: </lable>
                    <input id='arrDate' type="Date" ref={arrDate} required />
                </FormRow>
                </Center>
                <Center>
                <FormRow>
                    <lable htmlFor='depTime'>Departure Time: </lable>
                    <input id='depTime' type="time" ref={depTime} required />
                </FormRow>
                </Center>
                <Center>
                <FormRow>
                    <lable htmlFor='arrTime'>Arrival Time: </lable>
                    <input id='arrTime' type="time" ref={arrTime} required />
                </FormRow>
                </Center>
                <Center>
                <FormRow>
                    <lable htmlFor='passangerAmount'>Number of Passangers: </lable>
                    <input id='passangerAmount' type="text" size="25" placeHolder="Enter Number of Passangers" ref={passangerAmount} required />
                </FormRow>
                </Center>
                <Center>
                    <button onClick={handleSubmit}>Submit form</button>
                </Center>
            </Form>
        )
}