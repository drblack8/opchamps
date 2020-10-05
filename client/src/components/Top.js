import React, { useEffect, useState } from "react";
import "antd/dist/antd.less";
import { Card, Image } from "antd";
import { NavLink } from "react-router-dom";

const Top = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [tops, setTops] = useState([]);

  useEffect(() => {
    fetch("/api/champions/top")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setTops(result);
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
        {tops.map((top) => (
          <React.Fragment key={top.id}>
            <div>
              <NavLink to={`/champions/${top.id}`} key={top.id}>
                <Card style={{ width: 250 }}>
                  <div className="champ-tiles">
                    <Image
                      className="shadows"
                      width={200}
                      src={require(`../../public/assets/icons/${top.name}_0.jpg`)}
                    />
                    <div className="champions-title">
                      {top.name} {top.title}
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

export default Top;
