import {OptionalId} from "mongodb";

export type VuelosModel = OptionalId <{

    Origen: string;
    Destino: string;
    FechaYHora: string;

}>;

export type Vuelos = {
    id: string;
    Origen: string;
    Destino: string;
    FechaYHora: string;
}: