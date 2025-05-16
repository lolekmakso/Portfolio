export const Contacts = () => {
  return (
    <main className="section">
      <div className="container">
        <h1 className="title-1" data-aos="fade-down">
          Contacts
        </h1>

        <ul className="content-list" data-aos="fade-zoom-in">
          <li className="content-list__item">
            <h2 className="title-2">Location</h2>
            <p>Chernivtsi, Ukraine</p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Telegram / WhatsApp</h2>
            <p>
              <a href="tel:+38068137732"> +38 (068) 130-77-32</a>
            </p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Email</h2>
            <p>
              <a href="mailto:makstarasovv1@gmail.com">
                makstarasovv1@gmail.com
              </a>
            </p>
          </li>
        </ul>
      </div>
    </main>
  );
};
