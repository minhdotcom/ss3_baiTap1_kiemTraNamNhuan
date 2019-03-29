let year;
year = Number(prompt('Nhap nam can kiem tra'));
function leapYear(year)
{
    return (year % 400 == 0)|| ((year % 100 != 0) &&(year % 4 == 0))
}
if (leapYear(year))
    alert ('Nam nhuan');
else
    alert ('Khong nhuan');