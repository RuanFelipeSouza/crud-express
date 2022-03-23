import { Request, Response, Router } from 'express';

export class RouterController {
  public router: Router;
  constructor(private crudProvider) {
    this.router = Router();
    this.routes();
  }
  public create = async (req: Request, res: Response) => {
    return await this.crudProvider.create(req.body.customer);
  };
  public routes() {
    this.router.post('/:id', this.create);
  }
}
