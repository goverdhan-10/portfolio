import React, { useEffect, useState, useCallback } from "react";
import { supabase } from "../supabase";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CardProject from "../components/CardProject";
import TechStackIcon from "../components/TechStackIcon";
import AOS from "aos";
import "aos/dist/aos.css";
// ...existing code...
import { Code, Award, Boxes } from "lucide-react";

const ToggleButton = ({ onClick, isShowingMore }) => (
  <button
    onClick={onClick}
    className="px-3 py-1.5 text-slate-300 hover:text-white text-sm font-medium transition-all duration-300 ease-in-out flex items-center gap-2 bg-white/5 hover:bg-white/10 rounded-md border border-white/10 hover:border-white/20 backdrop-blur-sm group relative overflow-hidden"
  >
    <span className="relative z-10 flex items-center gap-2">
      {isShowingMore ? "See Less" : "See More"}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`transition-transform duration-300 ${isShowingMore ? "group-hover:-translate-y-0.5" : "group-hover:translate-y-0.5"}`}
      >
        <polyline points={isShowingMore ? "18 15 12 9 6 15" : "6 9 12 15 18 9"}></polyline>
      </svg>
    </span>
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500/50 transition-all duration-300 group-hover:w-full"></span>
  </button>
);

function TabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: { xs: 1, sm: 3 } }}>
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const techStacks = [
  { icon: "html.svg", language: "HTML" },
  { icon: "css.svg", language: "CSS" },
  { icon: "typescript.svg", language: "TypeScript" },
  { icon: "tailwind.svg", language: "Tailwind CSS" },
  { icon: "reactjs.svg", language: "ReactJS" },
  { icon: "vite.svg", language: "Vite" },
  { icon: "nodejs.svg", language: "Node JS" },
  { icon: "express.svg", language: "Express JS" },
  { icon: "nextjs.svg", language: "Next JS" },
  { icon: "vercel.svg", language: "Vercel" },
  { icon: "github.svg", language: "GitHub" },
];

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const isMobile = window.innerWidth < 768;
  const initialItems = isMobile ? 4 : 6;

  useEffect(() => {
    AOS.init({ once: false });
  }, []);

  // Hardcoded projects data
  const projects = [
    {
      id: 1,
      Img: "/project1.png",
      Title: "Varanasi Metro Route Planner",
      Description: "It’s an interactive Varanasi metro route planner that uses Dijkstra’s algorithm to show the shortest path between stations, with autocomplete search, highlighted routes, and step-by-step journey details including line colors and changeovers.",
      Link: "http://banarasmetro.vercel.app",
      Dlink:"https://github.com/goverdhan-10/Route-Planner"
      
    },
    {
      id: 2,
      Img: "/project2.png",
      Title: "LinkUp Social Media App",
      Description: "A full-featured social media platform with authentication, customizable profiles, posts with likes/saves, follow system, built using React, TypeScript, Vite, Tailwind CSS, and Appwrite backend.",
      Link: "https://github.com/goverdhan-10/Link-Up",
      Dlink: "https://github.com/goverdhan-10/Link-Up"
    },
    {
      id: 3,
      Img: "/project3.png",
      Title: "CryptoX",
      Description: "A real-time cryptocurrency dashboard with live prices, interactive Chart.js visualizations, conversions, and market analytics built using React, Vite, Tailwind CSS, and API integration.",
      Link: "https://cryptograph-pi.vercel.app/",
      Dlink: "https://github.com/goverdhan-10/cryptograph"
    },
    {
      id: 4,
      Img: "/project4.png",
      Title: "Mystery Message",
      Description: "Anonymous feedback app in Next.js with public shareable URLs, login, email verification, and a dashboard to view received messages.",
      Link: "https://github.com/goverdhan-10/mystrymessage",
      Dlink: "https://github.com/goverdhan-10/mystrymessage"
    },
    {
      id: 5,
      Img: "/project5.png",
      Title: "Blog App",
      Description: "A high-performance blogging platform with secure authentication, real-time content updates, user roles, and responsive design built using React, Vite, and Appwrite.",
      Link: "https://blog-app-eight-bay.vercel.app/",
      Dlink:"https://github.com/goverdhan-10/Blog-App"
    },
    // Add more projects as needed
  ];

  // ...existing code...

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const toggleShowMore = useCallback(() => {
    setShowAllProjects((prev) => !prev);
  }, []);

  const displayedProjects = showAllProjects ? projects : projects.slice(0, initialItems);

  return (
    <div className="md:px-[10%] px-[5%] w-full sm:mt-0 mt-[3rem] bg-[#030014] overflow-hidden" id="Portofolio">
      {/* ✅ Updated Title + Description */}
      <div className="text-center pb-10" data-aos="fade-up" data-aos-duration="1000">
        <h2 className="inline-block text-3xl md:text-5xl font-bold text-center mx-auto text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
          <span style={{
            color: '#6366f1',
            backgroundImage: 'linear-gradient(45deg, #6366f1 10%, #a855f7 93%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Portfolio Showcase
          </span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base mt-2">
          Discover my journey as a developer through hands-on projects, certifications, and the technologies I've mastered. Each tab reflects my dedication to learning and building impactful digital experiences.
        </p>
      </div>

      <Box sx={{ width: "100%" }}>
        <AppBar position="static" elevation={0} sx={{ bgcolor: "transparent", border: "1px solid rgba(255, 255, 255, 0.1)", borderRadius: "20px", position: "relative", overflow: "hidden", "&::before": { content: '""', position: "absolute", top: 0, left: 0, right: 0, bottom: 0, background: "linear-gradient(180deg, rgba(139, 92, 246, 0.03) 0%, rgba(59, 130, 246, 0.03) 100%)", backdropFilter: "blur(10px)", zIndex: 0, }, }} className="md:px-4">
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            variant="fullWidth"
            sx={{
              minHeight: "70px",
              "& .MuiTab-root": {
                fontSize: { xs: "0.9rem", md: "1rem" },
                fontWeight: "600",
                color: "#94a3b8",
                textTransform: "none",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                padding: "20px 0",
                zIndex: 1,
                margin: "8px",
                borderRadius: "12px",
                "&:hover": {
                  color: "#ffffff",
                  backgroundColor: "rgba(139, 92, 246, 0.1)",
                  transform: "translateY(-2px)",
                  "& .lucide": {
                    transform: "scale(1.1) rotate(5deg)",
                  },
                },
                "&.Mui-selected": {
                  color: "#fff",
                  background: "linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(59, 130, 246, 0.2))",
                  boxShadow: "0 4px 15px -3px rgba(139, 92, 246, 0.2)",
                  "& .lucide": {
                    color: "#a78bfa",
                  },
                },
              },
              "& .MuiTabs-indicator": {
                height: 0,
              },
              "& .MuiTabs-flexContainer": {
                gap: "8px",
              },
            }}
          >
            <Tab icon={<Code className="mb-2 w-5 h-5 transition-all duration-300" />} label="Projects" {...a11yProps(0)} />
            <Tab icon={<Boxes className="mb-2 w-5 h-5 transition-all duration-300" />} label="Tech Stack" {...a11yProps(1)} />
          </Tabs>
        </AppBar>

        <Swiper
          onSlideChange={swiper => setValue(swiper.activeIndex)}
          initialSlide={value}
          allowTouchMove={true}
          slidesPerView={1}
          spaceBetween={0}
          style={{ width: '100%' }}
        >
          <SwiperSlide>
            <TabPanel value={0} index={0} dir={theme.direction}>
              <div className="container mx-auto flex justify-center items-center overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 gap-5">
                  {displayedProjects.map((project, index) => (
                    <div key={project.id || index} data-aos={index % 3 === 0 ? "fade-up-right" : index % 3 === 1 ? "fade-up" : "fade-up-left"} data-aos-duration={index % 3 === 0 ? "1000" : index % 3 === 1 ? "1200" : "1000"}>
                      <CardProject Img={project.Img} Title={project.Title} Description={project.Description} Link={project.Link} Dlink={project.Dlink} />
                    </div>
                  ))}
                </div>
              </div>
              {projects.length > initialItems && (
                <div className="mt-6 w-full flex justify-start">
                  <ToggleButton onClick={toggleShowMore} isShowingMore={showAllProjects} />
                </div>
              )}
            </TabPanel>
          </SwiperSlide>
          <SwiperSlide>
            <TabPanel value={1} index={1} dir={theme.direction}>
              <div className="container mx-auto flex justify-center items-center overflow-hidden pb-[5%]">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 lg:gap-8 gap-5">
                  {techStacks.map((stack, index) => (
                    <div key={index} data-aos={index % 3 === 0 ? "fade-up-right" : index % 3 === 1 ? "fade-up" : "fade-up-left"} data-aos-duration={index % 3 === 0 ? "1000" : index % 3 === 1 ? "1200" : "1000"}>
                      <TechStackIcon TechStackIcon={stack.icon} Language={stack.language} />
                    </div>
                  ))}
                </div>
              </div>
            </TabPanel>
          </SwiperSlide>
        </Swiper>
      </Box>
    </div>
  );
}
