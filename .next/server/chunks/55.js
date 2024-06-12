exports.id=55,exports.ids=[55],exports.modules={7835:(e,t,s)=>{let i={e50433a13ec14c5155a49fa58812d8ea6656ab04:()=>Promise.resolve().then(s.bind(s,9439)).then(e=>e.togglePostLikeStatus),f1deef3ab23e5f43b709f8f65b708c4560ba6bc9:()=>Promise.resolve().then(s.bind(s,9439)).then(e=>e.createPost)};async function r(e,...t){return(await i[e]()).apply(null,t)}e.exports={e50433a13ec14c5155a49fa58812d8ea6656ab04:r.bind(null,"e50433a13ec14c5155a49fa58812d8ea6656ab04"),f1deef3ab23e5f43b709f8f65b708c4560ba6bc9:r.bind(null,"f1deef3ab23e5f43b709f8f65b708c4560ba6bc9")}},9067:(e,t,s)=>{Promise.resolve().then(s.bind(s,4873)),Promise.resolve().then(s.t.bind(s,1476,23))},854:(e,t,s)=>{Promise.resolve().then(s.bind(s,9299))},6307:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,2583,23)),Promise.resolve().then(s.t.bind(s,6840,23)),Promise.resolve().then(s.t.bind(s,8771,23)),Promise.resolve().then(s.t.bind(s,3225,23)),Promise.resolve().then(s.t.bind(s,9295,23)),Promise.resolve().then(s.t.bind(s,3982,23))},9299:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>d});var i=s(5344),r=s(3729);function a(){return i.jsx("button",{className:"like-button",children:i.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",children:i.jsx("path",{d:"m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z"})})})}s(3664);var n=s(8371),o=(0,n.$)("e50433a13ec14c5155a49fa58812d8ea6656ab04");function E({post:e,action:t}){var s;return(0,i.jsxs)("article",{className:"post",children:[i.jsx("div",{className:"post-image",children:i.jsx("img",{src:e.image,alt:e.title})}),(0,i.jsxs)("div",{className:"post-content",children:[(0,i.jsxs)("header",{children:[(0,i.jsxs)("div",{children:[i.jsx("h2",{children:e.title}),(0,i.jsxs)("p",{children:["Shared by ",e.userFirstName," on"," ",i.jsx("time",{dateTime:e.createdAt,children:(s=e.createdAt,new Intl.DateTimeFormat("en-US",{dateStyle:"medium",timeStyle:"short"}).format(new Date(s)))})]})]}),i.jsx("div",{children:i.jsx("form",{action:t.bind(null,e.id),className:e.isLiked?"liked":"",children:i.jsx(a,{})})})]}),i.jsx("p",{children:e.content})]})]})}function d({posts:e}){let[t,s]=(0,r.useOptimistic)(e,(e,t)=>{let s=e.findIndex(e=>e.id===t);if(-1===s)return e;let i={...e[s]};i.likes=i.likes+(i.isLiked?-1:1),i.isLiked=!i.isLiked;let r=[...e];return r[s]=i,r});if(!t||0===t.length)return i.jsx("p",{children:"There are no posts yet. Maybe start sharing some?"});async function a(e){s(e),await o(e)}return i.jsx("ul",{className:"posts",children:e.map(e=>i.jsx("li",{children:i.jsx(E,{post:e,action:a})},e.id))})}(0,n.$)("f1deef3ab23e5f43b709f8f65b708c4560ba6bc9")},9439:(e,t,s)=>{"use strict";s.r(t),s.d(t,{createPost:()=>E,togglePostLikeStatus:()=>d});var i=s(8601);s(5811);var r=s(5837),a=s(4848),n=s(3811),o=s(2810);async function E(e,t){let s;let i=t.get("title"),E=t.get("image"),d=t.get("content"),l=[];if(i&&""!==i.trim()||l.push("Title is required"),d&&""!==d.trim()||l.push("Content is required"),E&&0!==E.size||l.push("Image is required"),l.length>0)return{errors:l};try{s=await (0,r.uploadImage)(E)}catch(e){throw Error("Image upload failed, post was not created. Please try again later.")}await (0,a.storePost)({imageUrl:s,title:i,content:d,userId:1}),(0,n.revalidatePath)("/","layout"),(0,o.redirect)("/feed")}async function d(e){await (0,a.updatePostLikeStatus)(e,2),(0,n.revalidatePath)("/","layout")}(0,s(6893).ensureServerEntryExports)([E,d]),(0,i.createActionProxy)("f1deef3ab23e5f43b709f8f65b708c4560ba6bc9",E),(0,i.createActionProxy)("e50433a13ec14c5155a49fa58812d8ea6656ab04",d)},8991:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>o,metadata:()=>n});var i=s(5036),r=s(6274);function a(){return(0,i.jsxs)("header",{id:"main-header",children:[i.jsx(r.default,{href:"/",children:i.jsx("img",{src:"/_next/static/media/logo.6ad4479c.png",alt:"Mobile phone with posts feed on it"})}),i.jsx("nav",{children:(0,i.jsxs)("ul",{children:[i.jsx("li",{children:i.jsx(r.default,{href:"/feed",children:"Feed"})}),i.jsx("li",{children:i.jsx(r.default,{className:"cta-link",href:"/new-post",children:"New Post"})})]})})]})}s(7272);let n={title:"NextPosts",description:"Browse and share amazing posts."};function o({children:e}){return i.jsx("html",{lang:"en",children:(0,i.jsxs)("body",{children:[i.jsx(a,{}),i.jsx("main",{children:e})]})})}},8553:(e,t,s)=>{"use strict";s.d(t,{ZP:()=>n});let i=(0,s(6843).createProxy)(String.raw`/home/recreation/Yudha/NEXT-Project/twitter-like-udemy-course/components/posts.js`),{__esModule:r,$$typeof:a}=i,n=i.default},5837:(e,t,s)=>{"use strict";s.d(t,{uploadImage:()=>r});var i=s(6976);if(!process.env.CLOUDINARY_CLOUD_NAME)throw Error("CLOUDINARY_CLOUD_NAME is not set");if(!process.env.CLOUDINARY_API_KEY)throw Error("CLOUDINARY_API_KEY is not set");if(!process.env.CLOUDINARY_API_SECRET)throw Error("CLOUDINARY_API_SECRET is not set");async function r(e){let t=await e.arrayBuffer(),s=e.type,r=Buffer.from(t).toString("base64");return(await i.v2.uploader.upload("data:"+s+";base64,"+r,{folder:"nextjs-course-mutations"})).secure_url}i.v2.config({cloud_name:process.env.CLOUDINARY_CLOUD_NAME,api_key:process.env.CLOUDINARY_API_KEY,api_secret:process.env.CLOUDINARY_API_SECRET})},4848:(e,t,s)=>{"use strict";s.d(t,{storePost:()=>a,updatePostLikeStatus:()=>n});var i=s(5890);let r=new(s.n(i)())("posts.db");async function a(e){let t=r.prepare(`
    INSERT INTO posts (image_url, title, content, user_id)
    VALUES (?, ?, ?, ?)`);return await new Promise(e=>setTimeout(e,1e3)),t.run(e.imageUrl,e.title,e.content,e.userId)}async function n(e,t){if(0===r.prepare(`
    SELECT COUNT(*) AS count
    FROM likes
    WHERE user_id = ? AND post_id = ?`).get(t,e).count){let s=r.prepare(`
      INSERT INTO likes (user_id, post_id)
      VALUES (?, ?)`);return await new Promise(e=>setTimeout(e,1e3)),s.run(t,e)}{let s=r.prepare(`
      DELETE FROM likes
      WHERE user_id = ? AND post_id = ?`);return await new Promise(e=>setTimeout(e,1e3)),s.run(t,e)}}r.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY, 
      first_name TEXT, 
      last_name TEXT,
      email TEXT
    )`),r.exec(`
    CREATE TABLE IF NOT EXISTS posts (
      id INTEGER PRIMARY KEY, 
      image_url TEXT NOT NULL,
      title TEXT NOT NULL, 
      content TEXT NOT NULL, 
      created_at TEXT DEFAULT CURRENT_TIMESTAMP,
      user_id INTEGER, 
      FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE
    )`),r.exec(`
    CREATE TABLE IF NOT EXISTS likes (
      user_id INTEGER, 
      post_id INTEGER, 
      PRIMARY KEY(user_id, post_id),
      FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE, 
      FOREIGN KEY(post_id) REFERENCES posts(id) ON DELETE CASCADE
    )`),0===r.prepare("SELECT COUNT(*) AS count FROM users").get().count&&(r.exec(`
    INSERT INTO users (first_name, last_name, email)
    VALUES ('John', 'Doe', 'john@example.com')
  `),r.exec(`
    INSERT INTO users (first_name, last_name, email)
    VALUES ('Max', 'Schwarz', 'max@example.com')
  `))},7678:(e,t,s)=>{"use strict";s.d(t,{IK:()=>o,Jq:()=>a,Zu:()=>n});var i=s(5890);let r=new(s.n(i)())("posts.db");async function a(e){let t="";e&&(t="LIMIT ?");let s=r.prepare(`
    SELECT posts.id, image_url AS image, title, content, created_at AS createdAt, first_name AS userFirstName, last_name AS userLastName, COUNT(likes.post_id) AS likes, EXISTS(SELECT * FROM likes WHERE likes.post_id = posts.id and likes.user_id = 2) AS isLiked
    FROM posts
    INNER JOIN users ON posts.user_id = users.id
    LEFT JOIN likes ON posts.id = likes.post_id
    GROUP BY posts.id
    ORDER BY createdAt DESC
    ${t}`);return await new Promise(e=>setTimeout(e,1e3)),e?s.all(e):s.all()}async function n(e){let t=r.prepare(`
    INSERT INTO posts (image_url, title, content, user_id)
    VALUES (?, ?, ?, ?)`);return await new Promise(e=>setTimeout(e,1e3)),t.run(e.imageUrl,e.title,e.content,e.userId)}async function o(e,t){if(0===r.prepare(`
    SELECT COUNT(*) AS count
    FROM likes
    WHERE user_id = ? AND post_id = ?`).get(t,e).count){let s=r.prepare(`
      INSERT INTO likes (user_id, post_id)
      VALUES (?, ?)`);return await new Promise(e=>setTimeout(e,1e3)),s.run(t,e)}{let s=r.prepare(`
      DELETE FROM likes
      WHERE user_id = ? AND post_id = ?`);return await new Promise(e=>setTimeout(e,1e3)),s.run(t,e)}}r.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY, 
      first_name TEXT, 
      last_name TEXT,
      email TEXT
    )`),r.exec(`
    CREATE TABLE IF NOT EXISTS posts (
      id INTEGER PRIMARY KEY, 
      image_url TEXT NOT NULL,
      title TEXT NOT NULL, 
      content TEXT NOT NULL, 
      created_at TEXT DEFAULT CURRENT_TIMESTAMP,
      user_id INTEGER, 
      FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE
    )`),r.exec(`
    CREATE TABLE IF NOT EXISTS likes (
      user_id INTEGER, 
      post_id INTEGER, 
      PRIMARY KEY(user_id, post_id),
      FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE, 
      FOREIGN KEY(post_id) REFERENCES posts(id) ON DELETE CASCADE
    )`),0===r.prepare("SELECT COUNT(*) AS count FROM users").get().count&&(r.exec(`
    INSERT INTO users (first_name, last_name, email)
    VALUES ('John', 'Doe', 'john@example.com')
  `),r.exec(`
    INSERT INTO users (first_name, last_name, email)
    VALUES ('Max', 'Schwarz', 'max@example.com')
  `))},4873:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>i});let i={src:"/_next/static/media/logo.6ad4479c.png",height:600,width:600,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABE0lEQVR4nAEIAff+Ac4loAEtsUX//SUZPf/2/Vj18vcD6ufx6bOky8ttZ1G0AfCqygADKRd2+wkJiePu+QDdxtcAEA8GABUiHL4sPiNFAff1+zjl2+rH08rjANfQ3fwEFhABDwcG/RH47wYNFxNqAfvz/YfFyNl41oi+/ANxNwTwFw0ABr/Z/f/j9wNHWkKvAejk8nXVxNOK/67Q/gUjFwLgJxUAu5HA/GmFWQQsMiWbAYhIgXQFBROLFDwl+ivz8gS0jNL/CnM2A01RNQAMDAw1AU1AeiY8BAWeDQ8UO9j++gBGWjsAKB0dAO34+lsFCAOmAUYGZQC5+jgAbS7TiwIiDwRthHDA3drg7Tc2MMQEBQACyjN0I9a/iZoAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8}},4998:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>r});var i=s(337);let r=e=>[{type:"image/png",sizes:"600x600",url:(0,i.fillMetadataSegment)(".",e.params,"icon.png")+"?6ad4479c42d31fc7"}]},7272:()=>{}};