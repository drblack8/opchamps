import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import "antd/dist/antd.less";
const Region = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState(null);
  const params = useParams();
  useEffect(() => {
    console.log('params:', params);
    fetch(`/api/regions/${params.id}`)
      .then((res) => res.json())
      .then(
        (result) => {
          setItems(result);
          setIsLoaded(true);
        },
        (error) => {
          setError(error);
          setIsLoaded(true);
        }
      );
  }, [params]);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else if (items) {
    return (
      <>
            <h1>{items.title}</h1>
      </>
    );
  }
};

export default Region;
