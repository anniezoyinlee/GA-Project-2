# General Assembly - Project 2

## Project Name
IDKWIW (I don't know what I want)

[Click to check the app!](https://idkwiw-react.herokuapp.com/)

## Project Description
My app is called IDKWIW, it's for people who don't know what they want. On the home page, there are three links for 'To Eat' 'To Drink', and 'To Do', when the user clicks on one of the links they would go to a page to generate the food/drink/activity through APIs. Perhaps this app can give users ideas while they don't know what they want.

## App View
Home page
![image](https://imgur.com/dG7CYts.png)
To Food page
![image](https://imgur.com/Us4RqOZ.png)

## Technologies Used
* Css
* Javascript
* React

## Getting Started/Installation Instructions

1. Fork the repository
Go to my repository and click Fork from the top right of the page
https://github.com/anniezoyinlee/GA-Project2-idkwiw

2. Clone the fork, run below in your command line
```
git clone git@github.com:YOUR_USERNAME/GA-Project2-idkwiw.git
```

3. Check that your fork is the "origin" remote, run below in your command line
```
git remote -v 
```

If you don't see an "origin" remote, run below in your command line
```
git remote add origin git@github.com:YOUR_USERNAME/GA-Project2-idkwiw.git
```

4. Add the project repository as the "upstream" remote, run below in your command line
```
git remote add upstream https://github.com/anniezoyinlee/GA-Project2-idkwiw.git
```

check if you have two remotes form "origin" and "upstream", run below in your command line
```
git remote -v
```

5. Pull the latest changes from upstream into your local repository, run below in your command line
```
git pull upstream master/main
```

6. Open the app in local host or heroku, run below in your command line
```
npm start
heroku open
```

## Contribution Guidelines: 
1. Create a new branch, run below in your command line
```
git checkout -b BRANCH_NAME
```

- Make changes in your local repository and commit the changes, run below in your command line
```
git add -A/add .
git commit -m "DESCRIPTION OF CHANGES"
```

3. Push your changes to your fork
```
git push origin BRANCH_NAME
```

4. Pull request
- Return to your fork on GitHub, and refresh the page.
- Click the green Compare & pull request button to begin the pull request.
- Describe the changes you made in the pull request window
- Click the green Create pull request button

Or 

Start an issue
- Go to my repository https://github.com/anniezoyinlee/GA-Project2-idkwiw
- Click on Issues tab
- Click on green New Issue Button
- Leave comments for identifing bugs, and proposing improvements
- Click on green Submit New Issue Button

Reference: https://www.dataschool.io/how-to-contribute-on-github/

## API Used
#### The Meal DB
[The Meal DB](https://www.themealdb.com/api.php)
[API Json](https://www.themealdb.com/api/json/v1/1/random.php)
<!-- 
```json
{
  "meals": [
    {
      "idMeal": "52864",
      "strMeal": "Mushroom & Chestnut Rotolo",
      "strDrinkAlternate": null,
      "strCategory": "Vegetarian",
      "strArea": "British",
      "strInstructions": "Soak the dried mushrooms in 350ml boiling water and set aside until needed. Blitz ¾ of the chestnuts with 150ml water until creamy. Roughly chop the remaining chestnuts.\r\nHeat 2 tbsp olive oil in a large non-stick frying pan. Fry the shallots with a pinch of salt until softened, then add the garlic, chopped chestnuts and rosemary, and fry for 2 mins more. Add the wild mushrooms, 2 tbsp oil and some seasoning. Cook for 3 mins until they begin to soften. Drain and roughly chop the dried mushrooms (reserve the soaking liquid), then add those too, along with the soy sauce, and fry for 2 mins more.\r\nWhisk the wine, reserved mushroom liquid and chestnut cream together to create a sauce. Season, then add half to the mushroom mixture in the pan and cook for 1 min until the sauce becomes glossy. Remove and discard the rosemary sprigs, then set the mixture aside.\r\nHeat oven to 180C/160C fan/gas 4. Bring a large pan of salted water to the boil and get a large bowl of ice water ready. Drop the lasagne sheets into the boiling water for 2 mins or until pliable and a little cooked, then immediately plunge them into the cold water. Using your fingers, carefully separate the sheets and transfer to a clean tea towel. Spread a good spoonful of the sauce on the bottom two thirds of each sheet, then, rolling away from yourself, roll up the shorter ends. Cut each roll in half, then position the rolls of pasta cut-side up in a pie dish that you are happy to serve from at the table. If you have any mushroom sauce remaining after you’ve rolled up all the sheets, simply push it into some of the exposed rolls of pasta.\r\nPour the rest of the sauce over the top of the pasta, then bake for 10 mins or until the pasta no longer has any resistance when tested with a skewer.\r\nMeanwhile, put the breadcrumbs, the last 2 tbsp olive oil, sage leaves and some seasoning in a bowl, and toss everything together. Scatter the rotolo with the crumbs and sage, then bake for another 10 mins, until the top is golden and the sage leaves are crispy. Leave to cool for 10 mins to allow the pasta to absorb the sauce, then drizzle with a little truffle oil, if you like, before taking your dish to the table.",
      "strMealThumb": "https://www.themealdb.com/images/media/meals/ssyqwr1511451678.jpg",
      "strTags": "Vegetarian,Nutty",
      "strYoutube": "https://www.youtube.com/watch?v=GNN7_ZSJ5YE",
      "strIngredient1": "Mushrooms",
      "strIngredient2": "Chestnuts",
      "strIngredient3": "Challots",
      "strIngredient4": "Garlic",
      "strIngredient5": "Rosemary",
      "strIngredient6": "Wild Mushrooms",
      "strIngredient7": "Soy Sauce",
      "strIngredient8": "White Wine",
      "strIngredient9": "Lasagne Sheets",
      "strIngredient10": "Breadcrumbs",
      "strIngredient11": "Sage",
      "strIngredient12": "Truffle Oil",
      "strIngredient13": "",
      "strIngredient14": "",
      "strIngredient15": "",
      "strIngredient16": "",
      "strIngredient17": "",
      "strIngredient18": "",
      "strIngredient19": "",
      "strIngredient20": "",
      "strMeasure1": "30g",
      "strMeasure2": "240g",
      "strMeasure3": "3",
      "strMeasure4": "3 cloves",
      "strMeasure5": "3 sprigs",
      "strMeasure6": "500g",
      "strMeasure7": "2 tblsp ",
      "strMeasure8": "125ml ",
      "strMeasure9": "350g",
      "strMeasure10": "4 tbsp",
      "strMeasure11": "1/2 handful ",
      "strMeasure12": "to serve",
      "strMeasure13": "",
      "strMeasure14": "",
      "strMeasure15": "",
      "strMeasure16": "",
      "strMeasure17": "",
      "strMeasure18": "",
      "strMeasure19": "",
      "strMeasure20": "",
      "strSource": "https://www.bbcgoodfood.com/recipes/mushroom-chestnut-rotolo",
      "strImageSource": null,
      "strCreativeCommonsConfirmed": null,
      "dateModified": null
    }
  ]
}
```
-->
#### The Cocktail DB
[The Cocktail DB](https://www.thecocktaildb.com/api.php)
[API Json](https://www.thecocktaildb.com/api/json/v1/1/random.php)
<!-- 
```json
{
  "drinks": [
    {
      "idDrink": "16273",
      "strDrink": "Shark Attack",
      "strDrinkAlternate": null,
      "strTags": null,
      "strVideo": null,
      "strCategory": "Cocktail",
      "strIBA": null,
      "strAlcoholic": "Alcoholic",
      "strGlass": "Pitcher",
      "strInstructions": "Mix lemonade and water according to instructions on back of can. If the instructions say to add 4 1/3 cans of water do so. Mix into pitcher. Add 1 1/2 cup of Vodka (Absolut). Mix well. Pour into glass of crushed ice. Excellent!",
      "strInstructionsES": null,
      "strInstructionsDE": "Limonade und Wasser nach Anleitung auf dem Dosenrücken mischen. Wenn die Anweisungen besagen, 4 1/3 Dosen Wasser hinzuzufügen, tun Sie dies. In den Krug mischen. Füge 1 1/2 Tasse Wodka (Absolut) hinzu. Gut mischen. In ein Glas zerstoßenes Eis gießen. Ausgezeichnet!",
      "strInstructionsFR": null,
      "strInstructionsIT": "Mescola la limonata e l'acqua.\r\nAggiungi 1 tazza e mezza di Vodka (Absolut).\r\nMescolare bene.\r\nVersare in un bicchiere di ghiaccio tritato.",
      "strInstructionsZH-HANS": null,
      "strInstructionsZH-HANT": null,
      "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/uv96zr1504793256.jpg",
      "strIngredient1": "Lemonade",
      "strIngredient2": "Water",
      "strIngredient3": "Vodka",
      "strIngredient4": null,
      "strIngredient5": null,
      "strIngredient6": null,
      "strIngredient7": null,
      "strIngredient8": null,
      "strIngredient9": null,
      "strIngredient10": null,
      "strIngredient11": null,
      "strIngredient12": null,
      "strIngredient13": null,
      "strIngredient14": null,
      "strIngredient15": null,
      "strMeasure1": "1 can ",
      "strMeasure2": "3 cans ",
      "strMeasure3": "1 1/2 cup ",
      "strMeasure4": null,
      "strMeasure5": null,
      "strMeasure6": null,
      "strMeasure7": null,
      "strMeasure8": null,
      "strMeasure9": null,
      "strMeasure10": null,
      "strMeasure11": null,
      "strMeasure12": null,
      "strMeasure13": null,
      "strMeasure14": null,
      "strMeasure15": null,
      "strImageSource": null,
      "strImageAttribution": null,
      "strCreativeCommonsConfirmed": "No",
      "dateModified": "2017-09-07 15:07:37"
    }
  ]
}
```
-->
#### Bored API
[Bored API](https://www.boredapi.com/documentation)
<!-- 
```json
{
  "activity": "Donate blood at a local blood center",
  "type": "charity",
  "participants": 1,
  "price": 0,
  "link": "https://www.redcross.org/give-blood",
  "key": "6509779",
  "accessibility": 0.35
}
```
-->
<!-- 
## Component Hierarchy
App - Render header with Subtitle and Catagory links
  - Subtitle - changes with different page
  - Links - links for To Eat/To Drink/To Do
  - Catagory 
    - Food
      - FoodDetails - render content from API
    - Drink
      - DrinkDetails - render content from API
    - Activity
      - ActivityDetails - render content from API
    - HomeBtn - button to go to home page
    - GenerateBtn - button to generate content from API

## Wireframes
Home page
![image](https://imgur.com/rOwTS8J.jpg)
To Food page
![image](https://imgur.com/ZJzBNpX.jpg)
To Drink page
![image](https://imgur.com/qRCOQX3.jpg)
To Do page
![image](https://imgur.com/tdwn28G.jpg)

## User Stories
#### MVP Goals
* As a player, I want to see a home page with links for 'To Eat', 'To Drink', and 'To Do'
* As a player, I want to click on each of the links and go to their page
* As a player, I want to see a placeholder image and food/drink names on to eat/to drink page
* As a player, I want to see a placeholder activity name on to do page
* As a player, I want to see second title changes by to eat/to drink/to do pages
* As a player, I want to see a generate button and home button on to eat/to drink/to do pages
* As a player, I want to click on generate button and see a new to eat/to drink/to do suggestion
* As a player, I want to click on the home button and go back to the home page

#### Stretch Goals
* As a player, I would like to check food by category.
* As a player, I would like to check drinks by category. 
-->
