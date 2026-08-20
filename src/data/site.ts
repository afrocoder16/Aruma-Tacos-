export const site = {
  name: 'Aruma Tacos & Tequila',
  shortName: 'Aruma',
  eyebrow: 'Tacos & Tequila',
  address: '900 Clarice Ave, Marshall, MN 56258',
  directions: 'https://www.google.com/maps/dir/?api=1&destination=900+Clarice+Ave%2C+Marshall%2C+MN+56258',
  instagram: 'https://www.instagram.com/',
  hours: [
    ['Sunday — Thursday', '11:00 AM — 9:30 PM'],
    ['Friday — Saturday', '11:00 AM — 10:00 PM'],
  ],
};

export const menu = {
  tacos: {
    label: 'Tacos',
    hero: {
      name: 'Quesabirria',
      note: 'The icon',
      description: 'Slow-braised beef, molten cheese, onion, cilantro, and a rich consommé built for dipping.',
      price: '18',
      image: 'birria',
    },
    items: [
      ['Street Tacos', 'Three tacos · rice · beans · verde · picante', '16'],
      ['Ribeye', 'Queso costra · chimichurri · avocado sauce', '24'],
      ['Al Pastor', 'Onion · cilantro · pineapple · avocado sauce', '16'],
      ['Taco Flight', 'Choose three styles · find your favorite', '18'],
    ],
  },
  kitchen: {
    label: 'From the kitchen',
    hero: {
      name: 'Fajitas Aruma',
      note: 'From the fire',
      description: 'Steak, chicken, shrimp, and chorizo with blistered peppers, onions, rice, beans, and warm tortillas.',
      price: '44',
      image: 'fajitas',
    },
    items: [
      ['Aruma Special', 'Chicken · shrimp · peppers · squash · poblano crema', '19'],
      ['Carne Asada', 'Skirt steak · peppers · onions · rice · beans', '22'],
      ['Pollo Chipotle', 'Chicken · chipotle cream · mushrooms · rice', '18'],
      ['Supreme Burrito', 'Ground beef · queso · lettuce · pico · crema', '15'],
    ],
  },
  cocktails: {
    label: 'Cocktails',
    hero: {
      name: 'Margarita Flight',
      note: 'Four ways to fly',
      description: 'Four bright pours with four different personalities—made for passing around the table.',
      price: '22',
      image: 'margarita',
    },
    items: [
      ['House Margarita', 'Blanco · lime · orange · agave', '10'],
      ['Reposado Aruma', 'Reposado · orange liqueur · lime · agave', '13'],
      ['Smoked Paloma', 'Mezcal · grapefruit · lime · sea salt', '13'],
      ['Dirty Horchata', 'Rum · horchata · café · cinnamon', '12'],
    ],
  },
  sweets: {
    label: 'Sweet finish',
    hero: {
      name: 'Churros',
      note: 'One more thing',
      description: 'Golden cinnamon-sugar churros with cajeta and warm chocolate for dipping.',
      price: '15',
      image: 'churros',
    },
    items: [
      ['Fried Ice Cream', 'Crisp shell · vanilla · warm chocolate', '7'],
      ['Flan', 'Silky custard · caramel · sea salt', '7'],
      ['Tres Leches', 'Three-milk cake · cream · cinnamon', '8'],
      ['Churros', 'Cinnamon sugar · cajeta · chocolate', '15'],
    ],
  },
} as const;

export const fullMenu = [
  {
    id: 'share',
    category: 'For the table',
    note: 'Start together',
    items: [
      ['Guacamole', 'Avocado · pico · lime · warm chips', '12'],
      ['Queso Fundido', 'Melted cheese · chorizo · poblano · tortillas', '14'],
      ['Tuna Tostadas', 'Ahi tuna · avocado · chile · sesame', '16'],
      ['Street Corn', 'Charred corn · cotija · chile · lime', '9'],
    ],
  },
  {
    id: 'tacos',
    category: 'Tacos',
    note: 'Three per order',
    items: [
      ['Chicken', 'Lettuce · curtido · chipotle sauce', '16'],
      ['Steak', 'Onion · cilantro · avocado sauce', '17'],
      ['Carnitas', 'Curtido · jalapeños · salsa verde', '16'],
      ['Walleye or Shrimp', 'Cabbage · curtido · chipotle crema', '19'],
      ['Ribeye', 'Queso costra · chimichurri · avocado sauce', '24'],
      ['Al Pastor', 'Onion · cilantro · pineapple · avocado sauce', '16'],
    ],
  },
  {
    id: 'signatures',
    category: 'From the fire',
    note: 'House signatures',
    items: [
      ['Aruma Special', 'Chicken · shrimp · peppers · squash · poblano crema', '19'],
      ['Quesabirria', 'Slow-braised beef · cheese · rice · beans · consommé', '18'],
      ['Carne Asada', 'Skirt steak · peppers · onion · rice · beans', '22'],
      ['Fajitas Aruma', 'Steak · chicken · shrimp · chorizo · tortillas', '44'],
      ['Pollo Chipotle', 'Chicken · chipotle cream · mushrooms · rice', '18'],
    ],
  },
  {
    id: 'fajitas',
    category: 'Fajitas',
    note: 'Served sizzling',
    items: [
      ['Chicken', 'Peppers · onion · warm tortillas · rice · beans', '30'],
      ['Steak', 'Peppers · onion · warm tortillas · rice · beans', '33'],
      ['Shrimp', 'Peppers · onion · warm tortillas · rice · beans', '36'],
      ['Seafood', 'Shrimp · fish · peppers · onion · warm tortillas', '36'],
      ['Fajitas Aruma', 'Steak · chicken · shrimp · chorizo · built for two', '44'],
    ],
  },
  {
    id: 'cocktails',
    category: 'Cocktails',
    note: 'Fresh shaken',
    items: [
      ['House Margarita', 'Blanco · lime · orange · agave', '10'],
      ['Reposado Aruma', 'Reposado · orange liqueur · lime · agave', '13'],
      ['Smoked Paloma', 'Mezcal · grapefruit · lime · sea salt', '13'],
      ['Margarita Flight', 'Four rotating mini margaritas', '22'],
      ['Dirty Horchata', 'Rum · horchata · café · cinnamon', '12'],
    ],
  },
  {
    id: 'agave',
    category: 'From agave',
    note: 'Tequila & mezcal',
    items: [
      ['Cantarito', 'Barrel select · grapefruit · orange · lime · agave', '18'],
      ['Tequila Infused', 'Pineapple and chile ancho infused tequila', '11'],
      ['Vida Oaxaca', 'Mezcal · gran gala · angostura · lime · agave', '11'],
      ['Clase Ancestral', 'Mezcal · citrus · grapefruit · ginger', '22'],
      ['Clase Azul', 'Premium tequila pour', '40'],
    ],
  },
  {
    id: 'sweets',
    category: 'Sweet finish',
    note: 'Save room',
    items: [
      ['Churros', 'Cinnamon sugar · cajeta · warm chocolate', '15'],
      ['Fried Ice Cream', 'Crisp shell · vanilla · warm chocolate', '7'],
      ['Flan', 'Silky custard · caramel · sea salt', '7'],
      ['Tres Leches', 'Three-milk cake · cream · cinnamon', '8'],
      ['Kids Tenders & Fries', 'A little something for the niños', '9'],
    ],
  },
] as const;

export type MenuKey = keyof typeof menu;
