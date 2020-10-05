import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import "antd/dist/antd.less";
import { Card, Image } from "antd";
import { NavLink } from "react-router-dom";

const Region = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState(null);
  const [champs, setChamps] = useState(null);
  const params = useParams();
 
  const imgs = [
  "https://i.imgur.com/Wb9yeMu.jpg?1", 
  "https://i.imgur.com/mT0pyNk.jpg?1",
  "https://i.imgur.com/0nYFqjc.jpg?1",
  "https://i.imgur.com/idams6g.jpg?1",
  "https://i.imgur.com/eR7OVPw.jpg?1",
  "https://i.imgur.com/RNLD9XX.jpg?1",
  "https://i.imgur.com/9aQMRFO.jpg?1",
  "https://i.imgur.com/ALSg5v6.jpg",
  "https://i.imgur.com/R5zAAWW.jpg?1",
  "https://i.imgur.com/WjgqDWN.jpg?1",
  "https://i.imgur.com/GoPbPXX.jpg?1",
  "https://i.imgur.com/qQJtqvZ.jpg?1",
  "https://i.imgur.com/GyUcc3W.jpg?1",
  ]


  
  useEffect(() => {
    fetch(`/api/regions/${params.id}`)
    .then((res) => res.json())
    .then(
      (result) => {
        setItems(result.region);
        setChamps(result.champs)
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
        <div className="champ-div">
          <img
            alt=''
            className="clip_img"
            src={imgs[params.id - 1]}
          />
        </div>
        <div className="champ-content">
          <div className="champ-title">
            {items.title} - {items.key}
          </div>
          <div className="champ-quote">{`"${items.key}"`}</div>
          <div className="champ-lore">{items.bio}</div>
        </div>
        <div className="champ-title">
    <h1>Champions from {items.title}:</h1>
          </div>
        <div className="flex-container">
        {champs.map((el) => (
          <React.Fragment key={el.id}>
            <div>
              <NavLink to={`/champions/${el.id}`} key={el.id}>
                <Card style={{ width: 250 }}>
                  <div className="champ-tiles">
                    <Image
                      className="shadows"
                      width={200}
                      src={require(`../../public/assets/icons/${el.name}_0.jpg`)}
                    />
                    <div className="champions-title">
                      {el.name} {el.title}
                    </div>
                  </div>
                </Card>
              </NavLink>
            </div>
          </React.Fragment>
        ))}
      </div> 
      </>
    );
  }
};

export default Region;
