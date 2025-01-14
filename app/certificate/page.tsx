import CertificateCard from "app/components/certificate";

export default function Page() {
    const certificates = [
        {
          title: "BNSP Junior Web Developer",
          image: "/certificate/bnsp.png",
          date: "Issued: February 1, 2024",
          link: "https://drive.google.com/file/d/12uKU-9qXWa9-GnhKPxloqyVOSVQSUB5u/view?usp=sharing",
        },
        {
          title: "Front End Engineer Ruangguru CAMP",
          image: "/certificate/fe-engineering-ruangguru.png",
          date: "Issued: December 23, 2022",
          link: "https://drive.google.com/file/d/1b5TQssWmUlT8irVMX44vN5ySNxg6P8kK/view?usp=sharing",
        },
        {
          title: "Software Engineering [FE] Ruangguru CAMP",
          image: "/certificate/se-engineering-ruangguru.png",
          date: "Issued: September 20, 2022",
          link: "https://drive.google.com/file/d/1edrwiXJMzONhtJQHL7riMPojUW622f9b/view?usp=sharing",
        },
        {
          title: "ITTP English Competency Test",
          image: "/certificate/ittp-ect.jpg",
          date: "Issued: January 22, 2024",
          link: "https://drive.google.com/file/d/1dVZU-vjhf8EPrS4EFMHKTDtMAyDhiX79/view?usp=sharing",
        },
        {
          title: "TOEFL Test",
          image: "/certificate/toefl.png",
          date: "Issued: September 4, 2024",
          link: "https://englishvit.com/certificate/status/EV-TO5-09-2024-1330",
        },
    ];

    // Sort certificates by date (newest to oldest)
    const sortedCertificates = certificates.sort((a, b) => {
      const dateA: Date = new Date(a.date.replace("Issued: ", ""));
      const dateB: Date = new Date(b.date.replace("Issued: ", ""));
      return dateB.getTime() - dateA.getTime();
  });

    return (
      <section>
        <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
          My Certifications
        </h1>
        <p className="mb-8">
          {`Here is a collection of certifications I have earned, showcasing my expertise and dedication across various fields. From web development to system analysis, these certifications reflect my commitment to continuous learning and professional growth in the technology industry.`}
        </p>
        <div className="grid grid-cols-1 gap-6 ">
            {sortedCertificates.map((certificate, index) => (
                <CertificateCard
                    link={certificate.link}
                    key={index}
                    title={certificate.title}
                    image={certificate.image}
                    date={certificate.date}
                />
            ))}
        </div>
      </section>
    );
}
