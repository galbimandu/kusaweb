import { notification as antNotification } from "antd";
// Placement =>topRight, bottomRight, bottomLeft, topLeft
// type => success, info, warning, error
export const notification = (
  type,
  message,
  description,
  placement,
  duration?
) => {
  antNotification[type]({
    message: message,
    description: description,
    placement,
    duration: duration ? duration : 7,
  });
};
