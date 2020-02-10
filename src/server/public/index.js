
const fs = require('fs');
const path = require('path');

const config = require('../../config');
const mime = require('./mime');

function readFile(filePath, contentType, res) {
	res.writeHead(200, { 'content-type': contentType });

	const stream = fs.createReadStream(filePath);
	stream.on('error', () => {
		res.writeHead(500, { 'content-type': contentType });
		res.end('<h1>500 Server Error</h1>')
	});

	stream.pipe(res);
}

const response = (res, html) => {
	res.writeHead(200, { 'content-type': 'text/html' });
	res.end(html);
};

const getFilePath = (pathName) => {
	return path.resolve(config.webServiceRoot + '/public' + pathName);
};

const fn = (pathName, res) => {
	if (pathName === '/') {
		pathName = '/index.html';
	}

	let ext = path.extname(pathName);
	ext = ext ? ext.slice(1) : '';

	// non-static resources
	const contentType = mime[ext];
	if (!contentType) {

		const filePath = getFilePath(pathName);
		if (fs.existsSync(filePath)) {

			// It is a directory
			if (fs.statSync(filePath).isDirectory()) {
				const index = filePath + '/index.html';

				// no index.html
				if (!fs.existsSync(index)) {
					response(res, 'Directory listing is not supported');
				}
				else {
					// load index.html
					readFile(filePath, contentType, res);
				}
			}
			else {
				// It is a file
				// That means its file type is not be supported
				response(res, 'File type .' + ext + ' is not supported');
			}

			return true;
		}
		else {
			// It is an api, then do nothing
			return false;
		}
	}

	const filePath = getFilePath(pathName);
	if (!fs.existsSync(filePath)) {
		// not found
		response(res, pathName + ' is not found');
	}
	else {
		// static resources
		readFile(filePath, contentType, res);
	}

	return true;
};

module.exports = fn;

