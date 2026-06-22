import Image from "next/image";

import { contactInfo, footerLinks, zhuofanAsset } from "@/content/zhuofan";

export function Footer() {
  return (
    <footer className="zf-footer" id="about">
      <div className="zf-footer__inner">
        <div className="zf-footer__columns">
          <section>
            <h2>关于卓繁</h2>
            <span>ABOUT US</span>
            <ul>
              {footerLinks.map((link) => (
                <li key={link}>
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2>联系我们</h2>
            <span>CONTACT US</span>
            <ul>
              {contactInfo.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </section>

          <section className="zf-footer__follow">
            <h2>关注我们</h2>
            <span>FOLLOW US</span>
            <Image src={zhuofanAsset("images/wx.png")} alt="卓繁信息官方微信二维码" width={96} height={96} />
            <p>官方微信</p>
          </section>
        </div>

        <div className="zf-footer__record">
          <Image src={zhuofanAsset("images/zf-icon-index.png")} alt="" width={35} height={35} aria-hidden="true" />
          <strong>卓繁信息</strong>
          <a href="https://beian.miit.gov.cn">沪ICP备 19037083 号</a>
          <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31010402003621">
            沪公网安备 31010402003621 号
          </a>
        </div>
      </div>
    </footer>
  );
}
