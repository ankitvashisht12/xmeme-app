const mongoose = require('mongoose');

const url = 'mongodb://localhost/xmeme';

const connectDB = async () => {
	try {
		await mongoose.connect(url, {useNewUrlParser: true});
		console.log('Connected to db.')
	}catch (err) {
		console.log('Error in connecting to db.')
	}
}

module.exports = connectDB;