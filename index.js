const store = require("./app/store");
const cakeActions = require("./features/cake/cakeSlice").cakeActions;
const icecreamAcitons =
  require("./features/icecream/icecreamSlice").icecreamActions;
const fetchUsers = require("./features/user/userSlice").fetchUsers;

console.log("initial state", store.getState());

const unsubscribe = store.subscribe(() => {
  console.log("updated state", store.getState());
});

store.dispatch(fetchUsers());

// store.dispatch(cakeActions.ordared());
// store.dispatch(cakeActions.ordared());
// store.dispatch(cakeActions.ordared());
// store.dispatch(cakeActions.restocked(3));

// store.dispatch(icecreamAcitons.ordared());
// store.dispatch(icecreamAcitons.ordared());
// store.dispatch(icecreamAcitons.ordared());
// store.dispatch(icecreamAcitons.restocked(4));

// unsubscribe();
