<template>
    <input type="checkbox" id="toggle">
    <label for="toggle" class="toggle"></label>
</template>

<style>
#toggle {
    display: none;
}

.toggle {
    display: inline-block;
    width: 46px;
    height: 20px;
    background-color: #aaa;
    border-radius: 10px;
    position: relative;
    cursor: pointer;
}

.toggle::after {
    content: '';
    display: flex;
    width: 24px;
    height: 24px;
    background-color: black;
    border: 2px solid white;
    border-radius: 50%;
    box-shadow: 0 0 5px rgba(0, 0, 0, .25);
    position: absolute;
    top: -4px;
    left: -8px;
    display: grid;
    place-content: center;
    line-height: 0;
    transition: background-color .2s, transform .2s ease-in;
}

#toggle:checked+.toggle::after {
    content: '';
    background-color: #42D392;
    transform: translate(32px) rotate(360deg);
}
</style>