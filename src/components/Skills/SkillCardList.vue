<script setup>
import SkillCard from "./SkillCard.vue";

const skills = [
    {
        title: "HTML",
        description:
            "HTML ist eine textbasierte Auszeichnungssprache zur Strukturierung elektronischer Dokumente wie Texte mit Hyperlinks, Bildern und anderen Inhalten. HTML-Dokumente sind die Grundlage des World Wide Web und werden von Webbrowsern dargestellt.",
        rating: 5,
        imgURL: "../assets/HTML.svg",
        imgALT: "HTML Logo"
    },
    {
        title: "CSS",
        description:
            "Mit CSS werden Gestaltungsanweisungen erstellt, die vor allem zusammen mit den Auszeichnungssprachen HTML und XML (zum Beispiel bei SVG) eingesetzt werden",
        rating: 4,
        imgURL: "/src/assets/CSS.svg",
        imgALT: "CSS Logo"
    },
    {
        title: "JavaScript",
        description:
            "JavaScript is a scripting or programming language that allows you to implement complex features on web pages",
        rating: 3,
        imgURL: "/src/assets/JS.svg",
        imgALT: "JavaScript Logo"
    },
    {
        title: "Vue",
        description:
            "Ein zugängliches, performantes und vielseitiges JavaScript Framework zum erstellen von User Interfaces im Web",
        rating: 4,
        imgURL: "/src/assets/VUE.svg",
        imgALT: "Vue Js Logo"
    },
    {
        title: "React",
        description:
            "Eine JavaScript Bibliothek zum erstellen von User Interfaces",
        rating: 3,
        imgURL: "/src/assets/REACT.svg",
        imgALT: "React Logo"
    },
    {
        title: "Angular",
        description:
            "Eine Entwicklungsplatform zum erstellen von Webanwendungen aufbauend auf TypeScript",
        rating: 3,
        imgURL: "/src/assets/ANGULAR.svg",
        imgALT: "Angular Logo"
    },
    {
        title: "Excel",
        description:
            "Das am weitesten verbreitete Tabellenkaklulationsprogramm",
        rating: 5,
        imgURL: "/src/assets/EXCEL.svg",
        imgALT: "Microsoft Excel Logo"
    },
    {
        title: "Power BI",
        description:
            "Power BI ist ein Geschäftsanalysedienst von Microsoft. Ziel ist es, interaktive Visualisierungen und Business-Intelligence-Funktionen mit einer Oberfläche bereitzustellen, die so einfach ist, dass Endbenutzer ihre eigenen Berichte und Dashboards erstellen können.",
        rating: 3,
        imgURL: "/src/assets/POWER-BI.svg",
        imgALT: "Angular Logo"
    },
    {
        title: "Python",
        description:
            "Python hat den Anspruch, einen gut lesbaren, knappen Programmierstil zu fördern. So werden beispielsweise Blöcke nicht durch geschweifte Klammern, sondern durch Einrückungen strukturiert.",
        rating: 5,
        imgURL: "/src/assets/PYTHON.svg",
        imgALT: "Python Logo"
    },
    {
        title: "git",
        description:
            "Git ist ein System zur Versionskontrolle",
        rating: 3,
        imgURL: "/src/assets/GIT.svg",
        imgALT: "git Logo"
    },
    {
        title: "PostgreSQL",
        description:
            "PostgreSQL ist ein Relationales Datenbanksystem. Es steht open source zur Verfügung",
        rating: 2,
        imgURL: "/src/assets/POSGRESQL.svg",
        imgALT: "PosgreSQL Logo"
    },
];
</script>

<template>
    <div class="skillcard-container">
        <div class="skillcard-list">
            <SkillCard v-for="skill in skills" :title="skill.title" :description="skill.description"
                :rating="skill.rating" :imgURL="skill.imgURL" :imgALT="skill.imgALT" />
        </div>
        <div class="skillcard-legende">
            <p><i v-for="i in 1" class="fa-solid fa-star"></i>&nbsp;&nbsp;Beginner</p>
            <p><i v-for="i in 2" class="fa-solid fa-star"></i>&nbsp;&nbsp;Advanced</p>
            <p>
                <i v-for="i in 3" class="fa-solid fa-star"></i>&nbsp;&nbsp;Intermediate
            </p>
            <p>
                <i v-for="i in 4" class="fa-solid fa-star"></i>&nbsp;&nbsp;Fast Experte
            </p>
            <p><i v-for="i in 5" class="fa-solid fa-star"></i>&nbsp;&nbsp;Experte</p>
        </div>
    </div>
</template>

<style>
.skillcard-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.skillcard-legende {
    display: flex;
    justify-content: center;
    gap: 30px;
    font-size: 0.8em;
    color: #666;
    padding-top: 30px;
}

.skillcard-list {
    display: flex;
    justify-content: center;
    width: 60%;
    flex-wrap: wrap;
    gap: 20px;
}
</style>
