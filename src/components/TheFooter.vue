<template>
    <footer>

        <div class="used-tech">
            <ul>
                <li>buildt with: </li>
                <li><img src="../assets/VUE.svg" alt="">
                    <p>Vue</p>
                </li>
                <li>
                    <img src="../assets/VUE.svg" alt="">
                    <p>VueRouter</p>
                </li>
                <li><img src="../assets/PINIA.svg" alt="">
                    <p>Pinia</p>
                </li>
                <li><img src="../assets/VITE.svg" alt="">
                    <p>Vite</p>
                </li>
            </ul>





        </div>
        <p>Impressum</p>
    </footer>
</template>

<style>
footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    gap: 30px;
    padding: 0px 20px;
    color: #888;
    box-shadow: -2px -4px 5px rgba(0, 0, 0, .4);

}


.used-tech {
    font-size: 1em;

}

.used-tech ul {
    display: flex;
    align-items: center;
    gap: 20px;
}

.used-tech ul li {
    display: flex;
    align-items: center;
    height: 20px;
}

.used-tech ul li img {
    width: 15px;
    margin-right: 5px;
}
</style>