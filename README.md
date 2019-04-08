# neurohackathon

## Install pre-requisites

1. [Install npm and Node.js](https://nodejs.org/).
2. Update npm:
    ```
    # npm install -g npm@latest
    ```
3. Install Polymer CLI:
    ```
    # sudo npm install -g polymer-cli@latest
    ```
    
## Build and serve

Serve:
```
$ npm run serve
```

## Docker:

```
docker build -t dicom_web:latest .

docker run -p 49160:8081 -d dicom_web

```
