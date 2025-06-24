import { join } from 'path';
import { readdir } from 'fs';

export default async (request, response) => {

    const dirPath = join(CONSTANTS.DIR, 'frequencia_publica'); // Nome do diretório mais descritivo

    readdir(dirPath, (err, files) => {
        if (err) {
            return response.status(CONSTANTS.HTTP.SERVER_ERROR).send('Erro ao acessar os arquivos de frequência.');
        }

        const fileList = files.map(file => {
            return `<li><a href="/frequencia_publica/${file}">${file}</a></li>`;
        }).join('');

        return response.send(`
            <html>
                <head><title>Registros de Frequência</title></head>
                <body>
                    <h2>Arquivos de Frequência de Alunos</h2>
                    <ul>${fileList}</ul>
                </body>
            </html>
        `);
    });

};