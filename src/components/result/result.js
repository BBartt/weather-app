import React from 'react';
import styles from './result.module.scss';

const Result = (props) => {

  const {
    err,
    city,
    clouds,
    cloudsDescription,
    temp,
    pressure,
    wind,
    date
  } = props.weather;

  let content = null;

  if(!err && city){
    content = (
      <>
        <div>Wyszukiwanie dla miasta: <em>{city}</em></div>
        <div>Dane dla dnia i godziny: {date}</div>
        <div>Temperatura: {temp} &#176;</div>
        <div>Ciśnienie: {pressure} hpa</div>
        <div>Siła wiatru: {wind} m/s</div>
        <div>Warunki meteorologiczne: {clouds}</div>
        <div>Opad atmosferyczny: {cloudsDescription}</div>
      </>
    )
  }

  return(
    <div className={styles.result}>
      {err ? `Nie mamy w bazie: ${city}` : content}
    </div>
  );
}

export default Result;
