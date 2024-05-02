<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <RouterView />
                    <div class="card-header">Example Component</div>

                    <div class="card-body">
                        <router-link to="/">Home</router-link> <br>
                        <router-link to="/about">About</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { RouterView } from 'vue-router';
</script>


  


