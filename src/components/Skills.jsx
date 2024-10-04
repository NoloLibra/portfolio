import React from "react";

const Skils = () => {
  return (
    <section className="skills">
        <h1>Skills</h1>
        <div className="skills-container">
            <div className="skill web-dev">
                <h2 className="skill-heading">Web Development</h2>
                <p className="skill-description">
                    Using my knowledge in HTML, CSS, and JavaScript as well as frameworks and libraries such as ReactJS, and SASS, I'm able to create visually appealing websites that not only look beautiful and seemless but also serve to solve a unique user pain point.
                </p>
            </div>
            <div className="skill ui-ux">
                <h2 className="skill-heading">UI/UX</h2>
                <p className="skill-description">
                    I'm able to not only design clean websites and apps, but I also take it a step further by conducting user research in order to understand the core of their pain points and also understand how can my solutiuon solve those problems. For this I use Figma as my primary tool for UI/UX design.
                </p>
            </div>
            <div className="skill seo">
                <h2 className="skill-heading">SEO</h2>
                <p className="skill-description">
                    Skilled in optimizing web applications for search engines, improving visibility and user engagement through effective SEO strategies, including metadata, keyword usage, and performance enhancements.
                </p>
            </div>
            <div className="skill branding">
                <h2 className="skill-heading">Branding</h2>
                <p className="skill-description">
                    Experienced in crafting cohesive brand identities through design, color schemes, and messaging to create memorable and impactful user experiences.
                </p>
            </div>
        </div>
    </section>
  );
};

export default Skils;
