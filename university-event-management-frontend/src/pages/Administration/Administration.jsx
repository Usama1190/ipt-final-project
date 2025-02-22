import PageConCom from "../../components/common/PageConCom/PageConCom"
import PageLayCom from "../../components/common/PageLayCom/PageLayCom"
import navData from "../../utils/constant/navData"

const Administration = () => {
  const data = navData[4].innerLinkTextAndUrl;

  return (
    <div>
      <PageLayCom title={'Administration'}>
        <PageConCom data={data}>
          <div>
            <h3>Choose from the following links</h3>
            <h3>Directorates & Offices</h3>
          </div>
        </PageConCom>
      </PageLayCom>
    </div>
  )
}

export default Administration
