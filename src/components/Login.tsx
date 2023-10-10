
import "./Login.css"
export const Login = ()  => {
  return (
    <div className="container-login">
      <div>
        <img className="imagen-login" src="https://png.pngtree.com/background/20230615/original/pngtree-skulls-on-fire-wallpaper-picture-image_3546415.jpg" alt="" />
      </div>
      <div className="login-body">
        <div className="login-title">
          <p>Login</p>
        </div>
        <div className="inputs-container">
          <div className="input1">
         <p>Username</p> <input className="inputs"></input>
         </div>
         <div className="input2">
          <span>Password</span> <input className="inputs" type="password"></input>
        </div>
        </div>
        <div className="button-container">
          <button className="login-button"> Login </button>
        </div>
      </div>
    </div>
  );
};
