import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
    @Get()
    getRootRoute() {
        return 'Welcome to the API! Access /products to see products list.';
    }
}
