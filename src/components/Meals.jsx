import MealItem from './MealItem.jsx';
import useHttp from '../hooks/useHttp.js';
import Error from './Error.jsx';

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

  if (error) {
    <Error title="An error while catching meal data" message={error} />;
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
