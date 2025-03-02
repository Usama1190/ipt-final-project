import PageConCom from "../../components/common/PageConCom/PageConCom";
import PageLayCom from "../../components/common/PageLayCom/PageLayCom";
import navData from "../../utils/constant/navData";

const Examination = () => {
  const data = navData[5].innerLinkTextAndUrl;

  const titles = {
    imgTitle: 'Annual Examination Section',
    pageTitle: 'Main Page'
  }

  return (
    <div>
      <PageLayCom titles={titles}>
        <PageConCom data={data}>
            <h3>Controller of Examination</h3>
            <p>Dr. Syed Zafar Hussain</p>
            <p>Controller Examination</p>
            <p>University of Karachi.</p>
            <p>Office Phone No. 021-99261356</p>
            <p>email: <a href={'#'}>coe@uok.edu.pk</a></p>
        </PageConCom>
      </PageLayCom>
    </div>
  )
}

export default Examination
