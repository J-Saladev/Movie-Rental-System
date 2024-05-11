<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand text-light" href="/">Movie Rental</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse text-light justify-content-end" id="navbarNav">
                <ul class="navbar-nav" >
                    <li class="nav-item ">
                       <RouterLink to="/" class="nav-link active text-light"> Home</RouterLink>
                    </li>
                    <li class="nav-item dropdown ">
                        <a class="nav-link dropdown-toggle text-light" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Movies
                        </a>
                        <div class="dropdown-menu bg-dark " aria-labelledby="navbarDropdownMenuLink">
                        <router-link to="/add/movies " class="dropdown-item text-light">Add</router-link>
                        <router-link to="/view/movies" class="dropdown-item text-light">View</router-link>
                        
                        </div>
                    </li>
                    <li class="nav-item dropdown ">
                        <a class="nav-link dropdown-toggle text-light" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Users
                        </a>
                        <div class="dropdown-menu bg-dark " aria-labelledby="navbarDropdownMenuLink">
                        <router-link to="/add/users " class="dropdown-item text-light">Add</router-link>
                        <router-link to="/view/users" class="dropdown-item text-light">View</router-link>
                        
                        </div>
                    </li>
                    <li class="nav-item dropdown ">
                        <a class="nav-link dropdown-toggle text-light" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Rentals
                        </a>
                        <div class="dropdown-menu bg-dark " aria-labelledby="navbarDropdownMenuLink">
                        <router-link to="/add/rentals " class="dropdown-item text-light">Add</router-link>
                        <router-link to="/view/rentals" class="dropdown-item text-light">View</router-link>
                        
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    
</template>

<script setup>
    

</script>