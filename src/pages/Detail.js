//ESTILOS
import styles from '../styles/Detail.module.css'
//COMPONENTS
import Header from '../components/Header'
import CardDetail from '../components/CardDetail'

const Detail = () => {
    return(
        <section className={ styles.Detail }>
                   
            <Header />
            
            <div className={ styles.Detail_wrapper }>
                <section className={ styles.Button }>
                    <button type='button'>Back</button>
                </section>

                <section className={ styles.Content }>
                    <CardDetail />
                </section>
            </div>
        </section>
    )
}

export default Detail
