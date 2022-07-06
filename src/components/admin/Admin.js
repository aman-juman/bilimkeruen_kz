import React, {useEffect, useState} from 'react';
import {Form} from "./Form";
import styles from './Admin.module.scss'
import PreLoader from "../preLoader/PreLoader";
import FileDownloadIcon from "@mui/material/SvgIcon/SvgIcon";
import DeletePrograms from "./DeletePrograms";
import cn from 'classnames'
import {FormBaiqau} from "./FormBaiqau";
import DeleteBaiqau from "./DeleteBaiqau";
import {FormContainer} from "./FormContainer";
import DeleteQuiz from "./DeleteQuiz";
import {Navigate, useNavigate} from 'react-router-dom'
import Toolbar from "../toolbar/Toolbar";




function Admin({programs, setPrograms, baiqau, quiz, auth, isAdmin }) {

    const [content, setContent] = useState('programs');
    function swi(){
        switch(content) {
            case "programs":
                return  <>
                    {programs.length === 0
                        ? <PreLoader/>
                        : programs.map((item, i) => (
                            <div key={i} className={styles.content}>
                                <h3>{i + 1}. {item.title}</h3>
                                <span className={styles.download}>
                                    {/*<a className={styles.linkDownload} href={item.fileUrl}>*/}
                                    {/*    ЖҮКТЕУ<FileDownloadIcon*/}
                                    {/*    className={styles.downloadIcon}/>*/}
                                    {/*</a>*/}
                                </span>
                                <DeletePrograms id={item.id} fileUrl={item.fileUrl}/>
                                {/*onClick={() => props.setModal(true)} className={styles.downloadIcon}/></span>*/}
                            </div>
                        ))}
                    <Form/>
                </>

            case 'baiqau':
                return  <>
                    {baiqau.length === 0
                        ? <PreLoader/>
                        : baiqau.map((item, i) => (
                            <div key={i} className={styles.content}>
                                <h3>{i + 1}. {item.title}</h3>
                                <span className={styles.download}>
                                    {/*<a className={styles.linkDownload} href={item.fileUrl}>*/}
                                    {/*    ЖҮКТЕУ<FileDownloadIcon*/}
                                    {/*    className={styles.downloadIcon}/>*/}
                                    {/*</a>*/}
                                </span>
                                <DeleteBaiqau id={item.id} fileUrl={item.fileUrl}/>
                                {/*onClick={() => props.setModal(true)} className={styles.downloadIcon}/></span>*/}
                            </div>
                        ))}
                    <FormBaiqau/>
                </>

            case "quiz":
                return <>
                    {quiz.length === 0
                        ? <PreLoader />
                        : quiz.map((item, i) =>(
                            <div key={i} className={styles.content}>
                                <h3>{i +1}. {item.question}</h3>
                                <DeleteQuiz id={item.id} />
                            </div>
                        ))
                    }
                    <FormContainer/>
                </>

            default:
                return <>
                        {programs.length === 0
                            ? <PreLoader/>
                            : programs.map((item, i) => (
                                <div key={i} className={styles.content}>
                                    <h3>{i + 1}. {item.title}</h3>
                                    <span className={styles.download}>
                                    {/*<a className={styles.linkDownload} href={item.fileUrl}>*/}
                                        {/*    ЖҮКТЕУ<FileDownloadIcon*/}
                                        {/*    className={styles.downloadIcon}/>*/}
                                        {/*</a>*/}
                                </span>
                                    <DeletePrograms id={item.id} fileUrl={item.fileUrl}/>
                                    {/*onClick={() => props.setModal(true)} className={styles.downloadIcon}/></span>*/}
                                </div>
                            ))}
                        <Form/>
                    </>
        }
    }
    if(!isAdmin){
        return <Navigate to='/'/>
    }
    return (
        <>
            <div className='container'>
                <div className={styles.wrap}>
                    <div>
                        <div className={styles.rowSetContent}>
                            <button onClick={() => setContent('programs')}
                                    className={cn(styles.setContent, {[styles.active]: content === 'programs'})}>Бағдарламалар
                            </button>
                            <button onClick={() => setContent('baiqau')}
                                    className={cn(styles.setContent, {[styles.active]: content === 'baiqau'})}>Байқаулар
                            </button>
                            <button onClick={() => setContent('quiz')}
                                    className={cn(styles.setContent, {[styles.active]: content === 'quiz'})}>Сауалнамалар
                            </button>
                        </div>
                        <div>

                            {swi()}

                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Admin;