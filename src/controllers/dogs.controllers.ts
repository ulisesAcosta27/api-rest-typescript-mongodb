import { Request, Response } from "express";
import { Dog } from "../schemas/dogs.schema";

export const getAllDogs = async (req: Request, res: Response): Promise<any> => {
  try {
    const allDogs = await Dog.find();
    return res.status(200).json(allDogs);
  } catch (error) {
    console.log(error);
  }
};

export const getOnlyOneUser = async (
  req: Request,
  res: Response
): Promise<any> => {
  const { name } = req.params;
  try {
    const getOneUser = await Dog.findOne({ name });
    return res.status(200).json(getOneUser);
  } catch (error) {
    console.log(error);
  }
};

export const createADog = async (req: Request, res: Response): Promise<any> => {
  const { name, age, breed, coat_color, picture_url, owner_name } = req.body;
  try {
    const createANewDog = await Dog.create({
      name,
      age,
      breed,
      coat_color,
      picture_url,
      owner_name,
    });
    return res.status(200).json(createANewDog);
  } catch (error) {
    console.log(error);
  }
};

export const updateADog = async (req: Request, res: Response): Promise<any> => {
  const { id } = req.params;
  const { ...itemDog } = req.body;
  try {
    await Dog.updateOne({ _id: id }, { ...itemDog });
    return res.status(200).json({ msg: "dog is updated" });
  } catch (error) {
    console.log(error);
  }
};

export const deleteOneDog = async (
  req: Request,
  res: Response
): Promise<any> => {
  const { id } = req.params;
  try {
    await Dog.deleteOne({ id });
    return res.status(200).json({ msg: "user deleted successfully" });
  } catch (error) {
    console.log(error);
  }
};
