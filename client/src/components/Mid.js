import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import { Card, Image } from "antd";
import { NavLink } from "react-router-dom";

const Mid = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [mids, setMids] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch("/api/champions/mid")
      .then((res) => res.json())
      .then(
        (result) => {
          console.log("Mid stuff: ", result);
          const sum = { mids: [...result] };

          setIsLoaded(true);
          setMids(sum.mids);
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
        {mids.map((mid) => (
          <React.Fragment key={mid.id}>
            <div>
              <NavLink to={`/champions/${mid.id}`} key={mid.id}>
                <Card style={{ width: 250 }}>
                  <div className="champ-tiles">
                    <Image
                      className="shadows"
                      width={200}
                      src={require(`../../public/assets/icons/${mid.name}_0.jpg`)}
                    />
                    <div className="champ-title">
                      {mid.name} {mid.title}
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

export default Mid;
