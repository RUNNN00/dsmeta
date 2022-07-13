import logo from "../../assets/img/logo.svg";
import "./styles.css";

function Header() {
    return (
        <>
            <header>
                <div className="dsmeta-logo-container">
                    <img src={logo} alt="DSMeta" />
                        <h1>DSMeta ruan</h1>
                        <p>Desenvolvido por  
                            <a href="https://www.instagram.com/ruann_azevedo/">@ruann_azevedo</a>
                        </p>
                </div>
            </header>
        </>
    );
}

export default Header;