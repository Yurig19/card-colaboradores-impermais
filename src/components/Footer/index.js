import './Footer.css'

const Footer = () => {
    return (
        <footer>
            <div className='anchor'>
                <ul>
                    <li>
                        <a href='https://www.instagram.com/impermais.impermeabilizacao/' target='blank'>
                            <img src='/img/instagram.png' alt='Instagram' />
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            <img src='/img/twitter.png' alt='Twitter' />
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            <img src='/img/facebook.png' alt='Facebook' />
                        </a>
                    </li>
                </ul>
            </div>

            <div className='logo'>
                <img src='/img/impermais-logo-white.png' alt='Logo da Impermais' />
            </div>

            <div className='dev'>
                <p>Desenvolvido por Yuri Gonçalves</p>
            </div>


        </footer>
    )
}

export default Footer