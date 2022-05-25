import httpRequest from "@/request";

export function login(data: any) {
  return httpRequest({
    url: "/lejuAdmin/index/login",
    method: "post",
    data,
  });
}
