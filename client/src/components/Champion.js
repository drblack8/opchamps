import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import { Card, Image } from "antd";
import { NavLink } from "react-router-dom";


const Champion = (props) => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState({});
  const champId = props.match.params.id
  const randomNum = () => {
    return (Math.floor(Math.random() * 4) - 1);
  }

  useEffect(() => {
    fetch(`/api/champions/banana/${champId}`)
      .then((res) => res.json())
      .then(
        (result) => {
          const sum = { items: result };
          console.log(sum.items)

          setIsLoaded(true);
          setItems(sum.items);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
        );
      }, [champId]) //maybe change this
  const namez = items.name
  console.log("asdfasdf: ", namez)

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    console.log(items)
    console.log(items.name)
    return (
      <React.Fragment>
      <div className="champ-tiles">
        {/* <Image
        className="shadows"
        width={200}
        src={img}
      /> */}
      </div>
      <div className="champ-title">
        {items.name} {items.title}
      </div>
      </React.Fragment>
    )

  }
}

export default Champion;
