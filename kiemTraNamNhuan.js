let year;
year = Number(prompt('Nhap nam can kiem tra'));
alert(year);
if (year%100==0)
    if (year%400==0)
        alert ('Nam nhuan');
    else
        alert ('Khong nhuan');
else
    if (year%4==0)
        alert ('Nam nhuan');
    else
        alert ('Khong nhuan');
