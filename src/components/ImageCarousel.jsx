import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import hero from '../assets/images/projects/genesis/hero.png'
import about from '../assets/images/projects/genesis/about.png'
import collections from '../assets/images/projects/genesis/collections.png'
import contact from '../assets/images/projects/genesis/contact.png'

import heroHOC from '../assets/images/projects/hoc/heroHOC.png'

import bmaHero from '../assets/images/projects/bma/bmaHero.png'
import bmaAbout from '../assets/images/projects/bma/bmaAbout.png'
import bmaTours from '../assets/images/projects/bma/bmaTours.png'
import bmaExperiences from '../assets/images/projects/bma/bmaExperiences.png'

import color from '../assets/images/projects/blockCreatives/color.png'
import cover from '../assets/images/projects/blockCreatives/cover.png'
import logo from '../assets/images/projects/blockCreatives/logo.png'
import typography from '../assets/images/projects/blockCreatives/typography.png'

function ImageCarousel() {
  return (
    <div className="myProjects">
        <div className="projectOne project">
            <h1>Genesis Croshea</h1>
            <Carousel fade className='carousel'>
            <Carousel.Item>
                <img src={hero} className='slide-img' alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
                <img src={about} className='slide-img' alt="Second slide" />
            </Carousel.Item>
            <Carousel.Item>
                <img src={collections} className='slide-img' alt="Third slide" />
            </Carousel.Item>
            <Carousel.Item>
                <img src={contact} className='slide-img' alt="Fourth slide" />
            </Carousel.Item>
            </Carousel>
            <div className="projectInfo">
                <div className="descriptionPurpose infoBox">
                    <h2>Purpose and Description</h2>
                    <p>
                        Genesis Croshea is a crochet brand that creates custom clothing using yarn and a personal touch of your own. The whole idea was to create a modern and slick website that will appeal to the client’s defined target audience without looking too simple or minimal but also not too colourful. The website was able to fulfil its purpose and also providing an extra layer of authenticity and accessibility to the whole brand.
                    </p>
                </div>
                <div className="designProcess infoBox">
                    <h2>Design Process</h2>
                    <p>
                        I began my process by finding what truly resonates with the client and what resonates with their audience, by doing so I was able to bridge that gap by finding the right fonts and tone for the website allowing the brand’s messaging to be easily understood by its audience. I then moved onto Figma to work on the wireframes and mockups based on the inspiration I’ve gathered. From there I used HTML, CSS, SASS, and JavaScript to code the whole website, making it custom and unique.
                    </p>
                </div>
            </div>
        </div>
                                {/* Project Two */}
        <div className="projectTwo">
            <h1>Black Mountain Adventures</h1>
            <Carousel fade className='carousel'>
            <Carousel.Item>
                <img src={bmaHero} className='slide-img' alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
                <img src={bmaAbout} className='slide-img' alt="Second slide" />
            </Carousel.Item>
            <Carousel.Item>
                <img src={bmaExperiences} className='slide-img' alt="Third slide" />
            </Carousel.Item>
            <Carousel.Item>
                <img src={bmaTours} className='slide-img' alt="Fourth slide" />
            </Carousel.Item>
            </Carousel>
            <div className="projectInfo">
                <div className="descriptionPurpose infoBox">
                    <h2>Purpose and Description</h2>
                    <p>
                        For this project, I had to boost the client’s website SEO to allow it to be visible on search engines. Black Mountain Adventures is a motorbike touring service provider, they provide tourists with motorbike tours around the Western Cape area, and they have a wide range of day tours to choose from depending on how much motorbiking experience you have.
                    </p>
                </div>
                <div className="designProcess infoBox">
                    <h2>Design Process</h2>
                    <p>
                        I began by simply understanding the client’s initial/current target audience and his desired target audience, this allowed me to find words that that particular client may be using while searching in order to find my client’s website. I used SEMRush for my keyword research, which gave me good list of keywords that I then used in my client’s Wordpress website.
                    </p>
                </div>
            </div>
        </div>

                            {/* Project Three */}
        <div className="projectThree">
            <h1>House Of Class</h1>
            <Carousel fade className='carousel'>
            <Carousel.Item>
                <img src={heroHOC} className='slide-img hoc' alt="First slide" />
            </Carousel.Item>
            </Carousel>
            <div className="projectInfo">
                <div className="descriptionPurpose infoBox">
                    <h2>Purpose and Description</h2>
                    <p>
                        House of Class is a local barbershop that just opened its doors to the public, however the owner wants to add a modern feeling to his business, and one of the ways to do so is by creating a website for his business. I designed a modern, dark website for the barbershop in order to maintain a consistent look and feel across the business platforms and channels, this added a layer of trust and authenticity to the brand.
                    </p>
                </div>
                <div className="designProcess infoBox">
                    <h2>Design Process</h2>
                    <p>
                        Gathering inspiration was my first step since the client had already established his target audience and has already created a tone for his business brand. Behance and Pinterest were my go-to websites for inspiration. Once I had an idea of what I wanted to create and what the client wanted, I hopped onto Figma and started designing. The project was not complete to the owner experiencing personal problems leading to the shut down of his business.
                    </p>
                </div>
            </div>
        </div>

                                    {/* Project Four */}
        <div className="projectFour">
            <h1>Block Creatives</h1>
            <Carousel fade className='carousel'>
            <Carousel.Item>
                <img src={cover} className='slide-img' alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
                <img src={color} className='slide-img' alt="Second slide" />
            </Carousel.Item>
            <Carousel.Item>
                <img src={logo} className='slide-img' alt="Third slide" />
            </Carousel.Item>
            <Carousel.Item>
                <img src={typography} className='slide-img' alt="Fourth slide" />
            </Carousel.Item>
            </Carousel>
            <div className="projectInfo">
                <div className="descriptionPurpose infoBox">
                    <h2>Purpose and Description</h2>
                    <p>
                        Block Creatives is a personal project that I was and am still working on, however for this part of the project I created brand guidelines for the brand in order to ensure and maintain a consistent brand message, tone & voice, colour scheme, fonts, and imagery across different channels and platforms of the brand
                    </p>
                </div>
                <div className="designProcess infoBox">
                    <h2>Design Process</h2>
                    <p>
                        For this project I used InDesign to design the whole brand bible, and used Illustrator for some of the icons I used a s part of my iconography. My thinking behind this was to find how I can create a brand that is able to mirror not only my skills but also my personality by using fonts, colours, and even images and icons, this has allowed me to leave my comfort zone to find exactly where I can position myself for maximum growth and monetization.
                    </p>
                </div>
            </div>
        </div>
    </div>
  );
}

export default ImageCarousel;
