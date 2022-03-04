import React from 'react';
import styles from './MainFooter.module.css'

const MainFooter = ({fiveDays, date, setDate, isLight}) => {
    const {title, listDate, itemDate, row, card, cardTitle, cardTempMin, cardTempMax, description, itemDateActive, light} = styles;

    return (
        <>
                <h2 className={title}>На 5 дней</h2>
               <ul className={listDate}>
                   {
                       [...new Set(
                           fiveDays.map((item) => item.dt_txt.slice(0,10))
                       )].map(elem => (
                           <li key={elem}
                               className={`${itemDate} ${date === elem ? itemDateActive : ''} ${isLight ? light : ''}`}
                               onClick={() => setDate(elem)}
                           >{elem}</li>
                       ))
                   }
               </ul>

                <div className={`${row} ${isLight ? light : ''}`}>
                    {fiveDays.filter((item) => item.dt_txt.includes(date))
                        .map((item) => (
                            <div className={`${card} ${isLight ? light : ''}`} key={item.dt_txt}>
                                <h3 className={cardTitle}>{item.dt_txt.slice(11, 16)}</h3>
                                <img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}.png`} alt="Icon Weather"/>
                                <p className={cardTempMax}>{(item.main.temp_max - 273.15).toFixed()}°C</p>
                                <p className={cardTempMin}>{(item.main.temp_min - 273.15).toFixed()}°C</p>
                                <p className={description}>{item.weather[0].description}</p>
                            </div>
                        ) )
                    }

                </div>
        </>
    );
};

export default MainFooter;