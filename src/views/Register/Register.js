import { Link } from "react-router-dom"
import "./Register.css"
import { useState } from "react"
import Navbar from "../../components/Navbar/Navbar";
import Footer from "./../../components/Footer/Footer"
import Image from "./img/images (2).jpg"

const Register = () => {

    const [action, setAction] = useState('');

    const registerLink = () => {
        setAction('active')
    }
    const loginLink = () => {
        setAction('')
    }
    return (
        <div>
            <Navbar />
            <div>
                <img src={Image} alt="" className="image"></img>
            </div>
            <div className={`wrapper ${action}`}>
                <div className="form-box login">
                    <form action="">
                        <h1>Login</h1>
                        <div className="input-box">
                            <input type="text" placeholder="Username" required />
                        </div>
                        <div className="input-box">
                            <input type="password" placeholder="Password" required />
                        </div>
                        <div className="remember-forgot">
                            <label>
                                <input type="checkbox" />Remember me
                            </label>
                            <Link href="#">forgot password</Link>

                        </div>

                        <button type="submit" className="btn">Login</button>

                        <div className="register-link">
                            <p>Don't have an account? <Link href="#" onClick={registerLink}>Register</Link></p>
                        </div>
                    </form>
                </div>

                <div className="form-box register">
                    <form action="">
                        <h1>Register</h1>
                        <div className="input-box">
                            <input type="text" placeholder="Username" required />
                        </div>
                        <div className="input-box">
                            <input type="email" placeholder="Email" required />
                        </div>
                        <div className="input-box">
                            <input type="password" placeholder="Password" required />
                        </div>
                        <div className="remember-forgot">
                            <label>
                                <input type="checkbox" />I agree to the term and conditions
                            </label>
                            <Link href="#">forgot password</Link>

                        </div>

                        <button type="submit" className="btn">Register</button>

                        <div className="register-link">
                            <p>Already have an account? <Link href="#" onClick={loginLink}>Login</Link></p>
                        </div>
                    </form>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default Register