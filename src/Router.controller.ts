import { Request, Response, Router } from 'express';
import { CustomerEntity } from './entities/customer.entity';
import { Customer } from './providers/DTO/customer.dto';

export class RouterController {
  public router: Router;
  constructor(private crudProvider) {
    this.router = Router();
    this.routes();
  }
  public create = async (req: Request, res: Response): Promise<void> => {
    const customer: Promise<Customer & CustomerEntity> =
      await this.crudProvider.create(req.body);
    res.send(customer).status(201);
  };
  public routes() {
    this.router.post('/create', this.create);
  }
}
