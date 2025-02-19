const videos = [
    {
      "IdPartido": "PT1",
      "EquipoA": "EQ_TE01",
      "EquipoB": "EQ_BA03",
      "Torneo": "TO_WinterLJE",
      "Partido": "RO_Liga",
      "videoId": "OfhxdXXF-9c"
    },
    {
      "IdPartido": "PT2",
      "EquipoA": "AB04",
      "EquipoB": "EQ_BA03",
      "Torneo": "TO_WinterLJE",
      "Partido": "RO_Liga",
      "videoId": "q-wRVHk2QSM"
    },
    {
      "IdPartido": "PT3",
      "EquipoA": "EQ_BU05",
      "EquipoB": "EQ_BA03",
      "Torneo": "TO_WinterLJE",
      "Partido": "RO_Liga",
      "videoId": "xIvnARMKmak"
    },
    {
      "IdPartido": "PT4",
      "EquipoA": "EQ_TE01",
      "EquipoB": "EQ_BU05",
      "Torneo": "TO_WinterLJE",
      "Partido": "RO_Liga",
      "videoId": "nVewbwx4Ti8"
    },
    {
      "IdPartido": "PT5",
      "EquipoA": "EQ_TE01",
      "EquipoB": "EQ_NA02",
      "Torneo": "TO_WinterLJE",
      "Partido": "RO_Liga",
      "videoId": "2iJitGe1CvY"
    },
    {
      "IdPartido": "PT6",
      "EquipoA": "EQ_TE01",
      "EquipoB": "EQ_NO06",
      "Torneo": "TO_WinterLJE",
      "Partido": "RO_Liga",
      "videoId": "j4CcGTzrkF8"
    },
    {
      "IdPartido": "PT7",
      "EquipoA": "EQ_TE01",
      "EquipoB": "EQ_LE07",
      "Torneo": "TO_WinterLJE",
      "Partido": "RO_Liga",
      "videoId": "9LTYJP8eP7I"
    },
    {
        "IdPartido": "PT8",
        "EquipoA": "EQ_NO06",
        "EquipoB": "EQ_NA02",
        "Torneo": "TO_WinterLJE",
        "Partido": "RO_Liga",
        "videoId": "PrG5w5KHEU8"
    },
    {
        "IdPartido": "PT9",
        "EquipoA": "EQ_NO06",
        "EquipoB": "EQ_LE07",
        "Torneo": "TO_WinterLJE",
        "Partido": "RO_Liga",
        "videoId": "h8niOMS7Mtk"
    },
    {
        "IdPartido": "PT10",
        "EquipoA": "EQ_NA02",
        "EquipoB": "EQ_LE07",
        "Torneo": "TO_WinterLJE",
        "Partido": "RO_Liga",
        "videoId": "hEe7Cy5LEdg"
    },
    {
        "IdPartido": "PT11",
        "EquipoA": "EQ_MF08",
        "EquipoB": "EQ_BA03",
        "Torneo": "TO_WinterLJE",
        "Partido": "RO_Liga",
        "videoId": "gFXQu3vD178"
    }
]

function getEmbedUrl(videoId) {
    return `https://www.youtube.com/embed/${videoId}`;
}

const srcInicial = "https://www.youtube.com/embed/OfhxdXXF-9c";

const partidosJugador = [
    {"id": "JU_AFH01", "partidos": ["PT4", "PT5", "PT6", "PT7", "PT1"]},
    {"id": "JU_JBA02", "partidos": ["PT4", "PT5", "PT6", "PT7", "PT1"]},
    {"id": "JU_ABA03", "partidos": []},
    {"id": "JU_ISI04", "partidos": ["PT4", "PT5", "PT6", "PT7", "PT1"]},
    {"id": "JU_MGN06", "partidos": ["PT4", "PT5", "PT6", "PT7", "PT1"]},
    {"id": "JU_JSN07", "partidos": ["PT4", "PT5", "PT6", "PT7", "PT1"]},
    {"id": "JU_WTT08", "partidos": ["PT4", "PT5", "PT6", "PT7", "PT1"]},
    {"id": "JU_OWR09", "partidos": ["PT4", "PT5", "PT6", "PT7", "PT1"]},
    {"id": "JU_APB10", "partidos": ["PT4", "PT5", "PT6", "PT7", "PT1"]},
    {"id": "JU_GU111", "partidos": ["PT4", "PT5", "PT6", "PT7", "PT1"]},
    {"id": "JU_PJ62", "partidos": ["PT4", "PT5", "PT6", "PT7", "PT1"]},
    {"id": "JU_MMM05", "partidos": ["PT11"]},
    {"id": "JU_EMI12", "partidos": ["PT11"]},
    {"id": "JU_YIS13", "partidos": []},
    {"id": "JU_KKE14", "partidos": []},
    {"id": "JU_FRC15", "partidos": ["PT11"]},
    {"id": "JU_SAM16", "partidos": ["PT11"]},
    {"id": "JU_GOD17", "partidos": ["PT11"]},
    {"id": "JU_DAR18", "partidos": ["PT11"]},
    {"id": "JU_ATZ19", "partidos": []},
    {"id": "JU_VIH20", "partidos": ["PT11"]},
    {"id": "JU_CRS21", "partidos": ["PT11"]},
    {"id": "JU_OM81", "partidos": []},
    {"id": "JU_RA82", "partidos": ["PT11"]},
    {"id": "JU_YU22", "partidos": ["PT2"]},
    {"id": "JU_LU23", "partidos": ["PT2"]},
    {"id": "JU_RE24", "partidos": ["PT2"]},
    {"id": "JU_JO25", "partidos": ["PT2"]},
    {"id": "JU_JI26", "partidos": ["PT2"]},
    {"id": "JU_AL27", "partidos": ["PT2"]},
    {"id": "JU_MI28", "partidos": ["PT2"]},
    {"id": "JU_RA29", "partidos": ["PT2"]},
    {"id": "JU_AN30", "partidos": []},
    {"id": "JU_CA31", "partidos": []},
    {"id": "JU_CH32", "partidos": []},
    {"id": "JU_CF33", "partidos": []},
    {"id": "JU_NK34", "partidos": []},
    {"id": "JU_LO35", "partidos": []},
    {"id": "JU_RA36", "partidos": []},
    {"id": "JU_SH37", "partidos": []},
    {"id": "JU_CH38", "partidos": ["PT1","PT2","PT3","PT11"]},
    {"id": "JU_DU39", "partidos": ["PT1","PT2","PT3","PT11"]},
    {"id": "JU_FI40", "partidos": ["PT1","PT2","PT3","PT11"]},
    {"id": "JU_MA41", "partidos": ["PT1","PT2","PT3","PT11"]},
    {"id": "JU_ME42", "partidos": ["PT1","PT2","PT3","PT11"]},
    {"id": "JU_AL43", "partidos": ["PT1","PT2","PT3","PT11"]},
    {"id": "JU_BA44", "partidos": ["PT1","PT2","PT3","PT11"]},
    {"id": "JU_SI45", "partidos": ["PT1","PT2","PT3","PT11"]},
    {"id": "JU_VA46", "partidos": ["PT3", "PT4"]},
    {"id": "JU_ZA47", "partidos": ["PT3", "PT4"]},
    {"id": "JU_ED48", "partidos": ["PT3", "PT4"]},
    {"id": "JU_GU49", "partidos": ["PT3", "PT4"]},
    {"id": "JU_KU50", "partidos": ["PT3", "PT4"]},
    {"id": "JU_FV51", "partidos": ["PT3", "PT4"]},
    {"id": "JU_SE52", "partidos": ["PT3", "PT4"]},
    {"id": "JU_MI53", "partidos": ["PT3", "PT4"]},
    {"id": "JU_AB54", "partidos": []},
    {"id": "JU_DA55", "partidos": []},
    {"id": "JU_FO56", "partidos": []},
    {"id": "JU_JU57", "partidos": []},
    {"id": "JU_MA58", "partidos": []},
    {"id": "JU_MA59", "partidos": []},
    {"id": "JU_CH60", "partidos": []},
    {"id": "JU_YI61", "partidos": []},
    {"id": "JU_TO63", "partidos": []},
    {"id": "JU_HA64", "partidos": []},
    {"id": "JU_AN65", "partidos": []},
    {"id": "JU_LN66", "partidos": []},
    {"id": "JU_RO67", "partidos": []},
    {"id": "JU_FR68", "partidos": []},
    {"id": "JU_PE69", "partidos": []},
    {"id": "JU_VA70", "partidos": []},
    {"id": "JU_CI71", "partidos": ["PT7","PT9","PT10"]},
    {"id": "JU_FR72", "partidos": ["PT7","PT9","PT10"]},
    {"id": "JU_CA73", "partidos": ["PT7","PT9","PT10"]},
    {"id": "JU_AS74", "partidos": ["PT7","PT9","PT10"]},
    {"id": "JU_ES75", "partidos": ["PT7","PT9","PT10"]},
    {"id": "JU_JU76", "partidos": ["PT7","PT9","PT10"]},
    {"id": "JU_OS77", "partidos": ["PT7","PT9","PT10"]},
    {"id": "JU_SA78", "partidos": ["PT7","PT9","PT10"]},
    {"id": "JU_SE79", "partidos": ["PT7","PT9","PT10"]},
    {"id": "JU_TO80", "partidos": ["PT7","PT9","PT10"]},
    {"id": "JU_AL83", "partidos": ["PT6","PT8","PT9"]},
    {"id": "JU_AF84", "partidos": ["PT6","PT8","PT9"]},
    {"id": "JU_HU85", "partidos": ["PT6","PT8","PT9"]},
    {"id": "JU_MA86", "partidos": ["PT6","PT8","PT9"]},
    {"id": "JU_JA87", "partidos": ["PT6","PT8","PT9"]},
    {"id": "JU_UZ88", "partidos": []},
    {"id": "JU_DO89", "partidos": ["PT6","PT8","PT9"]},
    {"id": "JU_PE90", "partidos": ["PT6","PT8","PT9"]},
    {"id": "JU_SA91", "partidos": ["PT6","PT8","PT9"]},
    {"id": "JU_TR92", "partidos":[]},
    {"id": "JU_HE93", "partidos":[]},
    {"id": "JU_OB94", "partidos":[]},
    {"id": "JU_AP95", "partidos":[]},
    {"id": "JU_KA96", "partidos":[]},
    {"id": "JU_PO97", "partidos":[]},
    {"id": "JU_RU98", "partidos":[]},
    {"id": "JU_VI99", "partidos":[]},
    {"id": "JU_AA100", "partidos": ["PT5","PT8","PT10"]},
    {"id": "JU_AD101", "partidos": ["PT5","PT8","PT10"]},
    {"id": "JU_VA102", "partidos": ["PT5","PT8","PT10"]},
    {"id": "JU_PA103", "partidos": ["PT5","PT8","PT10"]},
    {"id": "JU_NO104", "partidos": ["PT5","PT8","PT10"]},
    {"id": "JU_DE105", "partidos": ["PT5","PT8","PT10"]},
    {"id": "JU_MA106", "partidos": []},
    {"id": "JU_GU107", "partidos": ["PT5","PT8","PT10"]},
    {"id": "JU_MI108", "partidos": ["PT5","PT8","PT10"]},
    {"id": "JU_NO109", "partidos": ["PT5","PT8","PT10"]},
    {"id": "JU_SA110", "partidos": ["PT5","PT8","PT10"]}
  ]
    


filtrosEquipos = [];
filtrosJugadores = [];
filtrosRondas = [];
filtrosTorneos = [];

function filtrarVideos(){
    borrarVideosAnterior();
    //filtrar por jugador
    let videosJugador = [];
    if(filtrosJugadores.length > 0){
        let setsDePartidos = [];

        // Obtener los partidos de cada jugador y almacenarlos en un conjunto
        filtrosJugadores.forEach((element) => {
            const jugador = partidosJugador.find(J => J.id === element);
            if (jugador) {
                setsDePartidos.push(new Set(jugador.partidos));
            }
        });

        // Validar que todos los jugadores tengan partidos
        if (setsDePartidos.length === filtrosJugadores.length) {
            // Intersección de todos los conjuntos de partidos
            let partidosEnComun = setsDePartidos.reduce((a, b) => new Set([...a].filter(x => b.has(x))));

            // Filtrar los videos con los partidos en común
            videosJugador = videos.filter(element => partidosEnComun.has(element.IdPartido));
        }
    }
    else {
        videos.forEach((element) => {
            videosJugador.push(element);
        });
    }

    //filtrar por equipo.
    let videosEquipo = [];
    if(filtrosEquipos.length > 0){
        let setsDePartidos = [];

        // Obtener los partidos de cada equipo seleccionado
        filtrosEquipos.forEach((equipo) => {
            let partidosEquipo = new Set();

            videosJugador.forEach((element) => {
                if (element.EquipoA === equipo || element.EquipoB === equipo) {
                    partidosEquipo.add(element.IdPartido);
                }
            });

            setsDePartidos.push(partidosEquipo);
        });

        // Validar que todos los equipos tengan partidos asignados
        if (setsDePartidos.length === filtrosEquipos.length) {
            // Intersección de todos los conjuntos de partidos
            let partidosEnComun = setsDePartidos.reduce((a, b) => new Set([...a].filter(x => b.has(x))));

            // Filtrar los videos con los partidos en común
            videosEquipo = videosJugador.filter(element => partidosEnComun.has(element.IdPartido));
        }
    }
    else{
        videosJugador.forEach((element) => {
            videosEquipo.push(element);
        });
    }
    //filtrar por torneo
    let videosTorneo = [];
    if(filtrosTorneos.length > 0){
        filtrosTorneos.forEach((torneo) => {
            videosEquipo.forEach((element) => {
                if(element.Torneo === torneo && !videosTorneo.some(e => e.IdPartido === element.IdPartido)){
                    videosTorneo.push(element);
                }
            });
        });
    }
    else {
        videosEquipo.forEach((element) => {
            videosTorneo.push(element);
        });
    }

    //filtrar por ronda
    let videosFinal = [];
    if(filtrosRondas.length > 0){
        filtrosRondas.forEach((ronda) => {
            videosTorneo.forEach((element) => {
                if(element.Partido === ronda && !videosFinal.some(e => e.IdPartido === element.IdPartido)){
                    videosFinal.push(element);
                }
            });
        });
    }
    else{
        videosTorneo.forEach((element) => {
            videosFinal.push(element);
        });
    }
    rellenarIframePartidos(videosFinal);
}

function handleSearchByPlayer(value){
    if(filtrosJugadores.includes(value)){
        filtrosJugadores = filtrosJugadores.filter(item => item !== value);
    } 
    else {
        filtrosJugadores.push(value);
    }
    filtrarVideos();
}

function handleSearchByTournament(value){
    if(filtrosTorneos.includes(value)){
        filtrosTorneos = filtrosTorneos.filter(item => item !== value);
    } 
    else {
        filtrosTorneos.push(value);
    }
    filtrarVideos();
}

function handleSearchByRonda(value){
    if(filtrosRondas.includes(value)){
        filtrosRondas = filtrosRondas.filter(item => item !== value);
    } 
    else {
        filtrosRondas.push(value);
    }
    filtrarVideos();
}

function handleSearchByTeam(value){
    if(filtrosEquipos.includes(value)){
        filtrosEquipos = filtrosEquipos.filter(item => item !== value);
    } 
    else {
        filtrosEquipos.push(value);
    }
    filtrarVideos();
}

function rellenarIframePartidos(videosEncontrados){
    var divVideos = document.getElementById("videosDiv");
    if(filtrosEquipos.length == 0 && filtrosJugadores == 0 && filtrosRondas == 0 && filtrosTorneos == 0){
        document.getElementById("videoIframe").src = srcInicial;
        document.getElementById("noVideosDiv").style.display = "none";
        document.getElementById("videosDiv").style.display = "block";
    }
    else if(videosEncontrados && videosEncontrados.length > 0){
        document.getElementById("noVideosDiv").style.display = "none";
        document.getElementById("videosDiv").style.display = "block";
        document.getElementById("videoIframe").src = getEmbedUrl(videosEncontrados[0].videoId);
        
        for(let i = 1; i < videosEncontrados.length; i++){
            let nuevoiframe = document.createElement("iframe");
            nuevoiframe.width = "80%";
            nuevoiframe.height = "100%";
            nuevoiframe.title="YouTube video player";
            nuevoiframe.src = getEmbedUrl(videosEncontrados[i].videoId);
            nuevoiframe.frameborder="0"; 
            nuevoiframe.allow ="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
            nuevoiframe.allowfullscreen = true;
            nuevoiframe.className ="youtube-video";
            divVideos.appendChild(nuevoiframe);
        }
    }
    else {
        document.getElementById("videoIframe").src = srcInicial;
        document.getElementById("videosDiv").style.display = "none";
        document.getElementById("noVideosDiv").style.display = "block";
    }
}

function borrarVideosAnterior() {
    var iframesToDelete = document.getElementsByClassName("youtube-video");
    for (var i = iframesToDelete.length - 1; i >= 0; i--) {
        if (!iframesToDelete[i].id) {
            iframesToDelete[i].remove();
        }
    }
}

function updateCountdown() {
    const eventDate = new Date('December 15, 2025 00:00:00').getTime();
    const now = new Date().getTime();
    const timeLeft = eventDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

setInterval(updateCountdown, 1000);


