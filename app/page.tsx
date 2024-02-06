import Image from "next/image";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">


<div className={"container"}>
      <header className={"header"}>
        <h1>Goutham Reddy Kallem's Portfolio</h1>
      </header>

      <section className={"section"}>
        <h2>Introduction</h2>
        <p>
          Hi, I'm Goutham Reddy Kallem, a passionate computer science enthusiast with a focus on software development, machine learning, and deep learning. I thrive on solving complex problems and leveraging technology to make a positive impact.
        </p>
      </section>

      <section className={"section"}>
        <h2>Education</h2>
        <div className={"eduItem"}>
          <h3>California State University, Fresno</h3>
          <p>Master of Science in Computer Science (Expected Graduation: May 2024)</p>
        </div>
        <div className={"eduItem"}>
          <h3>Gokaraju Rangaraju Institute of Engineering and Technology, Hyderabad, India</h3>
          <p>Bachelor of Technology in Computer Science and Engineering (August 2016 - November 2020)</p>
        </div>
      </section>

      <section className={"section"}>
        <h2>Skills</h2>
        {/* Include your skills here */}
      </section>

      <section className={"section"}>
        <h2>Work Experience</h2>
        {/* Include your work experience details here */}
      </section>

      <section className={"section"}>
        <h2>Achievements and Projects</h2>
        {/* Include your achievements and projects here */}
      </section>

      <section className={"section"}>
        <h2>Contact Information</h2>
        {/* Include your contact information here */}
      </section>

      <section className={"section"}>
        <h2>Portfolio Extras</h2>
        {/* Include your portfolio extras here */}
      </section>
    </div>



{/* <div className={"container"}>
      <header className={"header"}>
        <h1>Goutham Reddy Kallem's Portfolio</h1>
      </header>

      <section className={"section"}>
        <h2>Introduction</h2>
        <p>
          Hi, I'm Goutham Reddy Kallem, a passionate computer science enthusiast with a focus on software development, machine learning, and deep learning. I thrive on solving complex problems and leveraging technology to make a positive impact.
        </p>
      </section>

      <section className={"section"}>
        <h2>Education</h2>
        Include your education details here
      </section>

      <section className={"section"}>
        <h2>Skills</h2>
        Include your skills here
      </section>

      <section className={"section"}>
        <h2>Work Experience</h2>
        Include your work experience details here
      </section>

      <section className={"section"}>
        <h2>Achievements and Projects</h2>
        Include your achievements and projects here
      </section>

      <section className={"section"}>
        <h2>Contact Information</h2>
        Include your contact information here
      </section>

      <section className={"section"}>
        <h2>Portfolio Extras</h2>
        Include your portfolio extras here
      </section>
</div> */}

    </main>
  );
}
