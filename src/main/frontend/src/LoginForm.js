import {useState} from "react";

export default function LoginForm({type, onLogin, onSignup}) {
    const [formType, setFormType] = useState('login');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return <div>
            <label>{formType === 'login' ? 'Logowanie' : 'Załóż nowe konto'}</label>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button 
                type="button" 
                onClick={
                    () => formType === 'login' 
                        ? onLogin({email, password}) 
                        : onSignup({email, password})
                }
            >
                {formType === 'login' ? 'Zaloguj się' : 'Zarejestruj się'}
            </button>
            {formType === 'login' 
                ? (
                    <p onClick={() => setFormType('signup')} style={{cursor: "pointer"}}>
                    Nie masz konta? Zarejestruj się! 
                    </p> 
                ) : (
                    <p onClick={() => setFormType('login')} style={{cursor: "pointer"}}>
                    Masz już konto? Zaloguj się!
                    </p> 
                )}
    </div>;
}
