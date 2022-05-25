import account from "@/assets/svgs/zhanghao.svg";
import role from "@/assets/svgs/juese.svg";
import source from "@/assets/svgs/ziyuan.svg";
import shopList from "@/assets/svgs/splist.svg";
import shopCategory from "@/assets/svgs/spcategory.svg";
import shopBrand from "@/assets/svgs/brand.svg";
import orderList from "@/assets/svgs/orderlist.svg";
import orderBack from "@/assets/svgs/orderback.svg";
import address from "@/assets/svgs/address.svg";

interface AsideConfig {
  iconUrl: any;
  itemName: string;
}
export default function useSvgs() {
  const authData: Array<AsideConfig> = reactive([
    {
      iconUrl: account,
      itemName: "账号管理",
    },
    {
      iconUrl: role,
      itemName: "角色管理",
    },
    {
      iconUrl: source,
      itemName: "资源管理",
    },
  ]);
  const shopData: Array<AsideConfig> = reactive([
    {
      iconUrl: shopList,
      itemName: "商品列表",
    },
    {
      iconUrl: shopCategory,
      itemName: "商品分类",
    },
    {
      iconUrl: shopBrand,
      itemName: "品牌管理",
    },
  ]);
  const orderData: Array<AsideConfig> = reactive([
    {
      iconUrl: orderList,
      itemName: "订单列表",
    },
    {
      iconUrl: orderBack,
      itemName: "退单列表",
    },
    {
      iconUrl: address,
      itemName: "地址管理",
    },
  ]);

  return {
    authData,
    shopData,
    orderData,
  };
}
