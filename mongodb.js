use contact
switched to db contact
db.createCollection("contactlist")
{ ok: 1 }
db.contactlist.insertMany([
  { lastName: "Ben", firstName: "Moris", email: "ben@gmail.com", age: 26 },
  { lastName: "Kefi", firstName: "Seif", email: "kefi@gmail.com", age: 15 },
  { lastName: "Emilie", firstName: "Brouge", email: "emilie.b@gmail.com", age: 40 },
  { lastName: "Alex", firstName: "Brown", age: 4 },
  { lastName: "Denzel", firstName: "Washington", age: 3 }
])
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('67152c626d47593ea874a68c'),
    '1': ObjectId('67152c626d47593ea874a68d'),
    '2': ObjectId('67152c626d47593ea874a68e'),
    '3': ObjectId('67152c626d47593ea874a68f'),
    '4': ObjectId('67152c626d47593ea874a690')
  }
}
db.contactlist.find()
{
  _id: ObjectId('67152c626d47593ea874a68c'),
  lastName: 'Ben',
  firstName: 'Moris',
  email: 'ben@gmail.com',
  age: 26
}
{
  _id: ObjectId('67152c626d47593ea874a68d'),
  lastName: 'Kefi',
  firstName: 'Seif',
  email: 'kefi@gmail.com',
  age: 15
}
{
  _id: ObjectId('67152c626d47593ea874a68e'),
  lastName: 'Emilie',
  firstName: 'Brouge',
  email: 'emilie.b@gmail.com',
  age: 40
}
{
  _id: ObjectId('67152c626d47593ea874a68f'),
  lastName: 'Alex',
  firstName: 'Brown',
  age: 4
}
{
  _id: ObjectId('67152c626d47593ea874a690'),
  lastName: 'Denzel',
  firstName: 'Washington',
  age: 3
}
db.contactlist.find({ _id: ObjectId("67152c626d47593ea874a68f") })
{
  _id: ObjectId('67152c626d47593ea874a68f'),
  lastName: 'Alex',
  firstName: 'Brown',
  age: 4
}
db.contactlist.find({ age: { $gt: 18 } })
{
  _id: ObjectId('67152c626d47593ea874a68c'),
  lastName: 'Ben',
  firstName: 'Moris',
  email: 'ben@gmail.com',
  age: 26
}
{
  _id: ObjectId('67152c626d47593ea874a68e'),
  lastName: 'Emilie',
  firstName: 'Brouge',
  email: 'emilie.b@gmail.com',
  age: 40
}
db.contactlist.find({ age: { $gt: 18 }, firstName: { $regex: /ah/i } })
db.contactlist.find({ age: { $gt: 18 } })
{
  _id: ObjectId('67152c626d47593ea874a68c'),
  lastName: 'Ben',
  firstName: 'Moris',
  email: 'ben@gmail.com',
  age: 26
}
{
  _id: ObjectId('67152c626d47593ea874a68e'),
  lastName: 'Emilie',
  firstName: 'Brouge',
  email: 'emilie.b@gmail.com',
  age: 40
}
db.contactlist.inserteOne(
  { firstName: "Kefi", lastName: "Seif" },
  { $set: { firstName: "Kefi Anis" } }
)
TypeError: db.contactlist.inserteOne is not a function
db.contactlist.updateOne(
  { firstName: "Kefi", lastName: "Seif" },
  { $set: { firstName: "Kefi Anis" } }
)
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 0,
  modifiedCount: 0,
  upsertedCount: 0
}
db.contactlist.updateOne([{ firstName: "Kefi", lastName: "Seif" },
  { $set: { firstName: "Kefi Anis" } }])
MongoInvalidArgumentError: Update document requires atomic operators
db.contactlist.deleteMany({ age: { $lt: 5 } })
{
  acknowledged: true,
  deletedCount: 2
}
db.contactlist.find()
{
  _id: ObjectId('67152c626d47593ea874a68c'),
  lastName: 'Ben',
  firstName: 'Moris',
  email: 'ben@gmail.com',
  age: 26
}
{
  _id: ObjectId('67152c626d47593ea874a68d'),
  lastName: 'Kefi',
  firstName: 'Seif',
  email: 'kefi@gmail.com',
  age: 15
}
{
  _id: ObjectId('67152c626d47593ea874a68e'),
  lastName: 'Emilie',
  firstName: 'Brouge',
  email: 'emilie.b@gmail.com',
  age: 40
}
contact

