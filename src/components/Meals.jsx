import MealItem from './MealItem.jsx';
import useHttp from '../hooks/useHttp.js';

const requestConfig = {};

const Meals = () => {
  const {
    data: dataMeal,
    isLoading,
    error,
  } = useHttp('http://localhost:3000/meals', requestConfig, []);

  if (isLoading) {
    return <p className="center">Data fetching in progress ...</p>;
  }
  return (
    <ul id="meals">
      {dataMeal.map((item) => (
        <MealItem key={item.id} meal={item} />
      ))}
    </ul>
  );
};

export default Meals;
