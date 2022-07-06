import {Button} from "@mui/material";
import {doc, deleteDoc} from 'firebase/firestore';
// import {db, storage} from "../firebase/config";
import {toast} from "react-toastify";
import {ref, deleteObject} from 'firebase/storage'
import {useContext} from "react";
import {Context} from "../../index";



export default function DeleteQuiz({id}) {
    const {db, storage} = useContext(Context);
    const handleDelete = async () => {
        try {
            await deleteDoc(doc(db, 'Quiz', id));
            toast('Өшіру сәтті өтті', {type: 'success'});
        }
        catch (e) {
            toast('Өшіру қате жіберілді - (сервер выдал ошибку)', {type: 'error'})
        }



    };
    return (
        <div>
            <Button color='secondary' variant='outlined' onClick={handleDelete}>Өшіру</Button>
        </div>

    )
}



