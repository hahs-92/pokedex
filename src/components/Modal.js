import { createPortal } from 'react-dom'
//ESTILOS
import styles from '../styles/components/Modal.module.css'

const Modal = ({ children , isOpen, handleModal}) => {

    const content = (
        <article className={ isOpen ? `${ styles.Modal } ${ styles.isOpen }`: styles.Modal } onClick={ handleModal }>
            <section className={ styles.ModalWrapper }  onClick={ (e) => e.stopPropagation() }>
                <button onClick={ handleModal }>X</button>
                { children }
            </section>
        </article>
    )

    const container = document.getElementById('modal')
    
    return createPortal(content, container)
}

export default Modal