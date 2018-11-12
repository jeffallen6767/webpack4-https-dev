# webpack4-https-dev
webpack 4 with user-supplied self-signed certificate https devServer


# getting started:


#### 1) Clone the repo & install dependencies:
```bash
$ git clone https://github.com/jeffallen6767/webpack4-https-dev.git && cd $_
$ npm install
```

#### 2) (OPTIONAL) Export paths to your self-signed HTTPS certificate files:
```bash
$ export HTTPS_KEY=~/myCA/server_key.pem
$ export HTTPS_CRT=~/myCA/server_crt.pem
$ export HTTPS_CA=~/myCA/private/cakey.pem
```

#### 3) Start a local development HTTPS server:
```bash
$ npm run start
```
