export default (state = {
  counter: 0,
}, {type, payload}) => {
  switch (type) {
    case "INCREMENT":
      return{ 
        counter: state.counter + 1
      }
    default:
      return state
  }
}