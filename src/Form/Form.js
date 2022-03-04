import React from 'react';
import styles from "../Header/Header.module.css";
import axios from "axios";

const Form = ({setCurrent, setFiveDays, setDate, isLight}) => {
    const getWeatherUseCityName = (e) => {
        e.preventDefault();
        axios(`https://api.openweathermap.org/data/2.5/weather?q=${e.target[0].value}&appid=c3ca235f299a5ac03a9b15b27ae3fee0`)
            .then(({data}) => setCurrent(data))
            .catch(() => alert('Увы такого города нет, попробуйте заново !'));

        axios(`https://api.openweathermap.org/data/2.5/forecast?q=${e.target[0].value}&appid=c3ca235f299a5ac03a9b15b27ae3fee0`)
            .then(({data}) => {
                setFiveDays(data.list);
                setDate(data.list[0].dt_txt.slice(0, 10))
            } )
            .catch(() => alert('Увы такого города нет, попробуйте заново 5 дней!'));
        e.target[0].value = ''
    };

    return (
        <form className={styles.form} onSubmit={getWeatherUseCityName}>
            <input placeholder='Write city...' className={`${styles.input} ${isLight ? styles.light : ''}` } type="search" required/>
            <button className={`${styles.button} ${isLight ? styles.light : ''}` } type='submit'>Search</button>
        </form>
    );
};

export default Form;