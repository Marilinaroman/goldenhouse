import './Footer.css'

const Footer = () =>{

    let messageComplete =  "%20Hi!%20I%20would%20like%20to%20talk%20to%20you%20";
    let message = "https://api.whatsapp.com/send?phone=+5491136457467&text=" + messageComplete;

    return(
        <div className='footer'>
            <div className='linkFooter'>
                <a href='https://www.instagram.com/' target="_blank" rel="noopener"><img src='../images/icono/instagram.png' alt='link instagram'/></a>
                <a href='https://es-la.facebook.com/' target="_blank" rel="noopener"><img src='../images/icono/facebook.png' alt='link facebook'/></a>
                <a href={message} target="_blank" rel="noopener"><img src='../images/icono/whatsapp.png' alt='link whatsapp'/></a>
            </div>
            <div className='copyFooter'>
                <p>© 2022 Created by Marilina Roman</p>
            </div>
        </div>
    )
}
export default Footer