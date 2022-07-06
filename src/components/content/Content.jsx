import styles from './Content.module.scss';


export const Content = () => {
    return (
        <div className={styles.background}>
            <div className='container'>
                <div className={styles.wrap}>
                    <h1>BILIM KERUEN</h1>
                    <div className={styles.parallax}></div>

                    <div className={styles.content}>
                        <p>Республикалық ғылыми әдістемелік, педагогикалық біліктілікті
                        арттыру орталығы</p>

                        <div className={styles.contentWrap}>
                            <div>«Республикалық ғылыми-әдістемелік және педагогикалық біліктілікті арттыру орталығы» Жауапкершілігі шектеулі серіктестігі
                            </div>
                            <div>"Білім. KZ" баспаханасы, "Қазақстанның Білім және ғылым әлемі" журналы бар.
                                Директоры Сариева Дина Орынбекқызы
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}