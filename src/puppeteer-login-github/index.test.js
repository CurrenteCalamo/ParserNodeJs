import scrape from './index'
import config from '../config'

jest.setTimeout(500000);
describe('puppeter-login-github :', () => {
    test('should something', async () => {
        await scrape({
            username: config.github.username,
            password: config.github.password,
            search: "bitcoin",
        });

    });
});
