let myFuncs = require("./setController")
let xstate = require('xstate')


setA = [1,2,3,4,5,]
setB = [1,2,3,4,6,1]

console.log(myFuncs.Intersection(setA, setB));
console.log(myFuncs.Union(setA, setB));

// Stateless machine definition
// machine.transition(...) is a pure function used by the interpreter.

//Todo Add varibles
const toggleMachine = xstate.createMachine({
  id: 'toggle',
  initial: 'inactive',
  states: {
    inactive: { on: { TOGGLE: 'active' } },
    active: { on: { TOGGLE: 'inactive' } }
  }
});

// Machine instance with internal state
const toggleService = xstate.interpret(toggleMachine)
  .onTransition(
      (state) => console.log(state.value)
      )
  .start();
// => 'inactive'


toggleService.send('TOGGLE');
// => 'active'

toggleService.send('TOGGLE');
// => 'inactive'






