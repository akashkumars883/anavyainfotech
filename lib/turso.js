import { createClient } from "@libsql/client";

const url =
  process.env.TURSO_DATABASE_URL ||
  "libsql://anavya-infotech-anavyainfotech.aws-ap-south-1.turso.io";

const authToken =
  process.env.TURSO_AUTH_TOKEN ||
  "eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJpYXQiOjE3ODc0MjU2MjMsImlkIjoiMDFhMDJhZGMtZjAwMS03NThiLTg0NDAtNjZhNTFlODk3NjNkIiwia2lkIjoiNGtyc01Yc1B6NU9pcGZzUG5ZQkMwcHBtT04yQVl0bFl4c3VGc0dZc3Z5WSIsInJpZCI6IjBhYjUwNGQxLWZlNzUtNDcyMS05YTJmLTEyYjY4OGJkOGU4OCJ9.xKBRx3M85b-WXqwFRw9tSoAxlm2HSYcewNsCLtz0DnO56VZg43nUaLteik88J4HD5oxnM0aN2RrcE5y7e4mKBA";

export const tursoClient = createClient({
  url,
  authToken,
});
