app.service('gameService', function(){
	return{
		getProducts: function(){
			var game = 
			{
				type: "sports",
				product:[
			{
				name: "Football",
				price: "$150",
				imageUrl:"images/football.png"
			},

			{
				name: "Cricket Kit",
				price: "$1800",
				imageUrl:"images/cricketKit.jpg"
			},

			{
				name: "Basketball",
				price: "$1500",
				imageUrl:"images/cuseBasketBall.jpeg"
			}

			]
		    }
			return game;		
	    }
    };

});
