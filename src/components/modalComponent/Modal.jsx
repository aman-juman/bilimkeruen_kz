import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";
import Modal from "@mui/material/Modal";


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: 450,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export const ModalMode = (props) => {
    return (
        <>
            <div>
                {/*<Button onClick={() => props.setModal(true)}>Open modal</Button>*/}
                <Modal
                    open={props.modal}
                    onClose={() => props.setModal(false)}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box style={{textAlign: 'center'}} sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Бұл қызмет түрі сізде мүмкін емес
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            Администратормен байланысып, осы қызмет түрін қосуын сұраныз
                        </Typography>
                    </Box>
                </Modal>
            </div>
        </>

    )
}