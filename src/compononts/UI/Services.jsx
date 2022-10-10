import React from 'react'

import '../../styles/services.css'


const serviseDate = 
[
    {
        icon: 'ri-apps-line',
        title: 'App Developpement',
        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque nam sit fuga rem!'
    },

    {
        icon: 'ri-code-s-slash-line',
        title: 'Web Design',
        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque nam sit fuga rem!'
    },

    {
        icon: 'ri-landscape-line',
        title: 'Graphics Design',
        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque nam sit fuga rem!'
    },

    {
        icon: 'ri-rocket-line',
        title: 'Digital Marketing',
        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque nam sit fuga rem!'
    },

]



const Services = () => {
  return (
    <section id='services'>
       <div className="container">
        <div className="services__top-content">
            <h6 className='subtitle'>Our Services</h6>
            <h2>Save time managine your business with</h2>
            <h2 className='highlight'>our best services</h2>
        </div>

        <div className="service__item-wrapper">
            {
                serviseDate.map((item,index) => (
                    <div className="services__item" key={index}>
                        <span className='service__icon'>
                            <i class={item.icon}></i>
                        </span>
                        <h3 className='serice__title'>{item.title}</h3>
                        <p className="description">
                            {item.desc}
                        </p>
                    </div>
                ))
            }
        </div>
       </div>
    </section>
  )
}

export default Services