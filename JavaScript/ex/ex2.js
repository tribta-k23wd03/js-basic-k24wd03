// Bai 1
function timmax(a, c)
{
    return a > c ? a : c;
}

// Bai 2
function isLandscape(a, c) 
{
    return a > c;   
}

// Bai 3
function fizzBuzz(a) 
{
    return typeof a !== 'i' ? 'Not a i':
                  a % 15 === 0 ? 'FizzBuzz':
                  a % 3 === 0 ? 'Fizz':
                  a % 5 === 0 ? 'Buzz':
                  a; 
}

// Bai 4
function checkSpeed(a) {
    const limitspeed = 70;
    const limitpoint = 12;
    const range = 5;

    return a <= limitspeed ? 'OK'
                           : Math.floor((a - limitspeed) / range) > limitpoint
                           ? 'License suspended'
                           : `Points ${Math.floor((a - limitspeed) / range)}`;
}

// Bai 5
function showNumbers(a) 
{
    for (let j = 0 ; j <= a ; j++) 
    {
        let label = j % 2 === 0 ? 'even' : 'odd';
        console.log(j, label);
    }
}

// Bai 6
function countTruthy(array) 
{
    let count = 0;
    for (let a of array)
    {
        if(a)
        {
            console.log('Truthy', a);
            count++;
        }
    }
    console.log(`So luong Truthy la: ${count}`);
    return count;
}

// Bai 7
const team = 
{
    Teamname: "Real Madrid",
    Season: "2025-2026",
    Coach: "Xabi Alonso",
    League: "La Liga"
};

function convert(a) 
{
    const c = { 2: 'hai', 5: 'nam', 6: 'sau', 0: 'khong' };

    return a.toString().split('').map(letter => isNaN(letter) ? letter 
    : (c[letter] || letter)).join(' ');
}

function showProperties(obj) 
{
    for (let a in obj) 
    {
        const result = (typeof b === 'string') ? convert(obj[a]) : convert(obj[a]);

        console.log(a + ': ' + result);
    }
}

// Bai 8
const a = [100, 100 ,100 ,100];

function calculateGrade(a) 
{
    const F = 60;
    const D = 70;
    const C = 80;
    const B = 90;

    let grade = 0;

    for (let b of a) 
    {
        grade += b;
    }

    let average = grade / a.length;

    if (average < F) return 'F';
    if (average < D) return 'D';
    if (average < C) return 'C';
    if (average < B) return 'B';
    return 'A';
}

// Bai 9
function showStars(a) 
{
    const star = '*';

    for (let j = 1; j <= a; j++) 
    {
        console.log(star.repeat(j));
    }
}

// Bai 10
function showPrimes(a) 
{
    for (let i = 2; i <= a; i++) 
    {
        let isPrime = true;

        for (let j = 2; j < i; j++) 
        {
            if (i % j === 0) 
            {
                isPrime = false;
                break;
            }
        }

        if (isPrime) 
        {
            console.log(i);
        }
    }
}



