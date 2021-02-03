import { createConnectionAttempt } from './connection-attempt';

describe('connection-attempt', () => {
  describe('connect', () => {
    it('returns the connected data service', async() => {
      const dataService = {
        connect: (callback) => setTimeout(() => callback(), 25)
      };

      const connectionAttempt = createConnectionAttempt(dataService);

      const connectionAttemptResult = await connectionAttempt.connect();

      expect(connectionAttemptResult).to.deep.equal(dataService);
    });

    it('returns null if is cancelled', async() => {
      let rejectOnConnect;
      const dataService = {
        connect: () => new Promise((_, _reject) => {
          rejectOnConnect = _reject;
        })
      };

      const connectionAttempt = createConnectionAttempt(dataService);

      const connectPromise = connectionAttempt.connect();

      rejectOnConnect(new Error('should have been cancelled'));
      connectionAttempt.cancelConnectionAttempt();

      expect(await connectPromise).to.equal(null);
    });

    it('throws if connecting throws', async() => {
      let rejectOnConnect;
      const dataService = {
        connect: (callback) => {
          rejectOnConnect = callback;
        }
      };

      const connectionAttempt = createConnectionAttempt(dataService);

      const connectPromise = connectionAttempt.connect().catch(err => err);

      rejectOnConnect(new Error('should have been thrown'));

      expect((await connectPromise).message).to.equal('should have been thrown');
    });
  });
});
