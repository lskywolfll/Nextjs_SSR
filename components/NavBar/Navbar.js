import React from 'react';
import Link from 'next/link';

function Navbar(props) {
    return (
        <div>
            <nav>
                <menu>
                    <Link href="/">
                        <a >Home</a>
                    </Link>
                    <Link href="/about">
                        <a >About</a>
                    </Link>
                </menu>
            </nav>
            {props.children}
            <style jsx>
                {`
                    nav menu a{
                        color: white;
                        margin-left: 15px;
                        margin-right: 15px;
                    }

                    nav, menu{
                        background-color: black;
                    }
                `}
            </style>
        </div>
    )
}

export default Navbar
