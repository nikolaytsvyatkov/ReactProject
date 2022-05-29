const authenticate = async (url, body, onSuccess, onFailure) => {
    try {
      const promise = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json'
        }
      })
  
      const response = await promise.json()
      onSuccess(response);
      //context: set that the user is logged in, set the token in localStorage, navigate to homePage
    } catch(e) {
      onFailure(e)
    }
  }
  
  
  export default authenticate