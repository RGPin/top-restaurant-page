import "./styles.css";
import { homePage } from "./home";
import { menuPage } from "./menu";
import { aboutPage } from "./about";

const content = document.querySelector("#content");

const homeBtn = document.querySelector("#home-btn");
const menuBtn = document.querySelector("#menu-btn");
const aboutBtn = document.querySelector("#about-btn");

homePage(content);

homeBtn.addEventListener("click", () => homePage(content))

menuBtn.addEventListener("click", () => menuPage(content))

aboutBtn.addEventListener("click", () => aboutPage(content));