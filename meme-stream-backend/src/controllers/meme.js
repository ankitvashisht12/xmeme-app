const Meme = require('../models/meme');

module.exports = {

	// Controller for getting one meme
	getMeme: async (req, res, next) => {
		const { id } = req.params
		try{
			let result = await Meme.findById(id,{__v: 0, createdAt: 0, updatedAt: 0});

			if(result)
				return res.json(result);
			
			console.log(result)
			return next(err);
		}catch(err)	{
			return res.status(404).send('Meme not found');
		}
	},

	// Controller for getting 100 memes
	getMemes: async (req, res, next) => {
		await Meme.
			find({},{__v: 0, createdAt: 0, updatedAt: 0}).
			sort({'createdAt': -1}).
			limit(100).
			exec((err, memes) => {
				if(err)
					next(err);
				
				return res.json(memes);
			});
	},

	// Controller for posting a meme 
	postMeme: async (req, res, next) => {
		const {name, url, caption} = req.body
	
		try {

			const hasMeme = await Meme.findOne({name: name, caption: caption, url: url});

			if(hasMeme)
				return res.status(409).send('Meme already present');
			

			const newMeme = await Meme.create( {
				name,
				caption,
				url
			});

			return res.status(201).json({id: newMeme._id});
		} catch (err){ 
			return res.status(500).send('Internal Server Error');
		} 
	},

	// Controller for updating one meme
	updateMeme : async (req, res, next) => {
		const {caption, url} = req.body
		const { id } = req.params

		try{

			const hasMeme = await Meme.findById(id);

			if(!hasMeme)
				return res.status(404).send('Meme not found');

			if(hasMeme.caption === caption && hasMeme.url === url)
				return res.status(409).send('Meme already present');
			const result = await Meme.findByIdAndUpdate(
				id, 
				{
					caption,
					url
				},
			)
			
			if(result)
				return res.send(result);

			return res.send(404).send('Meme Not Found');
		}
		catch(err) {
			return res.send(404).send('Meme Not Found');
		}
	}
};