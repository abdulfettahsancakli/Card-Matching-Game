# Memory Game with Card Matching
## Using Html &amp; Css &amp; Javascript

1. In Phase One, as mentioned in the document, there are question marks and real pictures under question marks there are real pictures
but they haven't been randomly placed yet.
In Phase One, as mentioned in the document, there are question marks and real pictures under question marks there are real pictures

2. In phase two, I randomly positioned the images with the Mix function. 
I created a 2-dimensional array in the Mix function and made the array elements in the form of this because the id field contains the image information in src to find the position of the image on The Matrix and src to check it.
In order to generate the id value, I had to generate random numbers from 0 to 16.
I created an infinite loop while so that these numbers do not repeat, then I sorted it by id with the function" sort " and placed it in the 2-dimensional 4x4 array mentioned in the press with a nested for loop.
In the random number generation field, 
these images are arranged according to the order in which they are located in the matrix on the container card.style.order by order
I used the feature.

3. Finally, in Phase 3,
I placed the show all button to show the random distribution of the pictures.
I did hide.(While all images appear at the same time, random placement status can be observed live with the Mix.)
As mentioned in the document, the game starts with start and the stopwatch stops when all the pictures are guessed correctly. Easy way
show all locations to be observed by testing and then pressing hide a game can be finished quickly.


## Screenshots :camera:
-----------------------------------
# ALL GAME
![AllGame](https://github.com/abdulfettahsancakli/Card-Matching-Game/blob/main/Game.png)

# SHOW ALL Button
![ShowAllButton](https://github.com/abdulfettahsancakli/Card-Matching-Game/blob/main/ShowAll.png)
