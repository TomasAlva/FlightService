import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export const FlightList = () => {
   
    const [flights, setFlights] = useState([]);

    //Will get all Flights
    useEffect(() => {
        axios.get('http://localhost:8088/flights')
             .then(res => setFlights(res.data));
    }, []);

    const handleDelete = id => {
            axios.delete(`http://localhost:8088/flights/${id}`)
            .then(res => refreshFlights());
        if(id == null){
            return console.error();
        }
    }

    const handleUpdate = id => {
        axios.get(`http://localhost:8088/flights/${id}`)
        .then(res => setFlights(res.data));
        if(id == null){
            return console.error();
        }
    }

    const refreshFlights = ()=> {
        axios.get('http://localhost:8088/flights')
             .then(res => setFlights(res.data));
    }

    return (
        
        <div>
            {flights.map(flight => {
                return (
                    
                    <div key={flight._id}>
                        
                        <h3><b>Flight#: {flight.flightNum}</b></h3>
                        <div><b>Departure Date: </b>{flight.departureDate}</div>
                        <div><b>Arrival Date: </b>{flight.arrivalDate}</div>
                        <div><b>Departure Time: </b>{flight.departureTime}</div>
                        <div><b>Arrival Time: </b>{flight.arrivalTime}</div>
                        <div><b>Departure Airport: </b>{flight.departureAirport}</div>
                        <div><b>Arrival Airport: </b>{flight.arrivalAirport}</div>
                        <div><b>Current Passanger count: </b>{flight.flightPassangerCurrent}</div>
                        <div><b>Max Passanger count: </b>{flight.flightPassangerMax}</div> 
                        <button onClick={() =>handleDelete(flight._id)}>Delete Flight</button>
                        <Link to='/updateflight'>
                            <button onClick={() => handleUpdate(flight._id)}>Update Flight</button>
                        </Link>
                    </div>
                    
                );
            })}
         </div>
            
    );
}