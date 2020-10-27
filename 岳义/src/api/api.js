import { post } from "@/utils/request.js";

// 获取手机验证码
const postCode = (data) => post("/code", data);

// 获取手机验证码
const postPhoneLogin = (data) => post("/phoneLogin", data);

export { postCode, postPhoneLogin };
