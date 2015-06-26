app.service('houseHoldService',function(){
    return {
        getProducts : function(){
            var houseHold =  {
                type:"Household",
                product:[
                    {
                        name:"Oven",
                        price:"$500",
                        imageUrl:"images/oven.jpg"

                    },

                    {
                            name:"Refrigerator",
                            price: "$1500",
                            imageUrl:"images/refrigerator.jpg"

                    },

                    {
                            name:"Dishwasher",
                            price: "$1050",
                            imageUrl:"images/dishwasher.png"
                    },


                    {
                        name:"Food Processor",
                        price:"$800",
                        imageUrl:"images/foodprocessor.jpg"

                    }
                ]
            }
            return houseHold;
        }

    };

});