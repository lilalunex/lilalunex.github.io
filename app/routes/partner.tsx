export default function Partner() {
  return (
    <div className="partner">
      <h2 className="text-center py-5">Partner</h2>

      <div className="py-5 container mx-auto">
        <div className="flex items-center justify-center space-x-8">
          <img src="/partner/dukkart.png" className="rounded-3xl w-96" alt="Sergej Dukkardt" />
          <div className="text-center">
            <h2 className="pt-3">Sergej Dukkardt</h2>
            <p className="px-3 mx-auto">Fotograf. Media Creator. Mietstudio.</p>
            <div className="pt-3 link-holder">
              <a
                href="http://dukkart.de"
                className="btn border-2 py-4 px-6 rounded-full"
                target="_blank"
                rel="noopener noreferrer"
              >
                Website
              </a>
            </div>
            <div className="pt-5 link-holder">
              <a
                href="http://dreamstudiobadoeynhausen.de"
                className="btn border-2 py-4 px-6 rounded-full"
                target="_blank"
                rel="noopener noreferrer"
              >
                Mietstudio
              </a>
            </div>
            <div className="pt-5 link-holder">
              <a
                href="https://www.instagram.com/dukkart/"
                className="btn border-2 py-4 px-6 rounded-full"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="py-5 container mx-auto">
        <div className="flex items-center justify-center space-x-8">
          <div className="text-center">
            <h2 className="pt-3">Reza Jaxon</h2>
            <p className="px-3 mx-auto">Tänzer. Graffiti-Artist. Designer.</p>
            <div className="pt-3 link-holder">
              <a
                href="https://shibuy.art/"
                className="btn border-2 py-4 px-6 rounded-full"
                target="_blank"
                rel="noopener noreferrer"
              >
                Website
              </a>
            </div>
            <div className="pt-5 link-holder">
              <a
                href="https://www.instagram.com/jaxon_the_6th/"
                className="btn border-2 py-4 px-6 rounded-full"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </div>
          </div>
          <img src="/partner/jaxon.png" className="rounded-3xl w-96" alt="Reza Jaxon" />
        </div>
      </div>
    </div>
  );
}
