import React, {useState, useEffect, useContext} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu'
import PersonRoundedIcon from '@mui/icons-material/PersonRounded'
import DarkModeRoundedIcon from '@mui/icons-material/Brightness7Sharp'
import LightModeIcon from '@mui/icons-material/Brightness4'
import {IconContext} from 'react-icons'
import logo from '/src/assets/lspd-logo.png'
import './Navbar.css'
import {UserContext} from '../../context/userContext'
import axios from 'axios'
import {PiSignInBold} from 'react-icons/pi'
import Sidebar from './Sidebar'

const Navbar = ({isAdmin = false}) => {
    const [isDarkMode, setIsDarkMode] = useState(false)
    const [sidebar, setSidebar] = useState(false)
    const [popupVisible, setPopupVisible] = useState(false)

    const {user, setUser} = useContext(UserContext)
    const navigate = useNavigate()

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [isDarkMode])

    const logout = async () => {
        try {
            await axios.get('/api/v1/auth/logout')
            setUser(null)
            navigate('/')
        } catch (err) {
            console.log(err)
        }
    }

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode)
    }

    const showSidebar = () => setSidebar(!sidebar)
    const togglePopup = () => setPopupVisible(!popupVisible)

    return (
        <IconContext.Provider value={{color: '#fff'}}>
            <div className={`navbar ${sidebar ? 'sidebar-active' : ''}`}>
                <div className="flex justify-between items-center p-3 fixed w-full top-0 z-50 bg-[var(--bg2op)] dark:bg-[var(--dbg2op)] backdrop-blur-xl border-b-4 border-[var(--lgold)] dark:border-[var(--dltext)] text-white">
                    <Link
                        to="#"
                        className="menu-bars ml-3 group"
                        onClick={showSidebar}
                    >
                        <MenuIcon
                            sx={{fontSize: 25, md: {fontSize: 30}}}
                            className="text-[var(--lgold)] dark:text-[var(--dltext)] group-hover:text-[var(--lblue)] dark:group-hover:text-[var(--dlblue)] transition-colors duration-300"
                        />
                    </Link>

                    <Link
                        to="/"
                        className="flex items-center text-xl md:text-2xl font-bold sm:text-[var(--lgold)] text-[var(--lblue)] sm:dark:text-[var(--dltext)] dark:text-[var(--dlblue)]"
                    >
                        <img
                            src={logo}
                            alt="LSPD Logo"
                            className="invisible md:visible h-8 md:h-10 mr-2"
                        />
                        {isAdmin ? (
                            <span className="relative">
                                LSPD EAGLE-EYE
                                <span className="bg-[var(--lgold)] text-lg dark:bg-[var(--dltext)] text-[var(--bg1)] dark:text-[var(--dbg1)] px-3 py-1 rounded-md hidden md:inline-block">
                                    ADMIN
                                </span>
                            </span>
                        ) : (
                            'LSPD EAGLE-EYE'
                        )}
                    </Link>

                    <div className="flex items-center gap-4 md:gap-7 pr-4 md:pr-6">
                        {isDarkMode ? (
                            <button onClick={toggleTheme} className="group">
                                <LightModeIcon
                                    sx={{fontSize: 25, md: {fontSize: 30}}}
                                    className="text-[var(--lgold)] dark:text-[var(--dltext)] group-hover:text-[var(--lblue)] dark:group-hover:text-[var(--dlblue)] transition-colors duration-300"
                                />
                            </button>
                        ) : (
                            <button onClick={toggleTheme} className="group">
                                <DarkModeRoundedIcon
                                    sx={{fontSize: 25, md: {fontSize: 30}}}
                                    className="text-[var(--lgold)] group-hover:text-[var(--lblue)] transition-colors duration-300"
                                />
                            </button>
                        )}
                        {!user ? (
                            <Link to="/register" className="group">
                                <PersonRoundedIcon
                                    sx={{fontSize: 25, md: {fontSize: 30}}}
                                    className="text-[var(--lgold)] dark:text-[var(--dltext)] group-hover:text-[var(--lblue)] dark:group-hover:text-[var(--dlblue)] transition-colors duration-300"
                                />
                            </Link>
                        ) : (
                            <div className="relative">
                                <button onClick={togglePopup} className="group">
                                    <PersonRoundedIcon
                                        sx={{fontSize: 25, md: {fontSize: 30}}}
                                        className="text-[var(--lgold)] dark:text-[var(--dltext)] group-hover:text-[var(--lblue)] dark:group-hover:text-[var(--dlblue)] transition-colors duration-300"
                                    />
                                </button>
                                {popupVisible && (
                                    <div className="absolute poppins right-0 mt-2 w-72 bg-[var(--bg1l)] border-[1px] border-[var(--opac2)] shadow-black/70 shadow-2xl rounded-lg p-3">
                                        {' '}
                                        <div className="flex relative text-lg justify-between items-center text-[var(--lgold)]">
                                            <span>Hello, {user.name}!</span>
                                        </div>
                                        <Link
                                            to="/"
                                            onClick={logout}
                                            className="flex justify-between text-sm items-center hover:bg-[var(--bg2)] mt-2 p-2 rounded-md border-[1px] border-[var(--opac2)] shadow-black/50 shadow-xl hover:text-red-400"
                                        >
                                            <span>Sign Out</span>
                                            <PiSignInBold className="ml-4" />
                                        </Link>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
                <Sidebar sidebar={sidebar} showSidebar={showSidebar} />
            </div>
        </IconContext.Provider>
    )
}

export default Navbar
