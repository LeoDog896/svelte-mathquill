import fs from 'node:fs/promises';
import crypto from 'node:crypto';

interface DownloadFile {
	url: string;
	name: string;
	integrity: string;
}

const files: DownloadFile[] = [
	{
		url: 'https://unpkg.com/mathquill@0.10.1-a/build/mathquill.min.js',
		name: 'mathquill.min.js.txt',
		integrity:
			'Qsh05D07P6dURSZn8Qk+j8GI7cEK0OhXleZvTofmucwoDSkBC0juWf1401JdSE8os2kWEezMu7e9mlnszm3yEw=='
	},
	{
		url: 'https://unpkg.com/mathquill@0.10.1-a/build/mathquill.css',
		name: 'mathquill.css',
		integrity:
			'vPg9GqsZZ4LHv9BkFfZSXt7y4D7YaARPU2JFmpZug4EgtJJrumytMAFZkNSk2LSyqWir0TNbh2tBq7UJIMxvlA=='
	},
	{
		url: 'https://unpkg.com/mathquill@0.10.1-a/build/font/Symbola-basic.eot',
		name: 'font/Symbola-basic.eot',
		integrity:
			'8H4h+TO6A3wCFUoa06GSUIdHh0RWEPgdiAzmiEQTLHLWBUF/4CBN0DLi6bipgbi4La4s1Zkn29yXBmF1HOTp1w=='
	},
	{
		url: 'https://unpkg.com/mathquill@0.10.1-a/build/font/Symbola-basic.ttf',
		name: 'font/Symbola-basic.ttf',
		integrity:
			'V7swLoEKyJsoNBf9GJ1GZukpZvGCUwjYcLoyQZ1CxdKsbLi9X3j0LWRwcH67SLeLCFj7NrBW1TMCNWMBHEqg8Q=='
	},
	{
		url: 'https://unpkg.com/mathquill@0.10.1-a/build/font/Symbola-basic.woff',
		name: 'font/Symbola-basic.woff',
		integrity:
			'Byh0IIEMQJEnMyi4dQb8WX0CNGKYuV39BNMuVOOeS9y+nbJMx6c8ymkVrKtqntV6Qow4JCT2Df8f982YCgz1Pw=='
	},
	{
		url: 'https://unpkg.com/mathquill@0.10.1-a/build/font/Symbola-basic.woff2',
		name: 'font/Symbola-basic.woff2',
		integrity:
			'BHf22BwRtbF9EZb0N1GN2j+P4YstfoRw6R6YkhPeqsVDnwWGz1Gv83NxKiEbkCVfhgCYQM79soYg+Ur/u9K2Vg=='
	},
	{
		url: 'https://unpkg.com/mathquill@0.10.1-a/build/font/Symbola.eot',
		name: 'font/Symbola.eot',
		integrity:
			'WKTZsaOENtwKKKV9RZxEbaDocbJ099iK/keTGmkxNBR05U4BKq5ETTLksf3uGAabLlcVWg7oMxYShW0w0UMvpQ=='
	},
	{
		url: 'https://unpkg.com/mathquill@0.10.1-a/build/font/Symbola.otf',
		name: 'font/Symbola.otf',
		integrity:
			'uQMnlWBPRA4q2ISO/BH3lLD307+clizYv2lZ5O2mNJwpGs1Y94DT5fCDyuxFia1J9eTyEck1cvfOa6EzGdfXcQ=='
	},
	{
		url: 'https://unpkg.com/mathquill@0.10.1-a/build/font/Symbola.svg',
		name: 'font/Symbola.svg',
		integrity:
			'jPHN7TCIJE/Ppxy/jIcQz3tMCd6prqq6C18doxIvfufSDk4em1CBMtoGv+cKAk/Zjkmv6MomPK/Ry/ca+4zARA=='
	},
	{
		url: 'https://unpkg.com/mathquill@0.10.1-a/build/font/Symbola.ttf',
		name: 'font/Symbola.ttf',
		integrity:
			'w7Df6PWz5oNUEPBeTvLSBqSmvihIfHckO7tv8fQPIecvmKWTWWRs2g2UPG7HAHjqTiKQlhXyGT4UNvHR5w09RQ=='
	},
	{
		url: 'https://unpkg.com/mathquill@0.10.1-a/build/font/Symbola.woff',
		name: 'font/Symbola.woff',
		integrity:
			'zNbYEf9G2sAL0tpUvk1AfRhONFKbLG2Notnj5xMIHbnXhhrDrc0PdVBxhzCHbEMBuOG41isseB1A+R/hyEsYYA=='
	},
	{
		url: 'https://unpkg.com/mathquill@0.10.1-a/build/font/Symbola.woff2',
		name: 'font/Symbola.woff2',
		integrity:
			'ST/Oh8ATl4QEyNcqqC+Q5+Ja2qKIpmOr3lOf4SQWVFj6ugWRKOtT/sg+ApwgBBhpcHv+83my5ZU3W7KJEklm5w=='
	}
];

const download = async (file: DownloadFile, dest: string) => {
	const request = await fetch(file.url);
	const buffer = Buffer.from(await request.arrayBuffer());
	const hash = crypto.createHash('sha512');
	hash.update(buffer);
	const integrity = hash.digest('base64');

	if (integrity !== file.integrity) {
		throw Error(`Integrity mismatch for ${file.name}\nExpected: ${file.integrity}\nActual: ${integrity}`);
	}

	await fs.writeFile(dest, buffer);

	console.log(`Downloaded ${file.name}: ${buffer.byteLength} bytes`);
};

(async () => {
	await fs.mkdir('src/lib/scripts/font', { recursive: true });

	await Promise.all(files.map((file) => download(file, `src/lib/scripts/${file.name}`)));
})();
