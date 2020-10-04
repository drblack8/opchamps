import React, { useEffect, useState } from "react";
import "antd/dist/antd.less";
import Cookies from 'js-cookie'
import { Comment, List, Form, Button, Input } from 'antd'
import { useStore } from 'react-redux'
const { TextArea } = Input;


const Editor = ({ onChange, onSubmit, submitting, value }) => (
  <>
    <Form.Item>
      <TextArea rows={4} onChange={onChange} value={value} />
    </Form.Item>
    <Form.Item>
      <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
        Add Comment
      </Button>
    </Form.Item>
  </>
);


const Comments = (props) => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [comments, setComments ] = useState(null)
  const [submitting, setSubmitting] = useState(false)
  const [value, setValue] = useState(null)
  const champId = props.props.match.params.id;
  const store = useStore()
  const currentUser = store.getState().auth.username
  const userId = store.getState().auth.id


  const time = (date) => {
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};

    return new Date(date).toLocaleTimeString('en-US', options)
  };
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
  
  console.log(comments);
  const handleSubmit = (message) => {

    if (!value) {
      console.log('shit');
      return
    }

    setSubmitting(true)

    setTimeout(() => {
        setSubmitting(false)
        setValue('')
        setComments(comments.concat([
          { 
            id: comments.length + 1,
            message: value,
            userId: userId,
            championId: Number(champId),
            createdAt: new Date(),
            User: {
              username: currentUser
            }
          }
        ]))
      }, 1000);
    const body = { message: value, userId: userId, championId: Number(champId) }
    fetch(`/api/champions/${champId}`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
        "XSRF-TOKEN": Cookies.get("XSRF-TOKEN"),
      }
    })
      .then((res) => res.json())
      .catch((err) => console.log("ERROR: ", err))
    

      
    }
  const handleChange = e => {
        setValue(e.target.value)
    };

  
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
                datetime={time(el.createdAt)}
                content={el.message}
              />}
              
          />
          <Editor 
               onChange={handleChange}
               onSubmit={handleSubmit}
               submitting={submitting}
               value={value}
          />
        </>
    );
  }
};

export default Comments;
