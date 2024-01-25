import { useState, useEffect } from 'react';
import MealItem from './MealItem.jsx';

const Meals = () => {
  const [dataMeal, setDataMeal] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      const res = await fetch('http://localhost:3000/meals');

      if (!res.ok) {
        // ...
      }

      const data = await res.json();
      setDataMeal(data);
    };

    fetchMeals();
  }, []);
  return (
    <ul id="meals">
      {dataMeal.map((item) => (
        <MealItem key={item.id} meal={item} />
      ))}
    </ul>
  );
};

export default Meals;
