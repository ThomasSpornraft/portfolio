<script setup>
const props = defineProps(['title', 'rating', 'description', 'imgURL', 'imgALT'])
</script>

<template>
    <div class="skillcard">
        <img :src="props.imgURL" :alt="props.imgALT">
        <h1>{{ props.title }}</h1>
        <p>{{ props.description }}</p>
        <div class="rating">
            <i v-for="i in props.rating" class="fa-solid fa-star"></i>
        </div>
    </div>

</template>

<style>
.skillcard {
    display: grid;
    grid-template-rows: 120px 60px 250px 20px;
    place-items: center;
    width: 300px;
    border: 1px solid #333;
    border-radius: 11px;
    padding: 30px;

}

.skillcard img {
    width: 100px;
}

.skillcard h1 {
    font-family: 'Dancing Script';
    color: whitesmoke;
}

.skillcard p {
    color: #999;
    font-size: 1.1em;
    line-height: 1.2em;
}

.rating {
    display: flex;
    gap: 12px;
}

.rating i {
    color: darkorange;
    font-size: 1.7em;
}
</style>