import "milligram";
import './App.css';
import {useState} from "react";
import LoginForm from "./LoginForm";
import UserPanel from "./UserPanel";

function App() {
    const [loggedIn, setLoggedIn] = useState('');

    async function handleAddUser(user) {
        const response = await fetch('/api/participants', {
            method: 'POST',
            body: JSON.stringify({
                login: user.login,
                password: user.password
            }),
            headers: { 'Content-Type': 'application/json' }
        });
        if (response.ok) {
            // const nextMeetings = [...meetings, meeting];
            // setMeetings(nextMeetings);
            // setAddingNewMeeting(false);
            // fetchMeetings();
            setLoggedIn(user.login);
        }
    }

    function signup(user) {
        if (user) {
            handleAddUser(user)
        }
    }

    function login(user) {
        if (user) {
            setLoggedIn(user.login);
        }
    }

    function logout() {
        setLoggedIn('');
    }

    return (
        <div>
            <h1>System do zapisów na zajęcia</h1>
            {loggedIn 
                ? <UserPanel username={loggedIn} onLogout={logout}/> 
                : <LoginForm onLogin={login} onSignup={signup} />
            }
        </div>
    );
}

export default App;
