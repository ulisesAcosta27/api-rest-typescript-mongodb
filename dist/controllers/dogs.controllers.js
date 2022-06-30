"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOneDog = exports.createADog = exports.getOnlyOneUser = exports.getAllDogs = void 0;
const dogs_schema_1 = require("../schemas/dogs.schema");
const getAllDogs = async (req, res) => {
    try {
        const allDogs = await dogs_schema_1.Dog.find();
        return res.status(200).json(allDogs);
    }
    catch (error) {
        console.log(error);
    }
};
exports.getAllDogs = getAllDogs;
const getOnlyOneUser = async (req, res) => {
    const { name } = req.params;
    try {
        const getOneUser = await dogs_schema_1.Dog.findOne({ name });
        return res.status(200).json(getOneUser);
    }
    catch (error) {
        console.log(error);
    }
};
exports.getOnlyOneUser = getOnlyOneUser;
const createADog = async (req, res) => {
    const { name, age, breed, coat_color, picture_url, owner_name } = req.body;
    try {
        const createANewDog = await dogs_schema_1.Dog.create({
            name,
            age,
            breed,
            coat_color,
            picture_url,
            owner_name,
        });
        return res.status(200).json(createANewDog);
    }
    catch (error) {
        console.log(error);
    }
};
exports.createADog = createADog;
// export const updateADog = async (req: Request, res: Response): Promise<any> => {
//   const { id } = req.params;
//   const { ...itemDog } = req.body;
//   try {
//     await Dog.updateOne(id, { ...itemDog });
//     return res.status(200).json({ msg: "dog is updated" });
//   } catch (error) {
//     console.log(error);
//   }
// };
const deleteOneDog = async (req, res) => {
    const { id } = req.params;
    try {
        await dogs_schema_1.Dog.deleteOne({ id });
        return res.status(200).json({ msg: 'user deleted successfully' });
    }
    catch (error) {
        console.log(error);
    }
};
exports.deleteOneDog = deleteOneDog;
