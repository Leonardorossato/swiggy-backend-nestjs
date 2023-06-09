export {};

// Here we declare the members of the process.env object, so that we
// can use them in our application code in a type-safe manner.
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      APP_PORT: number;
      DB_PORT: number;
      DB_HOST: string;
      DB_DATABASE: string;
      DB_USERNAME: string;
      DB_PASSWORD: string;
    }
  }
}
