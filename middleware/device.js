// // @ts-nocheck
// import {deviceType} from "~/utils/deviceType";

// export default function (context) {

//   let pcOrigin = 'http://localhost:3000/pc/'
//   let mobileOrigin = 'http://localhost:3000/sp/'
//   // @ts-ignore
//   context.userAgent = process.server ?
//     context.req.headers["user-agent"] :
//     navigator.userAgent;
//   // 给全局上下文添加一个属性来保存我们返回的匹配信息
//   context.deviceType = deviceType(context.userAgent);
//   // 这里注入到store,是因为我部分页面需要判断机型请求不同的数据,
//   // 你们没有用到的话可以移除
//   //   context.store.commit("SetDeviceType", context.deviceType);

//   // 若是判断UA非移动端的,就在这里做处理了..
//   // context.redirect(status,url) 这个可以重定向到外部网站
//   // 若是内部访问可以直接用router对象push/${context.store.state.lang}
//   console.log(context.deviceType.type);
//   if (context.deviceType.type === "pc") {
//     context.redirect(pcOrigin + route.fullPath)
//   } else {
//     context.redirect(mobileOrigin + route.fullPath)
//   }
// }

export default function ({
  isServer,
  req,
  redirect,
  route,
  isHMR,
  app,
  store,
  params,
  error
}) {
  let pcOrigin = 'http://localhost:3000/pc'
  let mobileOrigin = 'http://localhost:3000/sp'

  let isMobile = (ua) => {
    return !!ua.match(/AppleWebKit.*Mobile.*/)
  }
  let userAgent = req ? req.headers['user-agent'] : navigator.userAgent || ''


  if (route.fullPath == '/') {
    return isMobile(userAgent) ? redirect(mobileOrigin + route.fullPath) : redirect(pcOrigin + route.fullPath)
  }


  // 使用redirect 重定向到外链需要加上前缀:http / https
}
