import Toolbar from "./components/toolbar/Toolbar";
import SignIn from "./components/SignIn/SignIn";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate, NavLink, useHref
} from "react-router-dom";
import About from "./pages/about";
import Footer from "./components/footer/Footer";
import {Header} from "./components/header/Header";
import React, {useContext, useEffect, useState} from "react";
import {Quiz} from "./components/quiz/Quiz";
import {Programs} from "./pages/programs/Programs";
import {ModalMode} from "./components/modalComponent/Modal";
import {Baiqau} from "./pages/baiqau/Baiqau";
import Admin from "./components/admin/Admin";

import {collection, query, orderBy, onSnapshot, doc, getDoc} from 'firebase/firestore';
import {onAuthStateChanged, signOut} from 'firebase/auth'
import {Context} from "./index";
import Course from "./pages/courses/Course";




function App() {
    const [modal, setModal] = useState(false);
    const [login, setLogin] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [user, setUser] = useState(null);
    const {auth} = useContext(Context);

    const [start, setStart] = useState(null);

    const [programs, setPrograms] = useState([]);
    const [baiqau, setBaiqau] = useState([]);
    const [quiz, setQuiz] = useState([]);
    const {db} = useContext(Context);
    useEffect(() => {
        const programRef = collection(db, 'Programs');

        const q = query(programRef, orderBy('createdAt', 'desc'));
        onSnapshot(q, (snapshot) => {
            const programs = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            const sort = programs.reverse();
            setPrograms(sort)
        })
    }, []);

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
                if(user.uid === 'Y0Uz0QLyH4U3meAoPKYHhhzFz1m1'){
                    setIsAdmin(true)
                }
            } else {
                setUser(null)
            }
        })
    }, []);
    useEffect(() => {
        const baiqauRef = collection(db, 'Baiqau');

        const q = query(baiqauRef, orderBy('createdAt', 'desc'));
        onSnapshot(q, (snapshot) => {
            const baiqau = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            const sort = baiqau.reverse();
            setBaiqau(sort)
        })
    }, []);
    useEffect(() => {
        const baiqauRef = collection(db, 'Baiqau');
        const q = query(baiqauRef, orderBy('createdAt', 'desc'));
        console.log(q)




    }, []);
console.log('start', start);
    useEffect(() => {
        const quizRef = collection(db, 'Quiz');

        const q = query(quizRef, orderBy('createdAt', 'desc'));
        onSnapshot(q, (snapshot) => {
            const quiz = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            const sort = quiz.reverse();
            setQuiz(sort)
        });
    }, []);
    onAuthStateChanged(auth, user =>{
        if(user) {
            setUser(user)
        } else{
            setUser(null)
        }
    });

    const logOut = () =>{
        signOut(auth);
        setUser(null);
        setIsAdmin(false)
        };


    return (
        <Router>
            <div className='wrapper'>
                <Toolbar user={user} logOut={logOut} isAdmin={isAdmin}/>
                <main className='main'>
                    <Routes>
                        <Route path="/login" element={
                            user ?<Navigate to="/" /> : <SignIn isAdmin={isAdmin} logOut={logOut} user={user} setUser={setUser}/>
                        }/>
                        <Route path='/about' element={<About/>}/>
                        <Route path='/kursy' element={<Course/>}/>
                        <Route path='/znanie-resursy' element={<Course/>}/>
                        <Route path='/programs'
                               element={<Programs user={user} programs={programs} modal={modal} setModal={setModal}/>}/>
                        <Route path='/baiqaular' element={<Baiqau user={user} baiqau={baiqau} modal={modal} setModal={setModal}/>}/>
                        <Route path='/quiz' element={<Quiz/>}/>
                        <Route path='/' element={<Header/>}/>
                        <Route path='/admin'
                               element={ isAdmin ? <Admin isAdmin={isAdmin} auth={auth} signOut={signOut}  quiz={quiz} setQuiz={setQuiz} baiqau={baiqau} setBaiqau={setBaiqau}
                                               programs={programs} setPrograms={setPrograms} />
                                               :<Navigate to="/" />
                               }
                        />
                        <Route
                            path="*"
                            element={<Navigate to="/" />}
                        />
                    </Routes>
                </main>
                <ModalMode modal={modal} setModal={setModal}/>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;
