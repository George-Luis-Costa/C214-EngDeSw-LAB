const Movie = require('../application/movie_service');
const Utils = require('../utils/utils');

const route = '/movie';

module.exports = (app) => {
    app.post(`${route}/create`, async (req, res) => {
        const response = await Movie.create(req.body);
        res.status(Utils.responseStatus(response.name));
        res.json(response);
    });
    app.put(`${route}/update`, async (req, res) => {
        const response = await Movie.update(req.body);
        res.status(Utils.responseStatus(response.name));
        res.json(response);
    });
    app.get(`${route}/list`, async (req, res) => {
        const response = await Movie.list();
        res.status(Utils.responseStatus(response.name));
        res.json(response);
    });
    app.patch(`${route}/listMovie`, async (req, res) => {
        const response = await Movie.listByNome(req.body);
        res.status(Utils.responseStatus(response.name));
        res.json(response);
    });
    app.delete(`${route}/delete`, async (req, res) => {
        const response = await Movie.deleteByNome(req.body);
        res.status(Utils.responseStatus(response.name));
        res.json(response);
    });
};