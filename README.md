
# Setup Docker + Laravel 11 com PHP 8.3 + Vue 3 com Bootstrap


### Passo a passo
Clone Repositório
```sh
git clone -b laravel-11-vue-3 https://github.com/OtavioMartins/setup-docker-laravel.git laravel-11-vue-3
```
### Laravel 11 com Docker
```sh
cd laravel-11-vue-3
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

Sair do docker-compose
```sh
exit
```


### Vue 3


```sh
npm install
```

### Compilar e recarregar para desenvolvimento

```sh
npm run dev
```


Acesse o projeto
[http://localhost:8000](http://localhost:8000)

### NVM uma opção para usar o node com a versão desejada

Ver [NVM](https://github.com/nvm-sh/nvm).

## Git
Zerar git
```sh
rm -rf .git
```

Iniciar git
```sh
git init
```


### Compilar e reduzir para produção

```sh
npm run build
```

### Links úteis
- [Vue.js](https://vuejs.org/)

- [Router Vue](https://router.vuejs.org/)

- [Pinia](https://pinia.vuejs.org/getting-started.html)

- [Laravel/UI](https://github.com/laravel/ui)

- [W3schools Bootstrap](https://www.w3schools.com/bootstrap5/)

- [Laravel 11](https://laravel.com/docs/11.x)

- [Sanctum Laravel 11](https://laravel.com/docs/11.x/sanctum)






