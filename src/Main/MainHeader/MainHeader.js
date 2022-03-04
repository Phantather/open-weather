import React from 'react';
import styles from './MainHeader.module.css';
import TempIcon from '../../assets/Icons/thermometer.svg'
import PressureIcon from '../../assets/Icons/humidity.svg'
import PrecipitationIcon from '../../assets/Icons/evaporator.svg'
import WindIcon from '../../assets/Icons/wind.svg'

const MainHeader = ({current, isLight}) => {

    const addZero = (num) => {
        if (num < 10) return `0${num}`;
        else return num
    };

    const cityTime = () => {
        let d = new Date(),
            utc = d.getTime() + (d.getTimezoneOffset() * 60000),
            nd = new Date(utc + (1000 * current.timezone)),
            hours = addZero(nd.getHours()),
            minutes = addZero(nd.getMinutes());
        return `${hours} : ${minutes}`
    };


    return (
        <div className={styles.mainHeader}>
            <div  className={`${styles.left} ${isLight ? styles.light : ''}` }>
                <div  className={styles.leftTop}>
                    <div className={styles.leftTopLeft}>
                        <p className={styles.deg}>{(current.main.temp - 273.15).toFixed()}°</p>
                        <p className={styles.today}>Today</p>
                    </div>
                    <img src={`http://openweathermap.org/img/wn/${current.weather[0].icon}@4x.png`} alt="Icon Weather"/>
                </div>
                <p className={styles.infotext}>Time : {cityTime()}</p>
                <p className={styles.infotext}>City : {current.name}</p>
            </div>
            <div className={`${styles.right} ${isLight ? styles.light : ''}` } >
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <div className={styles.circle}>
                            <img src={TempIcon} alt="Thermometer"/>
                        </div>
                        <p className={styles.category}>Temperature</p>
                        <p className={styles.categoryValue}>{(current.main.temp - 273.15).toFixed()}° - feels like {(current.main.feels_like - 273.15).toFixed()}°</p>
                    </li>
                    <li className={styles.item}>
                        <div className={styles.circle}>
                            <img src={PressureIcon} alt="Pressure"/>
                        </div>
                        <p className={styles.category}>Pressure</p>
                        <p className={styles.categoryValue}>{current.main.pressure} mmHg - normal</p>
                    </li>
                    <li className={styles.item}>
                        <div className={styles.circle}>
                            <img src={PrecipitationIcon} alt="Precipitation"/>
                        </div>
                        <p className={styles.category}>Precipitation</p>
                        <p className={styles.categoryValue}>{current.weather[0].description}</p>
                    </li>
                    <li className={styles.item}>
                        <div className={styles.circle}>
                            <img src={WindIcon} alt="Wind"/>
                        </div>
                        <p className={styles.category}>Wind</p>
                        <p className={styles.categoryValue}>{current.wind.speed} m/s</p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default MainHeader;