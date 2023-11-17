const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors'); // Adicione esta linha


const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors()); // Adicione esta linha para configurar o CORS

// Conectar ao MongoDB (substitua a URL pelo seu próprio URL do MongoDB)
mongoose.connect('mongodb+srv://icetar:784512@icetar.qt1ztin.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

// Definir um esquema para os dados do formulário
const formularioSchema = new mongoose.Schema({
  nomeEmpresa: String,
  responsavelCompras: String,
  responsavelManutencao: String,
  email: String,
  telefone: String,
});

// Criar um modelo com base no esquema
const Formulario = mongoose.model('Formulario', formularioSchema);

// Lidar com a submissão do formulário
app.post('/api/enviar-formulario', async (req, res) => {
  try {
    const novoFormulario = new Formulario(req.body);
    await novoFormulario.save();
    res.status(201).json({ mensagem: 'Formulário enviado com sucesso!' });
  } catch (erro) {
    res.status(500).json({ erro: 'Erro ao processar o formulário.' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor está executando na porta ${PORT}`);
});
