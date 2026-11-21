"use client";

import { useState, useRef } from "react";
import { CATEGORIES, MEMBER, waLink } from "./data";

const TABS = [...CATEGORIES.map((c) => ({ id: c.id, label: c.label })), { id: "member", label: "★ Member", member: true }];

export default function PriceTabs() {
  const [active, setActive] = useState(TABS[0].id);
  const refs = useRef({});

  function onKey(e, i) {
    let n = null;
    if (e.key === "ArrowRight") n = (i + 1) % TABS.length;
    if (e.key === "ArrowLeft") n = (i - 1 + TABS.length) % TABS.length;
    if (n === null) return;
    setActive(TABS[n].id);
    refs.current[TABS[n].id]?.focus();
  }

  return (
    <>
      <div className="tabs" role="tablist" aria-label="Kategori harga">
        {TABS.map((t, i) => (
          <button
            key={t.id}
            ref={(el) => (refs.current[t.id] = el)}
            role="tab"
            id={`t-${t.id}`}
            aria-controls={`p-${t.id}`}
            aria-selected={active === t.id}
            tabIndex={active === t.id ? 0 : -1}
            className={`tab${t.member ? " member" : ""}`}
            onClick={() => setActive(t.id)}
            onKeyDown={(e) => onKey(e, i)}
          >
            {t.label}
          </button>
        ))}
      </div>

      {CATEGORIES.map((c) => (
        <div key={c.id} className="panel" role="tabpanel" id={`p-${c.id}`} aria-labelledby={`t-${c.id}`} hidden={active !== c.id}>
          <div className="plist">
            {c.items.map((it) => (
              <div className="item" key={it.name}>
                <div>
                  <h3>{it.name}</h3>
                  {it.desc && <small>{it.desc}</small>}
                </div>
                <div className={`price${it.ask ? " ask" : ""}`}>{it.ask ? "Tanya admin" : it.price}</div>
              </div>
            ))}
          </div>
          <p className="note">{c.note}</p>
        </div>
      ))}

      <div className="panel" role="tabpanel" id="p-member" aria-labelledby="t-member" hidden={active !== "member"}>
        <div className="member-card">
          <div>
            <span className="tag">MEMBER</span>
            <h3>Member Joki Syndicate</h3>
            <ul>
              {MEMBER.benefits.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
          <div className="member-price">
            <b>{MEMBER.price}</b>
            <span>Daftar member</span>
            <a className="btn btn-accent" href={waLink(`Halo Joki Syndicate, saya mau daftar Member ${MEMBER.price}`)} target="_blank" rel="noopener noreferrer">
              Daftar Member
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
