import { useState } from 'react';
import { FiLink } from 'react-icons/fi';

import './home.css';

import Menu from '../../componentes/Menu';
import LinkItem from '../../componentes/LinkItem';

import api from '../../services/api';
import {saveLink} from '../../services/storeLinks'


export default function Home() {
  const [link, setLink] = useState('');
  const [data, setData] = useState({});
  const [showModal, setShowModal] = useState(false);
  

  async function handleShortLink() {
    // setShowModal(true);

    try {
      const response = await api.post('/shorten', {
        long_url: link
      })

      setData(response.data);
      setShowModal(true);

      saveLink('@encurtaLink', response.data);

      setLink('');

    } catch {
      alert('Ops! Parece que algo deu errado!');
      setLink('');
    }
  }

  return (
    <div className="container-home">
      
      <div className="logo">
        <img src="logo_link.png" alt="Logo link" />
        <h1>SubjectLink</h1>
        <span>👇 Paste your link below to shorten !!! 👇</span>
      </div>

      <div className="area-input">
        <div>
          <FiLink size={24} color='#fff'/>
          <input 
            type="text" 
            placeholder='Paste your link here...'
            value={link}
            onChange={ (e) => setLink(e.target.value) }
          />
        </div>

        <button onClick={handleShortLink}>Shorten link</button>
      </div>

      <Menu/>

      { showModal && (
        <LinkItem 
          closeModal={ () => setShowModal(false)}
          content={data}
          />
      )}

    </div>
  )
}