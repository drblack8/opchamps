import React, { useEffect, useState } from "react";
import "antd/dist/antd.less";
import { Comment, List } from 'antd'


const Comments = (props) => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [comments, setComments ] = useState(null)
  const champId = props.props.match.params.id;



  useEffect(() => {
    fetch(`/api/champions/${champId}`)
      .then((res) => res.json())
      .then(
        (result) => {
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
  } else if (comments) {
    return (
        <>
          <List
            dataSource={comments}
            header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
            itemLayout="horizontal"
            
            renderItem={el => <Comment 
                author={el.User.username}
                datetime={el.createdAt}
                content={el.message}
              />}
          />
        </>
    );
  }
};

export default Comments;

// {comments.map((el) => {
          
//   <Comment 
//     author={comments.user}

//   />
//   >})}