const { FlightServices } = require('../services/index');

const flightServices = new FlightServices();

const create = async(req, res) => {
    try {
        const flight = await flightServices.createFlight(req.body);
        return res.status(201).json({
            data: flight,
            success: true,
            message: "successfully created a flight",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res
        .status(500)
        .json({
            data: {},
            success: false,
            message: "not able to create a city",
            err: error
        });
    }
}

module.exports = {
    create
}