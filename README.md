## Tic Tac Toe Component Documentation 

## Project structure 

The following is the project UI hierarchy with folder & file description.<br /> 

.storybook                               -- storybook configuration 
│  
.build                                   -- production output folder
│
coverage                                 -- coverage report
│  
docs                                     -- components documentation folder
├── src
│   └── components                       -- a folder contains all components index.md
│   │   └── tic-tac-toe
│   │   │   └── index.md
pubic                                    
│ 
src                                      -- UI source code
├── basecomponents                       -- a folder for shared components like button or modal
├── components                           -- a folder for all components
│   └── tic-tac-toe
│   │   ├── subcomponents 
│   │   │   └──tests                     -- a folder for subcomponents unit tests
│   │   │   └──board.tsx                 -- tic-tac-toe subcomponent
│   │   │   └──square.tsx                -- tic-tac-toe subcomponent
│   │   ├── tests                        -- a folder for tic-tac-toe component unit tests
│   │   ├── types                        -- a folder for tic-tac-toe component props and config
│   │   └── utilities                    -- a folder for tic-tac-toe component helper function
│   │   └── tic-tac-toe.tsx              -- tic-tac-toe component
│   │   └── tic-tac-toe.stories.tsx      -- tic-tac-toe component storybook
├── lib
|   └── css                              -- css bundle file
├── scss
│   └── components                       -- a folder for all components scss files
│   │   └── tic-tac-toe
│   │   │   └── _board.scss              -- subcomponents scss 
│   │   │   └── _square.scss             -- subcomponents scss
│   │   │   └── tic-tac-toe.scss         -- tic-tac-toe component scss
│   │   └── _all.scss                    -- a scss file combines all components' scss files
│   │ 
├── App.tsx                              -- home page displays tic-tac-toe component 


### `npm run start`

Runs the app in the development mode.<br />

### `npm run dev`

Runs the app in the Storybook.<br />

### `npm run build`

Builds the app for production to the `build` folder.<br />

### `npm run test`

Runs unit tests.<br />

### `npm run test:coverage`

Runs unit tests coverage.<br />
