const Flight = require('../models/Flights.model')

const createFlight = async ({flightNum, departureDate, arrivalDate, departureTime, arrivalTime, departureAirport,
                             arrivalAirport, flightPassangerCurrent,  flightPassangerMax}) => {
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
        console.log(id);
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

const updateFlight = async req =>{
    try{
        const updateData = {
            flightNum: req.body.flightNum,
            departureAirport: req.body.departureAirport,
            arrivalAirport: req.body.arrivalAirport,
            departureDate: req.body.departureDate,
            arrivalDate: req.body.arrivalDate,
            departureTime: req.body.departureTime,
            arrivalTime: req.body.arrivalTime,
            flightPassangerMax: req.body.flightPassangerMax,
            flightPassangerCurrent: req.body.flightPassangerCurrent
        }
        await Flight.findByIdAndUpdate(req.params.id, updateData);
        return `Flight has been sucessfully updated.`;
    }catch(err){
        console.error(err);
        throw{status:400, message:err};
    }
}

module.exports = {
    createFlight, showAllFlighs, findFlightByNum, deleteFlight, updateFlight, 
};