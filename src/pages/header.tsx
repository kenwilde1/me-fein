import { useRouter } from "next/router";
import Link from "next/link";

export default function Header(): JSX.Element {

    const router = useRouter();

    const isActive = (page: string): boolean => {
        return page === router.pathname;
    }

    return (
        <nav id='navbar'>
            <div id='navbar-content'>
                <ul>
                    <Link href='/' className={isActive('/') ? 'active-page' : ''}>home</Link>
                    <Link href='/about' className={isActive('/about') ? 'active-page' : ''}>about</Link>
                    <Link href='/contact' className={isActive('/contact') ? 'active-page' : ''}>contact</Link>
                </ul>
                <div className='toggle-theme'>
                    <div>
                    </div>
                </div>
                <div className='socials'>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </nav>
    );
}
