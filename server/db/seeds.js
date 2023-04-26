use hotel;
db.dropDatabase()

db.bookings.insertMany([
    {
        name: "Wenjing",
        email:"wenjing2018uk@gmail.com",
        checked_in: true
    },
    {
        name: "Paul",
        email:"psc000001@gmail.com",
        checked_in: true
    }
  
])
