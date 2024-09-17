# Reservi - React Interactive Dashboard (only checkout view)

### Setup and run the application locally

This project requires at least **Node.js v18** and uses **NPM** as package manager by default.

1. Install exact dependencies from `package-lock.json` file using NPM with the following command:
	
    `npm ci --include=dev` 
    
    <br />
    
    > `npm ci` command prevents `package.json` and `package-lock.json` files being modified during dependencies installation, unlike `npm install` which does modified files during installation.
	
<br />

2. Start local dev server with the following comand

    `npm run dev`

<br />

3. Open project on the following URL in the web browser:

    [http://localhost:3001](http://localhost:3001)


<br />


---

### Completed project features
- [x] **Dashboard layout**

- [x] **Navigation**

- [x] **Checkout page view**

	- [x] **Invoice filters** (display events in a list)

	- [x] **Invoice table** (displays event by day, week and month)

- [ ] Responsive Web Design

	- [x] Desktop

	- [ ] Tablet

	- [ ] Mobile

- [x] Deployment

<br />

---

### Technical stack used

- **Runtime environment**: Node `>=18.0.0` ([Documenation](https://nodejs.org/en))

- **Package manager**: NPM

- **App bundler**: Vite `v5.x` ([Documentation](https://vitejs.dev/))

- **UI library/framework**: React `v18.x` ([Documentation](https://react.dev/)

- **Meta-languages**: TypeScript `5.x` ([Documentation](https://react-typescript-cheatsheet.netlify.app/))

- **Styling**: CSS3, CSS-Modules ([Documentation](https://github.com/css-modules/css-modules))

- **Page navigation**: React Router Dom `v6.x` ([Documentation](https://reactrouter.com/en/main/start/overview))

- **HTTP client**: Axios `v1.x` ([Documentation](https://axios-http.com/))

- **Server state management**: TanStack Query `v5.x` ([Documentation](https://tanstack.com/query/latest/docs/framework/react/overview))

- **Error management**: React Error Boundary `v4.x` ([Documentation](https://www.npmjs.com/package/react-error-boundary))

<br />

---

### Project Directories
- `public` - for public assets that well be out of the app bundle and can be cached by the browser

- `src` - for app source code

- `src/api` - for any logic related to manage http clients and api integrations

- `src/assets` - for assets that will be part of the app bundle

- `src/components` - for common and extensible UI elements

- `src/config` - for common const values

- `src/hooks` - for common custom hooks

- `src/layouts` - for UI layout components

- `src/styles` - for global styling configuration

- `src/views` - for app pages components used on the router

- `src/types` - for common typescript type definitions

<br />

---

### Desitions and development workflow

1. Research about Reservi

2. Select design refences and define UI dimensions
    - UI reference: https://www.youtube.com/watch?v=Duh3xwggc0Q

3. Design desfinition and assets recollection  
    - Color reference: https://reservi.co/en/
    - Font reference: https://reservi.co/en/
    - Font resource: https://fonts.google.com/specimen/Urbanist?preview.text=CONTENT
    - Icons resource: https://fontawesome.com/
    - Initial desktop size refernce: `1920px`

2. Project's depencencies definition
3. Setup repository
    - **url**: https://github.com/rodolfomayora/rsv-assessment
4. Setup development environment
5. Deployment
    - **url**: https://rsv-assessment.vercel.app

