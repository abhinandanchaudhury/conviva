1. This project is Creating a dashboard for customers with details for each customer.
2. It is created by React.
3. To run the node server run the command npm run start:server.
4. To run in development mode run npm start.
5. The project route is {basepath}, in local it will run in http://localhost:3000. Port is 3000 if .env port is not set.
6. It has an interesting 404 page. So anyone moving to any other page will be given 404 page.
7. It connects to the api which is another project shared, which runs in 8080 port in local. So, basically it connects to http://localhost:8080/customers/:page and http://localhost:8080/customers/:page/:id
8. If for some reason the microservice api are down it shows graceful message. Thinking it as mocrofrontend with other components will be pluggedin, don't wanted to block whole page if only customer details api are down/not available.
9. For css -  css loader is used. So, that modularity is maintained as well as if required className can be based on conditions.

Things to do:

1. Change to functional component.
2. Using HOC(Higher Order Component) as asyn compoinent for better code splitting.
3. No need of State Management tool as these compomnents are only related one and we can achieve if needed by context api.
4. Memory profiling.
5. Code Documentation.
6. Unit testing with jest.
7. e2e testing with Cypress.io.(it takes quite a bit time though :) ).




