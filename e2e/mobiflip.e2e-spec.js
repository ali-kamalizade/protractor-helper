require("protractor"); // TODO DO NOT REMOVE THIS, YOU NEED IN THIS IN EVERY SPEC!

const e2e = require("../dist/index.js");
/**
 * @type {BetterProtractorService}
 */
const service = new e2e.BetterProtractorService();

describe('Mobiflip', () => {
	beforeAll(async() => {
		await service.navigateToRoute('https://mobiflip.de');
		await service.pauseBrowserTemporarily(500);
		expect(await service.checkIfRouteContains('mobiflip')).toBe(true);
	});
	it('should open first article', async() => {
		await service.clickElementByCss('.blog-widget-list > .infinite-post:first-child a');
		await service.pauseBrowserTemporarily(1000);
	});
	it('should scroll to sharing buttons', async() => {
		await service.scrollToElement('".sharep"');
		await service.pauseBrowserTemporarily(3000);
		expect(await service.getDomElementsCount('.sharep a')).toBe(4);
	});
});
