<template>
    <div class="profileCard">
        <div class="profileCard-img">
            <img src="../assets/logo.png" alt="">
        </div>
        <div class="profileCard-title">
            <h1>Thomas</h1>
        </div>
        <div class="profileCard-text">
            <p>Thomas Spornraft</p>
            <p><i class="fa-solid fa-location-dot">&nbsp;</i>München | 40 | m</p>
            <div class="subtitle">
                <span>
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/600px-JavaScript-logo.png?20120221235433">
                </span>
                <span>FRONTEND</span>
                <span></span>
                <span><img src="https://cdn-icons-png.flaticon.com/512/5968/5968322.png" alt=""></span>
                <span>BACKEND</span>
                <span></span>
                <span>WEEKEND</span>
            </div>
            <p class="description">
                Ein einfacher Typ aus einem Dorf irgendwo in Bayern, unterwegs um sich selbst und die Welt zu verbessen
            </p>

        </div>
        <div class="profileCrad-contact">
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-github"></i>
            <i class="fa-brands fa-discord"></i>
            <i class="fa-brands fa-linkedin"></i>
        </div>
    </div>
</template>

<style>
.profileCard {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 360px;
    height: 600px;
    padding-top: 20px;
    border: 1px solid #42d3924f;
    border-radius: 6px;
    background-color: #111;
    color: whitesmoke;
    box-shadow: -2px -2px 3px rgba(0, 0, 0, .8), 2px 2px 3px rgba(0, 0, 0, .8);
}

.profileCard-img {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    width: 230px;
    height: 230px;
    background-color: #222;
    border: 2px solid white;
}

.profileCard h1 {
    margin-top: 10px;
    margin-bottom: 10px;
    font-family: 'Dancing Script';
    text-align: center;
    font-size: 2.2em;
}

.profileCard .profileCard-text p {
    text-align: center;
    font-size: 1.1em;
    font-style: italic;
    color: #666;

}

.profileCard .profileCard-text .subtitle {
    margin-top: 20px;
    display: grid;
    grid-template-columns: 1.2em auto .8em 1.2em auto .8em auto;
    grid-template-rows: 1.2em;
    gap: 2px;
    padding: 0px 22px;
    letter-spacing: -1px;
}

.profileCard .profileCard-text .subtitle span {
    display: flex;
    align-items: center;
}

.profileCard .profileCard-text .subtitle span img {
    width: 1.1em;
}

.profileCard .profileCard-text .subtitle span:nth-child(2) {
    font-family: 'Poppins';
}

.profileCard .profileCard-text .subtitle span:nth-child(5) {
    font-size: 1.4em;
    padding-bottom: 2px;
    font-family: 'VT323';
}

.profileCard .profileCard-text .subtitle span:nth-child(7) {
    font-family: 'Faster One';
    font-size: 1.3em;
}

.profileCard .profileCard-text .description {
    color: white;
    margin-top: 25px;
    font-weight: 300;
    font-size: 1.1em;
    font-style: italic;
    color: #777;
    text-align: left;
    padding: 0px 55px;
}

.profileCard .profileCrad-contact {
    display: flex;
    gap: 20px;
    margin-top: 30px;
}

.profileCard .profileCrad-contact i {
    font-size: 1.4em;
    color: #999;
}

.profileCard .profileCrad-contact i:hover {
    font-size: 1.45em;
    color: white;
    cursor: pointer;
}
</style>