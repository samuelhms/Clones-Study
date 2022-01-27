
function inicioGame() {


    let canvas = document.querySelector('#snake');
    let context = canvas.getContext('2d');
    let box = 32;
    let snake = [];
    snake[0] = {
        x: 7 * box,
        y: 7 * box
    }
    let direction = 'right'
    let food = {
        x: Math.floor(Math.random() * 15 + 1) * box,
        y: Math.floor(Math.random() * 15 + 1) * box
    }
    
    let score = 0;
    let starMode = false



    function criarBG() {
        context.fillStyle = 'lightblue';
        context.fillRect(0, 0, 16 * box, 16 * box);

    }
    function criarCobrinha(cor) {

        for (let index = 0; index < snake.length; index++) {

            context.fillStyle = cor
            context.fillRect(snake[index].x, snake[index].y, box, box)


        }
    }
    function update(event) {
        if (event.keyCode == 37 && direction != 'right') direction = 'left';
        if (event.keyCode == 38 && direction != 'down') direction = 'up';
        if (event.keyCode == 39 && direction != 'left') direction = 'right';
        if (event.keyCode == 40 && direction != 'up') direction = 'down';
    }
    function dropFood() {
        context.fillStyle = 'red';
        context.fillRect(food.x, food.y, box, box);
    }
    function name(params) {

    }

    document.addEventListener('keydown', update)

    function fimJogo() {
        clearInterval(jogo);
        alert("Game Over :/ \n Score: " + score);
        document.querySelector("#boxbox").innerHTML = '<h1>Fim do Game!</h1>'
        document.querySelector(".btnbtn").innerHTML = '<button id="btn" onclick="start()">Jogar Novamente </button>'

    }
    function primeNumber(num) {
        for (var divisor = 2; divisor < num; divisor++)
            if (num % divisor == 0) return false;
        return true;
    }


    function iniciarJogo() {


        if (starMode == true) {
            if (snake[0].x > 15 * box && direction == 'right') snake[0].x = 0;
            if (snake[0].x < 0 && direction == 'left') snake[0].x = 15 * box;
            if (snake[0].y > 15 * box && direction == 'down') snake[0].y = 0;
            if (snake[0].y < 0 && direction == 'up') snake[0].y = 15 * box;

        } else {
            if (snake[0].x > 15 * box || (snake[0].x < 0) || (snake[0].y > 15 * box) || (snake[0].y < 0)) {
                fimJogo()
            }
            for (let index = 1; index < snake.length; index++) {
                if (snake[0].x == snake[index].x && snake[0].y == snake[index].y) {
                    fimJogo()
                }
            }
        }

        criarBG();
        if (primeNumber(score) && score > 10) {
            criarCobrinha('white');
            starMode = true;
        } else {
            criarCobrinha('green');
            starMode = false;
        }
        dropFood();

        let snakeX = snake[0].x;
        let snakeY = snake[0].y;

        if (direction == 'right') snakeX += box;
        if (direction == 'left') snakeX -= box;
        if (direction == 'up') snakeY -= box;
        if (direction == 'down') snakeY += box;

        if (snakeX != food.x || snakeY != food.y) {
            snake.pop();
        } else {
            food.x = Math.floor(Math.random() * 15 + 1) * box;
            food.y = Math.floor(Math.random() * 15 + 1) * box;
            score += 1;
            document.querySelector("#score").innerHTML = "Score: " + score;

        }

        let newHead = {
            x: snakeX,
            y: snakeY
        }

        snake.unshift(newHead)
    }
    var jogo = setInterval(iniciarJogo, 130);


}

