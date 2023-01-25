const {MongoClient} = require('mongodb');

describe('insert', () => {
  let connection;
  let db;

  beforeAll(async () => {
    connection = await MongoClient.connect('mongodb+srv://georgevaz:Trashtalk123@1gurjts.mongodb.net/?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    db = await connection.db();
  });

  it('should insert a basic doc into collection', async () => {
    const events = db.collection('events');
  
    const mockEvent = {
      host: "george",
      created: "2023-01-24T21:26:29.050Z",
      eventTime: "12:00",
      details: { 
          title: "beers",
          }
    };
    await events.insertOne(mockEvent);
    
    const insertedEvent = await events.findOne({details: { title: 'beers' }});
    console.log(insertedEvent)
    expect(insertedEvent).toEqual(mockEvent);
  });

  afterAll(async () => {
    await connection.close();
  });
});