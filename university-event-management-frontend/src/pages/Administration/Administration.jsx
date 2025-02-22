import PageConCom from "../../components/common/PageConCom/PageConCom"
import PageLayCom from "../../components/common/PageLayCom/PageLayCom"
import navData from "../../utils/constant/navData"

const Administration = () => {
  const data = navData[4].innerLinkTextAndUrl;

  const titles = {
    imgTitle: 'Administration',
    pageTitle: 'Administration Page'
  }

  return (
    <div>
      <PageLayCom titles={titles}>
        <PageConCom data={data}>
          <div>
            <h3>Choose from the following links</h3>
            <div>
              <ul>
                { data.map((item, index) => {
                  return (
                    <li key={index}>
                      <a href={item.linkUrl}>{item.linkText}</a>
                    </li>
                  )
                })}
              </ul>
            </div>
            <h3>Directorates & Offices</h3>
            <div>
              <ul>
                { data.map((item, index) => {
                  return (
                    <li key={index}>
                      <a href={item.linkUrl}>{item.linkText}</a>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </PageConCom>
      </PageLayCom>
    </div>
  )
}

export default Administration
