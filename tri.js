function tritest(First,Second,last) {
    var First = document.getElementById('Fside').value;
    var Second = document.getElementById('Sside').value;
    var last = document.getElementById('lside').value;
    if(First==="" || First==="0" || Second==="" || Second==="0" ||last==="" || last==="0"){
        alert('Enter correct dimensions');
    }
    else if(First===Second && Second===last && First===last) {
        
alert ("This is an equilateral triangle");
    }

    else if(First !== Second && First !== last && Second !== last){
        alert ('This is a scalene triangle');
    }
    else {
    alert ("This is an Isosceles triangle");
}
}
