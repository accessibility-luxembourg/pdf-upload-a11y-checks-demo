# Demo of basic accessibility checks on PDF files before uploading them

This project demonstrates how some basic accessibility checks could limit the number of online PDF files with blocking accessibility issues by displaying a warning in a form before the file is being uploaded. This demo does only three checks on PDF files:
- is the document tagged?
- is the document scanned?
- is the document protected against the use by assistance technologies?

Here is a screenshot of the demo :

![a form with a file input, where a non-tagged PDF has been selected. It displays a warning message encouraging users to fix the issues.](https://github.com/accessibility-luxembourg/pdf-upload-a11y-checks-demo/assets/16536731/32da8a80-7060-46d0-adb9-15695df91e35)


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
