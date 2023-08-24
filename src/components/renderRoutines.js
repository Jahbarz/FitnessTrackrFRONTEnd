import React, { useState, useEffect } from 'react';
import { Link, useHistory } from "react-router-dom";
import { getAllPublicRoutines, postNewRoutine, updateRoutine, deleteRoutine, attachActivitytoRoutine } from "../api";

//export const AllPublicRoutines = ({ token }) => {

//}

//export default renderRoutines;