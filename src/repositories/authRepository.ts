import {
    signInWithEmailAndPassword,
    signOut,
    createUserWithEmailAndPassword,
    updateProfile,
    getAuth

} from "firebase/auth";
import {app} from '../firebase.config';

const auth = getAuth(app);

const authRepository = {
    signInWithEmailAndPassword: async (email: string, password: string) => {
        return signInWithEmailAndPassword(auth, email, password);
    },
    signOut: async () => {

        return signOut(auth);
    },
    createUserWithEmailAndPassword: async (name: string, email: string, password: string) => {
        return await createUserWithEmailAndPassword(auth, email, password)
        .then(function(result) {
            updateProfile(result.user, {
                displayName: name
            }).then(function() {
                console.log("Profile Updated");
            }).catch(function(error) {
                console.log(error);
            });
        }).catch(function(error) {
          console.log(error);
        });
    }
  
};

export default authRepository;