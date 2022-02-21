import { Grid, TextField, Button, FormControlLabel, Checkbox } from '@mui/material';
import { Link } from 'react-router-dom';
import styles from '../styles/module/form1.module.css';

export default function Form3() {
  return (
    <Grid container justifyContent="center" alignItems="center">
      <div className={styles.form}>
        <Grid container justifyContent="center">
          <TextField
            size="medium"
            id="demo-helper-text-aligned"
            helperText="Please enter your first name"
            label="countryCode"
          />
        </Grid>
        <Grid container justifyContent="center">
          <TextField
            size="medium"
            helperText="Please enter your last name"
            id="demo-helper-text-aligned-no-helper"
            label="phoneNumber"
          />
        </Grid>
        <Grid container className={styles.input_box} justifyContent="center">
          <FormControlLabel control={<Checkbox defaultChecked />} label="acceptTermsAndCondition" />
        </Grid>

        <Grid container justifyContent="center">
          <Link to="/posts">
            <Button variant="contained">Save</Button>
          </Link>
        </Grid>
      </div>
    </Grid>
  );
}
