let flag=1

function my_func()
{
    let b1=document.getElementById("box-1").value;
    console.log(b1)
    let b2=document.getElementById("box-2").value;
    let b3=document.getElementById("box-3").value;
    let b4=document.getElementById("box-4").value;
    let b5=document.getElementById("box-5").value;
    let b6=document.getElementById("box-6").value;
    let b7=document.getElementById("box-7").value;
    let b8=document.getElementById("box-8").value;
    let b9=document.getElementById("box-9").value;
    if ((b1 == 'x' || b1 == "X") && (b2 == 'x' ||
        b2 == "X") && (b3 == 'x' || b3 == "X")) {
        document.getElementById("print")
            .innerHTML = "Player X won";
        document.getElementById("box-4").disabled = true;
        document.getElementById("box-5").disabled = true;
        document.getElementById("box-6").disabled = true;
        document.getElementById("box-7").disabled = true;
        document.getElementById("box-8").disabled = true;
        document.getElementById("box-9").disabled = true;
        window.alert('Player X won');        
    }
    else if ((b1 == 'x' || b1 == 'X') && (b4 == 'x' ||
        b4 == 'X') && (b7 == 'x' || b7 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("box-2").disabled = true;
        document.getElementById("box-3").disabled = true;
        document.getElementById("box-5").disabled = true;
        document.getElementById("box-6").disabled = true;
        document.getElementById("box-8").disabled = true;
        document.getElementById("box-9").disabled = true;
 
        window.alert('Player X won');
    }
    else if ((b7 == 'x' || b7 == 'X') && (b8 == 'x' ||
        b8 == 'X') && (b9 == 'x' || b9 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("box-1").disabled = true;
        document.getElementById("box-2").disabled = true;
        document.getElementById("box-3").disabled = true;
        document.getElementById("box-4").disabled = true;
        document.getElementById("box-5").disabled = true;
        document.getElementById("box-6").disabled = true;
        window.alert('Player X won');
    }
    else if ((b3 == 'x' || b3 == 'X') && (b6 == 'x' ||
        b6 == 'X') && (b9 == 'x' || b9 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("box-1").disabled = true;
        document.getElementById("box-2").disabled = true;
        document.getElementById("box-4").disabled = true;
        document.getElementById("box-5").disabled = true;
        document.getElementById("box-7").disabled = true;
        document.getElementById("box-8").disabled = true;
        window.alert('Player X won');
    }
    else if ((b1 == 'x' || b1 == 'X') && (b5 == 'x' ||
        b5 == 'X') && (b9 == 'x' || b9 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("box-2").disabled = true;
        document.getElementById("box-3").disabled = true;
        document.getElementById("box-4").disabled = true;
        document.getElementById("box-6").disabled = true;
        document.getElementById("box-7").disabled = true;
        document.getElementById("box-8").disabled = true;
        window.alert('Player X won');
    }
    else if ((b3 == 'x' || b3 == 'X') && (b5 == 'x' ||
        b5 == 'X') && (b7 == 'x' || b7 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("box-1").disabled = true;
        document.getElementById("box-2").disabled = true;
        document.getElementById("box-4").disabled = true;
        document.getElementById("box-6").disabled = true;
        document.getElementById("box-8").disabled = true;
        document.getElementById("box-9").disabled = true;
        window.alert('Player X won');
    }
    else if ((b2 == 'x' || b2 == 'X') && (b5 == 'x' ||
        b5 == 'X') && (b8 == 'x' || b8 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("box-1").disabled = true;
        document.getElementById("box-3").disabled = true;
        document.getElementById("box-4").disabled = true;
        document.getElementById("box-6").disabled = true;
        document.getElementById("box-7").disabled = true;
        document.getElementById("box-9").disabled = true;
        window.alert('Player X won');
    }
    else if ((b4 == 'x' || b4 == 'X') && (b5 == 'x' ||
        b5 == 'X') && (b6 == 'x' || b6 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("box-1").disabled = true;
        document.getElementById("box-2").disabled = true;
        document.getElementById("box-3").disabled = true;
        document.getElementById("box-7").disabled = true;
        document.getElementById("box-8").disabled = true;
        document.getElementById("box-9").disabled = true;
        window.alert('Player X won');
    }
 
    // Checking of Player X finish
    // Checking for Player 0 starts, Is player 0 won or
    // not and after that disabled all the other fields
    else if ((b1 == '0' || b1 == '0') && (b2 == '0' ||
        b2 == '0') && (b3 == '0' || b3 == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        document.getElementById("box-4").disabled = true;
        document.getElementById("box-5").disabled = true;
        document.getElementById("box-6").disabled = true;
        document.getElementById("box-7").disabled = true;
        document.getElementById("box-8").disabled = true;
        document.getElementById("box-9").disabled = true;
        window.alert('Player 0 won');
    }
    else if ((b1 == '0' || b1 == '0') && (b4 == '0' ||
        b4 == '0') && (b7 == '0' || b7 == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        document.getElementById("box-2").disabled = true;
        document.getElementById("box-3").disabled = true;
        document.getElementById("box-5").disabled = true;
        document.getElementById("box-6").disabled = true;
        document.getElementById("box-8").disabled = true;
        document.getElementById("box-9").disabled = true;
        window.alert('Player 0 won');
    }
    else if ((b7 == '0' || b7 == '0') && (b8 == '0' ||
        b8 == '0') && (b9 == '0' || b9 == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        document.getElementById("box-1").disabled = true;
        document.getElementById("box-2").disabled = true;
        document.getElementById("box-3").disabled = true;
        document.getElementById("box-4").disabled = true;
        document.getElementById("box-5").disabled = true;
        document.getElementById("box-6").disabled = true;
        window.alert('Player 0 won');
    }
    else if ((b3 == '0' || b3 == '0') && (b6 == '0' ||
        b6 == '0') && (b9 == '0' || b9 == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        document.getElementById("box-1").disabled = true;
        document.getElementById("box-2").disabled = true;
        document.getElementById("box-4").disabled = true;
        document.getElementById("box-5").disabled = true;
        document.getElementById("box-7").disabled = true;
        document.getElementById("box-8").disabled = true;
        window.alert('Player 0 won');
    }
    else if ((b1 == '0' || b1 == '0') && (b5 == '0' ||
        b5 == '0') && (b9 == '0' || b9 == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        document.getElementById("box-2").disabled = true;
        document.getElementById("box-3").disabled = true;
        document.getElementById("box-4").disabled = true;
        document.getElementById("box-6").disabled = true;
        document.getElementById("box-7").disabled = true;
        document.getElementById("box-8").disabled = true;
        window.alert('Player 0 won');
    }
    else if ((b3 == '0' || b3 == '0') && (b5 == '0' ||
        b5 == '0') && (b7 == '0' || b7 == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        document.getElementById("box-1").disabled = true;
        document.getElementById("box-2").disabled = true;
        document.getElementById("box-4").disabled = true;
        document.getElementById("box-6").disabled = true;
        document.getElementById("box-8").disabled = true;
        document.getElementById("box-9").disabled = true;
        window.alert('Player 0 won');
    }
    else if ((b2 == '0' || b2 == '0') && (b5 == '0' ||
        b5 == '0') && (b8 == '0' || b8 == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        document.getElementById("box-1").disabled = true;
        document.getElementById("box-3").disabled = true;
        document.getElementById("box-4").disabled = true;
        document.getElementById("box-6").disabled = true;
        document.getElementById("box-7").disabled = true;
        document.getElementById("box-9").disabled = true;
        window.alert('Player 0 won');
    }
    else if ((b4 == '0' || b4 == '0') && (b5 == '0' ||
        b5 == '0') && (b6 == '0' || b6 == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        document.getElementById("box-1").disabled = true;
        document.getElementById("box-2").disabled = true;
        document.getElementById("box-3").disabled = true;
        document.getElementById("box-7").disabled = true;
        document.getElementById("box-8").disabled = true;
        document.getElementById("box-9").disabled = true;
        window.alert('Player 0 won');
    }
 
    // Checking of Player 0 finish
    // Here, Checking about Tie
    else if ((b1 == 'X' || b1 == '0') && (b2 == 'X'
        || b2 == '0') && (b3 == 'X' || b3 == '0') &&
        (b4 == 'X' || b4 == '0') && (b5 == 'X' ||
        b5 == '0') && (b6 == 'X' || b6 == '0') &&
        (b7 == 'X' || b7 == '0') && (b8 == 'X' ||
        b8 == '0') && (b9 == 'X' || b9 == '0')) {
            document.getElementById('print')
                .innerHTML = "Match Tie";
            window.alert('Match Tie');
    }
}













function reset_all()
{
    document.getElementById("box-1").value=""
    document.getElementById("box-2").value=""
    document.getElementById("box-3").value=""
    document.getElementById("box-4").value=""
    document.getElementById("box-5").value=""
    document.getElementById("box-6").value=""
    document.getElementById("box-7").value=""
    document.getElementById("box-8").value=""
    document.getElementById("box-9").value=""
    document.getElementById("print").innerHTML=""
    // document.getElementsByClassName("classes").disabled=false
    var cells = document.getElementsByClassName("boxes"); 
    for (var i = 0; i < cells.length; i++) { 
    cells[i].disabled = false;
}
}

function togglehehe()
{
    if(flag==1)
    {
        document.getElementById("print").innerHTML="Player X's Turn"
    }
    else{
        document.getElementById("print").innerHTML="PLayer 0's Turn"
    }
}


function myfunc_1()
{
    if(flag==1)
    {
        document.getElementById("box-1").value="X"
        document.getElementById("box-1").disabled=true;
        flag=0
        togglehehe()
    }
    else
    {
        document.getElementById("box-1").value="0"
        document.getElementById("box-1").disabled=true;
        flag=1
        togglehehe()
    }
    
}

function myfunc_2()
{
    if(flag==1)
    {
        document.getElementById("box-2").value="X"
        document.getElementById("box-2").disabled=true;
        flag=0
        togglehehe()
    }
    else
    {
        document.getElementById("box-2").value="0"
        document.getElementById("box-2").disabled=true;
        flag=1
        togglehehe()
    }
}

function myfunc_3()
{
    if(flag==1)
    {
        document.getElementById("box-3").value="X"
        document.getElementById("box-3").disabled=true;
        flag=0
        togglehehe()
    }
    else
    {
        document.getElementById("box-3").value="0"
        document.getElementById("box-3").disabled=true;
        flag=1
        togglehehe()
    }
}

function myfunc_4()
{
    if(flag==1)
    {
        document.getElementById("box-4").value="X"
        document.getElementById("box-4").disabled=true;
        flag=0
        togglehehe()
    }
    else
    {
        document.getElementById("box-4").value="0"
        document.getElementById("box-4").disabled=true;
        flag=1
        togglehehe()
    }
}

function myfunc_5()
{
    if(flag==1)
    {
        document.getElementById("box-5").value="X"
        document.getElementById("box-5").disabled=true;
        flag=0
        togglehehe()
    }
    else
    {
        document.getElementById("box-5").value="0"
        document.getElementById("box-5").disabled=true;
        flag=1
        togglehehe()
    }
}

function myfunc_6()
{
    if(flag==1)
    {
        document.getElementById("box-6").value="X"
        document.getElementById("box-6").disabled=true;
        flag=0
        togglehehe()
    }
    else
    {
        document.getElementById("box-6").value="0"
        document.getElementById("box-6").disabled=true;
        flag=1
        togglehehe()
    }
}

function myfunc_7()
{
    if(flag==1)
    {
        document.getElementById("box-7").value="X"
        document.getElementById("box-7").disabled=true;
        flag=0
        togglehehe()
    }
    else
    {
        document.getElementById("box-7").value="0"
        document.getElementById("box-7").disabled=true;
        flag=1
        togglehehe()
    }
}

function myfunc_8()
{
    if(flag==1)
    {
        document.getElementById("box-8").value="X"
        document.getElementById("box-8").disabled=true;
        flag=0
        togglehehe()
    }
    else
    {
        document.getElementById("box-8").value="0"
        document.getElementById("box-8").disabled=true;
        flag=1
        togglehehe()
    }
}

function myfunc_9()
{
    if(flag==1)
    {
        document.getElementById("box-9").value="X"
        document.getElementById("box-9").disabled=true;
        flag=0
        togglehehe()
    }
    else
    {
        document.getElementById("box-9").value="0"
        document.getElementById("box-9").disabled=true;
        flag=1
        togglehehe()
    }
}


