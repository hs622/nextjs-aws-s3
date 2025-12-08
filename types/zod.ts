import z from "zod";

export const apiResponse = z.object({
  body: z.object(),
  bodyUsed: z.boolean(),
  headers: z.object(),
  ok: z.boolean(),
  redirected: z.boolean(),
  status: z.number(),
  statusText: z.string(),
  type: z.string(),
  url: z.string(),
});


export type ApiResponse = z.infer<typeof apiResponse>;
