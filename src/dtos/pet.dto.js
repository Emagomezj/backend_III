import { toBoolean } from "../utils/index.js"

export class PetDTO{
    model(model){
        model.birthDate = model.birthDate.toLocaleDateString('es-ES', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
          });
        return {
            id: model.id,
            name: model.name,
            specie: model.specie,
            birthDate: model.birthDate,
            adopted: model.adopted,
            owner: model?.owner ? {
                id: model.owner.id,
                name: model.owner.name,
                surname: model.owner.surname
            } : null,
            thumbnail: model.thumbnail
        }
    };

    data(data){
        return {
            id: data.id || null,
            name: data.name,
            specie: data.specie,
            adopted: toBoolean(data.adopted),
            birthDate: data.birthDate || '01-01-2000',
            owner: data.oid || null,
            thumbnail: data.thumbnail || "/public/images/default_pet.svg"
        }
    };
}