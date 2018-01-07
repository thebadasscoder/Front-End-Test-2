'use strict'

const Recipe = require('../models').Recipe;

let recipeArr = [
	{
		name: "Crispy Fish Goujons ",
        products: [
            "family-box"
        ],
        proteins: "43 g",
        rating: null,
        ratings: null,
        thumb: "https://d3hvwccx09j84u.cloudfront.net/thumb/image/533143aaff604d567f8b4571.jpg",
        time: "PT35M",
        undeliverable_ingredients: [],
        weeks: [
            "2014-W20"
        ],
        calories: "397 kcal",
        carbos: "26 g",
        country: "GB",
        deliverable_ingredients: [
            "1 Lemon",
            "1 Fillet Skirt Steak",
            "1 Tsp Ras El Hanout",
            "1 Clove Garlic",
            "1 Spring Onion",
            "1/2 Cup Carrot",
            "1 Red Pepper",
            "150g Couscous",
            "A Handful Baby Spinach Leaves",
            "4 Tbsps Coriander"
        ],
        description: "Close your eyes, open up your Ras El Hanout and inhale deeply. You are no longer standing in your kitchen. Around you are the sounds of a bustling market. Robed men sell ornate carpets and a camel nibbles affectionately at your ear.  OK, we\u2019re pretty sure Paul McKenna\u2019s job is safe for now, but get cooking this recipe and take dinnertime on a magic carpet ride to Casablanca! Our tip for this recipe is to take your meat out of the fridge at least 30 minutes before dinner which will allow you to cook it more evenly.",
        difficulty: 0,
        fats: "5 g",
        favorites: 13,
        fibers: "",
        headline: "with Spinach and Lemon Couscous",
        highlighted: true,
        recipe_id: "53314247ff604d44808b4569",
        image: "https://d3hvwccx09j84u.cloudfront.net/web/image/53314247ff604d44808b4569.jpg",
        incompatibilities: null,
        ingredients: [
            "1 Lemon",
            "1 Fillet Skirt Steak",
            "1 Tsp Ras El Hanout",
            "1 Clove Garlic",
            "1 Spring Onion",
            "1/2 Cup Carrot",
            "1 Red Pepper",
            "150g Couscous",
            "A Handful Baby Spinach Leaves",
            "4 Tbsps Coriander"
        ],
        keywords: [
            ""
        ]
	},
    {
        name: "Moroccan Skirt Steak ",
        products: [
            "classic-box"
        ],
        proteins: "31 g",
        rating: 1,
        ratings: 1,
        thumb: "https://d3hvwccx09j84u.cloudfront.net/thumb/image/53314247ff604d44808b4569.jpg",
        time: "PT30M",
        undeliverable_ingredients: [],
        "weeks": [
            "2014-W25"
        ],
        calories: "458 kcal",
        carbos: "29 g",
        country: "GB",
        deliverable_ingredients: [
            "2 Fillets Sea Bream",
            "1 Lime",
            "A Few Tomatoes",
            "\u2153 Cup Onion",
            "2 Cloves Garlic",
            "1/2 Tsp Ginger",
            "1 Tbsp Fish Sauce",
            "2 Tbsp Coriander",
            "2 Cups New Potatoes"
        ],
        description: "World-renowned people generally all have one thing in common: a legacy. For Henry Ford it was the motorcar, for Thomas Edison it was the lightbulb. For our intern Simon, it was this lip-smackingly awesome Sea Bream. Taking the warm crunchiness of potatoes against the fresh southern asian flavours of fish with coriander, ginger and lime, it\u2019s the perfect dish for transporting your tastebuds. Don\u2019t let the smell of the fish sauce throw you - add it gradually to your sauce for a really authentic asian spin!",
        difficulty: 0,
        fats: "6 g",
        favorites: 9,
        fibers: "",
        headline: "with Tomato Concasse and Crispy Potatoes",
        highlighted: true,
        id: "53314276ff604d28828b456b",
        image: "https://d3hvwccx09j84u.cloudfront.net/web/image/53314276ff604d28828b456b.jpg",
        incompatibilities: null,
        ingredients: [
            "2 Fillets Sea Bream",
            "1 Lime",
            "A Few Tomatoes",
            "u2153 Cup Onion",
            "2 Cloves Garlic",
            "1/2 Tsp Ginger",
            "1 Tbsp Fish Sauce",
            "2 Tbsp Coriander",
            "2 Cups New Potatoes"
        ],
        keywords: [
            ""
        ]
    },
    {
        name: "Simple Sumptuous Sea Bream",
        products: [
            "classic-box"
        ],
        proteins: "29 g",
        rating: 2.5,
        ratings: 2,
        thumb: "https://d3hvwccx09j84u.cloudfront.net/thumb/image/53314276ff604d28828b456b.jpg",
        time: "PT35M",
        undeliverable_ingredients: [],
        weeks: [
            "2014-W14"
        ],
        calories: "717 kcal",
        carbos: "44 g",
        country: "GB",
        deliverable_ingredients: [
            "2 Chicken Breasts",
            "1 Ball Mozzarella",
            "2 Tbsps Pesto",
            "A Handful of New Potatoes",
            "1 Bunches of Rocket",
            "1 Onion"
        ],
        description: "Nostalgia is a powerful thing. For some it\u2019s triggered by the smell of freshly cut grass, for others by the sound of a love song from their heady teenage years. For Head Chef Patrick it\u2019s all about Swiss Roll. A firm dinnertime favourite from his primary school years, we still see him go all misty eyed at the mere mention of it. We\u2019re pretty sure that was the inspiration behind this little number. Tonight, prepare to create a little nostalgia that the little \u2018uns will remember for years!",
        difficulty: 0,
        fats: "10 g",
        favorites: 1,
        fibers: "",
        headline: "with Roasted Rocket Potatoes",
        highlighted: true,
        id: "533143bfff604d44808b456a",
        image: "https://d3hvwccx09j84u.cloudfront.net/web/image/533143bfff604d44808b456a.jpg",
        incompatibilities: null,
        ingredients: [
            "2 Chicken Breasts",
            "1 Ball Mozzarella",
            "2 Tbsps Pesto",
            "A Handful of New Potatoes",
            "1 Bunches of Rocket",
            "1 Onion"
        ],
        keywords: [
            ""
        ]
    },

    {
        name: "Mozzarella and Pesto Roulades",
        products: [
            "family-box"
        ],
        proteins: "67 g",
        rating: null,
        ratings: null,
        thumb: "https://d3hvwccx09j84u.cloudfront.net/thumb/image/533143bfff604d44808b456a.jpg",
        time: "PT35M",
        undeliverable_ingredients: [],
        weeks: [
            "2013-W43"
        ],
        calories: "751 kcal",
        carbos: "105 g",
        country: "GB",
        deliverable_ingredients: [
            " 3 Soft Wholemeal Wraps",
            "1 Tin Tomatoes",
            "1 Tsp Mexican Spice",
            "1 Tin Black Beans",
            "1 Avocado",
            "1 Lime",
            "5 Tbsps Coriander",
            "1/2 Cup Red Onion",
            "1 Yellow Pepper"
        ],
        description: "Head Chef Patrick doesn\u2019t like fuss. He\u2019s always telling us that the best kind of food is simple, soulful grub that makes you feel loved. That said, every dinner is a chance to practice your presentation skills. Bigger plates are a great way of framing your food and a sprinkle of herbs or a drizzle of olive oil at the end gives everything a bit more pizzazz. For this recipe, we took classic Mexican ingredients and played with the presentation to create something that\u2019s as tasty to the eye as it is to the tongue. Arriba!",
        difficulty: 0,
        fats: "4 g",
        favorites: 7,
        fibers: "",
        headline: "with Homemade Guacamole and Black Bean Salsa",
        highlighted: true,
        id: "5331430fff604d557f8b456d",
        image: "https://d3hvwccx09j84u.cloudfront.net/web/image/5331430fff604d557f8b456d.jpg",
        incompatibilities: null,
        ingredients: [
            " 3 Soft Wholemeal Wraps",
            "1 Tin Tomatoes",
            "1 Tsp Mexican Spice",
            "1 Tin Black Beans",
            "1 Avocado",
            "1 Lime",
            "5 Tbsps Coriander",
            "1/2 Cup Red Onion",
            "1 Yellow Pepper"
        ],
        keywords: [
          ""
        ]
    },
    {
        name: "Mexican Tortilla Stack",
        products: [
            "veggie-box"
        ],
        proteins: "35 g",
        rating: 4,
        ratings: 1,
        thumb: "https://d3hvwccx09j84u.cloudfront.net/thumb/image/5331430fff604d557f8b456d.jpg",
        time: "PT35M",
        undeliverable_ingredients: [],
        weeks: [
            "2014-W30"
        ],
        calories: "689 kcal",
        carbos: "84 g",
        country: "GB",
        deliverable_ingredients: [
            "2 Cups Butternut Squash",
            "2 Sprigs Rosemary",
            "100g Wild Rice",
            "5 Tbsps Feta Cheese",
            "2 Tbsps Pine Nuts",
            "2 Cup Broccoli Florets",
            "1 Vegetable Stock Pot"
        ],
        description: "We\u2019ve all heard that much overused culinary phrase \u201cfusion food\u201d, but this recipe is fusion of a slightly different kind. With the onset of Winter Patrick has taken some decidedly seasonal squash and the deep, heady scent of rosemary and combined them with the lighter flavour of feta and wild rice. The squash takes a little bit of work with a vegetable peeler but once you\u2019ve tackled and roasted it you\u2019ll never look back. We use any leftovers for butternut squash soup!",
        difficulty: 0,
        fats: "8 g",
        favorites: 5,
        fibers: "",
        headline: "with Wild Rice, Feta and Pine Nuts",
        highlighted: true,
        id: "53314328ff604d4d808b456b",
        image: "https://d3hvwccx09j84u.cloudfront.net/web/image/53314328ff604d4d808b456b.jpg",
        incompatibilities: null,
        ingredients: [
            "2 Cups Butternut Squash",
            "2 Sprigs Rosemary",
            "100g Wild Rice",
            "5 Tbsps Feta Cheese",
            "2 Tbsps Pine Nuts",
            "2 Cup Broccoli Florets",
            "1 Vegetable Stock Pot"
        ],
        keywords: [
            ""
        ]

    },
    {
        name: "Gnocchi Allo Genovese",
        products: [
            "veggie-box"
        ],
        proteins: "43 g",
        rating: null,
        ratings: null,
        thumb: "https://d3hvwccx09j84u.cloudfront.net/thumb/image/53314343ff604d28828b456c.jpg",
        time: "PT25M",
        undeliverable_ingredients: [],
        weeks: [
            "2014-W30"
        ],
        calories: "790 kcal",
        carbos: "100 g",
        country: "GB",
        deliverable_ingredients: [
            "200g Mince Beef",
            "4 Pork Sausages",
            "1 Carton Tomato Passata",
            "2 Cloves Garlic",
            "1 Bunch Parsley",
            "600ml Milk",
            "200g Polenta ",
            "\u2153 Cup Parmesan"
        ],
        description: "\u201cPolpetti?!\u201d we hear you say. That\u2019s meatballs to you and me. But meatballs so good you want \r\n\r\nto parade them down the street waving your arms aloft like a passionate Italian grandmother. \r\n\r\nThese little rascals are perfect for your little rascals (both big and small!) as you can get \r\n\r\neveryone involved in rolling them up. Once served, everyone around the table must choose an \r\n\r\nItalian name and act Italian for the rest of dinner time. Andiamo!*",
        difficulty: 0,
        fats: "9 g",
        favorites: 1,
        fibers: "",
        headline: "with Creamy Parmesan Polenta",
        highlighted: true,
        id: "53314398ff604d6c7a8b456a",
        image: "https://d3hvwccx09j84u.cloudfront.net/web/image/53314398ff604d6c7a8b456a.jpg",
        incompatibilities: null,
        ingredients: [
            "200g Mince Beef",
            "4 Pork Sausages",
            "1 Carton Tomato Passata",
            "2 Cloves Garlic",
            "1 Bunch Parsley",
            "600ml Milk",
            "200g Polenta ",
            "\u2153 Cup Parmesan"
        ],
        keywords: [
            ""
        ]
    }
]

const recipeSeed = () =>{
	Recipe.bulkCreate(recipeArr)
};

module.exports = recipeSeed;
