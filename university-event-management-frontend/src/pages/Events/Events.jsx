import PageConCom from "../../components/common/PageConCom/PageConCom";
import PageLayCom from "../../components/common/PageLayCom/PageLayCom";

const Events = () => {
  // const eventData = [
  //   {
  //     id: 1,
  //     title: "Karachi University Events",
  //     depart: "UBIT",
  //     note: "Last date for passes purchasing, Feb 25, 25.",
  //     timing: "09:00am - 04:00pm sharp",
  //     date: "Feb 27, 25 (Monday)",
  //     venue: "Jubillee Circket Ground (University of Karchi)",
  //     type: "Sport",
  //     cost: "RS.249/-",
  //     costType: "Not-Refundable",
  //     noteCost: "After due date Generate Pass are disabled.",
  //     due: "Feb 25, 25",
  //     navigate: [
  //       {
  //         linkText: 'Events',
  //         url: '/events'
  //       },
  //       {
  //         linkText: 'Application for event',
  //         url: '/events/#application-event-form'
  //       }
  //     ]
  //   },
  // ];

  const data = [
    {
      linkText: 'Introduction',
      linkUrl: '/events',
    },
    {
      linkText: 'Latest Events',
      linkUrl: '/events/#latest-events',
    },
    {
      linkText: 'Application for Event',
      linkUrl: '/events/#application-event-form',
    }
  ]

  const titles = {
    imgTitle: 'Karachi University Events',
    pageTitle: 'Events Page'
  }

  return (
    <div>
      <PageLayCom titles={titles}>
        <PageConCom data={data}>
          <div>
            <h3>Events Listing!</h3>
          </div>
        </PageConCom>
      </PageLayCom>
    </div>
  );
};

export default Events;
