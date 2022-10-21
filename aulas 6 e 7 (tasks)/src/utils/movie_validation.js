const create = {
    nome: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    produtora: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    ano: {
        presence: {
            allowEmpty: false,
        },
        type: 'number',
    },
    nota: {
        presence: {
            allowEmpty: false,
        },
        type: 'number',
    },
};

const update = {
    nome: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    nota: {
        presence: {
            allowEmpty: false,
        },
        type: 'number',
    },
};

const get = {
    nome: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
};

const deleteBy = {
    nome: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
};

module.exports = {
    update,
    create,
    get,
    deleteBy,
};