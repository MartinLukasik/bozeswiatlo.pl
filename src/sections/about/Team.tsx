import React from 'react'

const TEAM = [
  {
    name: 'Саша Кулько',
    imageSrc: '/img/team/kulko.webp',
    jobTitle: 'Основатель Церкви',
  },
  {
    name: 'Игорь Бубен',
    imageSrc: '/img/team/igor-buben.webp',
    jobTitle: 'Пастор',
  },
  {
    name: 'Мария Бубен',
    imageSrc: '/img/team/procuk-marila.webp',
    jobTitle: 'Финансовое служение',
  },
  {
    name: 'Ян Лукасик',
    imageSrc: '/img/team/jo-1.webp',
    jobTitle: 'Служение прославления',
  },
  {
    name: 'Aнна Лукасик',
    imageSrc: '/img/team/anna.webp',
    jobTitle: 'Администратор',
  },
]

export function Team() {
  return (
    <section className="team">
      <div className="section-title-container" data-aos="zoom-in">
        <h2 className="section-title">Наша команда</h2>
      </div>
      <div className="row center-xs cols-fixed no-gutters">
        {TEAM.map((member, index) => (
          <div
            key={member.name}
            className="team-card col-xs"
            data-aos="flip-left"
            data-aos-delay={(index % 3) * 200}
          >
            <img className="card-img" src="/img/card-bg.webp" alt="" />
            <img
              className="profile-img jello-horizontal"
              src={member.imageSrc}
              alt=""
            />
            <h4>{member.name}</h4>
            <p className="job-title">{member.jobTitle}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
