// XD. What are you looking here for???
/**
 * @type {{ default: never; }}
 */
// @ts-ignore
const fakeExports = {};
Object.defineProperty(fakeExports, "default", {
	/**
	 * @returns {never}
	 */
	get: () => {
		throw new Error("Do not use this module in code as it only exports type defs");
	}
});
module.exports = fakeExports;
