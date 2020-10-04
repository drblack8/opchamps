import React, { useEffect, useState } from "react";
import "antd/dist/antd.less";
import { Card, Image } from "antd";
import { NavLink } from "react-router-dom";

const Champions = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("/api/champions")
      .then((res) => res.json())
      .then(
        (result) => {
          const sum = { items: [...result] };
          setIsLoaded(true);
          setItems(sum.items);
        },
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
          <React.Fragment key={item.id}>
            <div>
              <NavLink to={`/champions/${item.id}`} key={item.id}>
                <Card style={{ width: 250 }}>
                  <div className="champ-tiles">
                    <Image
                      className="shadows"
                      width={200}
                      src={require(`../../public/assets/icons/${item.name}_0.jpg`)}
                    />
                    <div className="champions-title">
                      {item.name} {item.title}
                    </div>
                  </div>
                </Card>
              </NavLink>
            </div>
          </React.Fragment>
        ))}
      </div>
    );
  }
};

export default Champions;
