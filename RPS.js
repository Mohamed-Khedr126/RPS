function cpu_plays()
{
    const random =Math.floor(Math.random() * 3) + 1;
    if(random == 1)
    {
        return 'ROCK'
    }
    if(random == 2)
    {
        return 'PAPER'
    }
    else
    {
        return 'SCISSORS'
    }
}

function play_round()
{
    var cpu_choice = cpu_plays();
    var player_choice = prompt("What is your play?");
    player_choice = player_choice.toUpperCase();
    console.log(player_choice)

    //Invalidates Odd inputs
    if(player_choice != "ROCK" && player_choice != "PAPER" && player_choice != "SCISSORS")
    {
        while(player_choice != "ROCK" && player_choice != "PAPER" && player_choice != "SCISSORS")
        {
            player_choice = prompt("Please enter a valid choice")
            player_choice = player_choice.toUpperCase();
        }
    }

    if(cpu_choice == player_choice)
    {
        alert("Tie!");
        return 0;
    }

    if(cpu_choice == "ROCK")
    {
        if (player_choice == "SCISSORS")
        {
            alert("CPU wins round")
            return 1;
        }
        else
        {
            alert("Player wins round")
            return -1;
        }
    }

    if(cpu_choice == "PAPER")
    {
        if (player_choice == "ROCK")
        {
            alert("CPU wins round")
            return 1;
        }
        else
        {
            alert("Player wins round")
            return -1;
        }
    }

    if(cpu_choice == "SCISSORS")
    {
        if (player_choice == "PAPER")
        {
            alert("CPU wins round")
            return 1;
        }
        else
        {
            alert("Player wins round")
            return -1;
        }
    }
}

//Main starts
    var i = 0;
    var wins = 0;
    while(-3 < wins < 3 && i < 5)
    {
        wins += play_round();
        i++;
    }
    if(wins < 0)
    {
        alert("Player Wins");
    }
    else
    {
        alert("CPU Wins")
    }




