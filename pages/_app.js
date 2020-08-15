import NavBar from '../components/NavBar/Navbar';


function MyApp({ Component, pageProps }) {
    return (
        <NavBar>
            <Component {...pageProps} />
        </NavBar>
    )
}


export default MyApp