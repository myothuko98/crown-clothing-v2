import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
} from "../../utils/firebase.utils";

const SignIn = () => {
  const logGoogleUSer = async () => {
    const { user } = await signInWithGooglePopup();

    const userDocRef = await createUserDocumentFromAuth(user);

  };
  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUSer}>sign in</button>

      <SignUpForm />
    </div>
  );
};
export default SignIn;
