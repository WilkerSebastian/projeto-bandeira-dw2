import express from "express";
import { router } from "./router";
import { engine } from "express-handlebars";
import hbshelpers from "handlebars-helpers";

const helpers = hbshelpers(); 

export class App {

    public server: express.Application;

    constructor() {
        this.server = express();
        this.middleware();
        this.router();
    }

    private middleware() {
 
        this.server.set('views', __dirname + '/app/views');
        this.server.engine('.hbs', engine({ 

            defaultLayout: 'main', 

            extname: '.hbs' ,

            helpers: helpers,
        
        }));
        this.server.set('view engine', '.hbs');
     
        this.server.use('/bscss', express.static('./node_modules/bootstrap/dist/css'));
        this.server.use('/bscss-icons', express.static('./node_modules/bootstrap-icons/font/'));
        this.server.use('/bsjs', express.static('./node_modules/bootstrap/dist/js'));
        this.server.use('/mdbcss', express.static('./node_modules/mdb-ui-kit/css'));
        this.server.use('/mdbjs', express.static('./node_modules/mdb-ui-kit/js'));
        this.server.use('/jquery', express.static('./node_modules/jquery/dist'));
        this.server.use('/popperjs', express.static('./node_modules/@popperjs/core/dist/umd'));
        this.server.use('/hbs', express.static('./node_modules/handlebars/dist/'));
        this.server.use('/public', express.static(__dirname + "/app/public"));

        this.server.use(express.urlencoded({ extended: true }));
        this.server.use(express.json());
    }

    private router() {
        this.server.use(router);
    }
}