## MVST Challenge

It was a lot of fun developing this project. Besides the tech challenges, I did a lot of research on german coffee and learned a lot, thanks for the opportunity :)

This document have some info on how I developed this project.
A live version of this project can be found here: [mvst-brewed.vercel.app](https://mvst-brewed.vercel.app/)

---

### Front End

Check how to run the front end app in the [Frontend README](https://github.com/mvst-h/mvst-coffee-tea-challenge/blob/master/frontend/README.md)

I changed almost nothing from the project boilerplate: used NextJS, tailwind, jest, react-testing-library, storybook and tried to follow the DDD practices. I followed the figma design strictly, so I think the UI outcome is pretty good. Despite the same dependencies, all packages were updated to the latest version.

#### Unit tests

Almost all components have unit tests, ~97% of coverage. The UI tests are very simple, just checking if the component is rendered with the proper info in different scenarios. The utility resources such as mappers and models also have unit tests. No integration or e2e tests were written.

#### Storybook

The project uses storybook for documenting the UI components, all components have stories in the storybook.

### Back End

Check how to run the front end app in the [Backend README](https://github.com/mvst-h/mvst-coffee-tea-challenge/blob/master/backend/README.md)

The Back End uses NestJS and PostgresSQL with typeorm to interface between them. Despite the same dependencies of the boilerplate, all packages were updated to its latest version.

#### Migrations and database seeding

The typeorm configuration was changed for supporting migrations to have a better control of the database structure. As the project does not have routes for creating new objects I wrote some database seeds for both tea and coffee entities for populating the database with the same products as shown in the Figma design. These seeds are typeorm migrations.

#### Assets bucket

For serving the products images for the front end I created a folder on the root of the backend dir and served it statically on the `/bucket` endpoint. This is not the ideal solution, but it was better than storing the files directly on the database. In a real world project this bucket should be on a external service such as AWS, GCP and etc.

#### Unit tests

I wrote some unit tests on the domains controllers, services and DTOs. The coverage is ~56%. The tests are simple since the only route is a `getAll` for each tea and coffee entities. I added some features like filtering by title and tag (in case of the coffee list) and pagination just as an excuse for creating a DTO for the query params and validating it with `class-validator` and testing it within the controller test suite.

### Deployment

As a result of [this issue](https://github.com/mvst-h/vitorvalandro-coffee-tea-challenge/issues/1), I decided to deploy the project on a production environment. For that I had to clone this repository into [one of my own](https://github.com/VitorValandro/mvst-brewed) so that I could connect the backend to [Railway](https://railway.app/) for deploying the NestJS app and the PostgreSQL database and the frontend to [Vercel](https://vercel.com/) for deploying the NextJS client. The deployments are configured to be triggered when the `main` branch updates.

#### CI/CD

Along with the deployment I setted up some github actions for checking builds and run all unit tests on `main` branch pull requests and `develop` branch pushes. This simple CI/CD workflow ensures that nothing will break after a release.

### What would you improve if given more time?

Without adding new features on the product I think that this things would improve the project quality:

- Store the assets in a proper external bucket;
- Implement pagination, sorting and filtering on the front end;
- Implement e2e tests;
- Create a mock SQLite testing database to enable better tests and increase test coverage;
- Add tests for the front end pages;
- Improve CI/CD workflow with a better integration between github actions and deployment services;
- Add API documentation with swagger or other tool;

### That's it!

If you want to run the project locally you can see the [Frontend README](https://github.com/mvst-h/mvst-coffee-tea-challenge/blob/master/frontend/README.md) and [Backend README](https://github.com/mvst-h/mvst-coffee-tea-challenge/blob/master/backend/README.md) for instructions on how to run the tests, see the storybook, setup the database and all. If you simply want to see the project up and running, [check this live version](https://mvst-brewed.vercel.app/).

Thanks :)

Vitor Valandro
