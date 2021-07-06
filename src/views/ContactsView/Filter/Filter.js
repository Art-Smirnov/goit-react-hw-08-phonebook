import React from 'react';

import { TextField } from '@material-ui/core';

import styles from './Filter.module.scss';

const Filter = ({ value, onChange }) => (
  <TextField
    className={styles.input}
    id="standard-basic"
    label="Find your contacts by name"
    type="text"
    value={value}
    onChange={onChange}
  />
);

export default Filter;
