<script setup>
import { ref } from 'vue'
import TheProfile from '../components/TheProfile.vue'
const zitate = [
    { text: "Die Grenzen meiner Sprache bedeuten die Grenzen meiner Welt.", autor: "Ludwig Wittgenstein" },
    { text: "Just for fun", autor: "Linus Torvalds" }
]

</script>

<template>
    <div class="home">
        <main>

            <div class="main-left">
                <div class="main-left-content">
                    <div class="title">
                        <h1>
                            Hello there !
                        </h1>
                        <h2>schön, dass du hier bist</h2>
                        <p>mein Name ist Thomas und das ist mein persönliches Profil</p>
                        <p>Es ist dazu da ein paar Info's über mich zu teilen damit du dich entscheiden kannst mit mir
                            in Kontakt zu treten oder nicht</p>
                        <p>btw: Ich mache Fullstack Webanwendungen mit JavaScript und Co.</p>
                        <!-- <p>Mein Code ist unter der MIT Lizenz linzensiert, wenn dir etwas gefällt benutze es,
                            ausser
                            meine personenbezogenen Daten, die gehören mir</p> -->

                    </div>
                    <!--  <div class="zitat">
                          <p>
                            <cite>{{ zitate[0].text }}</cite>
                            <cite>- {{ zitate[0].autor }} - </cite>
                        </p>

                    </div> -->


                </div>
            </div>
            <div class="main-right">
                <TheProfile />
            </div>
        </main>

    </div>

</template>


<style>
.home {
    display: flex;
    justify-content: center;
}

.home main {
    grid-column: 3 / span 8;
    display: flex;
    gap: 35px;
    justify-content: center;
    padding: 10px;
}


.home main .main-left {
    display: flex;
    width: 850px;
    height: 100%;
    align-items: center;
}

.home main .main-left-content {
    display: grid;
    grid-template-columns: 425px 425px;
    grid-template-rows: 300px 300px;
    background-color: #111;
    color: #999;
    border: 1px solid #42d3924f;
    border-radius: 6px;
    box-shadow: -2px -2px 3px rgba(0, 0, 0, .8), 2px 2px 3px rgba(0, 0, 0, .8);
    z-index: 100;
}

.home main .main-left-content .title {
    grid-column: 1 / span 2;
    padding: 40px 50px;
}

.home main .main-left-content .title h1 {
    text-align: center;
    font-family: 'Dancing Script';
    font-size: 4em;
    margin-bottom: 10px;
    color: #bbb;
}

.home main .main-left-content .title h2 {
    text-align: center;
    margin-bottom: 40px;
    font-family: 'Anek Latin';
    font-weight: 400;
}

.home main .main-left-content .title p {
    font-size: 1.3em;
    font-family: 'Anek Latin';
    text-align: center;
    color: #888;
}

.home main .main-left-content .zitat {
    display: flex;
    padding-top: 65px;
    padding-left: 10px;
    background-image: url('../assets/blob.svg');
    background-size: cover;
    background-position: 350px -74px;

}

.home main .main-left-content .zitat p {
    display: flex;
    flex-direction: column;
    font-size: 1.3em;
    gap: 20px;
    width: 250px;
    padding-left: 50px;
    padding-top: 60px;
    transform: rotate(-11deg);
    color: #555;
}

.home main .main-left-content .zitat p cite:last-child {
    color: #777;
    font-size: .8em;
}

.home main .main-left-content .zitat p cite:first-child:before {
    content: open-quote;
}

.home main .main-left-content .zitat p cite:first-child:after {
    content: close-quote;
}

main .main-right {
    display: flex;
    height: 100%;
    align-items: center;
}
</style>