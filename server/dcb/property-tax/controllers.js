import mongoose from "mongoose";

import {
  serviceGetPtax,
  updateGeneralDataService,
  addGeneralDataService,
  addMonthlyCollectionService,
  updateMonthlyCollectionService,
} from "./service.js";

// get Enitre Property Tax details of the specified financial year
export const getPropertyTax = async (req, res, next) => {
  const collectionType = req.query.collectionType;
  const startYear = req.query.startYear;

  try {
    const response = await serviceGetPtax(collectionType, startYear);
    res.status(200).json(response);
  } catch (err) {
    next(err);
  }
};

// create or update property Tax details
export const addGeneralData = async (req, res, next) => {
  const generalData = req.body;
  try {
    const response = await addGeneralDataService(generalData);
    res.status(201).json(response);
  } catch (error) {
    throw new Error(error);
  }
};

export const updateGeneralData = async (req, res, next) => {
  const id = req.params.id;
  const newData = req.body;
  try {
    const response = await updateGeneralDataService(id, newData);
    res.status(200).json(response);
  } catch (error) {
    throw new Error(error);
  }
};

export const addMonthlyCollection = async (req, res, next) => {
  const id = req.params.id;
  const collectionData = req.body;
  try {
    const response = await addMonthlyCollectionService(id, collectionData);
    res.status(200).json(response);
  } catch (error) {
    throw new Error(error);
  }
};

export const updateMonthlyCollection = async (req, res, next) => {
  const id = req.params.id;
  const collectionData = req.body;
  try {
    const response = await updateMonthlyCollectionService(id, collectionData);
    res.status(200).json(response);
  } catch (error) {
    throw new Error(error);
  }
};
