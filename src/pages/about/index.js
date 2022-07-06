
import styles from './About.module.scss'

export default function About () {
    return(
        <div className='container'>
            <div className={styles.wrap}>
                <div className={styles.topContent}>
                    <h1 className={styles.title}>«Республикалық ғылыми-әдістемелік
                        және педагогикалық біліктілікті арттыру орталығы» Жауапкершілігі
                        шектеулі серіктестігі</h1>
                    <img src="/logo.png" alt="logo" className={styles.logo} />
                </div>
                <div className={styles.content}>«Республикалық ғылыми-әдістемелік және
                    педагогикалық біліктілікті арттыру орталығы» Жауапкершілігі шектеулі
                    серіктестігі үздіксіз білім беру жүйесінде педагогтердің
                    біліктілігін арттыру курстарының білім беру бағдарламаларын іске асыратын ұйым
                <p>Директор - Сариева Дина Орынбекқызы</p>
                <p>Атқарушы директор - Бейсенбеков Аян Мұратбекұлы</p>
                <p>Тренер - Биманова Орынтай Молдашқызы</p>
                <p>Редактор - Ережепов Әділ Ережепұлы</p>
                <p>Оператор - Вахасова Айжамал</p>
                </div>
                <div className={styles.bottomContent}>
                    <p>Мекен-жайы:</p>
                    <p>ҚР, Нұр-сұлтан қаласы 38 көше №17/98</p>
                    <p>wwww.bilimkeruen.kz  astana2012.kz@inbox.ru</p>
                    <p>8 7172 352 096</p>
                    <p>8 701 463 55 03</p>
                    <p>8 747 754 50 63</p>
                    <p>8 707 310 14 65</p>
                    <p>8 701 636 80 49</p>
                </div>
            </div>
        </div>
    )
}

