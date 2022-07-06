import styles from './Programs.module.scss';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import PreLoader from "../../components/preLoader/PreLoader";


export const Programs = ({programs, setModal, user}) => {
    return (
        <>
            <div className={styles.wrap}>
                <div className={styles.titleBackground}>
                    <div className='container'>
                        <div className={styles.titleWrap}>
                            <h2>Бағдарламалар</h2>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className={styles.contentWrap}>
                        {programs.length === 0
                            ? <PreLoader />
                            :programs.map((item, i) => (
                                    <div key={i} className={styles.content}>
                                        <h3>{i+1}. {item.title}</h3>
                                        <span className={styles.download}>

                                            {user ? <a className={styles.linkDownload} href={item.fileUrl}>
                                        ЖҮКТЕУ<FileDownloadIcon
                                        className={styles.downloadIcon}/>
                                    </a>
                                            : <span onClick={()=> setModal(true)} className={styles.linkDownload} >
                                        ЖҮКТЕУ<FileDownloadIcon
                                        className={styles.downloadIcon}/>
                                    </span>}
                                </span>
                                        {/*onClick={() => props.setModal(true)} className={styles.downloadIcon}/></span>*/}
                                    </div>
                                ))}

                    </div>
                </div>
            </div>
        </>
    )
};