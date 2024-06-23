// hambargur
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const navLink = document.getElementById("navLink");

  hamburger.addEventListener("click", function () {
    navLink.classList.toggle("show");
  });
});
// hambargur

// drawer
document.addEventListener("DOMContentLoaded", function () {
  const leftDrawer = document.getElementById("leftDrawer");
  const rightDrawer = document.getElementById("rightDrawer");
  const leftDrawerDiv = document.querySelector(".left_drawer_div");
  const rightDrawerDiv = document.querySelector(".right_drawer_div");

  leftDrawerDiv.addEventListener("click", function () {
    leftDrawer.classList.toggle("expanded");
  });

  rightDrawerDiv.addEventListener("click", function () {
    rightDrawer.classList.toggle("expanded");
  });
});
// drawer

// Fetch data

document.addEventListener("DOMContentLoaded", function () {
  const Content_Card = document.getElementById("Content_Card");

  fetch("./data.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      const assets = data.tasks[0].assets;

      console.log(assets);
      Content_Card.innerHTML = `
          
      ${assets.map(
        (asset) => `
               <div class="card">
        <div class="card_head">
            <h3>${asset.asset_title}</h3>
            <img src="./Images/Group 1735.png" alt="" />
        </div>
          <div class="card_des"><span >Description:</span> ${
            asset.asset_description
          }</div>
          ${
            asset.asset_type === "display_asset"
              ? `<iframe src="${asset.asset_content}" frameborder="0" allowfullscreen></iframe>`
              : ""
          }
          ${
            asset.asset_type === "input_asset" &&
            asset.asset_content_type === "threadbuilder"
              ? `
              <div class="card_body">
          <div class="row_input">
            <div class="input_section">
              <label for="sub_thread_1">Sub thread 1</label>
              <input type="text" id="sub_thread_1" name="sub_thread_1" placeholder="Input Text Here" />
            </div>
            <div class="input_section">
              <label for="sub_thread_2">Sub thread 2</label>
              <input type="text" id="sub_thread_2" name="sub_thread_2" placeholder="Input Text Here" />
            </div>
          </div>
          <div class="dropdown">
            <img src="./Images/Group 1588.png" alt="" />
            <div class="dropdown_section">
              <select id="option_1" name="option_1" class="dropdown">
                <option value="choice1">Choice 1</option>
                <option value="choice2">Choice 2</option>
                <option value="choice3">Choice 3</option>
              </select>
            </div>
            <div class="dropdown_section">
              <select id="option_2" name="option_2" class="dropdown">
                <option value="choiceA">Choice A</option>
                <option value="choiceB">Choice B</option>
                <option value="choiceC">Choice C</option>
              </select>
            </div>
          </div>
          <button class="subthred_btn">+ Sub-thread</button>
          <div class="input_section">
            <label for="sub_thread_3">Summary for Thread A</label>
            <input type="text" id="sub_thread_3" name="sub_thread_3" placeholder="Input Text Here" />
          </div>
        </div>
              `
              : ""
          }
          ${
            asset.asset_type === "input_asset" &&
            asset.asset_content_type === "article"
              ? `<div class="card_body">
          <div class="input_section">
            <label for="title_input">Title</label>
            <input
              type="text"
              id="title_input"
              name="title_input"
              placeholder="Enter title here"
            />
          </div>
          <div class="toolbar">
            <button>File</button>
            <button>Edit</button>
            <button>View</button>
            <button>Insert</button>
            <button>Format</button>
            <button>Tools</button>
            <button>Table</button>
            <button>Help</button>
          </div>
          <div class="font_weight_section">
            <select id="font_weight" name="font_weight">
              <option value="normal">Paragraph</option>
              <option value="bold">Bold</option>
              <option value="italic">Italic</option>
              <option value="underline">Underline</option>
            </select>
          </div>
          <div class="content_section">
            <textarea
              id="content_input"
              name="content_input"
              rows="10"
              placeholder="Write your content here"
            ></textarea>
          </div>
        </div>`
              : ""
          }
             ${
               asset.asset_type === "display_asset" &&
               asset.asset_content_type === "article"
                 ? `<div class="card_body">
          <div>
            <div class="intro">Introduction</div>
            <p>The 4SA Method , How to bring a idea into progress ?</p>
            <a href=${asset.asset_content} class="seeMore">See more</a>
          </div>
          <div>
            <div class="intro_Thread">Thread</div>
            <p>How are you going to develop your stratergy ? Which method are you going to use to develop a stratergy ? What if the project is lengthy?</p>
            <a href=${asset.asset_content} class="seeMore">See more</a>
          </div>
          <div>
            <div class="intro_example">Example</div>
            <p class="exaple_pargh">You have a concept , How will you put into progress?</p>
          </div>
        </div>`
                 : ``
             } 
          </div>
            `
      )}
        `;
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
});

Content_Card;
