export const evidentlyConfig = {
  region: `${import.meta.env.VITE_AWS_EVIDENTLY_REGION}`,
  credentials: {
    accessKeyId: `${import.meta.env.VITE_AWS_EVIDENTLY_ACCESS_KEY_ID}`,
    secretAccessKey: `${import.meta.env.VITE_AWS_EVIDENTLY_SECRET_ACCESS_KEY}`,
  },
} as const;
