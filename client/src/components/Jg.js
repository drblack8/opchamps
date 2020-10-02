import React, { useEffect, useState } from "react";
import "antd/dist/antd.less";
import { Card, Image } from "antd";
import { NavLink } from "react-router-dom";

const Jg = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [jg, setJg] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch("/api/champions/jg")
      .then((res) => res.json())
      .then(
        (result) => {
          const sum = { jg: [...result] };

          setIsLoaded(true);
          setJg(sum.jg);
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
        {jg.map((e) => (
          <React.Fragment key={e.id}>
            <div>
              <NavLink to={`/champions/${e.id}`} key={e.id}>
                <Card style={{ width: 250 }}>
                  <div className="champ-tiles">
                    <Image
                      className="shadows"
                      width={200}
                      src={require(`../../public/assets/icons/${e.name}_0.jpg`)}
                    />
                    <div className="champions-title">
                      {e.name} {e.title}
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

export default Jg;
