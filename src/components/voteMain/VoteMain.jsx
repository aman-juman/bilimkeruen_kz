import styles from './VoteMain.module.scss'
import React from "react";
import {NavLink} from "react-router-dom";


export const VoteMain = () => {
    return (
        <>
            <div className={styles.wrap}>
                <div className={styles.backgroundImage}>
                    <div className={styles.coverBlack}>
                        <div className="container">
                            <div className={styles.contentWrap}>
                                <h3>Сауалнама</h3>
                                <h4>сілтеме бойынша өтуіңізді сұраймыз</h4>
                                <NavLink to={'/quiz'}>
                                    <button className={styles.voteLink}>
                                        ӨТУ
                                    </button>
                                </NavLink>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}