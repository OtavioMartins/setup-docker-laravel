# Setup Docker - Laravel 10

## Passo a passo
Clone Repositório
```sh
git clone https://github.com/OtavioMartins/setup-docker-laravel.git base
```

```sh
cd base/
```
Crie o Arquivo .env

```sh
cp .env.example .env
```


Atualize as variáveis de ambiente do arquivo .env

```sh
APP_NAME=Laravel
APP_URL=http://localhost:8088

DB_CONNECTION=mysql
DB_HOST=mysql
DB_PORT=3306
DB_DATABASE=base
DB_USERNAME=root
DB_PASSWORD=root

CACHE_DRIVER=redis
QUEUE_CONNECTION=redis
SESSION_DRIVER=redis

REDIS_HOST=redis
REDIS_PASSWORD=null
REDIS_PORT=6379
```

Suba os containers do projeto

```sh
docker-compose up -d
```
Acessar o container

```sh
docker-compose exec app bash
```

Instalar as dependências do projeto

```sh
composer install
```
Gerar a key do projeto Laravel
```sh
php artisan key:generate
```
Parar versionamento git

```sh
rm -rf git
```

___
## Caso tenha algum problema com remote no git

Obterá uma lista de identificadores e URLs associados
```sh
git remote -v
```
Para remover URLs associados
```sh
git remote remove origin
```
___


### Laravel
Acessar o projeto http://localhost:8088

### PHPMYADMIN
Acessar o phpmyadmin http://localhost:8089

Usuario: root

Senha: root
