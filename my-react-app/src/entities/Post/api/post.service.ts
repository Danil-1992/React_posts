import { postArraySchema } from "../types/postSchema";

export const PostService = {
  async getPost(page: number, limit: number) {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`
      );

      if (!response.ok) {
        throw response.status;
      } else {
        const data = await response.json();
        const validDate = postArraySchema.parse(data);
        return validDate;
      }
    } catch (error) {
      console.log(error);

      throw { message: "Ошибка загрузки. Попробуйте позже" };
    }
  },
};
