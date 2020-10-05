import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import "antd/dist/antd.less";


const Region = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState(null);
  const params = useParams();
 
  const imgs = [
  "https://i.imgur.com/Wb9yeMu.jpg?1", 
  "https://i.imgur.com/mT0pyNk.jpg?1",
  "https://i.imgur.com/0nYFqjc.jpg?1",
  "",
  "",
  "",
  "",
  "",
  "",
    "",
    "",
    "",
    "",
  ]


  
  useEffect(() => {
    console.log('params:', params);
    fetch(`/api/regions/${params.id}`)
    .then((res) => res.json())
    .then(
      (result) => {
        setItems(result);
        setIsLoaded(true);
      },
      (error) => {
        setError(error);
        setIsLoaded(true);
      }
      );
    }, [params.id]);
    
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
        {/* <div className="flex-container">
        {items.map((champs) => (
          <React.Fragment key={champs.id}>
            <div>
              <NavLink to={`/champions/${champs.id}`} key={champs.id}>
                <Card style={{ width: 250 }}>
                  <div className="champ-tiles">
                    <Image
                      className="shadows"
                      width={200}
                      src={require(`../../public/assets/icons/${champs.name}_0.jpg`)}
                    />
                    <div className="champions-title">
                      {champs.name} {champs.title}
                    </div>
                  </div>
                </Card>
              </NavLink>
            </div>
          </React.Fragment>
        ))}
      </div> */}
      </>
    );
  }
};

export default Region;
