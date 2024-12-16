# I Declare War Card Game

#### Players draw cards and compare values to battle for victory!
<img src="https://www.coololdgames.com/wp-content/uploads/2022/10/war-card-game.png" alt="War Card Game Logo"/>


## Description
Both players draw cards. The player with the higher value card gets to keep both cards drawn. The game continues until one player runs out of cards. I chose this game because it was my favorite card game to play when I was little aside from Uno. I felt like this game and the logic of it would be a great and fun way to challenge myself to put everything I have learned about JavaScript together.

## Table of Contents
* [Technologies Used](#technologiesused)
* [Features](#features)
* [Design](#design)
* [Project Next Steps](#nextsteps)
* [Deployed App](#deployment)
* [About the Author](#Author)

## <a name="technologiesused"></a>Technologies Used
* JavaScript
* HTML5
* CSS3


## Features
Button 1 : Play / Restart Button         
Button 2: Draw Card Button

## Wireframe Link
* https://lucid.app/lucidspark/d01a66fb-2429-4778-a7c3-d5f404d9bda4/edit?beaconFlowId=06EC6C599F058BE6&invitationId=inv_4e5c51f9-cbab-40d6-abf2-2a020f5ebf8f&page=0_0#

## Trello Planning
* https://trello.com/b/ZFHuo9xR/project-1-card-game-board

## <a name="design"></a>Design
* There was no direct inspiration for my design as I would say that is not my strong suit. I mainly focused on getting the logic to work and the cards to render. My goal in the future is to rework the appearance to make it have a sit down table look and feel. 


## <a name="nextsteps"></a>Project Next Steps
#### List of Future Features
* Allow the user to chose player one or player two.
* Add a declare war event when players draw cards of the same value
* During War event display all extra drawn cards
* Restructure the layout of page to be more presentable
* Allow users to change the theme of the cards and background.


## Github repository
* You can view the repository:
[Github.com](https://github.com/Zebyrod/War-Card-Game)
* If unable to view please go live locally through VS Code

## <a name="Zebastian Rodriguez"></a>About The Author
This is my first project built from scratch and using Javascript! I love to build apps and webpages using my hobbies and interests as inspiration for my creations! I hope to use the experience gained from building this card game to jump into other, more challenging projects in the future! By challenging myself with this game I feel much more confident in my abilities as a developer, and I hope to improve my design and coding skills with other projects.
    
## Works Cited:
* Data Attributes :    
Data attributes can be used to store custom data on an HTML element. This custom data can then be used along with Javascript for a more engaging and dynamic page. In this project I used data attributes on my card elements to make it easier for my card suit and value to render to the page as they were drawn from the shuffled decks.
- https://www.w3schools.com/tags/att_global_data.asp

* JS Class Constructor :    
Class Constructors are a method for creating and initializing an object within JS. It can be used to create the object and initialize instances of the class. I used JS classes in this project to create my deck of cards. I first used a class to create the cards with their suits and value. Then I used another class of Deck to create my deck of 52 unique cards with every instance of suit and value possible.
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor

* flatMap() :     
flatMap is a method that is very similar to map() method. It takes multiple arrays and creates a new 'flat' Array. flapMap does not change the original array, rather it can be used to combine it with another array. In this project I used this method within my JS classes. By using flatMap to combine my suits and values arrays, I was able to create one array with all 52 card combinations. 
- https://www.w3schools.com/jsref/jsref_array_flatmap.asp
