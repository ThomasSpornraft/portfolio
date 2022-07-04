<script setup>
import SonstigesCard from "./SonstigesCard.vue";

const sonstiges = [
    {
        title: "Lesen",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quis eos distinctio esse dolore adipisci harum suscipit repellendus explicabo, maiores sunt laudantium tenetur fugit rerum quae doloremque consequatur placeat officiis.",
        rating: 4,
        icon: "fa-solid fa-book-open"
    },
    {
        title: "Aktien",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quis eos distinctio esse dolore adipisci harum suscipit repellendus explicabo, maiores sunt laudantium tenetur fugit rerum quae doloremque consequatur placeat officiis.",
        rating: 3,
        icon: "fa-solid fa-chart-line"
    },
    {
        title: "Krafttraining",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quis eos distinctio esse dolore adipisci harum suscipit repellendus explicabo, maiores sunt laudantium tenetur fugit rerum quae doloremque consequatur placeat officiis.",
        rating: 3,
        icon: "fa-solid fa-dumbbell"
    },
    {
        title: "Coding",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quis eos distinctio esse dolore adipisci harum suscipit repellendus explicabo, maiores sunt laudantium tenetur fugit rerum quae doloremque consequatur placeat officiis.",
        rating: 5,
        icon: "fa-solid fa-code"
    },
    {
        title: "Gaming",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quis eos distinctio esse dolore adipisci harum suscipit repellendus explicabo, maiores sunt laudantium tenetur fugit rerum quae doloremque consequatur placeat officiis.",
        rating: 3,
        icon: "fa-solid fa-gamepad"
    }



];
</script>

<template>

    <div class="sonstigescard-container">
        <div class="sonstigescard-list">
            <SonstigesCard v-for="sonst in sonstiges" :title="sonst.title" :description="sonst.description"
                :rating="sonst.rating" :icon="sonst.icon" />
        </div>
        <div class="sonstigescard-legende">
            <p><i v-for="i in 1" class="fa-solid fa-heart-pulse"></i>&nbsp;&nbsp;kenne ich</p>
            <p><i v-for="i in 2" class="fa-solid fa-heart-pulse"></i>&nbsp;&nbsp;interessiert mich </p>
            <p>
                <i v-for="i in 3" class="fa-solid fa-heart-pulse"></i>&nbsp;&nbsp;mag ich
            </p>
            <p>
                <i v-for="i in 4" class="fa-solid fa-heart-pulse"></i>&nbsp;&nbsp;love it
            </p>
            <p><i v-for="i in 5" class="fa-solid fa-heart-pulse"></i>&nbsp;&nbsp;Hell Yeah!</p>
        </div>
    </div>
</template>

<style>
.sonstigescard-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.sonstigescard-legende {
    display: flex;
    justify-content: center;
    gap: 30px;
    font-size: 0.8em;
    color: #666;
    padding-top: 30px;
}

.sonstigescard-list {
    display: flex;
    justify-content: center;
    width: 60%;
    flex-wrap: wrap;
    gap: 35px;
}
</style>
