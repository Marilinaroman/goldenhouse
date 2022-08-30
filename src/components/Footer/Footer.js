import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () =>{

    return(
        <div className='footer'>
            <div className='linkFooter'>
                <a href='https://www.instagram.com/' target="_blank" rel="noopener"><img src='../images/icono/instagram.png' alt='link instagram'/></a>
                <a href='https://es-la.facebook.com/' target="_blank" rel="noopener"><img src='../images/icono/facebook.png' alt='link facebook'/></a>
                <Link to='/'><img src='../images/icono/whatsapp.png' alt='link whatsapp'/></Link>
            </div>
            <div className='copyFooter'>
                <p>© 2022 Copyright: Marilina Roman</p>
            </div>
        </div>
    )
}
export default Footer