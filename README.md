# Image Processing Api Project 

## Run the scripts needed to test/start/build the application:

- **Test script** : npm run test

- **Start script** : npm run start

- **Build script** : npm run build

## Prettier and Lint scripts :

- **Prettier script** : npm run prettier

- **Lint script** : npm run lint

## Endpoints that should be accessed :

### Main endpoint : shows "Welcome to image processing api"

 http://localhost:3000


### Image resizing endpoint :

 - **Required query arguments**:

     * imageId
     * width
     * height

    **example1**:shows fjord image with 100 pixel width and 100 pixel height
   
      http://localhost:3000/image?imageId=fjord&width=100&height=100


     *NOTES:*
      * *If any argument is missed, an error message will be shown in browser*
      * *width and height must be positive otherwise an error message will be shown in browser*
      * *If entered imageId isn't available, an error message will be shown in browser*

    **example2**: shows error : "please select an image id"

     http://localhost:3000/image

     http://localhost:3000/image?imageId=

    **example3**: shows error : "please select the desired width"

     http://localhost:3000/image?imageId=fjord

     **example4**: shows error : "please select width>0"

     http://localhost:3000/image?imageId=fjord&width=-100

    **example5**: shows error : "please select the desired height"

     http://localhost:3000/image?imageId=fjord&width=100

     **example5**: shows error : "please select height>0"

     http://localhost:3000/image?imageId=fjord&width=100&height=-100

## Notes about functionality :

 * folder path for processed images  : ./images/resized

 * There is an image named test-200x100 in path : .\images\resized , this image is used for testing please don't delete it
