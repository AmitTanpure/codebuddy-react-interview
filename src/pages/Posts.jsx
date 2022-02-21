/* eslint-disable import/no-extraneous-dependencies */
import { Grid, Avatar } from '@mui/material';
import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from '../styles/module/form1.module.css';

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://codebuddy.review/posts').then(response => {
      // console.log(response.data.data);
      setPosts(response.data.data.posts);
    });
  }, []);

  return (
    <Grid container justification="center">
      <div>Lists Of Posts</div>
      <Grid container justifyContent="space-around">
        {posts?.map(item => (
          <Grid item xs={11} sm={5} md={3} lg={3} className={styles.post_card}>
            <div> id : {item.id}</div>
            <div>
              <img alt="profile" className={styles.image} src={item.image} />
            </div>
            <div>
              <Avatar alt="avatar" src={item.avatar} />
            </div>{' '}
            <div> Namw : {item.firstName}</div>
            <div> last : {item.lastName}</div>
            <div> Discription : {item.writeup}</div>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}
