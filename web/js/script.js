function checkPass()
{
    var password = document.getElementById('password1');
    var confirmation = document.getElementById('password2');
    var button = document.getElementById('submitButton');
    var goodColor = "#66cc66";
    var badColor = "#ff6666";
    var emptyColor = "#ffffff";
    if(password.value == confirmation.value)
    {
        confirmation.style.backgroundColor = goodColor;
        button.disabled = false;
    }
    else
    {
        button.disabled = true;
        if(confirmation.value == "")
        {
            confirmation.style.backgroundColor = emptyColor;
        }
        else
        {
            confirmation.style.backgroundColor = badColor;
        }
    }
}  