<script setup>
const props = defineProps(['title', 'rating', 'description', 'icon'])
</script>

<template>
    <div class="sonstigescard">
        <i :class="props.icon"></i>
        <h1>{{ props.title }}</h1>
        <p>{{ props.description }}</p>
        <div class="rating">
            <i v-for="i in props.rating" class="fa-solid fa-heart-pulse"></i>
        </div>
    </div>

</template>

<style>
.sonstigescard {
    display: grid;
    grid-template-rows: 120px 60px 250px 20px;
    place-items: center;
    width: 300px;
    border: 1px solid #333;
    border-radius: 11px;
    padding: 35px;

}

.sonstigescard>i:first-child {
    font-size: 5em;
    /*    border: 1px solid #42D392; */
    background-color: #222;
    box-shadow: -2px -2px 4px rgba(0, 0, 0, .5), 2px 2px 4px rgba(0, 0, 0, .5);

    padding: 25px;

}

.sonstigescard h1 {
    font-family: 'Dancing Script';
    color: coral;
    font-size: 2em;
    margin-top: 20px;
}

.sonstigescard p {
    color: #999;
    font-size: 1.1em;
    line-height: 1.2em;
}

.sonstiges .rating {
    display: flex;
    gap: 12px;
}

.sonstiges .rating i {
    color: #42D392;
    font-size: 1.7em;
}
</style>