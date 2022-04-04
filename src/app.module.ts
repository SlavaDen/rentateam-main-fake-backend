import {Module} from "@nestjs/common";
import {ConfigModule} from "@nestjs/config";
import {ServeStaticModule} from "@nestjs/serve-static";
import { MockModule } from "./mock/mock.module";
import * as path from 'path';

@Module({
    controllers: [],
    providers: [],
    imports: [
        MockModule,
        ConfigModule.forRoot({
          envFilePath: `.${process.env.NODE_ENV}.env`
        }),
       ServeStaticModule.forRoot({
           rootPath: path.resolve( __dirname, 'static'),
       }),
    ]
})
export class AppModule {}
