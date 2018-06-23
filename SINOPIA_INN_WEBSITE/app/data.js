let initialState = {

    hotels: [

        {
            // "_id": {
            //     "$oid": "5974d7d0734d1d6202a929a2"
            // },
            // "businessname": "Sinopia Inn",
            // "businessaddress": "Sinopia Inn, Fairy Hill, Portland Parish, Jamaica",
            // "businessphone": "+1 876-993-7267",
            // "businesswebsite": "https://www.sinopiainn.com/",
            // "businessemail": "info@sinopiainn.com",
            // "businessdescription": "",
            // "country": "",
            // "coordinates": {
            //     "Latitude": "18.1763329",
            //     "Longitude": "-76.44973749999997"
            // },
            // "nameofevent": "",
            // "timeofevent": "",
            // "dateofevent": "",
            // "activity": [
            //     {
            //         "typeofbusiness": "Accomodation",
            //         "typeofservice": "Villa"
            //     }
            // ],
            // "typeofactivity": [],
            // "contactname": "",
            // "location": "",
            // "logourl": "",
            // "showcaseurl": [],
            // "comments": [],
            // "averagerating": "",
            // "avergaeprice": "",
            // "date": "",
            // "enabled": "",
            rooms: [
                {
                    "_id": 1,
                    "name": "Guango",
                    "description": "Family sized bedroom with air conditioning and ensuite bathroom and lounge ",
                    "occupancy": "3",
                    "icon": "/images/parrot_thumb.png",
                    "price": "135.00",
                    "booking": [
                        {
                            "RID": "5a5bad3809dbb31e6a8752f1",
                            "fromdate": "2018-1-30",
                            "enddate": "2018-1-31"
                        },
                        {
                            "RID": "5aad44778aca13104f678d77",
                            "fromdate": "2018-3-18",
                            "enddate": "2018-3-19"
                        }
                    ],
                    "adults": "0",
                    "children": "0",
                    "infants": "0",
                    "photos": [
                        "https://s3-us-west-2.amazonaws.com/sinopiainn.rooms/room1/0c293ac7-8ee0-424f-9677-c93af3e260aa.jpg",
                        "https://s3-us-west-2.amazonaws.com/sinopiainn.rooms/room1/4f9b1b5d-b8c0-4988-82ff-e2f373d7b57e.jpg",
                        "https://s3-us-west-2.amazonaws.com/sinopiainn.rooms/room1/d26361c0-2803-4c8e-bdcd-7359248b92b5.jpg",
                        "https://s3-us-west-2.amazonaws.com/sinopiainn.rooms/room1/room_1_bathroom.jpg"
                    ]
                },
                {
                    "_id": 2,
                    "name": "Pimento",
                    "description": "Double occupancy bedroom with ensuite bathroom",
                    "occupancy": "2",
                    "price": "125.00",
                    "icon": "/images/parrot_thumb.png",
                    "booking": [
                        {
                            "RID": "5a5bb11909dbb31e6a8752f2",
                            "fromdate": "2018-1-28",
                            "enddate": "2018-1-29"
                        },
                        {
                            "RID": "5a64e79170675b7de236e858",
                            "fromdate": "2018-1-30",
                            "enddate": "2018-1-31"
                        },
                        {
                            "RID": "5aad44778aca13104f678d77",
                            "fromdate": "2018-3-18",
                            "enddate": "2018-3-19"
                        }
                    ],
                    "adults": "0",
                    "children": "0",
                    "infants": "0",
                    "photos": [
                        "https://s3-us-west-2.amazonaws.com/sinopiainn.rooms/room2/4dce5c86-8946-40e4-9a94-28fec486dfbd.jpg",
                        "https://s3-us-west-2.amazonaws.com/sinopiainn.rooms/room2/b69f18f3-5d2c-4bdf-aba0-caf06a8e1740.jpg",
                        "https://s3-us-west-2.amazonaws.com/sinopiainn.rooms/room2/d7589636-150b-4301-abf8-574bdb74b137.jpg",
                        "https://s3-us-west-2.amazonaws.com/sinopiainn.rooms/room2/39f95150-3e2b-45c7-b881-e79482c1f417.jpg"
                    ]
                },
                {
                    "_id": 3,
                    "name": "Mahoe",
                    "description": "Double occupancy bedroom with ensuite bathroom",
                    "occupancy": "2",
                    "price": "125.00",
                    "icon": "/images/parrot_thumb.png",
                    "booking": [],
                    "adults": "0",
                    "children": "0",
                    "infants": "0",
                    "photos": [
                        "https://s3-us-west-2.amazonaws.com/sinopiainn.rooms/room3/888ba556-1d99-44d4-8784-21199555f0a4.jpg",
                        "https://s3-us-west-2.amazonaws.com/sinopiainn.rooms/room3/f4e8af82-b83f-4721-8e18-27195d581542.jpg"
                    ]
                },
                {
                    "_id": 4,
                    "name": "Cedar",
                    "description": "Air conditioned family sized bedroom with ensuite bathroom",
                    "occupancy": "3",
                    "price": "135.00",
                    "icon": "/images/parrot_thumb.png",
                    "booking": [],
                    "adults": "0",
                    "children": "0",
                    "infants": "0",
                    "photos": [
                        "https://s3-us-west-2.amazonaws.com/sinopiainn.rooms/room4/0826808f-b319-4112-9530-dad795308108.jpg",
                        "https://s3-us-west-2.amazonaws.com/sinopiainn.rooms/room4/0205c214-6099-4747-abf2-278760059c07.jpg",
                        "https://s3-us-west-2.amazonaws.com/sinopiainn.rooms/room4/69d0782f-43b9-4462-a349-25983fa5d6e9.jpg"
                    ]
                }
            ],
            // "offers": [
            //     {
            //         "_id": "1",
            //         "name": "Summer & Autumn Discount 10%",
            //         "description": "Validity period from 20th June to 14th December",
            //         "amount": ".10",
            //         "validdate": "2017-4-20",
            //         "exdate": "2017-12-14",
            //         "token": "",
            //         "nights": "",
            //         "photos": [
            //             "graphics/giftcard.png"
            //         ]
            //     },
            //     {
            //         "_id": "2",
            //         "name": "Friends and family discount 15%",
            //         "description": "All year",
            //         "amount": ".15",
            //         "validdate": "",
            //         "exdate": "",
            //         "token": "marshmellows",
            //         "nights": "",
            //         "photos": [
            //             "graphics/giftcard.png"
            //         ]
            //     },
            //     {
            //         "_id": "3",
            //         "name": "Breakfast",
            //         "description": "Complimentary Traditional Jamaican Breakfast - ",
            //         "amount": "0",
            //         "validdate": "",
            //         "exdate": "",
            //         "token": "",
            //         "nights": 3,
            //         "photos": [
            //             "graphics/giftcard.png"
            //         ]
            //     }
            // ],
            // "amenities": [
            //     {
            //         "name": "Breakfast",
            //         "description": "Traditional Jamaican breakfast",
            //         "price": "10.00",
            //         "frequency": "person",
            //         "materialDesign": "free_breakfast"
            //     },
            //     {
            //         "name": "Airport Pickup",
            //         "description": "Transportation to and from airport",
            //         "price": "30.00",
            //         "frequency": "room",
            //         "materialDesign": "airport_shuttle"
            //     },
            //     {
            //         "name": "Private Car Hire",
            //         "description": "On and Off road SUV - seating capacity 5 plus baggage",
            //         "price": "60.00",
            //         "frequency": "night",
            //         "materialDesign": "drive_eta"
            //     }
            // ]
        }
    ],
    bookedRooms: [

        {
            id: 1,
            fromdate: "2018-6-21",
            enddate: "2018-6-30"
        },
        {
            id: 2,
            "fromdate": "2018-6-27",
            "enddate": "2018-6-28"
        },
        {
            id: 1,
            "fromdate": "2018-6-23",
            "enddate": "2018-6-29"
        },
        {
            id: 1,
            "fromdate": "2018-6-27",
            "enddate": "2018-6-30"
        },
        {
            id: 3,
            "fromdate": "2018-6-21",
            "enddate": "2018-6-22"
        }

    ],
    availableRooms : [],
    availableOffers : [],
    availableAmenities:[],
    currentMonth : new Date().getMonth(),
    currentYear : new Date().getFullYear(),
    firstDay:0,
    lastDay:0,
    calDay:1
}



export default initialState;