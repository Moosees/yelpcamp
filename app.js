const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

// DUMMY DATA
let campgrounds = [
	{
		name: 'Crazy Creek',
		image:
			'https://images.pexels.com/photos/1549122/pexels-photo-1549122.jpeg?auto=compress&cs=tinysrgb&dpr=1&&h=400'
	},
	{
		name: 'Weird Valley',
    image: 'https://images.pexels.com/photos/699558/pexels-photo-699558.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=400'
	},
	{
		name: 'Atlantis Alley',
    image: 'https://images.pexels.com/photos/772207/pexels-photo-772207.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=400'
	},
	{
		name: 'Lorem Lake',
		image: 'https://images.pexels.com/photos/772207/pexels-photo-772207.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=400'
	},
	{
		name: 'Funny Ford',
		image: 'https://images.pexels.com/photos/772207/pexels-photo-772207.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=400'
	},
	{
		name: 'Garden of Nede',
		image: 'https://images.pexels.com/photos/772207/pexels-photo-772207.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=400'
	},
	{
		name: 'Imagination Inn',
		image: 'https://images.pexels.com/photos/772207/pexels-photo-772207.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=400'
	},
	{
		name: 'Dummy Dreams Camp',
		image: 'https://images.pexels.com/photos/772207/pexels-photo-772207.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=400'
	}
];

// ROUTES
app.get('/', (req, res) => {
	res.render('landing');
});

app.get('/campgrounds', (req, res) => {
	res.render('campgrounds', { campgrounds: campgrounds });
});

app.post('/campgrounds', (req, res) => {
  let newCampground = {name: req.body.name, image: req.body.image};
  campgrounds.push(newCampground);
  res.redirect('/campgrounds');
});

app.get('/campgrounds/new', (req, res) => {
	res.render('new.ejs');
});

// SERVER SETTINGS
app.listen(port, () => console.log(`Express is running Yelpcamp app on port ${port}`));
