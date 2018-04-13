const express = require('express');
const app = express();
const comedians = [

	{id:1, name:'John Mulaney'}, 
	{id:2, name:'Bert Kreisher'},
	{id:3, name:'Joe Rogan'}
];
const icecream = [
	{id:1, flavor:'Neopolitan', brand:'Tillamook'},
	{id:2, flavor:'Spumoni', brand:'Ben & Jerrys'},
	{id:3, flavor:'Vanilla', brand: 'Dove'}
	
];

app.get('/comedians', (request, response) => 
	response.send(comedians));
app.get('/comedians/:id', (request, response) => {
	const comedianId = comedians.filter((item) => {
		if(item.id === request.params.id){
			return item;
		}
	
	});
	response.send(comedianId);
});

app.get('/icecream', (request, response) => 
	response.send(icecream));
app.get('/icecream/:flavor', (request, response) => {
	const getFlavor = icecream.filter((thing) => {
		if(thing.id == request.params.flavor){
			return thing;
		}
	})
	response.send(getFlavor);

});
app.get('icecream/:id', (request, response) => {
	const getId = icecream.filter((data) => {
		if(data.id == request.params.id){
			return data;
		}
	})
})  response.send(getId);







app.listen(3000, ()=>{
	console.log('server is running...')
})