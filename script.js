document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.section');

  const options = { threshold: 0.5 };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.intersectionRatio >= 0.5) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  }, options);

  sections.forEach(section => observer.observe(section));

  const container = document.getElementById("terminal-body");

  container.addEventListener("keydown", function (e) {
      if (e.target.matches("input")) {
          if (e.key === "Enter") {
              terminalCommand();  
          }
      }
  });
});

function terminalCommand() {
  const terminal = document.getElementById("terminal-body");
  const content = document.getElementById("terminal-text");
  
  const command = content.value.trim();
  const args = command.split(' ');
  const cmd = args[0].toLowerCase();

  const currentInput = content.parentElement;

  if (cmd === "ls") {
    const ans = document.createElement("div");
    ans.textContent = "about    skills    projects    contact";
    ans.classList.add("welcome");
    terminal.appendChild(ans);
    
  } else if (cmd === "cd") {
    const section = args[1]?.toLowerCase();
    const validSections = {
      'about': '.container.section:nth-of-type(2)',
      'projects': '.container.section:nth-of-type(3)',
      'skills': '.container.section:nth-of-type(4)',
      'contact': '.container.section:nth-of-type(5)'
    };

    if (!section) {
      const ans = document.createElement("div");
      ans.textContent = "cd: missing argument. Usage: cd [section]";
      ans.classList.add("welcome");
      terminal.appendChild(ans);
    } else if (validSections[section]) {
      const targetSection = document.querySelector(validSections[section]);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
        const ans = document.createElement("div");
        ans.textContent = `Navigating to ${section}...`;
        ans.classList.add("welcome");
        terminal.appendChild(ans);
      }
    } else {
      const ans = document.createElement("div");
      ans.textContent = `cd: ${section}: No such section. Try 'ls' to see available sections.`;
      ans.classList.add("welcome");
      terminal.appendChild(ans);
    }
    
  } else if (cmd === "clear") {
    terminal.innerHTML = `
      <div class="welcome">Hi! I am <span class="name">Namay Rohatgi</span>. Welcome to my Portfolio Terminal!</div>
      <div class="instruction">Type 'help' to see available commands.</div>
      <div class="welcome" id="repeat-input">$ <input type="text" class="terminal-input" id="terminal-text" autofocus> </div>
    `;
    document.getElementById("terminal-text").focus();
    return;
    
  } else if (cmd === "help") {
    const ans = document.createElement("div");
    ans.classList.add("welcome");
    ans.innerText =
`Available commands:
ls        - List all sections
cd [sec]  - Navigate to a section
clear     - Clear terminal
help      - Show this help message
whoami    - Display user info`;
    terminal.appendChild(ans);
    
  } else if (cmd === "whoami") {
    const ans = document.createElement("div");
    ans.classList.add("welcome");
    ans.innerText =
`Namay Rohatgi
Full Stack Developer | Tech Enthusiast
Email: namayrohatgi@gmail.com
GitHub: github.com/namay26`;
    terminal.appendChild(ans);
    
  } else if (command !== "") {
    const ans = document.createElement("div");
    ans.textContent = `Command not found: ${cmd}. Type 'help' for available commands.`;
    ans.classList.add("welcome");
    terminal.appendChild(ans);
  }

  content.id = "";
  content.disabled = true;
  currentInput.removeAttribute("id");
  
  const newInputLine = document.createElement("div");
  newInputLine.className = "welcome";
  newInputLine.id = "repeat-input";
  newInputLine.innerHTML = '$ <input type="text" class="terminal-input" id="terminal-text" autofocus>';
  terminal.appendChild(newInputLine);
  
  document.getElementById("terminal-text").focus();
  
  terminal.scrollTop = terminal.scrollHeight;
}
