import styles from './Header.module.scss'
import {Content} from "../content/Content";
import {VoteMain} from "../voteMain/VoteMain";

export const Header = () => {
    return (
        <>
            <div className={styles.wrap}>
                <div className="container">
                    <div className={styles.content}>
                        <div className={styles.title}><h1>Республикалық ғылыми әдістемелік, педагогикалық біліктілікті
                            арттыру орталығы</h1>
                        </div>
                        <img  src="/background.jpeg" alt=""/>
                    </div>
                </div>
            </div>
            <VoteMain/>
            <Content/>

            </>
    )
}