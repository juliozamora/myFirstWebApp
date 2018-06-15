import { Component, OnInit } from '@angular/core';
import { Route, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  public recipes = [
    {
      name: 'Tomato Rice',
      ingredients: [
        'Tablespoons Vegetable or Canola Oil',
        '1 cup dry long - grain white rice',
        '1 8 - ounce can tomato sauce 16 ounces warm water',
        '2 teaspoons Calde de Tomate(tomato bouillon)',
        '2 teaspoons minced garlic(about 2 cloves)',
      ],
      instructions: [
        'Heat oil in a 5 quart saute pan over medium - high heat.',
        'Add rice.',
        'Cook rice, stirring constantly, for several minutes, until rice begins to turn a golden color.',
        'Reduce heat to low to avoid spattering.',
        'Gently pour in warm water, then tomato sauce and stir.',
        'Stir in chili powder, Calde de Tomate and minced garlic.',
        'Turn heat back up to medium-high, bring to a boil, then reduce to low and cover.',
        'Simmer for 20 minutes, or until all water has been absorbed.',
        'Turn heat off, fluff rice then let sit, covered, for 5 - 10 minutes before serving.',
      ],
      img: '../../assets/ricecardpic.jpg',
      id: 'tomato-soup'
    },
    {
      name: 'Steamed White Rice',
      ingredients: [
        '1  cup long grain rice',
        'cups water',
        'teaspoon salt',
      ],
      instructions: [
        'In a saucepan with a good fitting lid bring water, salt and optional ingredients if desired to a boil.',
        'Add rice and stir.',
        // tslint:disable-next-line:max-line-length
        'Cover and reduce heat to medium low.You will know that your temperature is correct if a little steam is visible leaking from the lid. A lot of steam means your heat is too high.',
        'Cook for 20 minutes.',
        'DO NOT LIFT LID!',
        'The steam that is trapped inside the pan is what allows the rice to cook properly.',
        'Remove from heat and fluff with fork.',
        'Serve!',

      ],
      img: '../../assets/ricecardpic.jpg',
      id: 'steamed-white-rice'
    },
    {
      name: 'Simple Brown Rice',
      ingredients: [
        '2½ cups water or broth',
        '1 cup brown rice',
      ],
      instructions: [
        'Combine water (or broth) and rice in a medium saucepan.',
        'Bring to a boil.',
        'Reduce heat to low, cover and simmer until tender and most of the liquid has been absorbed, 40 to 50 minutes.',
        'Let stand 5 minutes, then fluff with a fork. ',
      ],
      img: '../../assets/ricecardpic.jpg',
      id: 'simple-brown-rice'
    },
    {
      name: 'Simple Black Beans',
      ingredients: [
        '1 pound of beans black beans',
        '½ white onion',
        '2 cloves of garlic',
        '4 fresh epazote leaves or ½ teaspoon dried epazote',
        '1 teaspoon of salt(add more to taste if required',
      ],
      instructions: [
        'Check the beans for any stones or debris.',
        'In a colander, rinse the beans under cold water.',
        'Place the beans in the cooking pot and cover with 3 inches of water.',
        'Allow the beans to soak overnight.',
        'Discard the soaking water.',
        'Add cold water to cover the beans by 4 inches.',
        'Add the ½ white onion and 2 cloves of garlic.',
        'Bring the water to a boil and then reduce to a simmer.',
        'Simmer the beans for 2 hours.',
        'Add 1 teaspoon of salt.',
        'Simmer for 30 more minutes.',
        'Taste the beans to verify that they are fully cooked and soft.If they are not soft enough cook for additional 30 minutes.',
        'Adjust the salt to taste and serve.',
      ],
      img: '../../assets/beanspotential.jpeg',
      id: 'simple-black-beans'
    },
    {
      name: 'Kidney Bean Curry',
      ingredients: [
        '1 tbsp vegetable oil',
        '1 onion',
        'Onion, finely chopped',
        '2 garlic cloves, finely chopped',
        'thumb - sized piece of ginger, peeled and finely chopped',
        '1 small pack coriander, stalks finely chopped, leaves roughly shredded',
        '1 tsp ground cumin',
        '1 tsp ground paprika',
        '2 tsp garam masala',
        '400g can chopped tomatoes',
        '400g can kidney beans',
        'Kidney beans scattered on a white surface, in water',
        'Cooked white rice to preference',
      ],
      instructions: [
        'Heat the oil in a large frying pan over a low-medium heat.',
        'Add the onion and a pinch of salt and cook slowly, stirring occasionally, until softened and just starting to colour.',
        'Add the garlic, ginger and coriander stalks and cook for a further 2 mins, until fragrant.',
        'Add the spices to the pan and cook for another 1 min, by which point everything should smell aromatic.',
        'Tip in the chopped tomatoes and kidney beans in their water, then bring to the boil.',
        'Turn down the heat and simmer for 15 mins until the curry is nice and thick.',
        'Season to taste, then serve with the basmati rice and the coriander leaves.',
      ],
      img: '../../assets/ricecardpic.jpg',
      id: 'kidney-bean-curry'
    },
    {
      name: 'Pinto Beans',
      ingredients: [
        '2 pounds dried pinto beans',
        '8 cloves garlic, crushed',
        '3 / 4 teaspoon salt',
        '1 / 4 cup vegetable oil',
        '2 large ripe tomatoes, diced',
        '1 large yellow onion, diced',
        '2 bunches cilantro, chopped',
      ],
      instructions: [
        'Pick over beans and wash in cold water 4 times.',
        'Place beans into a large pot, pour in enough fresh water to cover by 2 inches, and soak overnight.',
        'Reduce heat to low and simmer beans until they begin to soften, 2 to 3 hours, stirring often.',
        'If beans start to dry out, add more boiling water.',
        'Heat vegetable oil in a large skillet over medium heat',
        'Cook and stir tomatoes and onion in the hot oil until onion becomes translucent, about 5 minutes.',
        'Stir cilantro, 5 to 6 large spoonfuls of beans, and cooking liquid into tomato mixture.',
        'Mash beans and stir tomato mixture back into simmering beans.',
        'Continue simmering until flavors are blended, about 1 hour more.',
      ],
      img: '../../assets/ricecardpic.jpg',
      id: 'pinto-beans'
    }, {
      name: 'Mexican Lentil Soup',
      ingredients: [
        '2 tablespoons extra virgin olive oil',
        '1 yellow onion, diced',
        '2 carrots, peeled and diced',
        '2 celery stalks, diced',
        '1 red bell pepper, diced',
        '3 cloves garlic, minced',
        '1 tablespoon cumin',
        '1 / 4 teaspoon smoked paprika',
        '1 teaspoon oregano',
        '2 cups diced tomatoes and the juices(I use boxed tomatoes)',
        '2(4 oz.) cans diced green chiles(such as Ortega)',
        '2 cups green lentils, rinsed and picked over',
        '8 cups vegetable broth',
        '1 / 2 teaspoon salt',
        'dash(or more) hot sauce, plus more for serving',
        'fresh cilantro, for garnish',
        '1 avocado, peeled, pitted, and diced, or garnish',

      ],
      instructions: [
        'Heat olive oil in a large pot over medium heat.',
        'Add onion, carrots, celery, and bell pepper.',
        'Saute until beginning to soften, about 5 minutes.',
        'Add garlic, cumin, paprika, and oregano and saute another minute.',
        'Add tomatoes, chiles, lentils, broth and salt.Bring to a simmer.',
        'Simmer the soup with the lid tilted until lentils are tender, about 30 - 40 minutes.',
        'Season to taste with salt and pepper.',
        'Serve Mexican Lentil Soup topped with fresh cilantro, avocado, and a few dashes of hot sauce.',
      ],
      img: '../../assets/ricecardpic.jpg',
      id: 'mexican-lentil-soup'
    },
    {
      name: 'Chunky Vegetable Soup',
      ingredients: [
        '2 tablespoons olive oil',
        '1 / 2 onion, chopped',
        '3 stalks celery, chopped',
        '2 cloves garlic, minced',
        '4 cups vegetable broth',
        '1(15 ounce) can tomato sauce',
        '4 carrots, peeled and cut into 1 / 4 - inch rounds',

        '2 baking potatoes, cut into bite - size pieces',
        '1 cup frozen corn',
        '1 cup frozen shelled edamame(green soybeans)',
        '1 cup frozen sliced okra',
        '2 leaves kale, roughly chopped',
        'salt to taste',
        '1 teaspoon ground black pepper',
      ],
      instructions: [
        'Heat olive oil in a large pot over medium heat.',
        'Cook and stir onion and celery in hot oil until onion is softened and translucent, about 5 minutes.',
        'Stir garlic into the onion mixture; cook and stir until fragrant, 2 to 3 minutes more.',
        'Pour vegetable broth and tomato sauce into pot.Simmer for about 10 minutes.',
        'Stir carrots and potatoes through the broth.Simmer until carrots are tender, 10 to 15 minutes more.',
        'Drop corn, edamame, okra, and kale into the soup.',
        'Continue to simmer until okra is tender, 5 to 10 minutes more.',
        'Season with salt and pepper.',
      ],
      img: '../../assets/ricecardpic.jpg',
      id: 'chunky-vegetable-soup'
    },
    {
      name: 'Fideo Soup',
      ingredients: [
        '1 medium onion',
        '2 cloves garlic',
        '2 Tbsp vegetable oil',
        '8 oz uncooked vermicelli noodles',
        '1 / 2 tsp cumin',
        '28 oz can whole peeled tomatoes',
        '6 cups vegetable broth',
        '1 medium jalapeño(optional)',
        '1 medium lime',
        '1 / 4 bunch fresh cilantro(optional)',
      ],
      instructions: [
        'Dice the onion and mince the garlic so they are ready to go when needed.',

        'Add the vegetable oil to a large soup pot.',
        'Break the vermicelli noodles into one to two inch sections and then add them to the pot.',
        'Cook the dry noodles in the oil over medium - low heat while constantly stirring for 3 - 5 minutes.',
        '(or until the noodles have turned golden brown and are slightly blistered.)',
        'Add the diced onion, minced garlic, and cumin to the pot with the noodles and continue to cook and stir for a few minutes more.',
        '(or until the onions have softened.)',
        'Add a little of the juice from the can of tomatoes to the pot to stop the browning of the noodles.',
        'Use a blender or immersion blender to purée the canned tomatoes along with their remaining juices.',
        'Add the puréed tomatoes to the pot with the noodles, along with the six cups of vegetable broth.',
        'If using a jalapeño pepper, add it to the pot whole(this gives a slight jalapeño flavor without too much heat).',
        'Place a lid on the pot, turn the heat up to medium high, and allow it to come to a boil.',
        'Let the pot simmer for about 15 minutes, or until the noodles are soft.',
        'Add lime juice and roughly chopped cilantro leaves to the finished soup just before serving',
      ],
      img: '../../assets/ricecardpic.jpg',
      id: 'fideo-soup'
    },
    {
      name: 'Fettuccini Alfredo',
      ingredients: [
        '1⁄2 cup butter',
        '2 tablespoons cream cheese',
        '1 pint heavy cream',
        '1 teaspoon garlic powder',
        'salt',
        'black pepper',
        '2⁄3 cup grated parmesan cheese(preferably fresh)',
        '1 lb fettuccine, prepared as directed',
      ],
      instructions: [
        'In a medium saucepan, melt butter.',
        'When butter is melted, add cream cheese.',
        'When the cream cheese is softened, add heavy cream.',
        'Season with garlic powder, salt, and pepper.',
        'Simmer for 15 - 20 minutes over low heat, stirring constantly.',
        'Remove from heat and stir in parmesan.',
        'Serve over hot fettucine noodles.',
      ],
      img: '../../assets/ricecardpic.jpg',
      id: 'fettuccini-alfredo'
    },
    {
      name: 'Spaghetti and Marinara Sauce ',
      ingredients: [
        '¼ olive oil',
        '1 and ¼ (35oz) can peeled San Marzano tomatoes',
        '2 sprigs basil',
        '5 cloves of garlic, sliced thinly',
        'Salt and pepper to taste',
        'A pinch of sugar(optional)',
        '1lbs spaghetti, cooked according to package instructions',
        'Freshly grated Parmigiano Reggiano to serve',
      ],
      instructions: [
        'In a large bowl, add the peeled tomatoes and mash them with a potato masher.',
        'If you do not like your sauce chunky, you can blend the tomatoes in the blender until smooth.Reserve.',
        'In a large skittlet, heat the olive oil over medium high heat and sauté the garlic for a couple of minutes.',
        'Be careful not to brown it.',
        'Add the tomatoes and the basil and stir.Once it boils, turn the heat down to low and let it simmer, covered, for 15 minutes.',
        'While the sauce is simmering, cook the spaghetti in a large pot of salted boiling water, according to package instructions.',
        'After the sauce has been simmering for 15 minutes, season with salt and pepper and taste to see if needs sugar.',
        'If it is too acidic, add a pinch of sugar.',
        'To serve, just toss the pasta with the sauce to coat and decorate with some basil leaves.',
      ],
      img: '../../assets/ricecardpic.jpg',
      id: 'spaghetti-and-marinara-sauce'
    },
    {
      name: 'Avocado and pesto pasta ',
      ingredients: [
        '1 1/2 cups pine nuts or walnuts',
        '1 bunch basil',
        '2 cloves garlic',
        '1 / 2 tsp sea salt or kosher salt',
        '1 / 4 cup parmesan cheese',
        '2 - 4 tbsp olive oil',
        '1 avocado, diced into about 1 - inch(bite - sized) cubes',
        'about 10 ounces pasta, any kind',
        'Extra sea salt or kosher salt and fresh ground black pepper, to taste',
      ],
      instructions: [
        'First, prepare your pesto.',
        'To prepare the pesto, place the pine nuts or walnuts, basil, garlic, sea salt or kosher salt and Parmesan cheese in a blender.',
        'Pulse together a few times.',
        'Slowly add the olive oil and blend until you have a nice, smooth consistency. Add olive oil as needed.',

        'Next, cook the pasta according to the package instructions, or however you like to cook your pasta.Drain well.',
        'Next, bring it all together.',
        'Toss the prepared pasta with your prepared pesto until well combined.',
        'Then gently toss together with the diced avocado, being careful not to break up the avocado.',
        'Finally, give it another little sprinkle of sea salt or kosher salt and fresh ground black pepper to serve.',
      ],
      img: '../../assets/ricecardpic.jpg',
      id: 'avocado-and-pesto-pasta'
    },

    {
      name: 'Simple Mediterranean Salad',
      ingredients: [
        '6 Roma tomatoes, diced (about 3 cups diced tomatoes)',
        '1 Large English cucumber(or hot - house cucumber), diced',
        '1 tsp salt',
        '1 / 2 cup chopped fresh parsley leaves',
        '2 tbsp olive oil',
        '2 tsp freshly squeezed lemon juice',
        '1 tsp ground Sumac',
        '1 / 2 tsp ground pepper',
      ],
      instructions: [
        'Place the diced tomatoes and cucumbers in a colander over a bowl.',
        'Sprinkle with salt and leave to drain for 5 minutes.',
        'Transfer the tomatoes and cucumbers to a mixing bowl.',
        'Add the remaining ingredients and toss well to combine.',
      ],
      img: '../../assets/ricecardpic.jpg',
      id: 'simple-mediterranean-salad'
    },
    {
      name: 'Simple Antipasti Salad',
      ingredients: [
        'mixed salad leaves 400g (2 bags)',
        'artichoke hearts 200g jar, drained',
        'peppadews 100g, drained',
        'celery 1 heart, sliced',
        'red onion 2 small, sliced',
        '-DRESSING',
        'red wine vinegar 4 tbsp',
        'extra - virgin olive oil 6 tbsp',
        'garlic 1 clove, crushed',
        'Dijon mustard ½ tsp',
        'caster sugar 1 tsp ',
      ],
      instructions: [
        'Put the salad leaves, artichoke hearts, peppadews, celery and onion in a bowl.',
        'Add the dressing ingredients to a glass jar with a fitted lid, season and shake well.',
        'Pour over the salad just before serving and toss.',
      ],
      img: '../../assets/ricecardpic.jpg',
      id: 'simple-antipasti-salad'
    },
    {
      name: 'Grilled Caesar Salad',
      ingredients: [
        'little gem lettuce 2, quartered lengthways',
        'olive oil',
        'gluten - free bread 1, slice, cubed and toasted',
        'hazelnuts 1 tbsp, toasted ad roughly chopped',
        '-DRESSING',
        'mayonnaise 2 tbsp',
        'Dijon mustard 1 tsp',
        'lemon 1 / 2, juiced',
        'parmesan or vegetarian alternative 20g, grated',
        '1 tbsp extra to serve',
      ],
      instructions: [
        'Heat a griddle pan to a medium - high heat.',
        'Lightly brush the Little Gem quarters with olive oil and grill for 3 - 4 minutes on each cut side until charred.',
        'Whisk the dressing ingredients in a bowl, adding 1 tbsp of water if it’s too thick.',
        'Drizzle over the lettuce and top with croutons, hazelnuts and grated cheese.',
      ],
      img: '../../assets/ricecardpic.jpg',
      id: 'grilled-ceasar-salad'
    },
    {
      name: 'Simple Soy Chorizo',
      ingredients: [
        '2 tablespoons extra-virgin olive oil or as needed',
        '1 pack of Reynaldo’s Vegetarian Chorizo',
        '1 small onion, thinly sliced',
        '1 lime(optional)',
        '½ avocado(optional)',
        ,
      ],
      instructions: [
        'Heat a drizzle of olive oil in a large skillet over medium-high heat.',
        'Add the thinly sliced onion and saute for 4-5 minutes, until softened and lightly caramelized',
        'Add Vegetarian Chorizo and cook',
        'Stir until browned.',
        'Heat up 3 tortillas.',
        'Places tortillas on plate and add chorizo to each tortilla.',
        'Add slices 2 thin slices of avocado to each taco and squirt with lime to taste.',
      ],
      img: '../../assets/ricecardpic.jpg',
      id: 'simple-soy-chorizo'
    },
    {
      name: 'Jackfruit Tacos',
      ingredients: [
        '1 small onion, thinly sliced',
        '1 can jackfruit(20 ounces) in water or brine',
        '2 teaspoons ground cumin',
        '2 teaspoons chili powder',
        '1 teaspoon paprika',
        '1 teaspoon garlic powder',
        '1 - 2 teaspoons chopped chipotle peppers in adobo sauce(depending on how spicy you like it!)',
        'olive oil and salt, as needed',
        'for serving: tortillas, radishes, cilantro, or limes',
        'salsa',
      ],
      instructions: [
        'Heat a drizzle of olive oil in a large skillet over medium-high heat.',
        'Add the thinly sliced onion and saute for 4-5 minutes, until softened and lightly caramelized.',
        'Meanwhile, shred the jackfruit– it should pull apart easily into shreds that look like pulled chicken.',
        'If there are any round knobby pieces in there, or any of the core that doesn’t shred the same way, they’re totally fine.',
        'The texture and flavor are no different, and you won’t notice them once everything’s cooked.',
        'Add the jackfruit, cumin, chili powder, paprika, garlic powder, and chipolte peppers to the pan.',
        'Stir to evenly distribute the spices and cook for another 4-5 minutes, until the jackfruit is slightly crisped on the edges.',
        'Season with salt, to taste.',
        'Serve with all your favorite taco toppings ',
      ],
      img: '../../assets/ricecardpic.jpg',
      id: 'jackfruit-tacos'
    },
    {
      name: 'Grilled Zucchini Tacos',
      ingredients: [
        '2 zucchinis, tops and bottoms removed and sliced into strips',
        '2 yellow squash, tops and bottoms removed and sliced into strips',
        '3 tablespoons extra virgin olive oil',
        'salt and pepper to taste',
        'roasted tomatillo salsa:',
        '8 tomatillos, cut in half',
        '2 garlic cloves, gently smashed',
        '2 tablespoons extra virgin olive oil',
        '1 jalapeno, seeded and roughly chopped',
        '½ avocado',
        '½ bunch cilantro, roughly chopped',
        '1 limes, juiced',
        'sweet corn succotash:',
        '2 tablespoons unsalted butter',
        '¼ cup red onion, diced',
        '¼ cup red bell pepper, diced',
        '½ jalapeno, seeded and diced',
        '1 garlic clove, minced',
        '1 corn on the cob, kernels and milk removed from cob',
        '18  4 - 5 inch corn tortillas',
        '½ cup queso fresco, crumbled',
        '2 limes, cut into wedges',
      ],
      instructions: [
        'Preheat grill or grill pan to medium-high heat.',
        'Preheat oven to 350°F.',
        'Brush the zucchini and squash with olive oil, season with salt and pepper and place on a hot grill / grill pan.',
        'Grill on each side for 4 to 5 minutes or until slightly softened.',
        'Remove from grill and set aside.',
        'Place the tomatillos and garlic in a bowl and toss together with olive oil, salt and pepper.',
        'Pour the mixture onto a baking sheet and roast for 20 minutes or until the tomatillos have softened and slightly caramelized.',
        'Remove from the oven and place tomatillos and garlic into a food processor with the remaining salsa ingredients.',
        'Puree the mixture until smooth, Season with salt and pepper.Set aside.',
        'Melt the butter in a skillet over medium-high heat.',
        'Add the red onion, bell pepper, jalapeno, and garlic and sauté for 3 to 4 minutes.',
        'Add the corn and continue to sauté for 5to 7 minutes.Season with salt and pepper.',
        'Remove from heat and set aside.',
        'Warm the tortillas over a griddle for about 3 minutes on each side.',
      ],
      img: '../../assets/ricecardpic.jpg',
      id: 'grilled-zucchini-tacos'
    },
  ];
  public currentRecipe;

  constructor(public activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe((params) => {
      console.log(params.id);
      this.currentRecipe = this.recipes.find(function (recipe) {
        return recipe.id === params.id;
      });

      console.log(this.currentRecipe);
    });
  }

  ngOnInit() {
  }

}
