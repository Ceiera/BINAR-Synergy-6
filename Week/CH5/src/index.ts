import express, { Application } from 'express';
import UsersHandler from './handlers/users';
import PostsHandler from './handlers/posts';

const app: Application = express();
const PORT: number = 8081;

// Add middleware to get the body from the request
app.use(express.json());

// Init handlers
const usersHandler = new UsersHandler();
const postsHandler = new PostsHandler();

// Define routes
app.get('/api/users', usersHandler.getUsers);
app.get('/api/users/:id', usersHandler.getUsers);
app.post('/api/users', usersHandler.createUser);
app.delete('/api/users', usersHandler.deleteUserById);

app.get('/api/posts', postsHandler.getPosts);
app.get('/api/posts/:id', postsHandler.getPostById);
app.post('/api/posts', postsHandler.createPost);
app.patch('/api/posts/:id', postsHandler.updatePost);
app.delete('/api/posts/:id', postsHandler.deletePostById);

app.listen(PORT, () => {
  console.log(`Server is running on localhost:${PORT}`);
});