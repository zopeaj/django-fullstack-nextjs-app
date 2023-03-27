import React, { Component, Fragment } from "react";
import { Box, Grid, Container } from "@mui/material";
import { ErrorIcon, SuccessIcon, InfoIcon, WarningIcon } from "@mui/icons-material";


const notification = {
  success: ({ message, description, placement }) => {},
  error: ({ message, description, placement }) => {},
  warning: ({ message, description, placement }) => {},
  info: ({ message, description, placement }) => {},
}

export const errorNotification = (type, message, description, placement) => {
  notification[type]({ message, description, placement });
}

export const successNotification = (type, message, description, placement) => {
  notification[type]({ message, description, placement });
}

export const openNotificationWithIcon = ({ type, message, description, placement }) => {
  notification[type]({ message, description, placement });
}
