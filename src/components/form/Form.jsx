import './form.css'
import img from '../../assets/Frame 53.png'
import googleIcon from '../../assets/google-icon-logo-svgrepo-com 2.png'
import appleIcon from '../../assets/Vector.png'

const Form = () => {
    return (
        <div className="form-container2">
            <h1>Sign Up</h1>
            <div className="input-container">
                <div className="input">
                    <label htmlFor="firstName">Enter Your Name</label>
                    <input type="text" placeholder="First Name" />
                    <label htmlFor="lastName">Enter Your Last Name</label>
                    <input type="text" placeholder="Last Name" />
                </div>
                <div className="input">
                    <label htmlFor="firstName">Enter Your Email</label>
                    <input type="email" placeholder="Email" />
                    <label htmlFor="lastName">Enter Your Password</label>
                    <input type="text" placeholder="Enter Your Password" />
                </div>
                <div className="input">
                    <h3>Or <span>sign in</span> with</h3>
                    <div className="btns-container">
                        <button>
                            <img src={googleIcon} alt="google" />
                            Google
                        </button>
                        <button>
                            <img src={appleIcon} alt="apple" />
                            Apple
                        </button>
                    </div>
                </div>
            </div>
            <div className="btn-container" style={{
                backgroundImage: `url(${img})`,
                backgroundSize: "cover",
                height: "23rem"
            }}>
                <button>sign up</button>
                <h3>Already have an account? <span>Log in</span></h3>
            </div>
        </div >
    )
}

export default Form
