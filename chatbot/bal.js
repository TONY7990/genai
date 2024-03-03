const socialMediaSharingButtons = document.getElementsByClassName("social-icon");

function createSocialMediaShareUrl(platform) {
    const content = `Check out my cool generative AI Project  \n${window.location.href.toString()}`;
    const encodedContent = encodeURIComponent(content);
    switch (platform) {
        case "twitter":
            return `https://twitter.com/intent/tweet?text=${encodedContent}`;
        case "linkedin":
            return `https://www.linkedin.com/share?text=${encodedContent}`;
        case "whatsapp":
            return `https://api.whatsapp.com/send?text=${encodedContent}`;
        default:
            // Handle unsupported platforms gracefully (e.g., log an error)
            console.error(`Unsupported platform: ${platform}`);
            return "";
    }
}

function postToSocialMedia(classList) {
    const platform = classList.contains("twitter") ? "twitter" :
        classList.contains("linkedin") ? "linkedin" :
        classList.contains("whatsapp") ? "whatsapp" :
        ""; // Handle unsupported platforms

    if (platform) {
        const url = createSocialMediaShareUrl(platform);
        window.open(url);
    } else {
        // Handle unsupported platforms gracefully (e.g., display an error message)
        console.error("Unsupported social media platform.");
    }
}

const addEventListenersToSocialMediaButtons = () => {
    for (let i = 0; i < socialMediaSharingButtons.length; i++) {
        socialMediaSharingButtons[i].addEventListener("click", () =>
            postToSocialMedia(socialMediaSharingButtons[i].classList)
        );
    }
};

addEventListenersToSocialMediaButtons();

const skillTooltips = document.getElementsByClassName("tooltip");

const addEventListenersToSkillTooltips = () => {
    for (let i = 0; i < skillTooltips.length; i++) {
        skillTooltips[i].addEventListener("click", (e) => {
            updateDescription(e.target.id);
        });
    }
};

addEventListenersToSkillTooltips();

const descriptionDiv = document.getElementsByClassName("about-section");
const updateDescription = (id) => {
    let description = "";

    switch (id) {
        case "googleColab":
            description = "Google Colab: User-friendly platform for code writing, execution, and sharing. Beloved by AI experts, students, developers, and researchers for data analysis, ML, and AI exploration.";
            break;
        case "gradio":
            description = "Gradio: A user-friendly tool that allows you to create and share interactive AI Apps without extensive Coding Knowledge.";
            break;
        case "openAi":
            description = "OpenAI: An AI-based chat service powered by OpenAI's language model. OpenAI APIs offer access to advanced language models and AI capabilities. Integrate NLP, text generation, and more into your apps to revolutionize communication and problem-solving. ";
            break;
        case "playHt":
            description = "PlayHT: PlayHT is a platform that allows you to clone voices using artificial intelligence. The platform uses a deep learning model..."; // Truncated for brevity
            break;
        default:
            description = "Description unavailable for this skill."; // Improved default case handling
    }

    for (let i = 0; i < descriptionDiv.length; i++) {
        descriptionDiv[i].textContent = description;
    }
};

updateDescription("googleColab"); // Comment out to avoid unnecessary initial update