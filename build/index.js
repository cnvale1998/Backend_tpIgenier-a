"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const EntradasRoutes_1 = __importDefault(require("./routes/EntradasRoutes"));
const CarteleraRoutes_1 = __importDefault(require("./routes/CarteleraRoutes"));
const PeliculasRoutes_1 = __importDefault(require("./routes/PeliculasRoutes"));
const BeneficiosRoutes_1 = __importDefault(require("./routes/BeneficiosRoutes"));
const CombosRoutes_1 = __importDefault(require("./routes/CombosRoutes"));
const PersonasRoutes_1 = __importDefault(require("./routes/PersonasRoutes"));
const ProximosEstrenosRoutes_1 = __importDefault(require("./routes/ProximosEstrenosRoutes"));
const SolicitantesRoutes_1 = __importDefault(require("./routes/SolicitantesRoutes"));
<<<<<<< HEAD
const CiudadesRoutes_1 = __importDefault(require("./routes/CiudadesRoutes")); //ciudades
const ParticipantesRoutes_1 = __importDefault(require("./routes/ParticipantesRoutes"));
=======
const CiudadesRoutes_1 = __importDefault(require("./routes/CiudadesRoutes"));
const ProvinciasRoutes_1 = __importDefault(require("./routes/ProvinciasRoutes"));
const ConsultasRoutes_1 = __importDefault(require("./routes/ConsultasRoutes"));
const UsuariosRoutes_1 = __importDefault(require("./routes/UsuariosRoutes"));
>>>>>>> origin/vale
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
// parte marketing , lo demas no toque nada 
const MarketingRoutes_1 = __importDefault(require("./routes/MarketingRoutes"));
const TicketsRoutes_1 = __importDefault(require("./routes/TicketsRoutes"));
const TransmitenRoutes_1 = __importDefault(require("./routes/TransmitenRoutes"));
const SuscriptoresRoutes_1 = __importDefault(require("./routes/SuscriptoresRoutes"));
class Servidor {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default(0));
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use(EntradasRoutes_1.default);
        this.app.use(CarteleraRoutes_1.default);
        this.app.use(CombosRoutes_1.default);
        this.app.use(PersonasRoutes_1.default);
        this.app.use(SolicitantesRoutes_1.default);
        this.app.use(ProximosEstrenosRoutes_1.default);
        this.app.use(BeneficiosRoutes_1.default);
        this.app.use(CiudadesRoutes_1.default);
        this.app.use(ProvinciasRoutes_1.default);
        this.app.use(ConsultasRoutes_1.default);
        this.app.use(UsuariosRoutes_1.default);
        // agrego lo de marketing
        this.app.use(MarketingRoutes_1.default);
        this.app.use(PeliculasRoutes_1.default);
        this.app.use(TransmitenRoutes_1.default);
        this.app.use(TicketsRoutes_1.default);
        this.app.use(SuscriptoresRoutes_1.default);
        this.app.use(ParticipantesRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Servidor en puerto ', this.app.get('port'));
        });
    }
}
const servidor = new Servidor();
servidor.start();
