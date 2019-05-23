const db = require('../data/dbConfig');
 const Hobbits = require('./hobbitsModel');

describe('hobbits model', () => {

  describe('remove()', () => {

    beforeEach(async () => {
      await db('hobbits').truncate();
    })

    it('should remove the record', async () => {
      // first insert a record
      await Hobbits.insert({ name: 'Merry' });
      const hobbits = await db('hobbits');
      console.log(hobbits);
      expect(hobbits).toHaveLength(1);

      const id = hobbits[0].id;

      await Hobbits.remove(id);
      const deletedHobbits = await db('hobbits');
      expect(deletedHobbits).not.toHaveLength(1);
      
    })
  })
  describe('insert()', () => {

    beforeEach(async () => {
      await db('hobbits').truncate();
    })

    it('should insert the provided hobbits into the db', async () => {
      await Hobbits.insert({ name: 'gaffer' });
      await Hobbits.insert({ name: 'sam' });

      const hobbits = await db('hobbits'); // returns array of names
      expect(hobbits).toHaveLength(2);
    })

    it('should insert the provided hobbit into the db', async () => {
      let hobbit = await Hobbits.insert({ name: 'gaffer' });
      expect(hobbit.name).toBe('gaffer');

      hobbit = await Hobbits.insert({ name: 'sam' });
      expect(hobbit.name).toBe('sam');
    })
  })
})