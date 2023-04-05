import { AppDataSource } from "./data-source"
import { User } from "./entity/User"
import express from 'express';

const app = express();

AppDataSource.initialize().then(async () => {

    console.log("Inserting a new user into the database...")
    const user = new User()
    user.firstName = "Timber"
    user.lastName = "Saw"
    user.age = 25
    await AppDataSource.manager.save(user)
    console.log("Saved a new user with id: " + user.id)

    console.log("Loading users from the database...")
    const users = await AppDataSource.manager.find(User)
    console.log("Loaded users: ", users)

    console.log("Here you can setup and run express / fastify / any other framework.")
    
    app.use(express.json());

    app.get('/', (req, res) => {
    res.json(users);
    });

    app.listen(4001, () => {
    console.log('Listening on port 4001');
    });
        

}).catch(error => console.log(error))
