import {TextField, Button} from "@mui/material";
import {Timestamp, addDoc, collection} from 'firebase/firestore';
import {ref, uploadBytesResumable, getDownloadURL} from 'firebase/storage';
import {useContext, useState} from "react";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {Context} from "../../index";
import Typography from "@mui/material/Typography";
import {db, storage} from "../../firebase/config";


export const FormBaiqau = () => {
    const [formData, setFormData] = useState({
        title: '',
        file: '',
        createdAt: Timestamp.now().toDate(),
    });
    const [progress, setProgress] = useState(0);
    // const {db, storage} = useContext(Context);

    const handleChange = e => {
        setFormData({...formData, [e.target.name]: e.target.value})
    };
    const handleFileChange = e => {
        setFormData({...formData, file: e.target.files[0]})
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.title || !formData.file) {
            toast('Барлық ақпаратты енгізіңіз!', {type: 'error'})
            return
        }
        const storageRef = ref(storage, `/baiqau/${Date.now()}${formData.file.name}`);
        const uploadFile = uploadBytesResumable(storageRef, formData.file);
        uploadFile.on('state_changed',
            (snapshot) => {
                const progressPercent = Math.round(snapshot.bytesTransferred / snapshot.totalBytes * 100);
                setProgress(progressPercent)
            },
            (err) => console.log(err),
            () => {
                setFormData({
                    title: '',
                    file: '',
                });
                getDownloadURL(uploadFile.snapshot.ref)
                    .then(url=>{
                        const baiqauRef = collection(db, 'Baiqau');
                        addDoc(baiqauRef, {
                            title: formData.title,
                            fileUrl: url,
                            createdAt: Timestamp.now().toDate(),
                        })
                    })
                    .then(()=>{
                        toast('Ақпарат сәтті жібірілді', {type: 'success'});
                        setProgress(0);
                    })
                    .catch(err=> {
                        toast('Ақпарат жіберілмеді - (сервер выдал ошибку)', {type: 'error'})
                    })
            }
        )
    };
    return (
        <div style={{border: '1px solid grey', padding: '50px', borderRadius: '10px'}}>
            <form onSubmit={handleSubmit}>
                <Typography style={{fontWeight: 'bold', marginBottom: '50px', textAlign: 'center' }}>АҚПАРАТ ЕНГІЗУ БӨЛІМІ:</Typography>
                <TextField
                    fullWidth
                    id='title'
                    name='title'
                    label='Файл атауы'
                    value={formData.title}
                    onChange={e => handleChange(e)}
                />
                <label htmlFor="file" style={{margin: '50px 0'}}>
                    <input
                        style={{display: 'none'}}
                        id="file"
                        name="file"
                        type="file"
                        onChange={e => handleFileChange(e)}
                    />

                    <Button color="secondary" variant="contained" component="span">
                        Файлды енгізу
                    </Button>
                </label>
                <Button fullWidth color='primary' variant='contained' type='submit'>Жөнелту</Button>
            </form>
            <progress style={{display: progress === 0 && 'none'}} max='100' value={progress}/>
            <div>
                <ToastContainer/>
            </div>
        </div>
    )
}