"use strict";

// Fix back button cache problem
window.onunload = function () {};

// Global variable, shared between modules
function playground_text(playground, hidden = true) {
  let code_block = playground.querySelector("code");

  if (hidden) {
    return code_block.textContent;
  } else {
    return code_block.innerText;
  }
}

(function codeSnippets() {
  function fetch_with_timeout(url, options, timeout = 6000) {
    return Promise.race([
      fetch(url, options),
      new Promise((_, reject) => setTimeout(() => reject(new Error("timeout")), timeout)),
    ]);
  }

  var playgrounds = Array.from(document.querySelectorAll(".playground"));
  if (playgrounds.length > 0) {
    fetch_with_timeout("https://play.rust-lang.org/meta/crates", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      mode: "cors",
    })
      .then((response) => response.json())
      .then((response) => {
        // get list of crates available in the rust playground
        let playground_crates = response.crates.map((item) => item["id"]);
        playgrounds.forEach((block) => handle_crate_list_update(block, playground_crates));
      });
  }

  function handle_crate_list_update(playground_block, playground_crates) {
    // update the play buttons after receiving the response
    update_play_button(playground_block, playground_crates);
  }

  // updates the visibility of play button based on `no_run` class and
  // used crates vs ones available on https://play.rust-lang.org
  function update_play_button(pre_block, playground_crates) {
    var play_button = pre_block.querySelector(".play-button");

    // skip if code is `no_run`
    if (pre_block.querySelector("code").classList.contains("no_run")) {
      play_button.classList.add("hidden");
      return;
    }

    // get list of `extern crate`'s from snippet
    var txt = playground_text(pre_block);
    var re = /extern\s+crate\s+([a-zA-Z_0-9]+)\s*;/g;
    var snippet_crates = [];
    var item;
    while ((item = re.exec(txt))) {
      snippet_crates.push(item[1]);
    }

    // check if all used crates are available on play.rust-lang.org
    var all_available = snippet_crates.every(function (elem) {
      return playground_crates.indexOf(elem) > -1;
    });

    if (all_available) {
      play_button.classList.remove("hidden");
    } else {
      play_button.classList.add("hidden");
    }
  }

  function run_rust_code(code_block) {
    var result_block = code_block.querySelector(".result");
    if (!result_block) {
      result_block = document.createElement("code");
      result_block.className = "result hljs language-bash";

      code_block.append(result_block);
    }

    let text = playground_text(code_block);
    let classes = code_block.querySelector("code").classList;
    let edition = "2015";
    if (classes.contains("edition2018")) {
      edition = "2018";
    } else if (classes.contains("edition2021")) {
      edition = "2021";
    }
    var params = {
      version: "stable",
      optimize: "0",
      code: text,
      edition: edition,
    };

    if (text.indexOf("#![feature") !== -1) {
      params.version = "nightly";
    }

    result_block.innerText = "Running...";

    fetch_with_timeout("https://play.rust-lang.org/evaluate.json", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      mode: "cors",
      body: JSON.stringify(params),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.result.trim() === "") {
          result_block.innerText = "No output";
          result_block.classList.add("result-no-output");
        } else {
          result_block.innerText = response.result;
          result_block.classList.remove("result-no-output");
        }
      })
      .catch((error) => (result_block.innerText = "Playground Communication: " + error.message));
  }

  // Syntax highlighting Configuration
  hljs.configure({
    tabReplace: "    ", // 4 spaces
    languages: [], // Languages used for auto-detection
  });

  let code_nodes = Array.from(document.querySelectorAll("code"))
    // Don't highlight `inline code` blocks in headers.
    .filter(function (node) {
      return !node.parentElement.classList.contains("header");
    });

  code_nodes.forEach(function (block) {
    hljs.highlightBlock(block);
  });

  // Adding the hljs class gives code blocks the color css
  // even if highlighting doesn't apply
  code_nodes.forEach(function (block) {
    block.classList.add("hljs");
  });

  Array.from(document.querySelectorAll("code.hljs")).forEach(function (block) {
    var lines = Array.from(block.querySelectorAll(".boring"));
    // If no lines were hidden, return
    if (!lines.length) {
      return;
    }
    block.classList.add("hide-boring");

    var buttons = document.createElement("div");
    buttons.className = "buttons";
    buttons.innerHTML = '<button class="fa fa-eye" title="Show hidden lines" aria-label="Show hidden lines"></button>';

    // add expand button
    var pre_block = block.parentNode;
    pre_block.insertBefore(buttons, pre_block.firstChild);

    pre_block.querySelector(".buttons").addEventListener("click", function (e) {
      if (e.target.classList.contains("fa-eye")) {
        e.target.classList.remove("fa-eye");
        e.target.classList.add("fa-eye-slash");
        e.target.title = "Hide lines";
        e.target.setAttribute("aria-label", e.target.title);

        block.classList.remove("hide-boring");
      } else if (e.target.classList.contains("fa-eye-slash")) {
        e.target.classList.remove("fa-eye-slash");
        e.target.classList.add("fa-eye");
        e.target.title = "Show hidden lines";
        e.target.setAttribute("aria-label", e.target.title);

        block.classList.add("hide-boring");
      }
    });
  });

  if (window.playground_copyable) {
    Array.from(document.querySelectorAll("pre code")).forEach(function (block) {
      var pre_block = block.parentNode;
      if (!pre_block.classList.contains("playground")) {
        var buttons = pre_block.querySelector(".buttons");
        if (!buttons) {
          buttons = document.createElement("div");
          buttons.className = "buttons";
          pre_block.insertBefore(buttons, pre_block.firstChild);
        }

        var clipButton = document.createElement("button");
        clipButton.className = "fa fa-copy clip-button";
        clipButton.title = "Copy to clipboard";
        clipButton.setAttribute("aria-label", clipButton.title);
        clipButton.innerHTML = '<i class="tooltiptext"></i>';

        buttons.insertBefore(clipButton, buttons.firstChild);
      }
    });
  }

  // Process playground code blocks
  Array.from(document.querySelectorAll(".playground")).forEach(function (pre_block) {
    // Add play button
    var buttons = pre_block.querySelector(".buttons");
    if (!buttons) {
      buttons = document.createElement("div");
      buttons.className = "buttons";
      pre_block.insertBefore(buttons, pre_block.firstChild);
    }

    var runCodeButton = document.createElement("button");
    runCodeButton.className = "fa fa-play play-button";
    runCodeButton.hidden = true;
    runCodeButton.title = "Run this code";
    runCodeButton.setAttribute("aria-label", runCodeButton.title);

    buttons.insertBefore(runCodeButton, buttons.firstChild);
    runCodeButton.addEventListener("click", function (e) {
      run_rust_code(pre_block);
    });

    if (window.playground_copyable) {
      var copyCodeClipboardButton = document.createElement("button");
      copyCodeClipboardButton.className = "fa fa-copy clip-button";
      copyCodeClipboardButton.innerHTML = '<i class="tooltiptext"></i>';
      copyCodeClipboardButton.title = "Copy to clipboard";
      copyCodeClipboardButton.setAttribute("aria-label", copyCodeClipboardButton.title);

      buttons.insertBefore(copyCodeClipboardButton, buttons.firstChild);
    }
  });
})();

(function themes() {
  var html = document.querySelector("html");
  var themeToggleButton = document.getElementById("theme-toggle");
  var themePopup = document.getElementById("theme-list");
  var themeColorMetaTag = document.querySelector('meta[name="theme-color"]');
  var stylesheets = {
    highlightDark: document.querySelector("[href$='highlight-dark.css']"),
    highlight: document.querySelector("[href$='highlight.css']"),
  };

  function showThemes() {
    themePopup.style.display = "block";
    themeToggleButton.setAttribute("aria-expanded", true);
    themePopup.querySelector("button#" + get_theme()).focus();
  }

  function updateThemeSelected() {
    themePopup.querySelectorAll(".theme-selected").forEach(function (el) {
      el.classList.remove("theme-selected");
    });
    themePopup.querySelector("button#" + get_theme()).classList.add("theme-selected");
  }

  function hideThemes() {
    themePopup.style.display = "none";
    themeToggleButton.setAttribute("aria-expanded", false);
    themeToggleButton.focus();
  }

  function get_theme() {
    var theme;
    try {
      theme = localStorage.getItem("mdbook-theme");
    } catch (e) {}
    if (theme === null || theme === undefined) {
      return default_theme;
    } else {
      return theme;
    }
  }

  function set_theme(theme, store = true) {
    if (theme == "coal" || theme == "navy") {
      stylesheets.highlightDark.disabled = false;
      stylesheets.highlight.disabled = true;
    } else if (theme == "ayu" || theme == "light") {
      stylesheets.highlightDark.disabled = true;
      stylesheets.highlight.disabled = false;
    } else {
      stylesheets.highlightDark.disabled = true;
      stylesheets.highlight.disabled = false;
    }

    setTimeout(function () {
      themeColorMetaTag.content = getComputedStyle(document.documentElement).backgroundColor;
    }, 1);

    var previousTheme = get_theme();

    if (store) {
      try {
        localStorage.setItem("mdbook-theme", theme);
      } catch (e) {}
    }

    html.classList.remove(previousTheme);
    html.classList.add(theme);
    updateThemeSelected();
  }

  // Set theme
  var theme = get_theme();

  set_theme(theme, false);

  themeToggleButton.addEventListener("click", function () {
    if (themePopup.style.display === "block") {
      hideThemes();
    } else {
      showThemes();
    }
  });

  themePopup.addEventListener("click", function (e) {
    var theme;
    if (e.target.className === "theme") {
      theme = e.target.id;
    } else if (e.target.parentElement.className === "theme") {
      theme = e.target.parentElement.id;
    } else {
      return;
    }
    set_theme(theme);
  });

  themePopup.addEventListener("focusout", function (e) {
    // e.relatedTarget is null in Safari and Firefox on macOS (see workaround below)
    if (!!e.relatedTarget && !themeToggleButton.contains(e.relatedTarget) && !themePopup.contains(e.relatedTarget)) {
      hideThemes();
    }
  });

  // Should not be needed, but it works around an issue on macOS & iOS: https://github.com/rust-lang/mdBook/issues/628
  document.addEventListener("click", function (e) {
    if (
      themePopup.style.display === "block" &&
      !themeToggleButton.contains(e.target) &&
      !themePopup.contains(e.target)
    ) {
      hideThemes();
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) {
      return;
    }
    if (!themePopup.contains(e.target)) {
      return;
    }

    switch (e.key) {
      case "Escape":
        e.preventDefault();
        hideThemes();
        break;
      case "ArrowUp":
        e.preventDefault();
        var li = document.activeElement.parentElement;
        if (li && li.previousElementSibling) {
          li.previousElementSibling.querySelector("button").focus();
        }
        break;
      case "ArrowDown":
        e.preventDefault();
        var li = document.activeElement.parentElement;
        if (li && li.nextElementSibling) {
          li.nextElementSibling.querySelector("button").focus();
        }
        break;
      case "Home":
        e.preventDefault();
        themePopup.querySelector("li:first-child button").focus();
        break;
      case "End":
        e.preventDefault();
        themePopup.querySelector("li:last-child button").focus();
        break;
    }
  });
})();

(function sidebar() {
  var body = document.querySelector("body");
  var sidebar = document.getElementById("sidebar");
  var sidebarLinks = document.querySelectorAll("#sidebar a");
  var sidebarToggleButton = document.getElementById("sidebar-toggle");
  var sidebarResizeHandle = document.getElementById("sidebar-resize-handle");
  var sidebarToggleAnchor = document.getElementById("sidebar-toggle-anchor");
  var firstContact = null;

  function showSidebar() {
    if (sidebarToggleAnchor.checked !== true) {
      sidebarToggleAnchor.checked = true;
    }
  }

  function doShowSidebar() {
    body.classList.remove("sidebar-hidden");
    body.classList.add("sidebar-visible");
    Array.from(sidebarLinks).forEach(function (link) {
      link.setAttribute("tabIndex", 0);
    });
    sidebarToggleButton.setAttribute("aria-expanded", true);
    sidebar.setAttribute("aria-hidden", false);
    try {
      localStorage.setItem("mdbook-sidebar", "visible");
    } catch (e) {}
  }

  var sidebarAnchorToggles = document.querySelectorAll("#sidebar a.toggle");

  function toggleSection(ev) {
    ev.currentTarget.parentElement.classList.toggle("expanded");
  }

  Array.from(sidebarAnchorToggles).forEach(function (el) {
    el.addEventListener("click", toggleSection);
  });

  function hideSidebar() {
    if (sidebarToggleAnchor.checked !== false) {
      sidebarToggleAnchor.checked = false;
    }
  }

  function doHideSidebar() {
    var current_width = parseInt(document.documentElement.style.getPropertyValue("--sidebar-width"), 10);
    if (current_width <= 150) {
      document.documentElement.style.setProperty("--sidebar-width", "200px");
    }
    body.classList.remove("sidebar-visible");
    body.classList.add("sidebar-hidden");
    Array.from(sidebarLinks).forEach(function (link) {
      link.setAttribute("tabIndex", -1);
    });
    sidebarToggleButton.setAttribute("aria-expanded", false);
    sidebar.setAttribute("aria-hidden", true);
    try {
      localStorage.setItem("mdbook-sidebar", "hidden");
    } catch (e) {}
  }

  // Toggle sidebar
  sidebarToggleAnchor.addEventListener("change", function sidebarToggle(event) {
    const isOpen = event.target.checked;
    if (isOpen) {
      doShowSidebar();
    } else {
      doHideSidebar();
    }
  });

  sidebarResizeHandle.addEventListener("mousedown", initResize, false);

  function initResize(e) {
    window.addEventListener("mousemove", resize, false);
    window.addEventListener("mouseup", stopResize, false);
    body.classList.add("sidebar-resizing");
  }
  function resize(e) {
    var pos = e.clientX - sidebar.offsetLeft;
    if (pos < 20) {
      hideSidebar();
    } else {
      showSidebar();
      pos = Math.min(Math.max(150, pos), window.innerWidth - 100);
      document.documentElement.style.setProperty("--sidebar-width", pos + "px");
    }
  }
  //on mouseup remove windows functions mousemove & mouseup
  function stopResize(e) {
    body.classList.remove("sidebar-resizing");
    window.removeEventListener("mousemove", resize, false);
    window.removeEventListener("mouseup", stopResize, false);
  }

  document.addEventListener(
    "touchstart",
    function (e) {
      firstContact = {
        x: e.touches[0].clientX,
        time: Date.now(),
      };
    },
    { passive: true },
  );

  document.addEventListener(
    "touchmove",
    function (e) {
      if (!firstContact) return;

      var curX = e.touches[0].clientX;
      var xDiff = curX - firstContact.x,
        tDiff = Date.now() - firstContact.time;

      if (tDiff < 250 && Math.abs(xDiff) >= 150) {
        if (xDiff >= 0 && firstContact.x < Math.min(document.body.clientWidth * 0.25, 300)) showSidebar();
        else if (xDiff < 0 && curX < 300) hideSidebar();

        firstContact = null;
      }
    },
    { passive: true },
  );
})();

(function chapterNavigation() {
  document.addEventListener("keydown", function (e) {
    if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) {
      return;
    }
    if (window.search && window.search.hasFocus()) {
      return;
    }
    var html = document.querySelector("html");

    function next() {
      var nextButton = document.querySelector(".nav-chapters.next");
      if (nextButton) {
        window.location.href = nextButton.href;
      }
    }
    function prev() {
      var previousButton = document.querySelector(".nav-chapters.previous");
      if (previousButton) {
        window.location.href = previousButton.href;
      }
    }
    switch (e.key) {
      case "ArrowRight":
        e.preventDefault();
        if (html.dir == "rtl") {
          prev();
        } else {
          next();
        }
        break;
      case "ArrowLeft":
        e.preventDefault();
        if (html.dir == "rtl") {
          next();
        } else {
          prev();
        }
        break;
    }
  });
})();

(function clipboard() {
  var clipButtons = document.querySelectorAll(".clip-button");

  function hideTooltip(elem) {
    elem.firstChild.innerText = "";
    elem.className = "fa fa-copy clip-button";
  }

  function showTooltip(elem, msg) {
    elem.firstChild.innerText = msg;
    elem.className = "fa fa-copy tooltipped";
  }

  var clipboardSnippets = new ClipboardJS(".clip-button", {
    text: function (trigger) {
      hideTooltip(trigger);
      let playground = trigger.closest("pre");
      return playground_text(playground, false);
    },
  });

  Array.from(clipButtons).forEach(function (clipButton) {
    clipButton.addEventListener("mouseout", function (e) {
      hideTooltip(e.currentTarget);
    });
  });

  clipboardSnippets.on("success", function (e) {
    e.clearSelection();
    showTooltip(e.trigger, "Copied!");
  });

  clipboardSnippets.on("error", function (e) {
    showTooltip(e.trigger, "Clipboard error!");
  });
})();

(function scrollToTop() {
  var menuTitle = document.querySelector(".menu-title");

  menuTitle.addEventListener("click", function () {
    document.scrollingElement.scrollTo({ top: 0, behavior: "smooth" });
  });
})();
