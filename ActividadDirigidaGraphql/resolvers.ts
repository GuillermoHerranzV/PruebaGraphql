import { Collection, ObjectId } from "mongodb";
import { Vuelos, VuelosModel } from "./types.ts";
import { fromModelToVuelos } from "./utils.ts";

export const resolvers = {
  Query: {
    getFlights: async (
      _: unknown,
      { Origen, Destino }: { Origen: String, Destino: String },
      context: { VuelosCollection: Collection<VuelosModel> },
    ): Promise<Vuelos[]> => {
      const vuelosModel = await context.VuelosCollection.find().toArray();
      
        if (Origen){
            const vuelos = vuelosModel.map ((vuelosModel) => fromModelToVuelos(vuelosModel));
            return vuelos.filter (a => a.Origen === Origen);
        }else if (Destino){
            const vuelos = vuelosModel.map ((vuelosModel) => fromModelToVuelos(vuelosModel));
            return vuelos.filter (a => a.Destino === Destino);
        }else if (Origen && Destino){

            const vuelos = vuelosModel.map ((vuelosModel) => fromModelToVuelos(vuelosModel));
            return vuelos.filter (a => a.Origen === Origen && a.Destino === Destino);
        }else {
            return vuelosModel.map((vuelosModel) => fromModelToVuelos(vuelosModel));
        }

    },
    /*getFlight: async (
      _: unknown,
      { id }: { id: string },
      context: { VuelosCollection: Collection<VuelosModel> },
    ): Promise<Vuelos | null> => {
      
    },*/
  },
  
};