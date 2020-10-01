import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import { Card, Image } from "antd";

const Adc = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [adcs, setAdcs] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch("/api/champions/adc")
      .then((res) => res.json())
      .then(
        (result) => {
            console.log('Adc stuff: ', result);
          const sum = {'adcs': [...result]}

          setIsLoaded(true);
          setAdcs(sum.adcs);
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
        {adcs.map((adc) => (
          <div key={adc.key}>
          <Card style={{ width: 250 }}>
          <div className="champ-tiles">
              <Image className='shadows' width={200} src={require(`../../public/assets/${adc.name}_0.jpg`)} />
            <div className="champ-title">
            {adc.name} {adc.title}
            </div>
          </div>
          </Card>
          </div>
        ))}
        </div>
    );
  }
};

export default Adc;
