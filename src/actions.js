const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export function increment() {
  return {
    type: INCREMENT_COUNTER,
  };
}

export function incrementAsync () {
  return (dispatch, getState) => {
    const currentStore = getState();
    
    dispatch({type: 'isLoadingApi', value: true});

    // call api .then(()=>{ dispatch(strore); saveLocalStorage()})
    console.log(currentStore)
    setTimeout(() => {

      dispatch({type:'V', value: "B"});
      dispatch({type:'login1_after_5s', value: currentStore.loginX.username});
      
    }, 5000);
  };
}
