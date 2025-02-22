import PageLayCom from "../../components/common/PageLayCom/PageLayCom"
import PageConCom from "../../components/common/PageConCom/PageConCom";

const Journals = () => {
  const data = [
    {
      linkText: 'Global Journal for Management and Administrative Sciences',
      linkUrl: '#gjfmaas'
    },
    {
      linkText: 'Imtezaaj',
      linkUrl: '#imt'
    },
    {
      linkText: 'International Journal Of Economic and Environmental Geology',
      linkUrl: '#introduction'
    },
    {
      linkText: 'International Research Journal Department of Usooluddin',
      linkUrl: '#introduction'
    },
    {
      linkText: 'Journal of European Studies',
      linkUrl: '#introduction'
    },
    {
      linkText: 'Journal of History and Social Sciences',
      linkUrl: '#introduction'
    },
    {
      linkText: 'Journal of Mass Communication',
      linkUrl: '#introduction'
    },
    {
      linkText: 'Journal of Social Sciences and Humanities',
      linkUrl: '#introduction'
    },
    {
      linkText: 'Karachi University Business Research Journal',
      linkUrl: '#introduction'
    },
    {
      linkText: 'Karachi University Journal of Science',
      linkUrl: '#introduction'
    },
    {
      linkText: 'Pakistan Journal of Applied Economics',
      linkUrl: '#introduction'
    },
    {
      linkText: 'Pakistan Journal of Applied Social Sciences',
      linkUrl: '#introduction'
    },
    {
      linkText: 'Pakistan Journal of Clinical Pyschology',
      linkUrl: '#introduction'
    },
    {
      linkText: 'Pakistan Journal of Gender studies',
      linkUrl: '#introduction'
    },
    {
      linkText: 'Pakistan Journal of Marine Sciences',
      linkUrl: '#introduction'
    },
    {
      linkText: 'Pakistan Journal of Pharmaceutical Sciences',
      linkUrl: '#introduction'
    },
    {
      linkText: 'Pakistan Journal of Pyschology',
      linkUrl: '#introduction'
    },
    {
      linkText: 'Pakistan Journal of Special Education',
      linkUrl: '#introduction'
    },
    {
      linkText: 'Pakistan Perspectives',
      linkUrl: '#introduction'
    },
    {
      linkText: 'Pakistan Journal of Nematology',
      linkUrl: '#introduction'
    },
    {
      linkText: 'The Islamic Culture',
      linkUrl: '#introduction'
    },
    {
      linkText: 'Ihya Al Ulum Journal',
      linkUrl: '#introduction'
    },
    {
      linkText: 'BioSight Journal',
      linkUrl: '#introduction'
    },
    {
      linkText: 'Pakistan Journal of Botany',
      linkUrl: '#introduction'
    },
    {
      linkText: 'International Journal of Biology and Biotechnology',
      linkUrl: '#introduction'
    },
    {
      linkText: 'Kalachi Research Journal',
      linkUrl: '#introduction'
    },
    {
      linkText: 'Shaheed Benazir Journal of Humanities & Social Sciences',
      linkUrl: '#introduction'
    },
    {
      linkText: 'Pakistan Journal of Psychology',
      linkUrl: '#introduction'
    },
    {
      linkText: 'Pakistan Journal of Clinical Psychology',
      linkUrl: '#introduction'
    },
    {
      linkText: 'Karachi University Journal of Education & Research',
      linkUrl: '#introduction'
    },
    {
      linkText: 'Journal of Arabic, University of Karachi',
      linkUrl: '#introduction'
    },
    {
      linkText: 'Pakistan Journal of Special Education, University of Karachi',
      linkUrl: '#introduction'
    },
    {
      linkText: 'Journal of Life in Saline Environments',
      linkUrl: '#introduction'
    },
    {
      linkText: 'International Journal of Seerah, University of Karachi',
      linkUrl: '#introduction'
    }
  ]

  const titles = {
    imgTitle: 'Karachi University Journals',
    pageTitle: 'Research Journal'
  }

  return (
    <div>
      <PageLayCom titles={titles}>
        <PageConCom>
          <h3>Names of Journals</h3>
          <div>
            <ul>
              {
                data.map((item, index) => {
                  return (
                    <li key={index}>
                      <a href={item.linkUrl}>{item.linkText}</a>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </PageConCom>
      </PageLayCom>
    </div>
  )
}

export default Journals
