# ASSESSMENT 4: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.  

1. What are props in React?

  Your answer: React props are used for passing data such as methods and objects from the parent component to the child component. 

  Researched answer: In React, the parent component must have a constructor and super method that take props as their parameters. To pass props from parent to child you need to first assign a varibale name to the information in the state object, and place that variable within the instantiation of the child component tag. Now in the child component we can call our props by referencing this.state.props. followed by the varibale name. Props can not be passed from child to parent component.



2. What is a DOM event?

  Your answer: DOM events allow users to interact with javascript data. For example, the onClick attribute used on button tags will give users the ability to click on the button to perform logic/behavior. 

  Researched answer: DOM events and the Virtual DOM work together in the sense that DOM events are attributes that allow users to interact with javascript logic when the perform specific actions. These events create a diff within the nodes of the DOM and are reconciled by the Virtual DOM.



3. What is object-oriented programming? How is it different than functional programming?

  Your answer: object-oriented programming is the idea that everything within the program is an object. Creating logic/behavior only requires the use of methods and not functions. Whereas in functional programing, there is a mixture between methods and functions since there is use for both in functional programming.

  Researched answer: OOP focuses on objects and the common data stored in it. Objects can be given methods to perform behavior. Classes are used as instances of objects whereas in funtional programming, the focus is placed on functions performing desired actions.



4. What is the difference between a Float and an Integer in Ruby?

  Your answer: An integer is a whole number whereas a float is a decimal.  

  Researched answer: When working with numbers in Ruby, whole numbers are considered intergers. Performing mathamatical equations with intergers that should return a float will instead return an interger. In order to return a float, at least one number if not both needs to be a float in the mathamatic equation.



5. Ruby has an implicit return. What does that mean?

  Your answer: In javascript the use of the keyword `return` at the end of an expression was required to execute a block of code. Since Ruby was designed with the idea of developer happyness, there is very minimal use of syntax. As a result, if a block of code needs a return to execute that code, implicit return makes it so that developers do not have to type the return keyword. 

  Researched answer: Although implicit return is great for providing minimal code, it is not required and the use of the kayword `return` is allowed. This helps prevent confusion when dealing with larger projects.



## Looking Ahead: Terms for Next Week

1. Instance Variable: Instance variables are varibales that start with an @ symbol.

2. PostgreSQL: PostgreSQL is used for storing data. 

3. Ruby on Rails: Ruby on Rails is a open soure web application that allows used to create web applications.

4. ORM: Object Relational Mapping provides a way for Ruby programs to manage database data.

5. Active Record: This Ruby code that allows you to make changes to the database data.
