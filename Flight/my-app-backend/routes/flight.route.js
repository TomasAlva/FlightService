const router = require('express').Router();
const {createFlight, showAllFlighs, findFlightByNum, deleteFlight, updateFlight,} = 
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
        res.status(err?.status || 400).json(err);
    }
});

router.delete('/:id', async (req,res) => {
    try{
        const flightId = await deleteFlight(req.params.id);
        console.log(flightId);
        res.status(201).json({_id: flightId});
    } catch (err) {
        res.status(err?.statuse || 400).json(err);
    }
});

router.put('/:id', async (req,res) => {
    try{
        const flight = await updateFlight(req);
        res.status(201).json({_id: flight});
    }
    catch (err){
        res.status(err?.status || 400).json(err);
    }
})

router.get('/:id', async (req,res) =>{
    try {
        const flight = await findFlightByNum(req.params.id);
        res.json(flight);
    } catch (err) {
        res.status(err?.status || 400).json(err);
    }
});

module.exports = router;