const { MovieModel } = require('../infrastructure/database');

const MovieRepository = {
    async create(data) {
        try {
            const model = new MovieModel(data);
            const response = await model.save();
            return response.toObject();
        } catch (e) {
            return e;
        }
    },

    async update(data) {
        try {
            const update = {
                nota: data.nota,
            };
            const options = { new: true };
            const filter = { nome: data.nome };
            const result = await MovieModel.findOneAndUpdate(filter, update, options).exec();
            if (result === null) return []
            return result.toObject();
        } catch (e) {
            return e;
        }
    },

    async list() {
        try {
            const result = await MovieModel.find().exec();
            return result;
        } catch (error) {
            return error;
        }
    },

    async getByNome(data) {
        try {
            const result = await MovieModel.findOne({ nome: data.nome }).exec();
            return result;
        } catch (e) {
            return e;
        }
    },

    async deleteByNome(data) {
        try {
            const result = await MovieModel.deleteOne({ nome: data.nome }).exec();
            return result.deletedCount;
        } catch (error) {
            return error;
        }
    },
};

module.exports = MovieRepository;