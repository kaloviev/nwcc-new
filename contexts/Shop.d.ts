interface IShopContext {
  description: string
  menuindex: number
  title: string
  cached: boolean
  alias: string
  long_title: string
  id: number
  categories: Array<IShopCategory>
}

interface IShopCategory {
  description: string
  menuindex: number
  alias: string
  title: string
  longtitle: string
  id: number
}
