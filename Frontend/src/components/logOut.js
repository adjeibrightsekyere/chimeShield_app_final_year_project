import { useNavigate } from "react-router";
function LogOut () {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('user');
        navigate('/signin');
    };
    return(
        <button
        onClick={handleLogout}
        className="hidden md:block border border-[#0E7443] bg-[#0E7443] hover:bg-[#0c3f26] w-24 h-12 md:w-36 md:h-16 font-bold rounded-2xl md:rounded-lg text-1xl md:text-2xl text-center text-white"
    >
        LOG OUT
    </button>
    )
}
export default LogOut;