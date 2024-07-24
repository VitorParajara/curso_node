import path from 'path';
import url from 'url';
import { promises as fs } from 'fs';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pasta = path.join(__dirname, "lojas", "201", "funcionarios");

try {
    await fs.mkdir(pasta);
    console.log(pasta,'criada');
} catch (error) {
    console.log(pasta,'já existe');
}
