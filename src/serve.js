const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

let transporter = nodemailer.createTransport({
  service: 'gmail', 
  auth: {
    user: 'oi.com', 
    pass: '1234566test'  
  }
});

app.post('/send-message', (req, res) => {
  const { name, email, subject, message } = req.body;
  
  
  let mailOptions = {
    from: 'seuemail@gmail.com', 
    to: 'seuemail@gmail.com', // Assunto
    text: `Nome: ${name}\nEmail: ${email}\nAssunto: ${subject}\nMensagem: ${message}`, 
    
  };


  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Erro ao enviar email:', error);
      res.status(500).send('Erro ao enviar a mensagem.');
    } else {
      console.log('Email enviado: ' + info.response);
      res.status(200).send('Mensagem enviada com sucesso!');
    }
  });
  
  console.log(`Mensagem recebida de ${name} (${email}): ${subject} - ${message}`);
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
