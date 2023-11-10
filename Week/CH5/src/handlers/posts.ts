import { Response, Request } from "express";
import { DefaultResponse } from "../models/dto/default";
import { Post } from "../models/entity/post";
import { PostRequest } from "../models/dto/posts";
import fs from "fs";

class PostsHandler {
  async createPost(req: Request, res: Response) {
    const payload: PostRequest = req.body;
    let listPost:Post[] = JSON.parse(fs.readFileSync("./data/posts.json", "utf-8"));
    if (!(payload.title && payload.content && payload.user_id)) {
      const response: DefaultResponse = {
        status: "BAD_REQUEST",
        message: "Payload cannot be empty",
        data: {
          created_post: null,
        },
      };
      res.status(400).send(response);
    } else {
      let id: number = 1;
      if (listPost.length > 0) {
        id = listPost[listPost.length - 1].id + 1
      }
      const postToCreate: Post = {
        id: id,
        title: payload.title,
        content: payload.content,
        user_id: payload.user_id,
      };
      listPost.push(postToCreate);
      fs.writeFileSync("./data/posts.json", JSON.stringify(listPost));
      const response: DefaultResponse = {
        status: "CREATED",
        message: "succesfully created",
        data: {
          created_post: postToCreate,
        },
      };
      res.status(201).send(response);
    }
  }

  async getPosts(req: Request, res: Response) {
    let listPost:Post[] = JSON.parse(fs.readFileSync("./data/posts.json", "utf-8"));
    const response: DefaultResponse = {
      status: "OK",
      message: "Success retrieving data",
      data: {
        posts: listPost,
      },
    };
    res.status(200).send(response);
  }

  async getPostById(req: Request, res: Response) {
    let listPost:Post[] = JSON.parse(fs.readFileSync("./data/posts.json", "utf-8"));
    const id: number = Number(req.params.id);
    const response: DefaultResponse = {
      status: "OK",
      message: "Data succesfully retrived",
      data: {
        posts: listPost.filter((post: Post) => post.id === id),
      },
    };
    res.status(200).send(response);
  }

  async updatePost(req: Request, res: Response) {
    let listPost:Post[] = JSON.parse(fs.readFileSync("./data/posts.json", "utf-8"));
    const id: Number = Number(req.params.id);
    const findId:Number = listPost.findIndex((post: Post) => post.id === id);
    if (findId === -1) {
      const response: DefaultResponse = {
        status: "NOT_FOUND",
        message: "Post not found",
        data: {
          updated_post: null,
        },
      };
      res.status(404).send(response);
    }
    const payload: PostRequest = req.body;
    if (!(payload.title && payload.content && payload.user_id)) {
      const response: DefaultResponse = {
        status: "BAD_REQUEST",
        message: "Payload cannot be empty",
        data: {
          updated_post: null,
        },
      };
      res.status(400).send(response);
    }
    const updatedPost:Post[] = listPost.filter((post: Post) => {
      if (post.id === id) {
        post.title = payload.title;
        post.content = payload.content;
        post.user_id = payload.user_id;
      }
      return post;
    });
    fs.writeFileSync("./data/posts.json", JSON.stringify(updatedPost));
    const response: DefaultResponse = {
      status: "OK",
      message: "Post succesfully updated",
      data: {
        updated_post: updatedPost,
      },
    };
    res.status(200).send(response);
  }

  async deletePostById(req: Request, res: Response) {
    let listPost:Post[] = JSON.parse(fs.readFileSync("./data/posts.json", "utf-8"));
    const id: number = Number(req.params.id);
    const findId:number = listPost.findIndex((post: Post) => post.id === id);
    if (findId === -1) {
      const response: DefaultResponse = {
        status: "NOT_FOUND",
        message: "Post not found",
        data: {
          deleted_post: null,
        },
      };
      res.status(404).send(response);
    }
    const newPost:Post[] = listPost.filter((post: Post) => {
      if (post.id !== id) {
        return post;
      }
    });
    fs.writeFileSync("./data/posts.json", JSON.stringify(newPost));
    const response: DefaultResponse = {
      status: "OK",
      message: "Post succesfully deleted",
      data: {},
    };
    res.status(200).send(response);
  }
}


export default PostsHandler