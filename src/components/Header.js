//ESTILOS
import styles from '../styles/components/Header.module.css'

const Header = () => {
    return(
        <section className={ styles.Header }>
            <header className={ styles.Header_wrapper }>
                <h1>Pokedex</h1>
            </header>
        </section>
    )
}

export default Header
