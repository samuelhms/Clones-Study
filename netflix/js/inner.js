function filmeSelected(key) {


    switch (key) {
        case '1':

            video = "https://www.youtube.com/watch?v=5_4SW8HHfUs&ab_channel=NetflixBrasil"
            titulo = "THE UMBRELLA ACADEMY"
            descricao = "Com a morte do pai, irmãos com poderes extraordinários se reencontram e descobrem surpreendentes segredos de família – além de uma ameaça iminente à humanidade."
            imagem = "https://www.themoviedb.org/t/p/original/8IZ2UxuFePxmMhzyqpBGNN6VznQ.jpg"

            document.querySelector(".filme-principal").style.backgroundImage = "url('" + imagem + "')";
            document.querySelector("#titulo_t").innerHTML = titulo
            document.querySelector("#btAssistir").setAttribute("href", video)
            document.querySelector("#descricao").innerHTML = descricao
            break;

        case '2':

            video = "StarWars"
            titulo = "Star Wars: A Ascensão Skywalker"
            descricao = "Com o retorno do Imperador Palpatine, todos voltam a temer seu poder e, com isso, a Resistência toma a frente da batalha que ditará os rumos da galáxia. Treinando para ser uma completa Jedi, Rey (Daisy Ridley) ainda se encontra em conflito com seu passado e futuro, mas teme pelas respostas que pode conseguir a partir de sua complexa ligação com Kylo Ren (Adam Driver), que também se encontra em conflito pela Força."
            imagem = "https://www.themoviedb.org/t/p/original/dFpR4pxP6fHWkq4V2LrKhpDWmdA.jpg"

            document.querySelector(".filme-principal").style.backgroundImage = "url('" + imagem + "')";
            document.querySelector("#titulo_t").innerHTML = titulo
            document.querySelector("#btAssistir").setAttribute("href", video)
            document.querySelector("#descricao").innerHTML = descricao
            break;

        case '3':

            video = "https://www.youtube.com/watch?v=dSnGOxOQfoA&ab_channel=CinemarkBrasil"
            titulo = "Pokemon"
            descricao = "Explore o mundo de Pokémon com Ash e seu parceiro Pikachu em busca do sonho do menino de ser um mestre Pokémon."
            imagem = "https://www.themoviedb.org/t/p/original/ugTmcBckC9zEjIKI81hGe78nKwH.jpg"

            document.querySelector(".filme-principal").style.backgroundImage = "url('" + imagem + "')";
            document.querySelector("#titulo_t").innerHTML = titulo
            document.querySelector("#btAssistir").setAttribute("href", video)
            document.querySelector("#descricao").innerHTML = descricao
            break;

        case '4':
            video = ""
            titulo = ""
            descricao = ""
            imagem = ""

            document.querySelector(".filme-principal").style.backgroundImage = "url('" + imagem + "')";
            document.querySelector("#titulo_t").innerHTML = titulo
            document.querySelector("#btAssistir").setAttribute("href", video)
            document.querySelector("#descricao").innerHTML = descricao
            break;

        case '5':
            video = ""
            titulo = ""
            descricao = ""

            document.querySelector(".filme-principal").style.backgroundImage = "url('" + imagem + "')";
            document.querySelector("#titulo_t").innerHTML = titulo
            document.querySelector("#btAssistir").setAttribute("href", video)
            document.querySelector("#descricao").innerHTML = descricao
            break;

        case '6':
            video = ""
            titulo = ""
            descricao = ""

            document.querySelector(".filme-principal").style.backgroundImage = "url('" + imagem + "')";
            document.querySelector("#titulo_t").innerHTML = titulo
            document.querySelector("#btAssistir").setAttribute("href", video)
            document.querySelector("#descricao").innerHTML = descricao
            break;

        case '7':
            video = ""
            titulo = ""
            descricao = ""

            document.querySelector(".filme-principal").style.backgroundImage = "url('" + imagem + "')";
            document.querySelector("#titulo_t").innerHTML = titulo
            document.querySelector("#btAssistir").setAttribute("href", video)
            document.querySelector("#descricao").innerHTML = descricao
            break;

        case '8':
            video = ""
            titulo = ""
            descricao = ""

            document.querySelector(".filme-principal").style.backgroundImage = "url('" + imagem + "')";
            document.querySelector("#titulo_t").innerHTML = titulo
            document.querySelector("#btAssistir").setAttribute("href", video)
            document.querySelector("#descricao").innerHTML = descricao
            break;
        case '9':
            video = ""
            titulo = ""
            descricao = ""

            document.querySelector(".filme-principal").style.backgroundImage = "url('" + imagem + "')";
            document.querySelector("#titulo_t").innerHTML = titulo
            document.querySelector("#btAssistir").setAttribute("href", video)
            document.querySelector("#descricao").innerHTML = descricao
            break;
        case '0':
            video = ""
            titulo = ""
            descricao = ""

            document.querySelector(".filme-principal").style.backgroundImage = "url('" + imagem + "')";
            document.querySelector("#titulo_t").innerHTML = titulo
            document.querySelector("#btAssistir").setAttribute("href", video)
            document.querySelector("#descricao").innerHTML = descricao


            break;

        default:
            break;
    }
}