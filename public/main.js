$(document).ready(function(){
    $(".entry").click(function(){
        if (!this.innerHTML) {
            var ID = this.id;
            var icon = ($(".player").attr("activePlayer") == "player1" ? "circle" : "close");
            AddCircle(ID, icon);
            ChangePlayer();
            var winner = CheckWinner();
            if ((winner != null) && (winner[0]))
            {
                ShowWinner(winner[1]);
            }
        }
    });

    $(".reset").click(function(){
        $(".entry").empty();
        $(".entry").attr("icon", "none");
        $(".player1").css("border", "1px solid black");
        $(".player2").css("border", "none");
        $(".player").attr("activePlayer", "player1");
        $(".winner").empty();
    })
})

function AddCircle(ID, icon) {
    var returnString = '<i class="fa fa-' + icon + '" style="font-size:24px !important"></i>';
    $("#" + ID).append(returnString);
    $('#' + ID).attr("icon", icon);
}

function ChangePlayer() {
    if ($(".player").attr("activePlayer") == "player1")
    {
        $(".player1").css("border", "none");
        $(".player2").css("border", "1px solid black");
        $(".player").attr("activePlayer", "player2");
    }
    else
    {
        $(".player1").css("border", "1px solid black");
        $(".player2").css("border", "none");
        $(".player").attr("activePlayer", "player1");
    }
}

function CheckWinner(){
    for (var i = 0; i < 3; i++){
        var isWon = true;

        // check horizontal
        for (var j = 1; j < 3; j++){
            isWon = (isWon && ($("#" + i + '_0').attr("icon") == $("#" + i + '_' + j).attr("icon")));
        }
        if (isWon){
            return [true, $("#" + i + '_0').attr("icon")];
        }

        isWon = true;
        // check vertical
        for (var j = 1; j < 3; j++){
            isWon = (isWon && ($("#0_" + i).attr("icon") == $("#" + j + '_' + i).attr("icon")));
        }
        if (isWon){
            return [true, $("#0_" + i).attr("icon")];
        }
    }
}

function ShowWinner(icon)
{
    if (icon == 'circle') {
        $(".winner").text("Winner is player 1.");
    }
    else if (icon == 'close'){
        $(".winner").text("Winner is player 2.");
    }
}