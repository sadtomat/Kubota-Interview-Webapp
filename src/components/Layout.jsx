import Navbar from '../components/Navbar.jsx';
import LoginBar from '../components/LoginBar.jsx';
import { Outlet } from 'react-router-dom';

export default function Layout() {
    return (
        <div className="page-background">
            <LoginBar />
            <Navbar />
            <Outlet />
        </div>
    )
}