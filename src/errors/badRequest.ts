import { HttpResponse } from 'src/protocols/http';

export const badRequest = (error: any): HttpResponse => ({
  statusCode: 400,
  body: error,
});
