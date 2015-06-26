app.service('inventoryService',function(){
    return {
        getProducts:function(){
            var electornicItems=
                {
                    type:"Electronics",
                    product:[
                        {
                            name:"Television",
                            price:"$1200",
                            imageUrl:"images/plasmaTv.jpg"

                        },

                        {
                            name:"BOSE Speakers",
                            price:"$1200",
                            imageUrl:"images/boseSpeakers.jpg"

                        },

                        {
                            name:"PSP",
                            price:"$1500",
                            imageUrl:"images/PSP.jpg"

                        },

                        {
                            name:"Mobile",
                            price:"$1000",
                            imageUrl:"images/iPhone.png"

                        }
                    ]
                };
            return electornicItems;
        }

    };
});