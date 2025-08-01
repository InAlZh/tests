import { z } from "zod";

export const UserSchema = z.object({
  id: z.number(),
  name: z.string(),
  phone: z.string(),
  email: z.string(),
  address: z.string(),
  position_name: z.string(),
  department: z.string(),
  hire_date: z.string(),
});
export const UsersListSchema = z.array(UserSchema);
export const FetchUsersListSchema = z.object({
  data: UsersListSchema,
  success: z.boolean(),
});

export type User = z.infer<typeof UserSchema>;
export type UsersList = z.infer<typeof UsersListSchema>;
export type FetchUsersList = z.infer<typeof FetchUsersListSchema>;

export function fetchUsersList(searchTerm?: string): Promise<FetchUsersList> {
  const url = new URL("http://localhost:3000/");
  if (searchTerm && searchTerm.trim()) {
    url.searchParams.set("term", searchTerm.trim());
  }

  return fetch(url.toString())
    .then((response) => response.json())
    .then((data) => {
      return FetchUsersListSchema.parse(data);
    })
    .catch((error) => {
      console.error("Ошибка запроса:", error);
      throw error;
    });
}
