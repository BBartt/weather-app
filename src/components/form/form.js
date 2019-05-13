import React from 'react';
import styles from './form.module.scss';

const Form = (props) => {
  return(
    <form
      className={styles.form}
      onSubmit={props.handleCitySubmit}
    >
      <input
        className={styles.input}
        type="text"
        placeholder="Wpisz miasto"
        value={props.value}
        onChange={props.handleInputChange}
      />
      <button className={styles.btn}>Wyszukaj miasto</button>
    </form>
  )
}

export default Form;
