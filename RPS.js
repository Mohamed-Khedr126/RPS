 var player_score = 0;
 var CPU_score = 0;
 var choiceG;
 var cpu_choice;
 var result = 0;
 const scoreInfo = document.getElementById('scoreMessage')
 const scoreMessage = document.getElementById('scoreMessage2')
 const playerScorePara = document.getElementById('playerScore')
 const computerScorePara = document.getElementById('CPUScore')
 const playerSign = document.getElementById('playerSign')
 const computerSign = document.getElementById('CPUSign')
 const paperBtn = document.getElementById('paper')
 const scissorsBtn = document.getElementById('scissors')
 const rockBtn = document.getElementById('rock');

function cpu_plays()
{
    const random =Math.floor(Math.random() * 3) + 1;
    if(random == 1)
    {
        return '✊'
    }
    if(random == 2)
    {
        return '✋'
    }
    else
    {
        return '✌'
    }
}

function play_round(choice)
{
    choiceG = choice;
    var tie = 0;
    cpu_choice = cpu_plays();

    if(cpu_choice == choice)
    {
        tie = 1
        scoreInfo.textContent = "It's a tie!"
        scoreMessage.textContent = choice + "ties" + cpu_choice;
    }

    if(cpu_choice == "✊" && tie != 1)
    {
        if (choice == "✌")
        {
            CPU_score++;
            scoreInfo.textContent = "CPU wins this round!"
            scoreMessage.textContent = choice + "loses against" + cpu_choice;
        }
        else
        {
            player_score++;
            scoreInfo.textContent = "Player wins this round!"
            scoreMessage.textContent = choice + "wins against" + cpu_choice;
        }
    }

    if(cpu_choice == "✋" && tie != 1)
    {
        if (choice == "✊")
        {
            CPU_score++;
            scoreInfo.textContent = "CPU wins this round!"
            scoreMessage.textContent = choice + "loses against" + cpu_choice;
        }
        else
        {
            player_score++;
            scoreInfo.textContent = "Player wins this round!"
            scoreMessage.textContent = choice + "wins against" + cpu_choice;
        }
    }

    if(cpu_choice == "✌" && tie != 1)
    {
        if (choice == "✋")
        {
            CPU_score++;
            scoreInfo.textContent = "CPU wins this round!"
            scoreMessage.textContent = choice + "loses against" + cpu_choice;
        }
        else
        {
            player_score++;
            scoreInfo.textContent = "Player wins this round!"
            scoreMessage.textContent = choice + "wins against" + cpu_choice;
        }
    }
    if (player_score == 5)
    {
        scoreInfo.textContent = "Player wins!"
        scoreMessage.textContent = choice + "wins against" + cpu_choice;
        player_score = 0
        CPU_score = 0
    }

    if (CPU_score == 5)
    {
        scoreInfo.textContent = "CPU wins!"
        scoreMessage.textContent = choice + "wins against" + cpu_choice;
        player_score = 0
        CPU_score = 0
    }
    
    


}

//UI code


          paperBtn.addEventListener('click', function (e) {
              play_round('✋');
              playerScorePara.textContent = 'Player:' + player_score;
              computerScorePara.textContent = 'CPU:' + CPU_score;   
              playerSign.textContent = choiceG;
              computerSign.textContent = cpu_choice;  

            });


        scissorsBtn.addEventListener('click', function (e) {
            play_round('✌');
            playerScorePara.textContent = 'Player:' + player_score;
            computerScorePara.textContent = 'CPU:' + CPU_score; 
            playerSign.textContent = choiceG;
            computerSign.textContent = cpu_choice;  
          });


          rockBtn.addEventListener('click', function (e) {
            play_round('✊');
            playerScorePara.textContent = 'Player:' + player_score;
            computerScorePara.textContent = 'CPU:' + CPU_score;   
            playerSign.textContent = choiceG;
            computerSign.textContent = cpu_choice;
          });










