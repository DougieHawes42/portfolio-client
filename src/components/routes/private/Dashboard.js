import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./style.scss";

import { PublicRoute } from "../../utils/routes.js";
import { TextInput, TextArea, FileInput } from "../../utils/inputs.js";
import { SubmitButton } from "../../utils/buttons.js";

const Dashboard = () => {
  const [showWorkForm, setShowWorkForm] = useState(true);
  const [files, setFiles] = useState([]);
  const [blogFiles, setBlogFiles] = useState([]);
  const [workFormData, setWorkFormData] = useState({
    title: "",
    category: "",
    gitHubClientLink: "",
    gitHubServerLink: "",
    siteLink: "",
    description: "",
    tags: "",
  });
  const [blogFormData, setBlogFormData] = useState({
    title: "",
    text: "",
    tags: "",
  });

  const navigate = useNavigate();

  const handleFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files);

    const updatedFiles = [...files, ...selectedFiles].slice(0, 10);

    setFiles(updatedFiles);

    event.target.value = "";
  };

  const handleBlogFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files);

    const updatedFiles = [...blogFiles, ...selectedFiles].slice(0, 10);

    setBlogFiles(updatedFiles);
    event.target.value = "";
  };

  const handleWorkSubmit = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData();

      formData.append("title", workFormData.title);
      formData.append("category", workFormData.category);
      formData.append("gitHubClientLink", workFormData.gitHubClientLink);
      formData.append("gitHubServerLink", workFormData.gitHubServerLink);
      formData.append("siteLink", workFormData.siteLink);
      formData.append("description", workFormData.description);

      // Convert comma-separated tags into an array
      const tags = workFormData.tags
        .split(", ")
        .map((tag) => tag.trim())
        .filter(Boolean);

      formData.append("tags", JSON.stringify(tags));

      files.forEach((file) => {
        formData.append("images", file);
      });

      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/work/create`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        },
      );

      console.log("Work form submitted successfully:", response.data);
    } catch (error) {
      console.error("Error submitting work form:", error);
    }
  };

  const handleBlogSubmit = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData();

      formData.append("title", blogFormData.title);
      formData.append("text", blogFormData.text);

      const tags = blogFormData.tags
        .split(", ")
        .map((tag) => tag.trim())
        .filter(Boolean);

      formData.append("tags", JSON.stringify(tags));

      blogFiles.forEach((file) => {
        formData.append("images", file);
      });

      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/blog/create`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        },
      );

      console.log("Blog form submitted successfully:", response.data);
    } catch (error) {
      console.error("Error submitting blog form:", error);
    }
  };

  const content = (
    <div className="dashboard-forms-container">
      <div className="dashboard-form-toggle">
        <button
          className={`dashboard-form-toggle-button ${showWorkForm ? "active" : ""}`}
          onClick={() => setShowWorkForm(true)}>
          Work
        </button>
        <button
          className={`dashboard-form-toggle-button ${!showWorkForm ? "active" : ""}`}
          onClick={() => setShowWorkForm(false)}>
          Blog
        </button>
      </div>
      {showWorkForm ? (
        <form className="dashboard-form">
          <TextInput
            label="Title"
            id="title"
            name="title"
            value={workFormData.title}
            onChange={(e) =>
              setWorkFormData({ ...workFormData, title: e.target.value })
            }
          />
          <FileInput
            onChange={handleFileChange}
            files={files}
            onDelete={(index) => setFiles(files.filter((_, i) => i !== index))}
          />
          <TextInput
            label="Category"
            id="category"
            name="category"
            value={workFormData.category}
            onChange={(e) =>
              setWorkFormData({ ...workFormData, category: e.target.value })
            }
          />
          <TextInput
            label="GitHub Client Link"
            id="gitHubClientLink"
            name="gitHubClientLink"
            value={workFormData.gitHubClientLink}
            onChange={(e) =>
              setWorkFormData({
                ...workFormData,
                gitHubClientLink: e.target.value,
              })
            }
          />
          <TextInput
            label="GitHub Server Link"
            id="gitHubServerLink"
            name="gitHubServerLink"
            value={workFormData.gitHubServerLink}
            onChange={(e) =>
              setWorkFormData({
                ...workFormData,
                gitHubServerLink: e.target.value,
              })
            }
          />
          <TextInput
            label="Site Link"
            id="siteLink"
            name="siteLink"
            value={workFormData.siteLink}
            onChange={(e) =>
              setWorkFormData({ ...workFormData, siteLink: e.target.value })
            }
          />
          <TextArea
            label="Description"
            id="description"
            name="description"
            value={workFormData.description}
            onChange={(e) =>
              setWorkFormData({ ...workFormData, description: e.target.value })
            }
          />
          <TextInput
            label="Tags"
            id="tags"
            name="tags"
            value={workFormData.tags}
            onChange={(e) =>
              setWorkFormData({ ...workFormData, tags: e.target.value })
            }
          />
          <SubmitButton label="Submit" onClick={handleWorkSubmit} />
        </form>
      ) : (
        <form className="dashboard-form">
          <TextInput
            label="Title"
            id="title"
            name="title"
            value={blogFormData.title}
            onChange={(e) =>
              setBlogFormData({ ...blogFormData, title: e.target.value })
            }
          />
          <FileInput
            onChange={handleBlogFileChange}
            files={blogFiles}
            onDelete={(index) =>
              setBlogFiles(blogFiles.filter((_, i) => i !== index))
            }
          />
          <TextArea
            label="Text"
            id="text"
            name="text"
            value={blogFormData.text}
            onChange={(e) =>
              setBlogFormData({ ...blogFormData, text: e.target.value })
            }
          />
          <TextInput
            label="Tags"
            id="tags"
            name="tags"
            value={blogFormData.tags}
            onChange={(e) =>
              setBlogFormData({ ...blogFormData, tags: e.target.value })
            }
          />
          <SubmitButton label="Submit" onClick={handleBlogSubmit} />
        </form>
      )}
      {/* signout button which will clear the local storage and redirect to "/" */}
      <button
        className="dashboard-signout-button"
        onClick={() => {
          localStorage.removeItem("token");
          navigate("/");
        }}>
        Sign Out
      </button>
    </div>
  );

  return <PublicRoute content={content} title="dashboard" />;
};

export default Dashboard;
