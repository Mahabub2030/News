
import Logo from '../../Logo/assets/logo.png'
import moment from 'moment';

const Header = () => {
        return (
                <div className='text-center '>
                     <img className='mx-auto ' src={Logo} alt="" />
                     <p>Journalism Without Fear or Favour</p>
                     <p className="text-3xl">{moment().format("dddd, MMMM D, YYYY")}</p>
                </div>
        );
};

export default Header;