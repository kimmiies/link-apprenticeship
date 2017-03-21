First Iteration
===============

Start simple and write a program that works. Using one function and conditional statements to determine the cost of a project given three inputs (base price, number of people required for job and the item category).

Set up test framework Jasmine that tests the program outputs based on the three examples given in the program.

Thinking about:
- Where and how to validation inputs. In the program or in the test specs?
- Functional programming vs OOP
- Writing more meaningful tests


Second Iteration
================

Refactored some of the repetitive code for calculating the total for speciality Items. Cleaned up some variables, setting markup percentages to constants.

Added some tests for electronics and unlisted categories.

Refactored further! When since we simply add human markup price and specialty item markup price to the standard markup price we can have one calculation for total price that works for all cases. If human markup price and specialty item markup price are 0 the calculation will return the standard markup price.

Added a case to test what would happen if no manPower or item category was given. Standard markup price would be outputted

Thinking about:
- renaming Variables
- still thinking of validations
- if there is a need for functional programming with a program of this simplicity. If human price and specialty price can be set to 0, things become fairly straight-forward. Maybe the functions themselves can help with validations. Ie. Function checkManPowerRequired()


Third Iteration
===============

Tried adding some validations:
- The first to throw an error if the manPower parameter is not a number.
- The second to check if itemCategory was contained in a list of speciality items.

My test for the first throw error is failing and I think it's the test that has the problem not the code itself. Still trying to figure that out. The second validation was a bit unnecessary at the program assumes a standard item if "food", "drugs" or "electronics" are not passed in as a parameter. It would make the assumption of a standard item even if a number was passed in. For simplicity sake I will leave it at this.

Thinking about:
- Fixing the error test
- Wrapping some parts of code in functions


Fourth Iteration
================

Put everything in a function! This was addicting. Used console.logs to help with scope. Took out var keyword within functions to make their variables global to the parent function. The final function to calculate the total breaks the tests completely.

Thinking about:
- why did I just break all my tests :( 
