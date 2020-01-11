# Minesweeper Generator

## Reasoning regarding The Solution

I resolved to create a very simple codebase that would use an expansion of the following items:
* HTML page using simple input form controls
* CSS page to style the grid
* JS file comprising of an IIFE containing functions within
I reasoned on this approach as it felt within my skill set and I have been using javascript extensively throughout my time at the DevelopeMe_ Coding Fellowship. 

## How I approached the problem

I had a few goes on Minesweeper to review the basic play-flow. From this I sketched out on paper some very rudimentary calculations that all revolved around dynamically generating a grid using the HTML DOM elements - specifically using DIVs. I considered four milestones:

1. Creating the user interface
2. Dynamically generating the grid.
3. Populating the grid with mines.
4. Looping over the grid to count adjacent mines displaying the result for each cell.

The first two milestones I found straightforward and occasionally checked MDN technical documentation for syntax prompts. Mot of this coding I was able to complete prior to the final two milestones.

I researched the Minesweeper problem by looking at existing solutions. I found this link very helpful as it described solution approaches and things to look out for.

[https://techdevguide.withgoogle.com/resources/coding-question-minesweeper/]

## Programming language

I chose Javascript, HTML and CSS as technologies I'm familiar with.

## Data structures

The majority of the data structures used within my solution are straightforward variables containing DOM elements and values written to and read from. I used the HTMLTableElement web api interface to generate the table, reference cells, and populate with content. I also used for the first time HTML attributes in order to effectively compare cell values. 

## Algorithms

In the main, the algorithm to populate the table has an outer loop to generate rows and inner loop to generate cells. This algorithm format is repeated when counting adjacent mines with a fairly complex loop design that I had encountered when researching my approach.

[https://www.101computing.net/minesweeper-in-javascript/]

The algorithm was in line with my initial plan that the way to count adjacent cells would be to increment a variable based upon the attributes of adjacent cells. This builds on the inner/outer loop for rows and cells to ensure that for each cell, the adjacent cells can be referenced and looped.

The laying of mines uses a while loop. This loop will only exit when all mines have been placed in unique locations to counter the issue of placing fewer mines than intended when identical random co-ordinates are generated.

There are limitations in that the larger the table, the longer the program will take to run. I would like to explore the possibility of improving this by adjusting the probability of placing the mine as the table is iterated over as described on the techdevguide website link.

