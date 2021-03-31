export function manageFriends(state, action){
  switch (action.type) {
    case 'ADD_FRIEND':
      const addFriendsArray = state.friends
      addFriendsArray.push(action.friend)
      return {...state, friends: addFriendsArray}
    case 'REMOVE_FRIEND':
      const friends = state.friends.filter(friend => friend.id !== action.id)
      let newState = {...state, friends: friends}
      return newState
    default:
      return state
  }
}
