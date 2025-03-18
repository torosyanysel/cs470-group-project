import { useState } from 'react';
import axios from 'axios';

const Example = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('https://api.example.com/data')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      {data ? (
        <h1>{data}</h1>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Example;
