import { Crud, CrudController } from "@nestjsx/crud";
import { Customer } from "./customer.entity";
import { Controller } from "@nestjs/common";
import { CustomerService } from "./customer.service";
import { ApiUseTags } from "@nestjs/swagger";

@Crud({
    model: {
      type: Customer
    },
  })
@ApiUseTags('Customer')
// @UseGuards(TokenGuard)
@Controller('customers')
export class CustomerController implements CrudController<Customer> {
    constructor(public service: CustomerService) { }

}