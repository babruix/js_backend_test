# Get started

1. Install all required dependincies:
npm install

2. Run app via gulp nodeman on port 8000:
gulp

Or you can run directly on port 3000:
node app.js
However current client implementation assumes that app is running on port 8000.


Nodeman will automatically restart app when chaning content of js files.


## API server.


Using express to implement a Rest API server that:
 * list files and directories in a base local directory
 /api/listDirectory

 * get metadata (size, type, modification date, ...) about a requested file
 /api/listDirectory/fileInfo/{FILENAME}

 * get current directory path
 /api/listDirectory/getPath

### Not finished
 * tests: to run:  gulp test
 * implementation of remote base directory listing is depending on OS,
 so to make it cross platform we can implement own api for remote dir listing,
 or rely on known patterns (FTP, RDP etc)

## Step 2

Implemented API client: public/index.html.
You will need http server (nginx, apache, etc) to run it.
Functionality does not work if your server declines CORS requests, but in
most of the cases cors module solves this problem.
Note: client assumes that you run app on port 8000 (i.e. in gulp mode)

## Time Limit
This test was immpossible to completed in 2 hours, so solution has some unfinished parts.

