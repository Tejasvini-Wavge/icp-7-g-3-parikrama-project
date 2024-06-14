import "./Register.css"

const Register = () => {
    return (
        <div className="wrapper">
            <div>
                <form>
                    <h1>Login</h1>
                    <div>
                        <input type="text" placeholder="Username" required />
                    </div>
                    <div>
                        <input type="password" placeholder="Password" required />
                    </div>
                    <div>
                        <label>
                            <input type="checkbox"/>Remember me 
                        </label>
                        <a href="#">Forgot password?</a>
                    </div>

                    <button type="submit">Login</button>

                    <div>
                        <p>Don't have an account? <a href="#">Register</a></p>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Register