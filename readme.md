# Demo of basic accessibility checks on PDF files before uploading them

This project demonstrates how some basic accessibility checks could limit the number of online PDF files with blocking accessibility issues by displaying a warning in a form before the file is being uploaded. This demo does only three checks on PDF files:
- is the document tagged?
- is the document scanned?
- is the document protected against the use by assistance technologies?

## Install
This is a Python project. You need python 3 on your computer. To install the required libraries, please use the following command:
```
pip install -r requirements.txt
```

## Usage
You can start the web server with the following command:
```
flask run -h localhost -p 8080
```
The demo is then available on `http://localhost:8080`. You can try uploading untagged PDF files or scanned PDF documents. A warning message should then be displayed.

## License
This software is developed by the [Information and press service](https://sip.gouvernement.lu/en.html) of the luxembourgish government and licensed under the MIT license.