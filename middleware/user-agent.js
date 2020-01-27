import {
  deviceType
} from "~/utils/deviceType";
export default function (context) {
  context.userAgent = process.server ? context.req.headers['user-agent'] : navigator.userAgent

  context.deviceType = deviceType(context.userAgent);
  console.log("this is the device type", context.deviceType);
  console.log("this is the route", context.route);

  // let pcOrigin = 'http://localhost:3000'
  let mobileOrigin = 'http://localhost:3000/mobile'

  if (context.deviceType.type === "pc") {
    // context.redirect(301, pcOrigin + context.route.fullPath);
  } else {
    if (!context.route.fullPath.startsWith('/mobile'))
      context.redirect(301, mobileOrigin + context.route.fullPath);
  }
}