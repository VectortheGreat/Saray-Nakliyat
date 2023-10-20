import { useState } from "react";
import { useDispatch } from "react-redux";
import { authFBConfig } from "../../../config/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { authInfo, loginModeToggle, tokenInfo } from "../../../redux/authSlice";

const AdminComp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const auth = authFBConfig;

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      const idToken = await auth.currentUser?.getIdToken();
      const userPayload = {
        uid: user.uid,
        email: user.email,
      };
      dispatch(tokenInfo(idToken));
      dispatch(loginModeToggle());
      dispatch(authInfo(userPayload));
    } catch (error) {
      console.error("Authentication failed:", error);
    }
  };

  return (
    <div className="grid w-1/4 mx-auto bg-gray-800 p-4 rounded-lg gap-3">
      <div className="mb-4">
        <label htmlFor="email" className="block ">
          E-posta:
        </label>
        <input
          type="email"
          id="email"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 text-black"
          placeholder="E-postanızı giriniz."
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block">
          Şifre:
        </label>
        <input
          type="password"
          id="password"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 text-black"
          placeholder="Şifrenizi Giriniz."
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <button
          className="w-full bg-rose-800 text-white py-2 rounded-lg hover:bg-rose-950 transition duration-300 mb-4 p-4"
          onClick={handleLogin}
        >
          Giriş Yap
        </button>
      </div>
    </div>
  );
};

export default AdminComp;
