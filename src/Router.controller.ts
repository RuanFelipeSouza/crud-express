import { Request, Response, Router } from 'express';
import { DeleteResult } from 'typeorm';
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
    res.send(customer).status(200);
  };
  public delete = async (req: Request, res: Response): Promise<void> => {
    const customer_deleted: Promise<DeleteResult> =
      await this.crudProvider.delete(req.params.id);
    console.log(customer_deleted);
    res
      .json({ Message: 'Customer successfully deleted', customer_deleted })
      .status(204);
  };
  public routes() {
    this.router.post('/create', this.create);
    this.router.delete('/:id', this.delete);
  }
}
