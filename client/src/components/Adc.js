import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import { Card, Image } from "antd";
import { NavLink } from "react-router-dom";

const Adc = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [adcs, setAdcs] = useState([]);
  useEffect(() => {
    fetch("/api/champions/adc")
      .then((res) => res.json())
      .then(
        (result) => {
          console.log("Adc stuff: ", result);
          const sum = { adcs: [...result] };

          setIsLoaded(true);
          setAdcs(sum.adcs);
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
        {adcs.map((adc) => (
          <React.Fragment key={adc.id}>
            <div>
              <NavLink to={`/champions/${adc.id}`} key={adc.id}>
                <Card style={{ width: 250 }}>
                  <div className="champ-tiles">
                    <Image
                      className="shadows"
                      width={200}
                      src={require(`../../public/assets/icons/${adc.name}_0.jpg`)}
                    />
                    <div className="champ-title">
                      {adc.name} {adc.title}
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

export default Adc;
