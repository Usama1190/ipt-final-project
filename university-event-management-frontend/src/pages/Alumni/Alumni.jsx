import PageLayCom from "../../components/common/PageLayCom/PageLayCom"
import PageConCom from "../../components/common/PageConCom/PageConCom";

const Alumni = () => {
  const data = [
    {
      linkText: 'Introduction',
      linkUrl: '#introduction'
    },
    {
      linkText: 'Aims & Objectives',
      linkUrl: '#aims-&-objectives'
    },
    {
      linkText: 'Endowment Fund',
      linkUrl: '#endowment-fund'
    },
    {
      linkText: 'Contact',
      linkUrl: '#contact'
    }
  ]

  const titles = {
    imgTitle: 'University of Karachi Alumni',
    pageTitle: 'Alumni Intorductory Page'
  }

  return (
    <div>
      <PageLayCom titles={titles}>
        <PageConCom data={data}>
          <p>The first official Alumni body of University of Karachi aims to help you stay in touch with your University, college and other UoK alumni, no matter wherever you are in the world.</p>
          <p>The University of Karachi Alumni (UKA) - with graduates from all academic programmes at UoK and its affiliated colleges including Bachelors, Masters, MS/M.Phil and PhD form an integral part of the University. This ever-growing body represents a rich resource base for the University with its huge reservoir of diverse talents and expertise spanning over areas like Social and Biological Sciences, Management and Administrative Sciences, Pharmacy, Islamic Studies, Law, Medicine, Engineering and Education. The bond that our students form with their alma mater will strengthen even further once they become alumni.</p>
          <p>Through this alumni body, the University will ensure that good communication link is established amongst the alumni as well as between the alumni and the University. To achieve this it has established an office in the Public Relations Office, where administrative facilities are provided to its alumni for the completion of their membership. Not only this, the office will be responsible to build a cohesive network of UoK Alumni. It will ensure unhindered communication throughout the year that includes timely announcement of University events as well. The office aims to organize different alumni based activities that will help connecting the alumni around the globe.</p>
          <p>These measures will keep our alumni informed about the whereabouts and achievements of fellow alumni, as well as important developments at the University. To provide a more efficient communication link, a website will soon be developed to provide up to date information regarding alumni events. Also, the latest developments at the University will be announced through this website. An electronic version of the University Magazine will also be available on the website.</p>
          <h3>University starts the registration of its Alumni</h3>
          <p>University of Karachi has launched its first official Alumni body the University of Karachi Alumni. The process of alumni registration has started. Forms are available here. For further queries email can be sent at alumni@uok.edu.pk.</p>
        </PageConCom>
      </PageLayCom>
    </div>
  )
}

export default Alumni
