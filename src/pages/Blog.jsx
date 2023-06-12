import { Typography } from '@mui/material';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import BlogProviders from '../components/Blog_Providers';
import BlogFlossing from '../components/Blog_Flossing';
import BlogAmalgam from '../components/Blog_Amalgam';
import BlogFluoride from '../components/Blog_Fluoride';
import BlogNonTraditional from '../components/Blog_NonTraditional';
import '../blog.css';

const Blog = () => {
    const cards = [
        {
            title: 'Is Flossing good for you?',
            content: 'I am sure by now, you might have heard about an article from the NYT on how flossing is overrated and doesn\'t help with maintaining the health of your teeth (click here for the article). I strongly disagree.',
            link: <BlogFlossing />,

        },
        {
            title: 'What are midlevel providers?',
            content: 'Today (1/29/16) is Dental Action Day.  It’s a day when dentists go to Olympia and talk to their state representatives about issues that impact dental care for patients.  Even though I was not able to attend this year, I was privileged to have participate in previous Dental Action Day.  ',
            link: <BlogProviders />,
        },
        {
            title: 'Is Amalgam toxic?',
            content: 'I have been asked by many patients wanting to remove their existing amalgam/silver filling and to replace them with tooth colored material (composite).  One of their reasons given that amalgam is toxic is that it contains mercury.',
            link: <BlogAmalgam />,
        },
        {
            title: 'Is Fluoride toxic?',
            content: 'When patients tell me that they do not want fluoride, I respect their decision and often asked them why.  Recently, a patient told me that fluoride is toxic and is used in rat poison.',
            link: <BlogFluoride />,
        },
        {
            title: 'Non-traditional dental students',
            content: 'I recently received a call from an oldIntelcolleague of mine.  As most of you may already know, I am not what one would consider a traditional dental student.  I did not go to dental school right after my undergraduate degree.',
            link: <BlogNonTraditional />,
        },
    ];

    const Arrow = ({ direction, onClick }) => (
        <div className={`arrow ${direction}`} onClick={onClick}>
            {direction === 'prev' ? <IoIosArrowBack /> : <IoIosArrowForward />}
        </div>
    );

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <Arrow direction="prev" />,
        nextArrow: <Arrow direction="next" />,
        style: { color: 'white' }
    };

    return (
        <div className="blog-page">
            <Typography variant="h3">Welcome to my blog</Typography>
            <p>
                As a dentist, I'm often asked a lot of questions about oral health from patients, friends, colleagues, and family.
                I receive a lot of dental information by mail, subscription, and emails. I also attend a lot of dental courses.
                Being an affiliate instructor at the University of Washington School of Dentistry, I am in constant contact with
                world-renowned faculties, specialists, and dentists. I hope to gather as much information from different sources
                and share them with you, providing interesting and useful information about your oral health. If there is anything
                you want to ask me, please contact me at drbanh@pacificnwdentistry.com.
            </p>
            <div className="carousel-container">
                <Slider {...settings}>
                    {cards.map((card, index) => (
                        <div key={index} className="card">
                            <h2>{card.title}</h2>
                            <p>{card.content}</p>
                            <div className="card-buttons">
                                <Link to='/booking'><Button variant="outlined">Book an Appointment</Button></Link>
                                <div className="card-buttons">
                                    {card.link}
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Blog;
