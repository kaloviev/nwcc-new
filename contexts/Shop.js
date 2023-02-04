import { createContext } from 'react'

/**
 * @typedef {Object} IShopContext
 * @property {string} description - A description of the shop.
 * @property {number} menuindex - The index of the menu item.
 * @property {string} title - The title of the shop.
 * @property {boolean} cached - Indicates if the data is cached.
 * @property {string} alias - An alias for the shop.
 * @property {string} long_title - A longer title for the shop.
 * @property {number} id - The unique identifier of the shop.
 * @property {Array<IShopCategory>} categories - An array of shop categories.
 */

/**
 * @typedef {Object} IShopCategory
 * @property {string} description - A description of the shop category.
 * @property {number} menuindex - The index of the menu item.
 * @property {string} alias - An alias for the shop category.
 * @property {string} title - The title of the shop category.
 * @property {string} longtitle - A longer title for the shop category.
 * @property {number} id - The unique identifier of the shop category.
 */

/**
 * @type {IShopContext}
 */
const ShopContext = createContext({})

export default ShopContext
