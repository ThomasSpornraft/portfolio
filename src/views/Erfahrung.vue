<template>
    <div class="erfahrung">
        <div class="erfahrung-item">
            <div class="circle">2001</div>
            <div class="line"></div>
            <div class="content">
                <div class="text">
                    <div>
                        <h1>Mechaniker</h1>
                        <p>mechanische Bearbeitung und Montage von Zylinderköpfen, Kurbelwellen, Kurbelgehäusen, für
                            Formel 1 und Prototypen</p>
                    </div>
                    <div>
                        <p><i class="fa-solid fa-calendar"></i>&nbsp; 01.07.2001 - 31.08.2005</p>
                    </div>

                </div>
                <div class="img"></div>
                <div class="timeline"></div>
                <div class="rect">
                    <i class="fa-solid fa-person-digging"></i>
                    <p>2001</p>
                </div>
            </div>
        </div>
        <div class="erfahrung-item">
            <div class="circle">2005</div>
            <div class="line"></div>
            <div class="content">
                <div class="text">
                    <div>
                        <h1>Anlagenführer</h1>
                        <p>Einrichtung, Wartung, Betrieb einer Reinigungsanlage mit Roboter zur Sicherstellung der
                            techn.
                            Sauberkeit von Motorkomponenten</p>
                    </div>
                    <div>
                        <p><i class="fa-solid fa-calendar"></i>&nbsp; 01.09.2005 - 31.08.2008</p>
                    </div>
                </div>
                <div class="img"></div>
            </div>
        </div>
        <div class="erfahrung-item">
            <div class="circle">2008</div>
            <div class="line"></div>
            <div class="content">
                <div class="text">
                    <div>
                        <h1>Mechaniker</h1>
                        <p>Aufbau des Batteriepaktes für das F1 KERS System.</p>
                    </div>
                    <div>
                        <p><i class="fa-solid fa-calendar"></i>&nbsp; 31.08.2008 - 31.08.2009</p>
                    </div>
                </div>
                <div class="img"></div>
            </div>
        </div>
        <div class="erfahrung-item">
            <div class="circle">2009</div>
            <div class="line"></div>
            <div class="content">
                <div class="text">
                    <div>
                        <h1>Prototypenbau</h1>
                        <p>Aufbau, Wartung, Betrieb von Anlagen- und Labortechnik für Hochvoltspeicher. Aufbau von
                            Prototypen</p>
                    </div>
                    <div>
                        <p><i class="fa-solid fa-calendar"></i>&nbsp; 01.09.2009 - 30.08.2011</p>
                    </div>
                </div>
                <div class="img"></div>
            </div>
        </div>
        <div class="erfahrung-item">
            <div class="circle">2011</div>
            <div class="line"></div>
            <div class="content">
                <div class="text">
                    <div>
                        <h1>Einkauf</h1>
                        <p>Einkauf von verschiedenen Automatikgetrieben, Handschaltgetrieben und Schaltungen</p>
                    </div>
                    <div>
                        <p><i class="fa-solid fa-calendar"></i>&nbsp; 01.09.2011 - now</p>
                    </div>
                </div>
                <div class="img"></div>
            </div>
        </div>
    </div>

</template>

<style>
.erfahrung {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 180px;
    padding-bottom: 200px;
}

.erfahrung .rect {
    position: absolute;
    left: 837px;
    top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 120px;
    height: 60px;
    border: 1px solid #42D392;
    border-radius: 6px;
    color: white;
    font-size: 1.5em;

}

.erfahrung .rect i {
    margin-right: 10px;
}

.erfahrung .timeline {
    position: absolute;
    top: -20px;
    left: 890px;
    width: 14px;
    height: 1620px;
    background-color: #333;


}

.erfahrung .erfahrung-item {
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    align-items: center;
    position: relative;
    margin-bottom: 55px;
}

.erfahrung .erfahrung-item .circle {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 857px;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-color: #222;
    color: white;
    border: 8px solid #333;
    font-size: 1.5em;
    z-index: 100;
}

.erfahrung .erfahrung-item .line {
    width: 200px;
    height: 4px;
    background-color: #333;
}

.erfahrung .erfahrung-item .content {
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    align-items: center;
    width: 700px;
    height: 250px;
    background-color: #111;
    border: 1px solid transparent;
    border-right: 6px solid #42D392;
    border-radius: 130px 6px 6px 130px;
    box-shadow: -2px -2px 3px rgba(0, 0, 0, .4), 2px 2px 3px rgba(0, 0, 0, .4);


}

.erfahrung .erfahrung-item .content:hover {
    border: 1px solid #42D392;
    border-right: 6px solid #42D392 !important;
}

.erfahrung .erfahrung-item .content .img {
    width: 200px;
    height: 200px;
    border-radius: 50%;

    background-size: cover;
    border: 5px solid white
}

.erfahrung .erfahrung-item:nth-child(1) .content .img {
    background-image: url("../assets/BMW.svg");
}

.erfahrung .erfahrung-item:nth-child(2) .content .img {
    background-image: url("../assets/BMW.svg");
}

.erfahrung .erfahrung-item:nth-child(3) .content .img {
    background-image: url("../assets/BMW.svg");
}

.erfahrung .erfahrung-item:nth-child(4) .content .img {
    background-image: url('../assets/BMW.svg');
}

.erfahrung .erfahrung-item:nth-child(5) .content .img {
    background-image: url('../assets/BMW.svg');
    background-size: contain;
    background-repeat: no-repeat;
}



.erfahrung .erfahrung-item .content .text {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    color: #999;
    align-self: flex-start;
    padding-top: 35px;
    padding-bottom: 35px;
    padding-left: 25px;
    margin-right: 30px;
    width: 390px;
    font-size: 1.2em;
}

.erfahrung .erfahrung-item .content .text h1 {
    margin-bottom: 25px;
    font-weight: 300;
}
</style>