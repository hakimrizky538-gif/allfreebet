const apps = [

    {
        name: "OHYA777",
        version: "Terbaru",
        category: "GAME",
        image: "images/app1.png",
        link: "https://search.yahoo.com/search?fr=mcafee&type=E210US91215G0&p=chatgpt"
    },

    {
        name: "BIGWINER",
        version: "Terbaru",
        category: "GAME",
        image: "images/app2.png",
        link: "#"
    },

    {
        name: "888JG",
        version: "Terbaru",
        category: "GAME",
        image: "images/app3.png",
        link: "#"
    },

    {
        name: "HT66",
        version: "Terbaru",
        category: "GAME",
        image: "images/app4.png",
        link: "#"
    },

    {
        name: "8888FT",
        version: "Terbaru",
        category: "GAME",
        image: "images/app5.png",
        link: "#"
    },

    {
        name: "XD880",
        version: "Terbaru",
        category: "GAME",
        image: "images/app6.png",
        link: "#"
    }

];



const appGrid =
    document.getElementById("appGrid");



function tampilkanApps(data) {

    appGrid.innerHTML = "";


    data.forEach(app => {

        const card =
            document.createElement("div");


        card.className =
            "app-card";


        card.innerHTML = `

            <img
                src="${app.image}"
                class="app-logo"
                alt="${app.name}"
            >

            <h3>
                ${app.name}
            </h3>

            <p>
                ${app.version}
            </p>

            <div class="app-category">
                ${app.category}
            </div>

         <a
    href="${app.link}"
    class="app-link"
    target="_blank"
    rel="noopener noreferrer"
>
    BUKA
</a>

        `;


        appGrid.appendChild(card);

    });

}



tampilkanApps(apps);



/* =========================
   SEARCH
========================= */

function searchApps() {

    const keyword =
        document
        .getElementById("searchInput")
        .value
        .toLowerCase();


    const result =
        apps.filter(app =>
            app.name
            .toLowerCase()
            .includes(keyword)
        );


    tampilkanApps(result);

}
document
    .getElementById("searchInput")
    .addEventListener("input", function () {

        const keyword =
            this.value.toLowerCase();

        const result =
            apps.filter(app =>
                app.name
                .toLowerCase()
                .includes(keyword)
            );

        tampilkanApps(result);

    });
    function filterApps(category) {

    if (category === "SEMUA") {

        tampilkanApps(apps);

        return;
    }


    const result =
        apps.filter(app =>
            app.category === category
        );


    tampilkanApps(result);
}