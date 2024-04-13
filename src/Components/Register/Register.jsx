import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";


const Register = () => {
        const handelRegister = e => {

                e.preventDefault();
                console.log(e.currentTarget);
                const form = new FormData(e.currentTarget);

                const name = form.get('name');
                const photo = form.get('photo');
                const email = form.get('email');
                const password = form.get('password')
                console.log(email , password,name,photo)


        }
        return (
                <div>
                        <NavBar></NavBar>
                        <div>
                                <h2 className="text-3xl my-10 text-center">this Register Paeg</h2>


                                <form onSubmit={handelRegister} className="card-body md:w-34 lg:w-1/2 mx-auto">
                                        <div className="form-control">
                                                <label className="label">
                                                        <span className="label-text">Name</span>
                                                </label>
                                                <input type="text" placeholder="Enter Your Name" className="input input-bordered" name="text" required />
                                        </div>
                                        <div className="form-control">
                                                <label className="label">
                                                        <span className="label-text">Photo URL</span>
                                                </label>
                                                <input type="text" placeholder="Photo URL" className="input input-bordered" name="text" required />
                                        </div>
                                        <div className="form-control">
                                                <label className="label">
                                                        <span className="label-text">Email</span>
                                                </label>
                                                <input type="email" placeholder="email" className="input input-bordered" name="email" required />
                                        </div>
                                        <div className="form-control">
                                                <label className="label">
                                                        <span className="label-text">Password</span>
                                                </label>
                                                <input type="password" placeholder="password" className="input input-bordered" name="password" required />
                                                <label className="label">
                                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                                </label>
                                        </div>
                                        <div className="form-control mt-6">
                                                <button className="btn btn-primary">Register</button>
                                        </div>
                                </form>
                                 <p className="text-center mt-4">Alredy Have Account ? <Link to ='/login' className="text-blue-500 font-bold">Login</Link> </p>
                        </div>
                </div>
        );
};

export default Register;