import axios from "axios";
import { useState } from "react";
import { motion } from "motion/react";
import {
  FaGithub,
  FaLinkedin,
  FaDev,
  FaTiktok,
  FaYoutube,
  FaInstagram,
  FaEnvelopeSquare,
} from "react-icons/fa";
import { FaSquarePhoneFlip, FaHashnode } from "react-icons/fa6";

import "./style.scss";

import { TextInput, TextArea } from "../../utils/inputs.js";
import { PublicRoute } from "../../utils/routes.js";
import { IconLink } from "../../utils/links.js";
import { SubmitButton } from "../../utils/buttons.js";

const Contact = () => {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setSending(true);

      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/contact/send-email`,
        formData,
      );

      setFormData({
        name: "",
        email: "",
        message: "",
      });
      setSent(true);

      setTimeout(() => {
        setSent(false);
      }, 4200);
    } catch (error) {
      console.error(error.message);
      setError("Failed to send message.");
      setTimeout(() => {
        setError(null);
      }, 4200);
    } finally {
      setSending(false);
    }
  };

  const content = (
    <motion.div
      className="contact-container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}>
      <div className="contact-form">
        <form>
          <TextInput
            id="name"
            name="name"
            label="Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <TextInput
            id="email"
            name="email"
            label="Email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          <TextArea
            id="message"
            name="message"
            label="Message"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
          />
          <SubmitButton label="Send" onClick={handleSubmit} />
        </form>
        {sending && <p className="message-status">Sending...</p>}
        {sent && <p className="message-status">Message sent successfully!</p>}
        {error && <p className="message-status">{error}</p>}
      </div>
      <div className="contact-links-container">
        <h4 className="contact-links-title">Contact Me Directly</h4>
        <div className="contact-links">
          <IconLink
            to="mailto:doughawes42@gmail.com"
            icon={<FaEnvelopeSquare />}
            label="Email"
          />
          <IconLink
            to="tel:+447742148280"
            icon={<FaSquarePhoneFlip />}
            label="Phone"
          />
        </div>
        <h4 className="contact-links-title">My Online Profiles</h4>
        <div className="contact-links">
          <IconLink
            to="https://github.com/doughawes42"
            icon={<FaGithub />}
            label="GitHub"
          />
          <IconLink
            to="https://www.linkedin.com/in/doughawes42"
            icon={<FaLinkedin />}
            label="LinkedIn"
          />
          <IconLink
            to="https://dev.to/dougiehawes"
            icon={<FaDev />}
            label="Dev.to"
          />
          <IconLink
            to="https://hashnode.com/@DougieHawes"
            icon={<FaHashnode />}
            label="Hashnode"
          />
        </div>
        <h4 className="contact-links-title">My Social Media</h4>
        <div className="contact-links">
          <IconLink
            to="https://www.instagram.com/dougiestylecoding/"
            icon={<FaInstagram />}
            label="Instagram"
          />
          <IconLink
            to="https://www.tiktok.com/@dougiestylecoding"
            icon={<FaTiktok />}
            label="TikTok"
          />
          <IconLink
            to="https://www.youtube.com/@dougiestylecoding"
            icon={<FaYoutube />}
            label="YouTube"
          />
        </div>
      </div>
    </motion.div>
  );

  return <PublicRoute content={content} title="contact" />;
};

export default Contact;
