// Formulario.js
import React, { useState } from 'react';
import './Formulario.css';
import axios from 'axios';

const Formulario = () => {
  const [formData, setFormData] = useState({
    nomeEmpresa: '',
    responsavelCompras: '',
    responsavelManutencao: '',
    email: '',
    telefone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('https://leadicetar.vercel.app/api/enviar-formulario', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      console.log('Formulário enviado com sucesso!', response.data);
    } catch (error) {
      console.error('Erro ao enviar o formulário:', error.response ? error.response.data : error.message);
    }
  };
  

  return (
    <div>
      <a href='https://api.whatsapp.com/send?phone=5511974636540'>
        <img
          src="wpp.png"
          alt="WhatsApp"
          className="whatsapp-icon"
        />
      </a>
      <form onSubmit={handleSubmit}>
        <div className="logo-container">
          <a href='https://www.icetar.com.br/'>
            <img src="/logo192.png" alt="Logo" className="logo" hs />
          </a>
        </div>
        <h1>Solicite sua cotação</h1>
        <label>
          Nome da Empresa*
          <input
            type="text" 
            name="nomeEmpresa"
            value={formData.nomeEmpresa}
            onChange={handleChange}
          />
        </label>

        <label>
          Responsável por Compras
          <input
            type="text"
            name="responsavelCompras"
            value={formData.responsavelCompras}
            onChange={handleChange}
          />
        </label>

        <label>
          Responsável por Manutenção
          <input
            type="text"
            name="responsavelManutencao"
            value={formData.responsavelManutencao}
            onChange={handleChange}
          />
        </label>

        <label>
          Email*
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>

        <label>
          Telefone/WhatsApp*
          <input
            type="tel"
            name="telefone"
            value={formData.telefone}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Formulario;
