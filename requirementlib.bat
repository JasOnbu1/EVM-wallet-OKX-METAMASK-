@echo off
echo Installing dependencies...

:: Install ethers
npm install ethers

:: Install fs (note: fs is a core Node.js module, no need to install it, but we'll include the command just for completeness)
npm install fs

:: Install json2csv
npm install json2csv

echo Dependencies installed successfully.
pause
