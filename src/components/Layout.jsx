import Navbar from '../components/Navbar';
import LoginBar from '../components/LoginBar';
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