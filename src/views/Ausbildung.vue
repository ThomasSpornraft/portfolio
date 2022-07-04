<template>
    <div class="ausbildung">

        <div class="ausbildung-item">
            <div class="timeline"></div>
            <div class="rect">
                <i class="fa-solid fa-baby"></i>
                <p>1981</p>
            </div>
            <div class="circle">1988</div>
            <div class="line"></div>
            <div class="content">
                <div class="text">
                    <div>
                        <h1>Grundschule</h1>
                        <p>besuch der Joseph-Maria-Lutz Grundschule in Pfaffenhofen an der Ilm</p>
                        <p>verdammt lang her 😂&nbsp; 🦕</p>
                    </div>
                    <div>
                        <p><i class="fa-solid fa-calendar"></i>&nbsp; 01.09.1988 - 31.08.1992</p>
                    </div>

                </div>
                <div class="img"></div>
            </div>
        </div>
        <div class="ausbildung-item">
            <div class="circle">1992</div>
            <div class="line"></div>
            <div class="content">
                <div class="text">
                    <div>
                        <h1>Hauptschule</h1>
                        <p>besuch der Hauptschule in Pfaffenhofen an der Ilm</p>
                    </div>
                    <div>
                        <p><i class="fa-solid fa-calendar"></i>&nbsp; 01.09.1992 - 31.08.1994</p>
                    </div>
                </div>
                <div class="img"></div>
            </div>
        </div>
        <div class="ausbildung-item">
            <div class="circle">1994</div>
            <div class="line"></div>
            <div class="content">
                <div class="text">
                    <div>
                        <h1>Realschule</h1>
                        <p>besuch der Realschule in Pfaffenhofen an der Ilm</p>
                        <p>Erfolgreicher Abschluss - mittlere Reife </p>
                    </div>
                    <div>
                        <p><i class="fa-solid fa-calendar"></i>&nbsp; 01.09.1994 - 31.08.1998</p>
                    </div>
                </div>
                <div class="img"></div>
            </div>
        </div>
        <div class="ausbildung-item">
            <div class="circle">1998</div>
            <div class="line"></div>
            <div class="content">
                <div class="text">
                    <div>
                        <h1>Berufsausbildung</h1>
                        <p>Ausbildung zum Werkzeugmechaniker [Stanz- und Umformtechnik] bei BMW in München</p>
                    </div>
                    <div>
                        <p><i class="fa-solid fa-calendar"></i>&nbsp; 01.09.1998 - 30.06.2001</p>
                    </div>
                </div>
                <div class="img"></div>
            </div>
        </div>
        <div class="ausbildung-item">
            <div class="circle">2002</div>
            <div class="line"></div>
            <div class="content">
                <div class="text">
                    <div>
                        <h1>Techniker</h1>
                        <p>nebenberufliche Fortbildung zum staatlich geprüften Techniker für Maschinenbau beim
                            DAA-Technikum in Würzburg</p>
                    </div>
                    <div>
                        <p><i class="fa-solid fa-calendar"></i>&nbsp; 01.09.2002 - 01.05.2006</p>
                    </div>
                </div>
                <div class="img"></div>
            </div>
        </div>
    </div>

</template>

<style>
.ausbildung {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 120px;
    padding-bottom: 200px;
}

.rect {
    position: absolute;
    left: -60px;
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

.rect i {
    margin-right: 10px;
}

.timeline {
    position: absolute;
    top: -20px;
    left: -7px;
    width: 14px;
    height: 1620px;
    background-color: #333;


}

.ausbildung .ausbildung-item {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin-bottom: 55px;
}

.ausbildung .ausbildung-item .circle {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: calc(0px - 40px);
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-color: #222;
    color: white;
    border: 8px solid #333;
    font-size: 1.5em;
}

.ausbildung .ausbildung-item .line {
    width: 200px;
    height: 4px;
    background-color: #333;
}

.ausbildung .ausbildung-item .content {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 700px;
    height: 250px;
    background-color: #111;
    border: 1px solid transparent;
    border-left: 6px solid #42D392;
    border-radius: 6px 130px 130px 6px;
    box-shadow: -2px -2px 3px rgba(0, 0, 0, .4), 2px 2px 3px rgba(0, 0, 0, .4);


}

.ausbildung .ausbildung-item .content:hover {
    border: 1px solid #42D392;
    border-left: 6px solid #42D392 !important;
}

.ausbildung .ausbildung-item .content .img {
    width: 200px;
    height: 200px;
    border-radius: 50%;

    background-size: cover;
    border: 5px solid white
}

.ausbildung .ausbildung-item:nth-child(1) .content .img {
    background-image: url("https://www.lutzschule-pfaffenhofen.de/wp-content/uploads/lutzschule_front.jpg");
}

.ausbildung .ausbildung-item:nth-child(2) .content .img {
    background-image: url("https://pfaffenhofen.de/media/images/grund-_und_mittelschule_web.width-750.jpg");
}

.ausbildung .ausbildung-item:nth-child(3) .content .img {
    background-image: url("https://upload.wikimedia.org/wikipedia/commons/4/43/Georg-Hipp-Realschule_04.jpg");
}

.ausbildung .ausbildung-item:nth-child(4) .content .img {
    background-image: url('../assets/ausbildung.jpg');
}

.ausbildung .ausbildung-item:nth-child(5) .content .img {
    background-image: url('https://www.daa-technikum.de/typo3conf/ext/site_daa_technikum/Resources/Public/Images/logo.png');
    background-size: contain;
    background-repeat: no-repeat;
}



.ausbildung .ausbildung-item .content .text {
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

.ausbildung .ausbildung-item .content .text h1 {
    margin-bottom: 25px;
    font-weight: 300;
}
</style>