import { useRef } from "react";
import { Form } from "./FlightForm";
import axios from 'axios';
import { FormRow, Center } from "../../components/Styles/StyledComponents";

export const UpdateFlightForm = ({flight_Id, flightNum, departureDate, arrivalDate, departureAirport, arrivalAirport,
                                    departureTime, arrivalTime, flightPassangerCurrent }) => {
    const flightNumRef = useRef();
    const depAirportRef = useRef();
    const arrAirportRef = useRef();
    const depDateRef = useRef();
    const arrDateRef = useRef();
    const depTimeRef = useRef();
    const arrTimeRef = useRef();
    const passangerAmountRef = useRef();
    let success = false;
    
    const onSubmit = async () => {
            
            //const urlPath = 'http://localhost:8088/flights/:id';
        
            try{
                await axios.put(`http://localhost:8088/flights/${flight_Id}`, {
                    flightNum: flightNumRef.current.value,
                    departureAirport: depAirportRef.current.value,
                    arrivalAirport: arrAirportRef.current.value,
                    departureDate: depDateRef.current.value,
                    arrivalDate: arrDateRef.current.value,
                    departureTime: depTimeRef.current.value,
                    arrivalTime: arrTimeRef.current.value,
                    flightPassangerCurrent: passangerAmountRef.current.value,
                }).then(response => console.log("Flight successfully updated!"))
           
            flightNumRef.current.value = null;
            depAirportRef.current.value = null;
            arrAirportRef.current.value = null;
            depDateRef.current.value = null;
            arrDateRef.current.value = null;
            depTimeRef.current.value = null;
            arrTimeRef.current.value = null;
            passangerAmountRef.current.value = null;
            success = true;
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
                <form onSubmit ={(event) => {event.preventDefault(); onSubmit()}}>
                <Center>
                    <h3>Flight Update Form</h3>
                </Center>
                <Center>
                <FormRow>
                    <lable htmlFor='flightNum'>Flight Number: </lable>
                    <input defaultValue={flightNum} placeholder={flightNum} id='flightNum' type="string" size="25" placeHolder="Enter Flight Number" ref={flightNumRef} required />
                </FormRow>
                </Center>
                <Center>
                <FormRow>
                    <lable htmlFor='depAirport'>Departure Airport: </lable>
                    <input defaultValue={departureAirport} placeholder={departureAirport} id='depAirport' type="string" size="25" placeHolder="Enter a Departure Airport" ref={depAirportRef} required />
                </FormRow>
                </Center>
                <Center>
                <FormRow>
                    <lable htmlFor='arrAirport'>Arrival Airport: </lable>
                    <input defaultValue={arrivalAirport} placeholder={arrivalAirport} id='arrAirport' type="String" size="25" placeHolder="Enter an Arrival Airport" ref={arrAirportRef} required />
                </FormRow>
                </Center>
                <Center>
                <FormRow>
                    <lable htmlFor='depDate'>Departure Date: </lable>
                    <input defaultValue={departureDate} placeholder={departureDate} id='depDate' type="Date" ref={depDateRef} required />
                </FormRow>
                </Center>
                <Center>
                <FormRow>
                    <lable htmlFor='arrDate'>Arrival Date: </lable>
                    <input defaultValue={arrivalDate} placeholder={arrivalDate} id='arrDate' type="Date" ref={arrDateRef} required />
                </FormRow>
                </Center>
                <Center>
                <FormRow>
                    <lable htmlFor='depTime'>Departure Time: </lable>
                    <input defaultValue={departureTime} placeholder={departureTime} id='depTime' type="time" ref={depTimeRef} required />
                </FormRow>
                </Center>
                <Center>
                <FormRow>
                    <lable htmlFor='arrTime'>Arrival Time: </lable>
                    <input defaultValue={arrivalTime} placeholder={arrivalTime} id='arrTime' type="time" ref={arrTimeRef} required />
                </FormRow>
                </Center>
                <Center>
                <FormRow>
                    <lable htmlFor='passangerAmount'>Number of Passangers: </lable>
                    <input defaultValue={flightPassangerCurrent} placeholder={flightPassangerCurrent} id='passangerAmount' type="text" size="25" placeHolder="Enter Number of Passangers" ref={passangerAmountRef} required />
                </FormRow>
                </Center>
                <Center>
                    {/*<button onClick>Submit form</button>*/}
                    <input type="submit" value="Update Flight"/>
                </Center>
                </form>
            </Form>
        )
}