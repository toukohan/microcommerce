import { AppDataSource } from "./data-source"
import { User } from "./entity/User"
import express from 'express';

const app = express();

AppDataSource.initialize().then(async () => {

    console.log("Inserting a new user into the database...")
    const user = new User()
    user.firstName = "Supreme"
    user.lastName = "Leader"
    user.email = "admin"
    user.password = "admin"
    user.role = "admin"
    await AppDataSource.manager
        .createQueryBuilder()
        .insert()
        .into(User)
        .values(user)
        .orIgnore()
        .execute();
    // console.log("Saved a new user with id: " + user.id)

    console.log("Loading users from the database...")
    const users = await AppDataSource.manager.find(User)
    console.log("Loaded users: ", users)

    // console.log("Here you can setup and run express / fastify / any other framework.")
    
    app.use(express.json());

    app.get('/', (req, res) => {
    res.json(users);
    });

    app.get('/:id', async (req, res) => {
        const id = parseInt(req.params.id);
        const user = await AppDataSource.manager.findOne(User, { where: { id } });
        res.json(user);
    });

    app.listen(4001, () => {
    console.log('Listening on port 4001');
    });
        

}).catch(error => console.log(error))
