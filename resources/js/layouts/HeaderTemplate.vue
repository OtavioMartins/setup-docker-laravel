<template>
    <nav class="navbar navbar-expand-sm bg-primary navbar-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Logo</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="collapsibleNavbar">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <router-link :to="{name: 'home'}" class="nav-link">Home</router-link>                
                </li>
                <li class="nav-item">
                    <router-link :to="{name: 'institucional'}" class="nav-link">Institucional</router-link>
                </li>
                <li class="nav-item">
                    <router-link :to="{name: 'blog'}" class="nav-link">Blog</router-link>
                </li>  
                <li class="nav-item">
                    <router-link :to="{name: 'contact'}" class="nav-link">Contact</router-link>
                </li>   
            </ul>
            </div>
        </div>
    </nav>
</template>
