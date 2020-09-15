student(adam).
student(rasmus).
student(martin).

subject(php).
subject(math).
subject(java).

dates(today).
dates(tomorrow).
dates(yesterday).

rooms(100).
rooms(200).
rooms(300).

happy(martin).

class(martin, math, today, 100).
class(adam, math, today, 200).
class(rasmus, math, tomorrow, 300).
class(test, math, tomorrow, 300).
class(jens, php, tomorrow, 100).
class(bob, java, tomorrow, 200).


programming_happy_java(martin) :-
    subject(java),
    happy(martin).

programming_happy_php(adam) :-
    subject(php),
    happy(adam).
    
happy_list(X) :-
    happy(X).

who_has_math_today :-
    class(X, math, today, Y),
    format('~w has math today in room ~w ~n', [X, Y]).

who_has_class_tomorrow :-
    class(X, Z, tomorrow, Y),
    format('~w has math tomorrow in room ~w , and the subject is ~w ~n', [X, Y, Z]).


