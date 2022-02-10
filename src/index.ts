/**
 * Required External Modules
 */

import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";

dotenv.config();

/**
 * App Variables
 */

if (!process.env.PORT) {
	process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

/**
 *  App Configuration
 */

app.use(helmet());
app.use(cors());
app.use(express.json());

/**
 * Server Activation
 */

app.listen(PORT, () => {
	console.log(`APP rodando na porta ${PORT}`);
	let readlineSync = require('readline-sync');
	let qtdAluno = parseInt(readlineSync.question(' Quantos alunos tem ? '));

	let maiorNota = 0;
	let alunoMaiorNota

	for (let i = 0; i < qtdAluno; i++) {
		let nome = readlineSync.question('Nome do aluno e :');
		let nota = parseFloat(readlineSync.question(' A nota do aluno e : '));	// Executa 5 vezes, com os valores de passos de 0 a 4.
		if (maiorNota < nota) {
			maiorNota = nota
			alunoMaiorNota = nome
		}

	}

	console.log(` Aluno com a maior nota é ${alunoMaiorNota} e a nota é ${maiorNota}`);





	// CÓDIGO PARA ATENDER OS REQUERIMENTOS
	// R01, R02, R03, R04, R05

});
