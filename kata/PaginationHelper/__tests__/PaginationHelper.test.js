const PaginationHelper = require('../PaginationHelper.js')

describe('PaginationHelper', () => {
	beforeAll(() => {
		this.helper = new PaginationHelper(
			[
				1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
				19, 20, 21, 22, 23, 24,
			],
			10
		)
	})

	it('should return 3 for PaginationHelper.pageCount()', () => {
		expect(this.helper.pageCount()).toBe(3)
	})

	it('should return 2 for PaginationHelper.pageIndex(23)', () => {
		expect(this.helper.pageIndex(23)).toBe(2)
	})

	it('should return -1 for PaginationHelper.pageItemCount(-1)', () => {
		expect(this.helper.pageItemCount(3)).toBe(-1)
	})

	it('should return 4 for PaginationHelper.pageItemCount(2)', () => {
		expect(this.helper.pageItemCount(2)).toBe(4)
	})

	it('should return 24 for PaginationHelper.itemCount()', () => {
		expect(this.helper.itemCount()).toBe(24)
	})
})
