import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

export default function About () {
    return(
        <div className='container'>
            <Box
                sx={{
                    display: 'flex',
                    '& > :not(style)': {
                        m: 2,
                        width: '100%',
                        height: '100%',
                    },
                }}
            >
                <Paper variant="outlined">
                    <Typography component='h2' variant='h5'>Республикалық ғылыми әдістемелік, педагогикалық біліктілікті арттыру орталығы педагогтардың шығармашылығын  арттырумен шұғылданады</Typography>
                </Paper>
            </Box>





        </div>
    )
}

