# diffrance between pakage.json and pakage-lock.json 
- pakage.json contains all the rules which is needed for running our applications and installing the dependancies for that
- on other hand pakage-lock.json will contain a detailed information about the all the dependancies and transistive dependancies (sub dependancies).
- it locks the exact version of any depandancie required by your application
- you should definetly push pakage-lock.json to the git
- the caret symbol "^2.3.0" this tells npm to upgrade to the minor and patch versions but not to the major one
- the tilde symbol "~2.3.0"  this tells npm to upgrade to the major versions only
- package-lock.json is a lockfile that contains information about the dependencies/packages with their exact version numbers (*important) that were installed for a node.js project
- Whenever we clone a repo and run npm i on a new machine, npm will first look to see if a package-lock.json file is present. If yes, it will proceed by installing the packages given in that    file. Otherwise, it will look into the package.json file and start installing the required dependency packages.
- so when ever the other devloper clone my project he will have the same dependacies-tree as mine so there is no place for this-> "IT WORKS ON MY COMPUTER"