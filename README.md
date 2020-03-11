
# react-native-comps-lib

## Getting started

`$ npm install react-native-comps-lib --save`

### Mostly automatic installation

`$ react-native link react-native-comps-lib`

### Manual installation


#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.ainirobot.compslib.RNCompsLibPackage;` to the imports at the top of the file
  - Add `new RNCompsLibPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-comps-lib'
  	project(':react-native-comps-lib').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-comps-lib/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-comps-lib')
  	```


## Usage
```javascript
import RNCompsLib from 'react-native-comps-lib';

// TODO: What to do with the module?
RNCompsLib;
```
  