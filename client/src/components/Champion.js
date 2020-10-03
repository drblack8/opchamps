import React, { useEffect, useState } from "react";
import "antd/dist/antd.less";
import Comments from "./Comments";


const Champion = (props) => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState(null);
  const [comments, setComments ] = useState(null)
  const champId = props.match.params.id;

  const randomNum = () => {
    return Math.floor(Math.random() * 2);
  };


  useEffect(() => {
    fetch(`/api/champions/${champId}`)
      .then((res) => res.json())
      .then(
        (result) => {
          setItems(result[0]);
          setComments(result[1])
          setIsLoaded(true);
        },
        (error) => {
          setError(error);
          setIsLoaded(true);
        }
      );
  }, [champId]);

  

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
            src={require(`../../public/assets/splashes/${items.name}_${randomNum()}.jpg`)}
          />
        </div>
        <div className="champ-content">
          <div className="champ-title">
            {items.name} {items.title}
          </div>
          <div className="champ-quote">{`"${items.blurb}"`}</div>
          <div className="champ-lore">{items.lore}</div>
          <div className="champ-reg">enter {items.reg}</div>
        </div>
        <div>
          <Comments comments={comments}/>
        </div>
      </>
    );
  }
};

export default Champion;
