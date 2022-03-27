import { CustomerRepository } from '../../src/repository/customer.repository';
import { getConnection } from 'typeorm';
import { Customer } from './DTO/customer.dto';
import { CustomerEntity } from 'src/entities/customer.entity';
export class CrudProvider {
  private customerRepository: CustomerRepository;
  constructor() {}
  public async create(
    customer_params: Customer,
  ): Promise<Customer & CustomerEntity> {
    this.customerRepository =
      getConnection().getCustomRepository(CustomerRepository);
    const customer: Promise<Customer & CustomerEntity> =
      this.customerRepository.save(customer_params);
    return customer;
  }
}
