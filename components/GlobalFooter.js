import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function GlobalFooter() {
  const router = useRouter();
  return (
    <footer>
      <ul className="allFooterButtons">
        {["Community", "Companies", "Journal", "Inspiration", "Resources"].map(
          (name, i) => {
            const lc = name.toLowerCase();

            return (
              <li key={i}
                className={ router.pathname.includes(lc) ? "activeFooter" : "" }
              >
                <Link href={`/${lc}`}>
                  <div className="footerBarOption">
                    <p className="footerIcon">
                      <img
                        className="footerSvg"
                        src={`/footer/${lc}.svg`}
                        alt={`${lc} link`}
                      />
                    </p>
                    <p className="optionTitle">{name}</p>
                  </div>
                </Link>
              </li>
            );
          }
        )}
      </ul>
    </footer>
  );
}
