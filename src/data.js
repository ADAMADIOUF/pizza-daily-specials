import img1 from "../src/starter/pizzas/focaccia.jpg"
import img2 from '../src/starter/pizzas/funghi.jpg'
import img3 from '../src/starter/pizzas/margherita.jpg'
import img4 from '../src/starter/pizzas/prosciutto.jpg'
import img5 from '../src/starter/pizzas/salamino.jpg'
import img6 from '../src/starter/pizzas/spinaci.jpg'





const pizzaData = [
  {
    id: 1,
    category: 'breakfast',
    name: 'Focaccia',
    ingredients: 'Bread with italian olive oil and rosemary',
    price: 6,
    photoName: 'pizzas/focaccia.jpg',
    soldOut: false,
    img: img1,
  },
  {
    id: 2,
    category: 'shakes',
    name: 'Pizza Margherita',
    ingredients: 'Tomato and mozarella',
    price: 10,
    photoName: 'pizzas/margherita.jpg',
    soldOut: false,
    img: img2,
  },
  {
    id: 3,
    category: 'lunch',
    name: 'Pizza Spinaci',
    ingredients: 'Tomato, mozarella, spinach, and ricotta cheese',
    price: 12,
    photoName: 'pizzas/spinaci.jpg',
    soldOut: false,
    img: img3,
  },
  {
    id: 4,
    category: 'breakfast',
    name: 'Pizza Funghi',
    ingredients: 'Tomato, mozarella, mushrooms, and onion',
    price: 12,
    photoName: 'pizzas/funghi.jpg',
    soldOut: false,
    img: img4,
  },
  {
    id: 5,
    category: 'breakfast',
    name: 'Pizza Salamino',
    ingredients: 'Tomato, mozarella, and pepperoni',
    price: 15,
    photoName: 'pizzas/salamino.jpg',
    soldOut: true,
    img: img5,
  },
  {
    id: 6,
    category: 'lunch',
    name: 'Pizza Prosciutto',
    ingredients: 'Tomato, mozarella, ham, aragula, and burrata cheese',
    price: 18,
    photoName: 'pizzas/prosciutto.jpg',
    soldOut: false,
    img: img6,
  },
]
export default pizzaData