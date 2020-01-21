import {
  deviceType
} from "~/utils/deviceType";
export default function (context,route) {
  context.userAgent = process.server ? context.req.headers['user-agent'] : navigator.userAgent

  context.deviceType = deviceType(context.userAgent);

  console.log("this is the device type", context.deviceType);

  let pcOrigin = 'http://localhost:3000'
  let mobileOrigin = 'http://localhost:3000/mobile'

  if (context.deviceType.type === "mobile") {
    context.redirect(mobileOrigin);
  } else {
    context.redirect(pcOrigin);
  }
}