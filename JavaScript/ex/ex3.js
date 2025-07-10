// Bai 1
const address =
{
    number: "123/4",
    street: "Street 5",
    district: "District 6",
    city: "Seven City",
};

function showAddress(add)
{
    for ( let a in add)
    {
        console.log(a + ":" + add[a]);
    }

}

// Bai 2 - 1
function createAddress(street, city, zipCode)
{
    const address = {street, city, zipCode};

    for (let a in address)
    {
        console.log(a + ':' + address[a]);
    }

    return address;
}

// Bai 2 - 2
function Address(street, city, zipCode)
{
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;

    for (let a in this)
    {
        console.log(a + ': ' + this[a]);
    }
}

// Bai 3
function Address(street, city, zipCode) 
{
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

const add1 = new Address("x", "y", "z");
const add2 = new Address("x", "y", "c");

function areSame(add1, add2) 
{
    return add1 === add2;
}

function areEqual(add1, add2) 
{
    return add1.street === add2.street &&
           add1.city === add2.city &&
           add1.zipCode === add2.zipCode;
}

// Bai 4
const blogPost = 
{
    title: "Tieu de",
    body: "Noi dung...",
    author: "Thien An",
    views: 40,
    comments: 
    [
        {
            author: "User1",
            body: "Yes"
        },
        {
            author: "User2",
            body: "No"
        }
    ],
    isLive: true
};

// Bai 5
function Post(title, body, author) 
{
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments = [];
    this.isLive = false;
}

// Bai 6
const priceRanges = 
[
    { label: "$", price: "Inexpensive", min: 0, max: 10 },
    { label: "$$", price: "Moderate", min: 11, max: 20 },
    { label: "$$$", price: "Expensive", min: 21, max: 50 }
];

