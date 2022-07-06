import styles from './Baiqau.module.scss';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import PreLoader from "../../components/preLoader/PreLoader";


export const Baiqau = ({baiqau, user, setModal}) => {
    return (
        <>
            <div className={styles.wrap}>
                <div className={styles.titleBackground}>
                    <div className='container'>
                        <div className={styles.titleWrap}>
                            <h2>Байқаулар</h2>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className={styles.contentWrap}>
                        {baiqau.length === 0
                            ? <PreLoader />
                            : baiqau.map((item, i) =>(
                                    <div key={i} className={styles.content}>
                                        <h3>{item.title}</h3>
                                        <span className={styles.download}>
                                        {user
                                            ?
                                        <a className={styles.linkDownload} href={item.fileUrl}>ЖҮКТЕУ<FileDownloadIcon
                                            // onClick={() => props.setModal(true)}
                                            className={styles.downloadIcon}/></a>

                                            : <span onClick={()=> setModal(true)} className={styles.linkDownload} >
                                        ЖҮКТЕУ<FileDownloadIcon
                                                className={styles.downloadIcon}/>
                                            </span>

                                        }   </span>

                                    </div>
                                ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
};