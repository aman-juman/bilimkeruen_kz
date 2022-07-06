import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import GoogleIcon from '@mui/icons-material/Google';
import {useContext} from "react";
import {Context} from "../../index";
import {
    GoogleAuthProvider,
    signInWithPopup,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged, sendPasswordResetEmail,signOut
} from 'firebase/auth'
import {Navigate} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {addUserAction, removeUserAction} from "../../store/userReducer";
import {useEffect} from "react";


function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://bilimkeruen.kz/">
                bilimkeruen.kz
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}


const theme = createTheme();

export default function SignIn({user, setUser, logOut, isAdmin}) {
    const userState = useSelector(state => state.user);
    const dispatch = useDispatch();
    const {auth} = useContext(Context);
    const handleGoogleSignIn = async () => {
        const provider = new GoogleAuthProvider();
        const {user} = await signInWithPopup(auth, provider);
        setUser(user)
        const {accessToken, displayName, email, uid, photoURL} = user;
        dispatch(addUserAction({
            uid,
            fullName: displayName,
            email,
            photoUrl: photoURL,
            accessToken
        }));
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const email = data.get('email');
        const password = data.get('password');
        try {
           signInWithEmailAndPassword(auth, email, password)
               .then(data => {
                   console.log("DATA", data);
                   setUser(data.user);
                   const {email, accessToken, uid, displayName} = data.user;
                   dispatch(addUserAction({
                       uid,
                       fullName: displayName,
                       email,
                       accessToken
                   }))
               });
        } catch (e) {
            console.log(e.message)
        };
    };

    const sendEmailPasswordToFirebase = async (email, password) => {
        try {
            // const response = await createUserWithEmailAndPassword(auth, email = 'example@example.com', password = '123456');
            // console.log(response);
            const response = await sendPasswordResetEmail(auth, email = '87711441333@mail.ru')
            console.log(response)
        } catch (e) {
            console.log(e)
        }
    };



    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Жеке кабинет
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{mt: 1}}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Электрондық пошта"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Құпия сөз"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{mt: 3, mb: 2}}
                        >
                            Кіру
                        </Button>
                        <Button onClick={handleGoogleSignIn}><GoogleIcon /> Google аккаунт арқылы кіру</Button>
                        {/*<Button onClick={() => sendEmailPasswordToFirebase()}>Change</Button>*/}
                        {/*<Button onClick={() => logOut()}>Logout</Button>*/}
                        {/*<Grid container>*/}
                        {/*    <Grid item xs>*/}
                        {/*        <Link href="#" variant="body2">*/}
                        {/*            Құпия сөзді жою керек па?*/}
                        {/*        </Link>*/}
                        {/*    </Grid>*/}
                        {/*    <Grid item>*/}
                        {/*        <Link href="#" variant="body2">*/}
                        {/*            {"Жеке кабинет жоқпа? Тіркелу қажет"}*/}
                        {/*        </Link>*/}
                        {/*    </Grid>*/}
                        {/*</Grid>*/}
                    </Box>
                </Box>
                <Copyright sx={{mt: 8, mb: 4}}/>
            </Container>
        </ThemeProvider>
    );
}