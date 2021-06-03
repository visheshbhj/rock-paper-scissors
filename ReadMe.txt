The index.html is the entry point of this project. There is no framework like node or react here.

When the project is loaded for first time, it will take some time to load as it needs to download the tensorflow libraries, which is used to prediction.
Subsequent loads will be faster.

When using the camera to make predictions, keep following in mind -
    1) The prediction model is not prefect.
    2) It is advisable that the background when you use the model be of solid color. (Only 1 Color, preferably white).
    3) Ensure that there is good illumination.