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
                    <Link href="/vehicles">
                    Vehicles
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                     About   
                    </Link>
                </li>
            </ul>
        </nav>
    </header>
}

export default Header;