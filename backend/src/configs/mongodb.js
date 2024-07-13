const { connect } = require('mongoose');

const connectMongo = async (url) =>{
    await connect(url);
}

module.exports = connectMongo;