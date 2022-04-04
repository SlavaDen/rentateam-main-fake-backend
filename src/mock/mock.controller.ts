import {Controller, Get} from "@nestjs/common";
import {MockService} from "./mock.service";

@Controller('/mock')
export class MockController {
    constructor(private mockService: MockService) {    }

    @Get("/categories")
    getCategories() {
        return this.mockService.getCategories();
    }

    @Get("/products")
    getProducts() {
        return this.mockService.getProducts();
    }

    @Get("/order")
    sendOrder() {
        return {result: true};
    }

}
