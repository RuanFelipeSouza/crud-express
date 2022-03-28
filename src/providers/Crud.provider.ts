import { CustomerRepository } from '../../src/repository/customer.repository';
import { DeleteResult, getConnection, UpdateResult } from 'typeorm';
import { Customer } from './DTO/customer.dto';
import { CustomerEntity } from 'src/entities/customer.entity';
import { Post, Route } from 'tsoa';

export class CrudProvider {
  private customerRepository: CustomerRepository;
  constructor() {}
  public async create(
    customer_params: Customer,
  ): Promise<Customer & CustomerEntity> {
    this.customerRepository =
      getConnection().getCustomRepository(CustomerRepository);
    const customer_created: Promise<Customer & CustomerEntity> =
      this.customerRepository.save(customer_params);
    return customer_created;
  }
  public async delete(customer_id: string): Promise<DeleteResult> {
    this.customerRepository =
      getConnection().getCustomRepository(CustomerRepository);
    const customer_delete: Promise<DeleteResult> =
      this.customerRepository.delete(customer_id);
    return customer_delete;
  }
  public async update(
    id: string,
    update_params: Customer,
  ): Promise<UpdateResult> {
    this.customerRepository =
      getConnection().getCustomRepository(CustomerRepository);
    const customer_update: Promise<UpdateResult> =
      this.customerRepository.update(id, update_params);
    return customer_update;
  }
  public async getById(customer_id: string): Promise<CustomerEntity> {
    this.customerRepository =
      getConnection().getCustomRepository(CustomerRepository);
    const customer: CustomerEntity =
      await this.customerRepository.findOneOrFail(customer_id);
    return customer;
  }
}
