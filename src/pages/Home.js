//ESTILOS
import styles from '../styles/Home.module.css'
//COMPONENTS
import Header from '../components/Header'
import CardMain from '../components/CardMain'

const Home = () => {
    return(
        <section className={ styles.Home }>
            <Header />

            <section className={ styles.Search }>
                <div className={ styles.Search_wrapper }>
                    <input className={ styles.Input } type="text" placeholder='Search by name' />
                    <input className={ styles.Button } type="button" value='Search' />
                </div>
            </section>

            <main className={ styles.Main }>
                <section className={ styles.Main_wrapper }>
                    <CardMain />
                    <CardMain />
                    <CardMain />
                    <CardMain />
                    <CardMain />
                    <CardMain />
                    <CardMain />
                </section>
            </main>
        </section>
    )
}

export default Home