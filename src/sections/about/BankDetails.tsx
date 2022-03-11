import React from 'react'

export function BankDetails() {
  return (
    <section className="donation">
      <div className="section-title-container" data-aos="zoom-in">
        <h2 className="section-title">Добровольное пожертвование</h2>
      </div>
      <div className="container">
        <p data-aos="fade-right">
          Если вы желаете поддержать наше служение по распространению Евангелия
          и насаждению новых церквей в Европе, Вы можете отправить нам поддержку
          по этим реквизитам:
        </p>
        <br />
        <div data-aos="fade-up">
          <p>KOSCIOL CHRZESCIJANSKI BOZE SWIATLO</p>
          <p>ZELAZOWEJ WOLI 5/24, 20-853 LUBLIN, POLSKA</p>
          <br />
          <p>PL 31 1240 2470 1111 0011 1184 4880 (PLN)</p>
          <p>PL 80 1240 2470 1787 0011 1184 5409 (USD)</p>
          <p>PL 75 1240 2470 1978 0011 1184 5164 (EUR)</p>
          <p>PL 87 1240 2470 1789 0011 1184 5571 (GBP)</p>
          <br />
          <p>SWIFT/BIC: PKOPPLPW</p>
        </div>
      </div>
    </section>
  )
}
