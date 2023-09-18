
### Configuaration
``npm init``

```npm install -g typescript```

```tsc --init```

```json
{
  "compilerOptions": {                        
    "target": "es6",                               
    "module": "commonjs",                           
    "outDir": "./dist",                             
    "rootDir": "./src",                             
    "strict": true,
    "moduleResolution": "node",
    "esModuleInterop": true,                       
  },
  "exclude":[
    "./node_modules"
  ]
}
```

```npm install -D typescript```


## compile code

```tsc```

## Helpful dependencies

Install ts-node To allows us to point to a Typescript file. It will run .ts, compile it and run it with Node.js for us

```npm install -D ts-node```

Node.js types checking package

```npm install -D @types/node```

To get the type definitions for NodeJs packages

```npm install -D @types/express```


To restart server whenever you make and save changes to your code structure

```npm install -D ts-node-dev```

and configure package.json as follows

```json
"scripts": {
    "dev": "ts-node-dev --respawn ./src/index.ts",
}
```

Alternatively we can use nodemon

```npm install -D nodemon```
```json
 "scripts": {
   "dev": "nodemon ./src/index.ts"
 }
 ```
