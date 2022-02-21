/* eslint-disable jsx-a11y/label-has-associated-control */
import { Grid, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import styles from '../styles/module/form1.module.css';

export default function Form2() {
  return (
    <Grid container justifyContent="center" alignItems="center">
      <div className={styles.form}>
        <Grid container justifyContent="center" style={{ marginTop: '10px' }}>
          <label> firstName</label>
          <input type="firstName" name="firstName" className={styles.input_box} />
        </Grid>
        <Grid container justifyContent="center" style={{ marginTop: '10px' }}>
          <label> firstName</label>
          <input type="firstName" name="lastName" className={styles.input_box} />
        </Grid>
        <Grid container justifyContent="center" style={{ marginTop: '10px' }}>
          <label> address</label>
          <input type="address" name="address" className={styles.input_box} />
        </Grid>

        <Grid container justifyContent="center">
          <Link to="form3">
            <Button variant="contained">Save</Button>
          </Link>
          <Link to="/">
            <Button variant="contained">Back</Button>
          </Link>
        </Grid>
      </div>
    </Grid>
  );
}
