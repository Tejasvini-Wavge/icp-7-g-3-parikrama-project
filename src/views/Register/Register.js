import "./Register.css"

const Register = () => {
    return (
        <div className="wrapper">
            <div className="form-box login">
                <form action="">
                    <h1>Login</h1>
                    <div className="input-box">
                        <input type="text" placeholder="Username" required />
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder="Password" required />
                    </div>
                    <div className="remenber-forgot">
                        <label>
                            <input type="checkbox"/>Remember me 
                        </label>
                        <a href="#">forgot password</a>
                        
                    </div>

                    <button type="submit" className="btn">Login</button>

                    <div className="register-link">
                        <p>Don't have an account? <a href="#">Register</a></p>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Register