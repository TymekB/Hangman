var wordList = ["html", "css", "javascript", "jquery", "ajax", "sass", "less", "stylus", "drupal", "joomla", "wordpress", "symfony", "laravel", "zend", "python", "django", "ruby", "java", "mysql", "postgre sql", "mongo db", "bootstrap"];
var pass = wordList[Math.floor(Math.random()*wordList.length)];
var dashes = new Array(pass.length);
var letters = ['A','Ą','B', 'C','Ć', 'D', 'E', 'Ę', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'Ł', 'M', 'N', 'Ń', 'O', 'Ó', 'P', 'Q', 'R', 'S', 'Ś', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'Ź', 'Ż'];
var length = 0;
var hit = 0;
var no_hit = 0;
var guess = 0;

pass = pass.toUpperCase();

for(var i = 0; i < pass.length; i++)
{
    if(pass.charAt(i) == " ")
    {
        dashes[i] = " ";
    }
    else
    {
        dashes[i] = "-";
        length++;
    }
}

function show_pass()
{
    var series = "";

    for(var i = 0; i < pass.length; i++)
    {
        series = series + dashes[i];
    }

    document.getElementById("rectangle").innerHTML = series;
}

function check(nr)
{
    var fail = true;

    guess++;
    for(var i = 0; i < pass.length; i++)
    {
        if(pass.charAt(i) == letters[nr])
        {
            dashes[i] = letters[nr];
            hit++;
            fail = false;
        }
    }

    if(fail == true)
    {
        no_hit++;
        document.getElementById("letter" + nr).style.background = "#a82d2d";
        document.getElementById("letter" + nr).style.border = "1px solid #a82d2d";
    }
    else if(fail == false)
    {
        document.getElementById("letter" + nr).style.background = "#34a355";
        document.getElementById("letter" + nr).style.border = "1px solid #34a355";
    }

    if(no_hit >= 6)
    {
        document.getElementById("alphabet").innerHTML = '<span style="color: #d84343";">Przegrana!</span> <br /> Hasło: '+pass;
    }

    if(hit == length)
    {
        document.getElementById("alphabet").innerHTML = '<span style="color: #3bb560;">Wygrana!</span> <br /> Odgadłeś słowo w '+guess+' próbach!';
    }


    show_pass();
}

function start()
{
    var series = "";
    var id;

    for(var i = 0; i < 35; i++)
    {
        id = "letter" + i;
        series = series + '<div id="'+id+'" class="letter" onclick="check('+i+')">' + letters[i] + '</div>';
        if((i+1) % 7 == 0)
        {
            series = series + '<div style="clear: both"></div>';
        }

    }

    document.getElementById("alphabet").innerHTML = series;
    show_pass();
}

window.onload = start;