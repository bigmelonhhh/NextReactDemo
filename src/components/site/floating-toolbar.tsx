"use client";

import Image from "next/image";
import { MapPin } from "lucide-react";

import { zhuofanAsset } from "@/content/zhuofan";

export function FloatingToolbar() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <aside className="zf-floating" aria-label="快捷联系">
      <div className="zf-floating__item">
        <Image src={zhuofanAsset("images/weixin.png")} alt="" width={30} height={30} aria-hidden="true" />
        <span>官方微信</span>
        <div className="zf-floating__popover zf-floating__popover--qr">
          <Image src={zhuofanAsset("images/wx.png")} alt="卓繁信息官方微信二维码" width={96} height={96} />
        </div>
      </div>
      <div className="zf-floating__item">
        <MapPin aria-hidden="true" size={30} strokeWidth={1.8} />
        <span>联系我们</span>
        <div className="zf-floating__popover zf-floating__popover--phone">021-60748199</div>
      </div>
      <button className="zf-floating__item" type="button" onClick={scrollTop}>
        <Image src={zhuofanAsset("img/index/toTop.png")} alt="" width={32} height={24} aria-hidden="true" />
        <span>返回顶部</span>
      </button>
    </aside>
  );
}
