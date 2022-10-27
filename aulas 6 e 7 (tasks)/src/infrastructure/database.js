const mongoose = require('mongoose');

const uri = `mongodb+srv://adm:adm@cluster0.htck3hy.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const { Schema } = mongoose;

const MovieSchema = new Schema({
    id: {
        type: String,
        index: true,
        unique: true,
    },
    nome: {
        type: String,
        unique: true,
    },
    produtora: String,
    ano: Number,
    nota: Number,
});

const MovieModel = mongoose.model('MovieModel', MovieSchema);

module.exports = {
    MovieModel,
};