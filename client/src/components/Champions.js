import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import { Card, Image } from "antd";

const Champions = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch("/api/champions")
      .then((res) => res.json())
      .then(
        (result) => {

          const sum = {'items': [...result]}

          setIsLoaded(true);
          setItems(sum.items);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="flex-container">
        {items.map((item) => (
          <div>
          <Card style={{ width: 250 }}>
          <div className="champ-tiles">
              <Image className='shadows' width={200} src={require(`../../public/assets/${item.name}_0.jpg`)} />
            <div className="champ-title">
            {item.name} {item.title}
            </div>
          </div>
          </Card>
          </div>
        ))}
        </div>
    );
  }
};

export default Champions;
