import React from 'react'
import styles from './SearchField.module.css'
import searchIcon from '../../assets/searchIcon.png'
import locationIcon from '../../assets/locationIcon.png'

export default function SearchField() {


    return (
        <div className={styles.wrapper}>
            <div className={styles.btnContainer}>
            <button>CO-FOUNDERS</button>
            <button>START-UPS</button>
            </div>
            <div className={styles.container}>
                <div className={styles.searchIcon}>
                    <img src={searchIcon} alt=""/>
                </div>
                <div className={styles.searchInput}>
                    <input type="text" placeholder="Skill or keyword"/>
                </div>
                <div className={styles.locationIcon}>
                    <img src={locationIcon} alt=""/>
                </div>
                <div className={styles.cityInput}>
                    <input type="text" placeholder="City,state and zip"/>
                </div>
                <div className={styles.serchBtnContainer}>
                    <button className={styles.searchBtn}>Search</button>
                </div>
            </div>
        </div>
       
    )
}
