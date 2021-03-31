
export interface UserInterface {
    username: string,
    password: string,
}

export interface Action {
    type: string,
    data: any
  }

export interface StatsElement{
    buyDate: Date,
    broken: boolean,
    brokenDate: Date,
    user: string,
    reason: string
}

export interface ObsoleteProductInterface {
    _id?: string
    originId: string,
    productName: string,
    thumbnailUrl: string,
    brand: string,
    category: string,
    obsoletion: number,
    updatedDate: Date,
    place: string,
    stats: StatsElement[]
}

export interface CommercialProductInterface {
    _id:string,
    brand: string,
    name: string,
    category: string,
    price: number,
    place: string,
    // eslint-disable-next-line camelcase
    thumbNail_url: string
}

export type combinedProductsInterface = ObsoleteProductInterface & CommercialProductInterface

export interface actionObjectReturnRegister {
  type: string,
  data: {
    password: string,
    result: boolean,
    status: boolean,
    username: string,
  },
}

export interface actionObjectReturnLoginLogout {
  type: string,
  data: {
    logInStatus: boolean,
    password: string,
    username: string
  },
}

export interface actionObjectReturnLoadSearch {
  type: string,
  data: { productsArray: combinedProductsInterface[],
  casuistic: string
  }
}

export interface actionObjectReturnLoadUserProfile{
  type: string,
  data: { productsArray: combinedProductsInterface[],
  }
}

export interface reduxStateInterface{

    obsoletesProductsObject: actionObjectReturnLoadSearch,
    userprofileProducts:ObsoleteProductInterface,
    obsoletesProductStats: ObsoleteProductInterface,
    userRegister: actionObjectReturnRegister['data'],
    userLogIn: actionObjectReturnLoginLogout['data'] | {},
    okToSubmitDeathReason: number

}

export interface deathStatistic {
    deathReason: string,
    amount: string,
    averageDuration: number,
    percentageDeathReason: number
  }

export interface queryArrayInterface{

    name: {
      $regex: string,
      $options:string
    }

  }

export interface actionObjectReturnLoadProduct {
    type: string,
    data: ObsoleteProductInterface
  }

export interface actionObjectReturnFeedback {
    type: string,
    data: ObsoleteProductInterface[]
  }

export interface actionObjectReturnvalidateDeathReason {
    type: string,
    data: number
  }

export interface ObsoleteProductInterfaceObject {
    productsArray: ObsoleteProductInterface[],
    casuistic: string
  }

// ======================UTILS INTERFACES==============================================
export interface userFeedbackPosibleInterface {
  userAlreadyFeedback: boolean,
  isBroken: boolean

}

export interface calculateOwnersExownersReturn {
  owners: number,
  exOwners: number
}
// ======================COMPONENTS PROPS INTERFACES===================================

export interface StatsProps {
  obsoletesProductStats:ObsoleteProductInterface,
  userLogIn:actionObjectReturnLoginLogout['data'],
  navigation: {navigate:Function}
}

export interface mapStateToPropsStatsReturnInterface{
  obsoletesProductStats: reduxStateInterface['obsoletesProductStats']
  userLogIn: reduxStateInterface['userLogIn']
}

export interface DashboardPropsInterface {
  obsoletesProductsObject:ObsoleteProductInterfaceObject,
  actions: {
    loadDashboard: Function // Already typed in REDUX actions
  },
  navigation: {navigate: Function}
}

export interface mapStateToPropsDashboardReturnInterface{
  obsoletesProductsObject: reduxStateInterface['obsoletesProductsObject']
}

export interface CasuisticProps {
  obsoletesProductsObject:ObsoleteProductInterfaceObject,
  obsoletesProductStats:combinedProductsInterface,
  userLogIn:actionObjectReturnLoginLogout['data'],
  actions: {
    feedbackNew: Function, // Already typed in REDUX actions
    loadDashboard: Function // Already typed in REDUX actions
  },
  navigation: {navigate:Function}
}

export interface mapStateToPropsCasuisticReturnInterface{
  obsoletesProductStats: reduxStateInterface['obsoletesProductStats'],
  userLogIn: reduxStateInterface['userLogIn']
}

export interface BrokenProps {
  obsoletesProductsObject:ObsoleteProductInterfaceObject,
  obsoletesProductStats:ObsoleteProductInterface,
  userLogIn:actionObjectReturnLoginLogout['data'],
  okToSubmitDeathReason:number
  actions: {
    validateDeathReason: Function, // Already typed in REDUX actions
    feedbackBroken: Function, // Already typed in REDUX actions
    loadDashboard: Function // Already typed in REDUX actions
  },
  navigation: {navigate: Function}
}

export interface mapStateToPropsBrokenReturnInterface{
  obsoletesProductStats: reduxStateInterface['obsoletesProductStats'],
  userLogIn: reduxStateInterface['userLogIn'],
  okToSubmitDeathReason: reduxStateInterface['okToSubmitDeathReason']
}

export interface ProductPropsInterface {

  singleProduct: combinedProductsInterface,
  userLogIn:actionObjectReturnLoginLogout['data'],
  actions: {
    loadProduct: Function // Already typed in REDUX actions
  },
  navigation: {navigate: Function}
}

export interface mapStateToPropsProductsReturnInterface{
  userLogIn: reduxStateInterface['userLogIn']
}

export interface NavBarPropsInterface {
  obsoletesProductsObject:ObsoleteProductInterfaceObject,
  userLogIn:actionObjectReturnLoginLogout['data'],
  actions: {
    loadDashboard: Function, // Already typed in REDUX actions
    loadUserProfile: Function, // Already typed in REDUX actions
    logOut: Function, // Already typed in REDUX actions
    searchProduct: Function // Already typed in REDUX actions
  },
  navigation: {navigate: Function}
}

export interface mapStateToPropsNavBarReturnInterface{
  obsoletesProductsObject: reduxStateInterface['obsoletesProductsObject'],
  userLogIn: reduxStateInterface['userLogIn']
}

export interface LogInSigninPropsInterface {
  userRegister: actionObjectReturnRegister['data'],
  userLogIn:actionObjectReturnLoginLogout['data'],
  actions: {
    logIn: Function, // Already typed in REDUX actions
    register: Function // Already typed in REDUX actions
    loadDashboard: Function // Already typed in REDUX actions
  },
  hamburgerControls: Function,
  logInSignInControls: Function
}

export interface mapStateToPropsLogInSigninReturnInterface{
  userRegister: reduxStateInterface['userRegister'],
  userLogIn: reduxStateInterface['userLogIn']
}

export interface FeedbackModalModelInterface {
  textToDisplay:string,
  logedUserName: string,
}

export interface CheckBoxItemPropsInterface {

  deathReason: string,
  setCurrentDeathReason:Function,
  okToSubmitDeathReason:number,
  actions: {
    validateDeathReason: Function // Already typed in REDUX actions
  },
}

export interface mapStateToPropsCheckBoxItemReturnInterface{
  obsoletesProductStats: reduxStateInterface['obsoletesProductStats'],
  userLogIn: reduxStateInterface['userLogIn'],
  okToSubmitDeathReason: reduxStateInterface['okToSubmitDeathReason']
}

export interface ProfileProps{
  userprofileProducts:ObsoleteProductInterfaceObject,
  userLogIn: actionObjectReturnLoginLogout['data'],
  navigation: {navigate: Function},
  actions: {
    loadUserProfile: Function // Already typed in REDUX actions
  }
}

export interface mapStateToPropsProfileReturnInterface{
  userprofileProducts: reduxStateInterface['userprofileProducts'],
  userLogIn: reduxStateInterface['userLogIn'],
}

export interface ProductProfileProps{
  singleProduct:combinedProductsInterface,
  navigation: {navigate: Function},
  actions: {
    loadProduct: Function // Already typed in REDUX actions
  }

}
