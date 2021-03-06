import React, { useEffect, useState } from "react";
import "antd/dist/antd.less";
import { Card, Image } from "antd";
import { NavLink } from "react-router-dom";

const Sup = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [sups, setSups] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch("/api/champions/sup")
      .then((res) => res.json())
      .then(
        (result) => {
          console.log("Sup stuff: ", result);
          const sum = { sups: [...result] };

          setIsLoaded(true);
          setSups(sum.sups);
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
        {sups.map((sup) => (
          <React.Fragment key={sup.id}>
            <div>
              <NavLink to={`/champions/${sup.id}`} key={sup.id}>
                <Card style={{ width: 250 }}>
                  <div className="champ-tiles">
                    <Image
                      className="shadows"
                      width={200}
                      src={require(`../../public/assets/icons/${sup.name}_0.jpg`)}
                    />
                    <div className="champions-title">
                      {sup.name} {sup.title}
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

export default Sup;
