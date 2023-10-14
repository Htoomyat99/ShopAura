import auth from '@react-native-firebase/auth';

const signUp = ({
  fullName,
  email,
  password,
}: {
  fullName: string;
  email: string;
  password: string;
}) => {
  if (!fullName && !email && password) {
    console.warn('Enter Data');
  } else {
    return auth()
      .createUserWithEmailAndPassword(email.trim(), password)
      .then(res => {
        const {uid} = res.user;
        auth().currentUser?.updateProfile({
          displayName: fullName,
        });
        return uid;
      })
      .catch(err => console.warn(err.code, err.message));
  }
};

const singIn = ({email, password}: {email: string; password: string}) => {
  if (!email && !password) {
    console.warn('Enter Data');
  } else {
    return auth()
      .signInWithEmailAndPassword(email.trim(), password)
      .then(() => {
        console.log(auth().currentUser?.uid);
      })
      .catch(err => console.warn(err.code, err.message));
  }
};

const signOut = () => {
  auth().signOut();
};

const Auth = {
  signUp,
  singIn,
  signOut,
};

export default Auth;
