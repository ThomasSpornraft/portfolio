<script setup >
import ThemeToggler from './ThemeToggler.vue';
</script>

<script>
window.onscroll = () => {
    const header = document.getElementById('header')
    header.classList.add("sticky")
    console.log();
    if (window.scrollY == 0) {
        header.classList.remove("sticky")
    }

}
</script>

<template>
    <header id="header">
        <div class="logo">
            <h1>Thomas</h1>
        </div>
        <nav>
            <ul>
                <router-link to="/portfolio">Home</router-link>
                <router-link to="/portfolio/ausbildung">Ausbildung</router-link>
                <router-link to="/portfolio/erfahrung">Erfahrung</router-link>
                <router-link to="/portfolio/skills">Skills</router-link>
                <router-link to="/portfolio/sonstiges">Sonstiges</router-link>
            </ul>
        </nav>
        <div class="settings">
            <div class="theme">
                <ThemeToggler />
            </div>
            <div class="language">
                <select name="language" id="">
                    <option value="de-DE">🇩🇪&nbsp; Deutsch</option>
                    <option disabled value="en-EN">🇬🇧&nbsp; Englisch</option>
                </select>
            </div>
        </div>
        <div class="mobile-menu">
            <i class="fa-solid fa-bars"></i>
        </div>
    </header>


</template>


<style>
header {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    color: white;
    padding: 0px 2%;
    box-shadow: 2px 3px 5px rgba(0, 0, 0, .3);
    background-color: #1A1A1A;
}

header.sticky {
    position: sticky;
    top: 0;
    width: 100%;
    box-shadow: unset;
    z-index: 100;
}

.logo {
    display: flex;
    align-items: center;
    font-family: 'Dancing Script';
    color: #42D392;
}

nav {
    grid-column: 4 / span 6;
}

nav ul {
    display: flex;
    height: 100%;
    justify-content: center;
    gap: 20px;
}

nav ul a {
    display: flex;
    align-items: center;
    font-size: 1.2em;
    color: #888;
}

.router-link-exact-active {
    color: coral;
}

.settings {
    grid-column: 11 / span 2;
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 35px;
}

.settings .theme {
    display: flex;
    justify-content: center;
}

.settings .language {
    height: 30px;
}

.settings .language select {
    height: 100%;
    background-color: transparent;
    color: #999;
    border: 1px solid transparent;
    border-radius: 4px;
    font-size: 1.1em;
    font-family: 'Anek Latin';
}

header .mobile-menu {
    display: none;
}

/* ********************************************************************************* */
/* Responsive Design */

@media only screen and (max-width: 1000px) {
    header .settings {
        display: none;
    }

    header .mobile-menu {
        display: flex;
        width: 50px;
        height: 50px;
        justify-content: center;
        align-items: center;
        grid-column: 12;
    }

    header .mobile-menu i {
        font-size: 1.3em;
        border: 1px solid #555;
        padding: 4px;
        border-radius: 4px;
    }
}

@media only screen and (max-width: 768px) {
    #header nav {
        display: none;
    }

    #header {
        display: flex;
        width: 100vw;
        padding-left: 20px;
        justify-content: space-between;

    }
}
</style>
