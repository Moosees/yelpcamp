const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
	res.render('landing');
});

app.get('/campgrounds', (req, res) => {
	let campgrounds = [
    { name: 'Crazy Creek', image: 'https://images.pexels.com/photos/1549122/pexels-photo-1549122.jpeg?auto=compress&cs=tinysrgb&dpr=1&&w=400' },
    { name: 'Weird Valley', image: 'https://images.pexels.com/photos/699558/pexels-photo-699558.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=400' },
    { name: 'Atlantis Alley', image: 'https://images.pexels.com/photos/772207/pexels-photo-772207.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=400' }
  ];
  
  res.render('campgrounds', {campgrounds:campgrounds});
});

app.listen(port, () => console.log(`Express is running Yelpcamp app on port ${port}`));
