# Setup Docker - Laravel 10

## Passo a passo
Clone Repositório
```sh
git clone https://github.com/OtavioMartins/setup-docker-laravel.git
```
Clone os Arquivos do Laravel
```sh
git clone https://github.com/laravel/laravel.git app-laravel
```
Copie os arquivos docker-compose.yml, Dockerfile e o diretório docker/ para o seu projeto

```sh
cp -rf setup-docker-laravel/* app-laravel/
```

```sh
cd app-laravel/
```
Crie o Arquivo .env

```sh
cp .env.example .env
```
Parar versionamento git
```sh
rm -rf git
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
### Laravel
Acessar o projeto http://localhost:8088

### PHPMYADMIN
Acessar o phpmyadmin http://localhost:8089

Usuario: root

Senha: root