import "./Register.css"

const Register = () => {
    return (
        <div>
            <div>
                <form>
                    <h1>Login</h1>
                    <div>
                        <input type="text" placeholder="Username" required />
                    </div>
                    <div>
                        <input type="password" placeholder="Password" required />
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Register