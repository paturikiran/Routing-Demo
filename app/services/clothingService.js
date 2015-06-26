app.service('clothingService',function(){
	return{
		getProducts: function(){
			var clothing =
			{
				type: "apparel",
				product:[
					{	
						name:"White Dress", 
						price: "$1200",
						imageUrl:"images/dress.jpg"
					},

					{	
						name:"Indian Cricket Team Jersey", 
						price: "$1200",
						imageUrl:"images/jersey.jpg"
					},
					
					{
						name: "Saree",
						price: "$1500",
						imageUrl: "images/desi.jpg"
					},

					{	
						name:"Dothi", 
						price: "$1200",
						imageUrl:"images/dothi.jpg"
					}

				]
			}	
			return clothing;
		}
	};
	
});

