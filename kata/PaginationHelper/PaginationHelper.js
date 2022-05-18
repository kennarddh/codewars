// PaginationHelper
// https://www.codewars.com/kata/515bb423de843ea99400000a/javascript

// TODO: complete this object/class

// The constructor takes in an array of items and a integer indicating how many
// items fit within a single page
function PaginationHelper(collection, itemsPerPage) {
	this.collection = collection
	this.itemsPerPage = itemsPerPage

	return this
}

// returns the number of items within the entire collection
PaginationHelper.prototype.itemCount = function () {
	return this.collection.length
}

// returns the number of pages
PaginationHelper.prototype.pageCount = function () {
	return Math.ceil(this.itemCount() / this.itemsPerPage)
}

// returns the number of items on the current page. page_index is zero based.
// this method should return -1 for pageIndex values that are out of range
PaginationHelper.prototype.pageItemCount = function (pageIndex) {
	if (pageIndex < 0 || pageIndex >= this.pageCount()) return -1

	const result = this.itemCount() - pageIndex * this.itemsPerPage

	return result > this.itemsPerPage ? this.itemsPerPage : result
}

// determines what page an item is on. Zero based indexes
// this method should return -1 for itemIndex values that are out of range
PaginationHelper.prototype.pageIndex = function (itemIndex) {
	if (itemIndex < 0 || itemIndex >= this.itemCount()) return -1

	return Math.floor(itemIndex / this.itemsPerPage)
}

module.exports = PaginationHelper
