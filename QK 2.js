document.addEventListener("DOMContentLoaded", () => {
    const convaiScript = document.createElement("script");
    convaiScript.src = "https://elevenlabs.io/convai-widget/index.js";
    convaiScript.async = true;
  
    document.body.appendChild(convaiScript);
  
    const convaiWidget = document.createElement("elevenlabs-convai");
    convaiWidget.setAttribute("agent-id", "8XFc8tVlF39iFe5SWd3N");
    
    document.body.appendChild(convaiWidget);
  });
  