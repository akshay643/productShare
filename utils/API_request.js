// useFetch.js
import { useState, useEffect } from "react";
import { BaseURL } from "./axiosRoute";
import axios from "axios";
const BASE_URL = BaseURL;

export async function getRequest(endpoint, token) {
  try {
    const response = await axios.get(BASE_URL + endpoint, {
      headers: { authorization: token },
    });

    return response;
  } catch (error) {
    return error.response;
  }
}

export async function postRequest(endpoint, data, token) {
  try {
    const response = await axios.post(`${BASE_URL}/${endpoint}`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response;
  } catch (error) {
    return error.response;
  }
}
