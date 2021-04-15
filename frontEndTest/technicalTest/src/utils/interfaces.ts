export interface Action {
    type: string,
    data: any
  }

export interface Item{
    id:number,
    attributes: any
}

export interface Store{
    id:number,
    attributes:any,
    relationships: {
        items:Item[]
    }
}

export interface ShoppingCart {
  data: {
      stores:{
          data:Store[]
        }
    }
}

export interface ActionProductsRelatedActions{
    type: string,
    data: ShoppingCart,
    }

export interface reduxStateInterface{
    shoppingCart: ShoppingCart,
    }

export interface mapStateToPropsReturnInterface{
        shoppingCart: ShoppingCart
      }

// =================================ShoppingCart component interface=========================

export interface ShoppingCartProps {
    shoppingCart:ShoppingCart,
    actions:{
        loadShoppingCart: Function // Already typed in REDUX actions
    }
    navigation: {navigate:Function}
  }

// =================================ContinueShopping component interface=========================

export interface ContinueShoppingProps {
    navigation: {navigate:Function}
  }

// ================================ShoppingCartSummary component interface=======================

export interface ShoppingCartSummaryProps {
    shoppingCart:ShoppingCart,
    navigation: {navigate:Function}
  }

// ================================OrderSummary component interface=======================

export interface OrderSummaryProps {
    shoppingCart:ShoppingCart,
  }

// ================================Item component interface=======================

export interface ItemProps {
    product:Item,
    storeData:{
        storename: string,
         storeId: number
     }
    shoppingCart:ShoppingCart,
    actions:{
        increaseDecreaseQuantity: Function // Already typed in REDUX actions
    },
    casuistic:string
  }

// ================================buyProductsStyles component interface=======================

export interface buyProductsStylesyProps {
    shoppingCart:ShoppingCart,
    navigation: {navigate:Function}
  }
