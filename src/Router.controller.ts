import { Request, Response, Router } from 'express';
import { DeleteResult, UpdateResult } from 'typeorm';
import { CustomerEntity } from './entities/customer.entity';
import { Customer } from './providers/DTO/customer.dto';
import { Get, Route } from 'tsoa';
@Route('/crud')
export class RouterController {
  public router: Router;
  constructor(private crudProvider) {
    this.router = Router();
    this.routes();
  }
  public create = async (req: Request, res: Response): Promise<void> => {
    const customer_created: Promise<Customer & CustomerEntity> =
      await this.crudProvider.create(req.body, res);
    res.send(customer_created).status(200);
  };
  public delete = async (req: Request, res: Response): Promise<void> => {
    const customer_deleted: Promise<DeleteResult> =
      await this.crudProvider.delete(req.params.id);
    res
      .json({ Message: 'Customer successfully deleted', customer_deleted })
      .status(204);
  };
  public update = async (req: Request, res: Response): Promise<void> => {
    const customer_updated: Promise<UpdateResult> =
      await this.crudProvider.update(req.params.id, req.body.customer);
    res
      .json({ Message: 'Customer successfully updated', customer_updated })
      .status(204);
  };
  @Get('/:id')
  public findById = async (req: Request, res: Response): Promise<void> => {
    const customer: CustomerEntity = await this.crudProvider.getById(
      req.params.id,
    );
    res.status(200).send(customer);
  };
  public routes() {
    this.router.post('/create', this.create);
    this.router.delete('/:id', this.delete);
    this.router.patch('/:id', this.update);
    this.router.get('/:id', this.findById);
  }
}
