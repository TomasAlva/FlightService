const router = require('express').Router();
const {createFlight, showAllFlighs, findFlightByNum, deleteFlight, arrivalDate, 
      departureAirport, departureDate, arrivalAirport, flightPassangers} = 
      require('../controllers/flight.controller')

router.get('/', async (req,res) => {
    const flights = await showAllFlighs();
    res.json(flights)
});

router.post('/', async (req,res) => {
    try {
        const flightId = await createFlight(req.body);
        res.status(201).json({_id: flightId});
    } catch (err) {
        res.status(err?.status || 500).json(err);
    }
});

// router.get('/flights', (req,res) => {// Test code //
//     res.send('hello1');
//     console.log('2');
// });

// router.post('/flights', (req,res) => {// Test code //
//     res.send('POST create new flight!');
//     console.log('hello1.1');
// });

router.get('/:id', async (req,res) =>{
    try {
        const flight = await findFlightByNum(req.params.id);
        res.json(flight);
    } catch (err) {
        res.status(err?.status || 400).json(err);
    }
});

module.exports = router;