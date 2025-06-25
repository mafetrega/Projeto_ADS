import { join } from 'path';
import { readdir } from 'fs';

export default async (request, response) => {

    const HTTP_STATUS = CONSTANTS.HTTP;
    const dirPath = join(CONSTANTS.DIR, 'responsaveis_publicos'); // Nome mais específico para o diretório

    readdir(dirPath, (err, files) => {
        if (err) {
            return response.status(HTTP_STATUS.SERVER_ERROR).send('Erro ao acessar os arquivos de responsáveis.');
        }

        const fileList = files.map(file => {
            return `<li><a href="/responsaveis_publicos/${file}">${file}</a></li>`;
        }).join('');

        return response.send(`
            <html>
                <head><title>Arquivos de Responsáveis</title></head>
                <body>
                    <h2>Documentos Relacionados aos Responsáveis</h2>
                    <ul>${fileList}</ul>
                </body>
            </html>
        `);
    });

};