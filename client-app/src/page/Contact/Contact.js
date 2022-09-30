/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/iframe-has-title */
import styles from "./Contact.module.css";
import classNames from "classnames/bind";
import FormContact from "~/components/FormContact";
import {
  FaFacebookF,
  FaInstagram,
  FaPhoneAlt,
  FaLinkedin,
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import IconContact from "~/components/IconContact";

function Contact() {
  let cx = classNames.bind(styles);
  return (
    <div className={cx("contact_page")}>
      <div className={cx("contact_page_map")}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.355891549309!2d106.68186771462257!3d10.784030592316375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f2e9bb2480b%3A0x4f1873c37f97e301!2zMTgwLTE4MiBMw70gQ2jDrW5oIFRo4bqvbmcsIFBoxrDhu51uZyA5LCBRdeG6rW4gMywgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1658501834140!5m2!1svi!2s"
          width="100%"
          height="350"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className={cx("contact_wrapper")}>
        <div className={cx("contact_container")}>
          <div>
            <h2 className={cx("contact_container_title")}>
              Liên hệ với chúng tôi
            </h2>
            <p className={cx("contact_container_name-company")}>
              Công ty TNHH Trường Thọ - Chi nhánh Hà Nội
            </p>
            <ul className={cx("contact_container_list_detail")}>
              <li className={cx("contact_container_detail")}>
                <span>Trụ sở chính: </span>
                <span>
                  180 - 182 Lý Chính Thắng, Phường 9, Quận 3, TP Hồ Chí Minh
                </span>
              </li>
              <li className={cx("contact_container_detail")}>
                <span>Chi nhánh: </span>
                <span>
                  Tầng 4, số 01 ngõ 120 Trường Chinh, Thanh Xuân , Hà Nội
                </span>
              </li>
              <li className={cx("contact_container_detail")}>
                <span>Hotline: </span>
                <span>0986.989.626</span>
              </li>
              <li className={cx("contact_container_detail")}>
                <span>Email: </span>
                <span>halonafruits.vn@gmail.com</span>
              </li>
              <li className={cx("contact_container_detail")}>
                <span>Website: </span>
                <span>www.halonafruits.com.vn</span>
              </li>
            </ul>
            <div className={cx("contact_container_list_icons")}>
              <IconContact
                icon={FaFacebookF}
                nameIcon="Facebook"
                linkPage="https://www.facebook.com/traicayhalona/"
              ></IconContact>
              <IconContact
                icon={FaInstagram}
                nameIcon="Instagram"
                linkPage="https://www.instagram.com/p/CI3NeVghb-d/"
              ></IconContact>
              <IconContact
                icon={FiMail}
                nameIcon="Mail"
                linkPage="https://accounts.google.com/v3/signin/identifier?dsh=S-368435943%3A1660966956701647&continue=https%3A%2F%2Faccounts.google.com%2Fb%2F1%2FAddMailService&followup=https%3A%2F%2Faccounts.google.com%2Fb%2F1%2FAddMailService&passive=1209600&flowName=GlifWebSignIn&flowEntry=ServiceLogin&ifkv=AQN2RmWCggnBZkUveek55uNO5oId-uPlNAPCNlFQuf5tXu0W0m4ZeCnoliqaPk9q1BY2wRBFEGKreg"
              ></IconContact>
              <IconContact
                icon={FaPhoneAlt}
                nameIcon="Phone"
                linkPage="https://www.google.com/search?q=s%E1%BB%91+%C4%91i%E1%BB%87n+tho%E1%BA%A1i+Halona&sxsrf=ALiCzsYKzzt7qpkkQvgyQM9LcMCitLehSw%3A1660967089457&ei=sVgAY_S1G4vs-Qbq4KaIBQ&ved=0ahUKEwi00ubKwNT5AhULdt4KHWqwCVEQ4dUDCA4&uact=5&oq=s%E1%BB%91+%C4%91i%E1%BB%87n+tho%E1%BA%A1i+Halona&gs_lcp=Cgdnd3Mtd2l6EAM6BwgAEEcQsAM6BwgAELADEEM6CggAELADEMkDEEM6BQgAEIAEOgQIABBDOgcIABDJAxBDOgUIABCSAzoGCAAQHhAWSgQIQRgASgQIRhgAUKwEWKMNYPYOaAFwAXgAgAGtBIgBswmSAQswLjIuMC4xLjAuMZgBAKABAcgBCsABAQ&sclient=gws-wiz"
              ></IconContact>
              <IconContact
                icon={FaLinkedin}
                nameIcon="LinkedIn"
                linkPage="https://www.linkedin.com/authwall?trk=gf&trkInfo=AQFV_i7ReC410wAAAYK5UbkI_AYVEMEiqqIzE4qTPihIzdNwvAiAsF_bJeDQ5jz1Rn8dTilJKoutBKe-VODZlm2ZThuub693crsZEEo_D8kKs5MevJj_Oc9kzBK2vFNPVefU9eU=&original_referer=https://www.google.com/&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fph%25E1%25BA%25A1m-thu%25E1%25BA%25ADn-6a5945156"
              ></IconContact>
            </div>
          </div>
          <FormContact></FormContact>
        </div>
      </div>
    </div>
  );
}

export default Contact;
