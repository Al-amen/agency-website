import { createContext, useContext, useState ,useEffect} from 'react';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,GoogleAuthProvider,signInWithPopup,onAuthStateChanged,signOut,FacebookAuthProvider, GithubAuthProvider, getAuth } from "firebase/auth";
import app from '../firebase/firebase.config';

const AuthContext = createContext()


export const useAuth = () => {
    return useContext(AuthContext)
}

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const auth = getAuth(app)
    

    const signupWithEmail = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // login exiting user with email ansd password

    const loginWithEmail = (email,password) => {
       return  signInWithEmailAndPassword(auth, email, password)
    }

    // google sign in
    const googleLogin = () => {
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
    }

     // logout functionality
    const logout = () => {
        return signOut(auth)
    }

    // facebook sign in

    const facebookLogin = () => {
        const facebookProvider = new FacebookAuthProvider();
        return signInWithPopup(auth, facebookProvider)
    }


     // github sign in

    const githubLogin = () => {
        const githubProvider = new GithubAuthProvider();
        return signInWithPopup(auth, githubProvider)
    }


     // monitor or manage user state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
          });

          return unsubscribe;
          
    }, [auth])





    const value  = {
        user,
        signupWithEmail,
        loginWithEmail,
        googleLogin,
        logout,
        facebookLogin,
        githubLogin,
    }
    
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;