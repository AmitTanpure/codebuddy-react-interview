/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/self-closing-comp */
import Jumbotron from 'react-bootstrap/Jumbotron';
import { Link } from 'react-router-dom';
import { Grid, Button } from '@mui/material';
import styles from '../styles/module/form1.module.css';

export default function Home() {
  //   const [data, setData]= useState={""}

  //   useEffect(()=>{
  //     axios.post("https://codebuddy.review/submit").then(()=>{

  //     })
  //   })

  // const handleSubmit = ()=>{
  // setData()
  // }

  return (
    <main>
      <Jumbotron>
        <h1>React + Bootstrap v4</h1>
        <p>React template with Bootstrap version v4</p>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
      </Jumbotron>
      {/* <Container>
        <Form>
          <Button onClick={onSubmit}>Goto Posts</Button>
        </Form>
      </Container> */}

      <Grid container justifyContent="center" alignItems="center" className={styles.first_form}>
        <div className={styles.form}>
          <Grid container justifyContent="center">
            <label> Email : </label>
            <input
              type="email"
              name="Email-Id"
              className={styles.input_box}
              pattern="^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$"
            />
          </Grid>
          <Grid container justifyContent="center" style={{ marginTop: '10px' }}>
            <label> password : </label>
            <input
              type="password"
              name="Password"
              className={styles.input_box}
              pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"
            />
          </Grid>
          <Grid container justifyContent="center" style={{ marginTop: '10px' }}>
            <Link to="form2">
              <Button variant="contained">Save</Button>
            </Link>
          </Grid>
        </div>
      </Grid>
    </main>
  );
}
