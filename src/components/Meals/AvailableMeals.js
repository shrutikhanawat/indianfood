import './AvailableMeals.css';
import MealItem from '../MealItem/MealItem';
import Card from '../../UI/Card';
const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Kaju Paneer Masala',
        description:'Paneer cashew curry',
        price: 22.99,
    },
    {
        id: 'm2',
        name: 'Malai Coffta',
        description:'A potato and paneer mix !',
        price: 16.5,
    },
    {
        id: 'm3',
        name: 'Dal Tadka',
        description:'Dal with jira hing tadka',
        price: 12.99,
    },
    {
        id: 'm4',
        name: 'Masala Bhindi',
        description:'Healthy...and green...',
        price: 18.99,
    },
];
const AvailableMeals = () => {
    const mealList = DUMMY_MEALS.map(meal =>
        <MealItem
            key={meal.id}
            id={meal.id}
            name={meal.name}
            description={meal.description} 
            price={meal.price} />);
    return (
        <section className="meals">
            <Card> <ul>
                {mealList}
            </ul>
            </Card>
        </section>
    )
}
export default AvailableMeals;