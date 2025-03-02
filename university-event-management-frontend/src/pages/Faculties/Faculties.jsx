import PageLayCom from "../../components/common/PageLayCom/PageLayCom";
import PageConCom from "../../components/common/PageConCom/PageConCom";
import navData from "../../utils/constant/navData";

const Faculties = () => {
  const data = navData[2].innerLinkTextAndUrl;

  const titles = {
    imgTitle: 'List of Faculties',
    pageTitle: 'Academics'
  }

  return (
    <div>
      <PageLayCom titles={titles}>
        <PageConCom data={data}>
        <div>
            <div>
              <h3>Faculity of Education</h3>
              <p>Dean: Prof. Dr. Nasir Salman</p>
            </div>

            <div>
              <p>
                The Faculty of Education, was established in 1970 at the
                University of Karachi, and had been governing all colleges,
                teaching education in the city of Karachi. Earlier, the Dean of
                the Education Faculty was selected from colleges on the basis of
                seniority. In 2003, for the first time, Dr. Fatima Razi,
                Professor, Department of Education was appointed as the Dean,
                Education. Since then, the University realized that the Faculty
                of Education should be functional and finally the Faculty got
                approval in 2012 by the University statuary bodies and started
                working. The Faculty of Education comprised of the following
                three Departments became the part of the Faculty:
              </p>

              <p>
                Besides, Departments, Faculty of Education also governs the
                functioning of all affiliated colleges, in the city of Karachi,
                teaching “Education” in general and Teacher Education in
                specific.
              </p>

              <p>
                The Faculty is very active in developing linkages with other
                programs both at National and International levels. The target
                areas are teaching, research, publication and collaborative
                assignments between Universities and institutions both at
                National and International levels.
              </p>
            </div>
          </div>
        </PageConCom>
      </PageLayCom>
    </div>
  );
};

export default Faculties;
