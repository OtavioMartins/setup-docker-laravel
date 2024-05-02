
# Setup Docker Laravel 11 com PHP 8.3


### Passo a passo
Clone Repositório
```sh
git clone -b laravel-11 https://github.com/OtavioMartins/setup-docker-laravel.git laravel-11
```
```sh
cd laravel-11
```

Suba os containers do projeto
```sh
docker-compose up -d
```


Crie o Arquivo .env
```sh
cp .env.example .env
```

Acesse o container app
```sh
docker-compose exec app bash
```


Instale as dependências do projeto
```sh
composer install
```

Gere a key do projeto Laravel
```sh
php artisan key:generate
```

OPCIONAL: Gere o banco SQLite (caso não use o banco MySQL)
```sh
touch database/database.sqlite
```

Rodar as migrations
```sh
php artisan migrate
```

Acesse o projeto
[http://localhost:8000](http://localhost:8000)

## Git
Zerar git
```sh
rm -rf .git
```

Iniciar git
```sh
git init
```