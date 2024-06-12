function obelix()
{
    var julka=document.getElementById('pole').value;
   if(julka=='Mateusz')
    {
        document.getElementById('test').innerHTML='Prosze o dobre zachowanie';
        document.getElementById("zdj").innerHTML = "<img src='please.jpg'>";
    }
    else if(julka=='mateusz')
        {
            document.getElementById('test').innerHTML='Prosze o dobre zachowanie';
            document.getElementById("zdj").innerHTML = "<img src='please.jpg'>";
        }
        else if(julka=='MATEUSZ')
            {
                document.getElementById('test').innerHTML='Prosze o dobre zachowanie';
                document.getElementById("zdj").innerHTML = "<img src='please.jpg'>";
            }
    else
    {
        document.getElementById('test').innerHTML='To nie jest poprawne imie';
        document.getElementById("zdj").innerHTML = "<img src='x.png'>";
    }
}