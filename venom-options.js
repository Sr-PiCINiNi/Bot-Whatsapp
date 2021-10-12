module.exports = {
	folderNameToken: 'tokens', //folder name when saving tokens
	mkdirFolderToken: '', //folder directory tokens, just inside the venom folder, example:  { mkdirFolderToken: '/node_modules', } //will save the tokens folder in the node_modules directory
	headless: true, // Headless chrome
	devtools: false, // Open devtools by default
	useChrome: false, // If false will use Chromium instance
	debug: false, // Opens a debug session
	logQR: true, // Logs QR automatically in terminal
	browserWS: '', // If u want to use browserWSEndpoint
	puppeteerOptions: {args: ['--no-sandbox', '--disable-setuid-sandbox']}, // Will be passed to puppeteer.launch
	disableSpins: true, // Will disable Spinnies animation, useful for containers (docker) for a better log
	disableWelcome: true, // Will disable the welcoming message which appears in the beginning
	updatesLog: true, // Logs info updates automatically in terminal
	autoClose: 0, // Automatically closes the venom-bot only when scanning the QR code (default 60 seconds, if you want to turn it off, assign 0 or false)
	createPathFileToken: true, //creates a folder when inserting an object in the client's browser, to work it is necessary to pass the parameters in the function create browserSessionToken
}