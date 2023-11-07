import Link from "next/link";

const Header =()=>{
    return <header>
        LOGO <br/>
        <nav>
            <ul>
                <li>
                    <Link href="/">
                    Home
                    </Link>
                </li>
                <li>
                    <Link href="/">
                    About
                    </Link>
                </li>
                <li>
                    <Link href="/">
                     Contact   
                    </Link>
                </li>
            </ul>
        </nav>
    </header>
}

export default Header;