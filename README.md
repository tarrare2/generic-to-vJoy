# generic-to-vJoy

If Windows won't recognise your no-name gamepad, no emulators or mappers work, and you don't want to buy another controller, then this is a last resort. **[WIP]**</br>

## Test if the gamepad API supports your controller here: https://hardwaretester.com/gamepad/

If your gamepad can't change any of the values, then this hack can't help you. You could try manual emulation or creating a driver yourself (the latter might not even help if your gamepad is recognised as a USB Composite device).
</br>
 ### The goal of the script is as follows:</br>
1. Use a browser (hopefully headless) to use the JavaScript Gamepad API to create a grid of Gamepad inputs
2. Use AutoHotKey to grab all the values of the inputs
3. Use AutoHotKey to feed a vJoy gamepad with the values (mapping is done manually, generic controllers will have different mappings so just change the values in the script)
</br></br>The vJoy gamepad will hopefully respond fast enough to be playable, otherwise AutoHotKey should be replaced, probably with C#.
