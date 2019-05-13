import React, { Component } from 'react';
import Form from './form/form';
import Result from './result/result';
import './app.css';

// Klucz do api
const apiKey = 'e21b28b4dd0718e3430bc28a49338b4a';

class App extends Component{

  state = {
    value: "",
    date: '',
    city: '',
    clouds: '',
    cloudsDescription: '',
    temp: '',
    pressure: '',
    wind: '',
    err: ''
  }

  handleCitySubmit = (e) => {
    e.preventDefault();
    const API = `https://api.openweathermap.org/data/2.5/find?q=${this.state.value}&units=metric&appid=${apiKey}`;

    fetch(API)
      .then(res => {
        console.log(res)
        if(res.ok){
          return res
        } else {
          throw Error("Nie udało sie")
        }
      })
      .then(res => res.json())
      .then(data => {
        const time = new Date().toLocaleString()
        console.log(data.list[0].weather[0])
        this.setState(prevState => ({
          date: time,
          city: this.state.value,
          clouds: data.list[0].weather[0].main,
          cloudsDescription: data.list[0].weather[0].description,
          temp: data.list[0].main.temp,
          pressure: data.list[0].main.pressure,
          wind: data.list[0].wind.speed,
          err: false
        }))
      })
      .catch(err => {
        console.log(err)
        this.setState(prevState => {
          return{
            err: true,
            city: prevState.value
          }
        })
      })
  }

  handleInputChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  render(){
    return(
      <>
        <Form
          value={this.state.value}
          handleInputChange={this.handleInputChange}
          handleCitySubmit={this.handleCitySubmit}
        />
        <Result
          weather={this.state}
        />
      </>
    );
  }
}

export default App;
