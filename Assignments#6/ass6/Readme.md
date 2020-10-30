## Assignment #6 - Static analysis datastructure
## Discrete Mathematics

by Rasmus Friis


# A set API
The computer state
To do the static analysis we need a data structure to register the possible
states of the computer after each statement of the program has been executed.
The computer state should:
• Keep track of each variable in the program and which possible values
it can have in the state. In rare cases we know the exact value of a
variable, but mostly, we only know a span of possible values or maybe
only the fact that the variable is initialized.
• Be partially ordered.
• Support local minimum (intersection) and local maximum (union) between states (will be explained in class).


# How to run
npm install && node computerState.js
