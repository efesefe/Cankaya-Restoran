function billThemAll()
{
    var a = document.getElementById("soup");
    var b = document.getElementById("main-course");
    var c = document.getElementById("salad");
    var d = document.getElementById("dessert");
    var e = document.getElementById("bevareges");
    var total = 0;
    document.getElementById("billem").value = null;
    switch(a.selectedIndex)
    {
        case 0:
            total += 0;
            document.getElementById("billem").value += "No Soup\n";
            break;
        case 1:
            total += 10;
            document.getElementById("billem").value += "mercü -> 10tl\n";
            break;
        case 2:
            total += 11;
            document.getElementById("billem").value += "Tarhana -> 11tl\n";
            break;
        case 3:
            total += 12;
            document.getElementById("billem").value += "Chicken Soup -> 12tl\n";
            break;
        default:
            break
    }
    switch(b.selectedIndex)
    {
        case 0:
            total += 0;
            document.getElementById("billem").value += "No Main Course\n";
            break;
        case 1:
            total += 15;
            document.getElementById("billem").value += "Kush-Kash -> 15tl\n";
            break;
        case 2:
            total += 7.5;
            document.getElementById("billem").value += "Shırdan -> 7.50tl\n";
            break;
        case 3:
            total += 18;
            document.getElementById("billem").value += "Mantı -> 18tl\n";
            break;
        default:
            break
    }
    switch(c.selectedIndex)
    {
        case 0:
            total += 0;
            document.getElementById("billem").value += "No Salad\n";
            break;
        case 1:
            total += 8;
            document.getElementById("billem").value += "Caesar -> 8tl\n";
            break;
        case 2:
            total += 12.25;
            document.getElementById("billem").value += "Sportsalad -> 12.25tl\n";
            break;
        case 3:
            total += 17;
            document.getElementById("billem").value += "Veganım -> 17tl\n";
            break;
        default:
            break
    }
    switch(d.selectedIndex)
    {
        case 0:
            total += 0;
            document.getElementById("billem").value += "no Dessert\n";
            break;
        case 1:
            total += 9;
            document.getElementById("billem").value += "Trixy -> 9tl\n";
            break;
        case 2:
            total += 16;
            document.getElementById("billem").value += "Magic -> 16tl\n";
            break;
        case 3:
            total += 6;
            document.getElementById("billem").value += "Doughnut -> 6tl\n";
            break;
        default:
            break
    }
    switch(e.selectedIndex)
    {
        case 0:
            total += 0;
            document.getElementById("billem").value += "No Bevarege\n";
            break;
        case 1:
            total += 3;
            document.getElementById("billem").value += "Ayran -> 3tl\n";
            break;
        case 2:
            total += 4;
            document.getElementById("billem").value += "Shalgam -> 4tl\n";
            break;
        case 3:
            total += 1;
            document.getElementById("billem").value += "Water -> 1tl\n";
            break;
        default:
            break
    }
    var tip = document.getElementById("tipping").value;
    document.getElementById("billem").value += "Expenses: " + total + "tl" + " tip = " + tip+"tl\n";
    total += parseFloat(tip);
    document.getElementById("billem").value +="Total= " + total;
}
function clearThemAll()
{
    document.getElementById("billem").value = null;
    document.getElementById("soup").value = 0;
    document.getElementById("main-course").value = 0;
    document.getElementById("salad").value = 0; 
    document.getElementById("dessert").value = 0;
    document.getElementById("bevareges").value = 0;
}
function isItNegative()
{
    if(document.getElementById("tipping").value - 1 < 0)
    {
        document.getElementById("tipping").value = 0;
    }
}