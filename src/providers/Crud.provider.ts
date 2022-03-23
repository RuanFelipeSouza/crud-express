import { CustomerRepository } from 'src/repository/customer.repository';
import { getConnection } from 'typeorm';
import { Customer } from './DTO/customer.dto';
export class CrudProvider {
  private customerRepository: CustomerRepository;
  constructor() {
    this.customerRepository =
      getConnection('test').getCustomRepository(CustomerRepository);
  }
  public async create(customer_params: Customer) {
    return await this.customerRepository.save(customer_params);
  }
}
