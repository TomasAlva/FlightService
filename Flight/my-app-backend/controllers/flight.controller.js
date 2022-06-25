const Flight = require('../models/Flights.model')

const createFlight = async ({flightNum, departureDate, arrivalDate, departureTime, arrivalTime, departureAirport,
                             arrivalAirport, flightPassangerCurrent, flightPassangerMin, flightPassangerMax}) => {
    try {
        const flight = new Flight({
            flightNum, 
            departureDate, 
            arrivalDate, 
            departureTime, 
            arrivalTime, 
            departureAirport,
            arrivalAirport, 
            flightPassangerCurrent,
            flightPassangerMin,
            flightPassangerMax
        });
        await flight.save();//Saves newly created flight to the DB
        return flight._id;//Returns ID of new flight
    } catch (err) {
        console.error(err);
        throw { status: 400, message: err};
    }
                                 
}

const showAllFlighs = async () => {//Will show all current flights
    const flights = await Flight.find();
    return flights;
}

const findFlightByNum = async id => {//Will find flight by id
    try{
        const flight = await Flight.findById(id)
        if(flight == null){//If no id is found this will trigger
            throw `No flights with the id of ${id} found.`;
        }
        return flight;//If id found this will trigger
    }catch(err){
        console.error(err);
        throw{ status: 404, message: err };//Will reject the promise
    }

}

const deleteFlight = async id => {
    try{
        const flight = await Flight.findByIdAndDelete(id);
        if(flight == null){
            throw `No flights with the id of ${id} found.`;
        }
        return 'Flight has been sucessfully Deleted.';
    }catch(err){
        console.error(err);
        throw{ status: 400, message: err};
    }
}

const arrivalDate = async () => {
    
}

const departureDate = async () => {

}

const departureAirport = async () => {

}

const arrivalAirport = async () => {

}

const flightPassangers = async () => {

}

module.exports = {
    createFlight, showAllFlighs, findFlightByNum, deleteFlight, arrivalDate, 
    departureAirport, departureDate, arrivalAirport, flightPassangers
};