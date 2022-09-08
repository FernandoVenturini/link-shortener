import './error.css';
import { Link } from 'react-router-dom';

export default function Error() {
    return (
        <div className='container-error'>
            <img src="erro_404.png" alt="Imagem de página não encontrada" />
            <h1>Page not found!!!</h1>
            <Link to="/">
                Back home...
            </Link>
        </div>
    )
}