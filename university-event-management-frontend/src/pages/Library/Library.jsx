import styles from "./Library.module.css";
import PageLayCom from "../../components/common/PageLayCom/PageLayCom";
import PageConCom from "../../components/common/PageConCom/PageConCom";
import navData from "../../utils/constant/navData";

const Library = () => {
  const data = navData[3].innerLinkTextAndUrl;

  const titles = {
    imgTitle: 'Dr. Muhammad Husain Library',
    pageTitle: 'Introduction'
  }

  return (
    <div>
      <PageLayCom titles={titles}>
        <PageConCom data={data}>
        <div>
            <div>
              <h3>Chief Librarian: Ms. Malahat Kareem</h3>
            </div>

            <div>
              <div className={styles.lbd}>
                <img src="/assets/imgs/mh2.gif" alt="library image" />
              </div>
              <p>
                The Central library of the University of Karachi is housed in a
                unique building, resembles a huge Ship. It is not only located
                in the center of the campus, but in fact a hub of academic and
                research activities of the one of the largest universities of
                the country.
              </p>

              <p>
                The Library was founded in 1952, when the University of Karachi
                itself came into being. In 1975 after the death of Prof. Dr.
                Mahmud Husain then Vice Chancellor and renowned scholar, the
                library was named as Dr. Mahmud Husain Library in recognition of
                his services to scholarship, education and for the promotion of
                librarianship in Pakistan. The Library has a collection of more
                than 350,000 books and the same number of bound volumes of
                research and scientific journals. Library also has the status of
                UNO depositary center. A valuable collection of rare books and
                manuscripts consists of about 6000 volumes dated back to 16th
                century and the Personal book collections of 46 Scholars,
                writers and renowned academicians are also the part of the
                Library. The most significant of all is the personal collection
                of Quaid-e-Azam Muhammad Ali Jinnah, stored in the original
                antique book cabinets received as a part of the collection.
                Original photographs, letters and Posters of the Freedom
                Movement are also an asset for the Library.
              </p>
            </div>
          </div>
        </PageConCom>
      </PageLayCom>
    </div>
  );
};

export default Library;
